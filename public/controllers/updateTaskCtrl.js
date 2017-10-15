angular.module('EMS')
.controller('editTaskCtrl',function($scope,$http,$routeParams,$rootScope){
    
var tId=$routeParams.tId;
$http.get('/api/v1/task/'+tId)
.then(
    function(response){
    let task=response.data;
        console.log(task)
        $scope.taskId=task.tId;
        $scope.taskTitle=task.tTitle;
        $scope.taskStatus=task.tStatus;
        $scope.empId=task.empId;
        $scope.employeeIds=$rootScope.employeeIdList;
        $scope.taskComment=task.tComments;
        $scope.taskStatuses=$rootScope.taskStatuses;
        

},function(err){
    console.log(err)
})
})

angular.module('EMS')
.controller('updateTaskCtrl',function($scope,$http,$window){

    $scope.updateTask=function(){   
    let task={
            "tId": $scope.taskId,
            "tTitle": $scope.taskTitle,
            "tStatus": $scope.taskStatus,
            "empId": $scope.empId,
            "tComments": $scope.taskComment
        }
        console.log(task)
        $http.put('/api/v1/task/'+$scope.taskId,task);
        $scope.confirmationMessage='Task Updated SuccessFully';
        $window.location.href = '/ems/#/viewTask';
        
   }
    
})