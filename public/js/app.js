var treasureHunt = angular.module('treasureHunt', ['ui.router']);

treasureHunt.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/user');

    $stateProvider
        .state('rivals', {
            url: '/rivals',
            templateUrl: 'partials/chat.html'
        })
        .state('selectUser', {
            url: '/user',
            templateUrl: 'partials/selectNick.html'
        });
});


treasureHunt.directive('chatusers', function() {
    return {
        templateUrl: 'partials/chatUsers.html',
        replace: true,
        restrict: 'E'
    };
});
