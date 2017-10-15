var mongodb=require('mongodb');
ObjectId = require('mongodb').ObjectID;

var MongoClient=mongodb.MongoClient;

var url= 'mongodb://root:root@ds145329.mlab.com:45329/ems'
var dataBaseOperation=function dataBaseOperation(){
    MongoClient.connect(url,function(err,db){
        var employees=db.collection('employees');
        var tasks=db.collection('tasks');
       
        dataBaseOperation.prototype.getAllEmployees=function(){ 
        return employees.find({}).toArray();
        }

        dataBaseOperation.prototype.getOneEmployee=function(empId){ 
           console.log(empId)
            let query={
                'empId':empId
            }
            return employees.findOne(query);

        }
       


        dataBaseOperation.prototype.getAllTasks=function(){ 
            return tasks.find({}).toArray();
        }
        
        dataBaseOperation.prototype.getAllDetails=function(){
           
           return employees.aggregate([
                                    
                    {
                        $lookup:{
                            from:'tasks',
                            localField:'taskId',
                            foreignField:'tId',
                            as:'assignedTask'

                        }
                    }
            ]).toArray();
    
        }
        dataBaseOperation.prototype.getTaskByEmpId=function(empId){ 
            console.log(empId);
            var query={
                'empId':empId
            }
            return tasks.find(query).toArray();
        }
        dataBaseOperation.prototype.getTaskByTaskId=function(tId){ 
            console.log(tId);
            var query={
                'tId':tId
            }
            return tasks.findOne(query);
        }
        

        dataBaseOperation.prototype.getAllEmployeesWithManagerID=function(managerId){ 
            console.log("Manager: "+managerId);
            var query={
                'managerId':managerId
            }
            console.log(query)
            return employees.find(query).toArray();
        }
        
        dataBaseOperation.prototype.addEmployee=function(employee){
            employees.insertOne(employee,function(err,response){
                if(err)
                    console.log(err)
                else
                  console.log('Employee Added')
            })
        }

                
        dataBaseOperation.prototype.addTask=function(task){
            tasks.insertOne(task,function(err,response){
                if(err)
                    console.log(err)
                else
                    console.log('Task added')
            })
        }
        dataBaseOperation.prototype.updateEmployee=function(empId,employee){
           var query={
               'empId':empId
           }
           console.log(query)
           var toUpdate={
               $set:{
                   'name':employee.name,
                   'password':employee.password,
                   'contactNumber':employee.contactNumber,
                   'emailid':employee.emailid,
                   'qualification':employee.qualification,
                   'address':employee.address,
                   'gender':employee.gender,
                   'aadhar':employee.aadhar,
                   'DateOfBirth':employee.DateOfBirth
               }
           }
            employees.updateOne(query,toUpdate,function(err,response){
                if(err) console.log(err)
                else console.log('Updated')
            })
        }
        dataBaseOperation.prototype.updateTask=function(tId,task){
            
            var query={
                'tId':tId
            }
            tasks.updateOne(query,task,function(err,response){
                if(err) console.log(err)
                else console.log(response)
            })
         }
         dataBaseOperation.prototype.deleteTask=function(tId){
             var query={
                'tId':tId
             }
             return tasks.deleteOne(query);
         }
         dataBaseOperation.prototype.deleteEmployee=function(empId){
            var query={
                'empId':empId
            }
            return employees.deleteOne(query);
           
        }
        
    })
}


module.exports=new dataBaseOperation();
