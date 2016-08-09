var studentController = angular.module("studentController", []);
studentController.controller("getStudentsList", function ($scope, $http) {
    $http.get("/api/student").success(function (data) {
        $scope.students = data;
    });
});

studentController.controller("addStudent", function ($scope, $http, $location) {
    $scope.student = {
        "FirstName": "",
        "LastName": "",
        "Age": "",
        "Gender": "Male"
    };

    $scope.genders = ['Male', 'Female', 'Other'];

    $scope.pattern = /^\s*\d+\s*$/;
    $scope.Add = function () {
        $http({ method: "POST", data: $scope.student, url: "/api/student" }).
            success(function (data, status, headers, config) {
                $scope.students = data;
                $scope.student = {
                    "FirstName": "",
                    "LastName": "",
                    "Age": "",
                    "Gender": ""
                };
            });
        alert("Student Added Successfully..!!");
        $location.path('/allstudents');
    }
});

studentController.controller("allStudents", function ($scope, $http) {
    $scope.getAll = function () {
        $http({ method: "GET", url: "/api/student" }).
            success(function (data, status, headers, config) {
                $scope.students = data;
            });
    }
});