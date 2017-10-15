angular.module('EMS')
.controller('addTaskCtrl',function($scope,$http,$rootScope){
    $scope.employeeIds=$rootScope.employeeIdList;
    var noOfTasks;
    getAllTask();
   
    console.log($rootScope.employeeNameList)
    $scope.taskStatuses=$rootScope.taskStatuses;
    $scope.empId=$rootScope.loggedUserId;
   $scope.addTask=function(){
        var newTask={
            "tId": $scope.taskId,
            "tTitle": $scope.taskTitle,
            "tStatus": $scope.taskStatus,
            "empId": $scope.empId,
            "tComments": $scope.taskComment
        }
        console.log(newTask)
        $http.post('/api/v1/task',newTask);
        $scope.confirmationMessage='Task Added SuccessFully';
    }
        function getAllTask(){
            $http.get('/api/v1/tasks')
            .then(function(response){
                let tasks=response.data;
                noOfTasks=tasks.length+1;
                $scope.taskId="T"+noOfTasks;
            })
        }
        
   
    
})