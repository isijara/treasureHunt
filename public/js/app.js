var treasureHunt = angular.module('treasureHunt', ['ui.router']);

treasureHunt.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/chat.html'
        });
});


treasureHunt.directive('chatusers', function() {
    return {
        templateUrl: 'partials/chatUsers.html',
        replace: true,
        restrict: 'E'
    };
});
