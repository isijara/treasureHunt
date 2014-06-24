var chat = function(io) {
    var users = [];

    io.on('connection', function(socket) {

        socket.emit('currentUsers', users);

        socket.on('message', function(message) {
            console.log('mensaje para el servidor: ' + message);
            io.emit('broadcastMessage', message);
        });

        socket.on('addUser', function(user) {
            users.push(user);
            console.log('new challenger approaching: ' + user.nick );
            io.emit('incomingUser', users);

            socket.on('disconnect', function() {
                console.log(user.nick + ' has vanished');

                for(var index in users){
                    if( user.nick == users[index].nick) {
                        users.splice(index, 1);
                    }
                }
                io.emit('deleteUser', user);
            });
        });
    });



};

exports.chat = chat;