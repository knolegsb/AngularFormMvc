var studentResources = angular.module("studentResources", ['ngResource']);
studentResources.factory('Students', function Students($resource) {
    return $resource('/api/student', {}, {
        query: { method: 'GET', params: {}, isArray: true }
    });
});