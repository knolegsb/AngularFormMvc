var module = angular.module("studentApp", ["ngRoute", "studentController", "studentResources"]);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'Templates/home.html',
            controller: 'getStudentsList'
        }).
        when('/addstudent', {
            templateUrl: 'Templates/addstudent.html',
            controller: 'addStudent'
        }).
        when('/allstudents', {
            templateUrl: 'Templates/allstudents.html',
            controller: 'allStudents'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);