var tHunt = angular.module('treasureHunt');

angular.module('treasureHunt').factory('_socket',
    function() {
        return window.socket;
    }
);
angular.module('treasureHunt').factory('_',
    function() {
        return window._;
    }
);

tHunt.controller('treasureHunt', function($scope, $http, _socket, $state, _) {

    window.scope = $scope;

    $scope.users = [];
    $scope.currentUser = { nick : ''};


    $scope.setUser = function() {
        $scope.currentUser.nick = prompt();
        _socket.emit('addUser', $scope.currentUser);
    };

    _socket.on('incomingUser', function(user) {
        $scope.users.push(user);
        $scope.$apply();
    });

    _socket.on('currentUsers', function(users) {
        _.each(users, function(el) {
            $scope.users.push(el);
        });
        $scope.$apply();
    });

    _socket.on('deleteUser', function(user) {
        console.log('from socket.io event', user);
        _.each($scope.users, function(element, key) {
            if( user.nick == element.nick) {
                $scope.users.splice(key, 1);
            }
        });
        $scope.$apply();
    });

});


