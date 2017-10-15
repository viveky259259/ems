angular.module('EMS')
.controller('viewTaskCtrl',function($scope,$http,$rootScope){
    let empId=$rootScope.loggedUserId;
    $http.get('/api/v1/tasks/'+empId)
    .then(
        function(response){
       $scope.tasks=response.data
    })
    $scope.deleteTask=function(tId){
        $http.delete('/api/v1/task/'+tId)
        .then(function(response){
            refresh();
        },
        function(err){
            console.log(err)
        })
    }
    function refresh(){
        $http.get('/api/v1/tasks/'+empId)
        .then(
            function(response){
           $scope.tasks=response.data
        })
    }
})