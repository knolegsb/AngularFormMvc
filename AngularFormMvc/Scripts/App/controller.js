var studentController = angular.module("studentController", []);
studentController.controller("getStudentsList", function ($scope, $http) {
    $http.get("/api/student").success(function (data) {
        $scope.students = data;
    });
});