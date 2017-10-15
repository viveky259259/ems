angular.module('EMS')
.controller('editEmployeeCtrl',function($scope,$http,$rootScope){
var empId=$rootScope.loggedUserId;
    
$http.get('/api/v1/employee/'+empId)
.then(
    function(response){
        let employee=response.data;
            $scope.employeeId=employee.empId,
            $scope.employeeName=employee.name,
            $scope.employeePassword=employee.password,
            $scope.employeeContactNumber=employee.contactNumber,
            $scope.employeeEmailId=employee.emailid,
            $scope.employeeQualification=employee.qualification,
            $scope.employeeAddress=employee.address,
            $scope.employeeGender=employee.gender,
            $scope.employeeAadharNumber=employee.aadhar,
            $scope.employeeDateOfBirth=employee.DateOfBirth
       
    },function(err){
        console.log(err)
    })
})

angular.module('EMS')
.controller('updateEmployeeCtrl',function($scope,$http,$window,$rootScope){

    $scope.updateEmployee=function(){   
    let employee={
        "empId":$scope.employeeId,
        "name":$scope.employeeName,
        "password":$scope.employeePassword,
        "contactNumber":$scope.employeeContactNumber,
        "emailid": $scope.employeeEmailId,
        "qualification":$scope.employeeQualification,
        "address":$scope.employeeAddress,
        "gender":$scope.employeeGender,
        "aadhar":$scope.employeeAadharNumber,
        "DateOfBirth":$scope.employeeDateOfBirth

        }
        console.log(employee.emailid)
        $http.put('/api/v1/employee/'+$scope.employeeId,employee);
        $scope.confirmationMessage='Task Updated SuccessFully';
        
        $window.location.href = '/ems/#/home/'+$rootScope.loggedUserId;;
        
   }
    
})