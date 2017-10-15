angular.module('EMS')
.controller('registerCtrl',function($scope,$http){
    let managerIdList=[];
    getAll();

   
    
    $scope.addEmployee=function(){
        let index=managerIdList.length+2
        console.log(managerIdList.length+2);
        console.log("E"+index)
        var newEmployee={
        
         "empId": $scope.employeeId,
         "name": $scope.employeeName,
         "contactNumber": $scope.employeeContactNumber,
         "emailid": $scope.employeeEmailId,
         "qualification": $scope.employeeQualification,
         "address": $scope.employeeAddress,
         "gender": $scope.employeeGender,
         "aadhar": $scope.employeeAadharNumber,
         "DateOfBirth": $scope.employeeDateOfBirth,
         "managerId": $scope.employeeManagerId,
         "taskId": null,
         "password": $scope.employeePassword
        }
 
        $http.post('/api/v1/employee',newEmployee);
        $scope.confirmationMessage='Registered SuccessFully';
        getAll();
    }
    function getAll(){
        $http.get("/api/v1/employee")
        .then(
            function(response){
                let managerReceived=response.data;
                managerIdList=[];
                for(let i=0;i<managerReceived.length;i++){
                    
                    managerIdList.push(managerReceived[i].empId)
                }

                $scope.employeeManagerIds=managerIdList;
                let index=managerIdList.length+1
                console.log(managerIdList.length+1);
                console.log("E"+index)
                $scope.employeeId="E"+index;
            })
    }
})


