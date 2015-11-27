var app = angular.module('app', ['ui.router', 'angular-loading-bar']);

app.constant('config', {
    url: 'http://localhost:8080/api'
});

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'tpl/home.html',
        controller: function($scope, $http, config) {
            $scope.customers = [];
            $http.get(config.url + '/customer')
                .then(function(res) {
                	$scope.customers = res.data;
                });
        },
    })

    .state('form', {
        url: '/form',
        templateUrl: 'tpl/form.html',
        controller: "FormCtrl"
    })

    .state('login', {
        url: '/login',
        templateUrl: 'tpl/login.html',
        controller: 'LoginCtrl'
    });

    $urlRouterProvider.otherwise('/');
});
