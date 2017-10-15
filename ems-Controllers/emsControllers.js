var emsServices=require('../ems-Services/emsService2');
var assert=require('assert');

module.exports=function(app){
    app.get('/api/v1/employee',function(req,res){
    res.writeHead(200, {"Content-Type": "application/json"});
        emsServices.getAllEmployees()
        .then(function(employees){
            
            console.log(employees)
            res.end(JSON.stringify(employees))
            })
           

    })
    
    app.get('/api/v1/tasks',function(req,res){
        res.setHeader('Content-Type', 'application/json');
        
        emsServices.getAllTasks()
        .then(function(tasks,err){
            if(err)
                {console.log(err);}
            console.log(tasks)
            res.end(JSON.stringify(tasks))
            })
           
        })
    app.get('/api/v1/completeData',function(req,res){
            res.setHeader('Content-Type', 'application/json');
            
           emsServices.getAllDetails()
          .then(function(err,result){
            if(err) console.log(err)
            else{
                result=JSON.parse(JSON.stringify(result));
                console.log(result[0].assignedTask)
                var task=JSON.parse(JSON.stringify(result[i].MentorDetails))
                console.log(task)
                
            }
          })
          res.end()
        
     })
     app.get('/api/v1/tasks/:empId',function(req,res){
        res.setHeader('Content-Type', 'application/json');
        var empId=req.params.empId;
        emsServices.getTaskByEmpId(empId)
        .then(function(tasks,err){
            if(err)
                {console.log(err);}
            console.log(tasks)
            res.end(JSON.stringify(tasks))
            })
           
        })
        app.get('/api/v1/task/:tId',function(req,res){
            res.setHeader('Content-Type', 'application/json');
            var tId=req.params.tId;
            emsServices.getTaskByTaskId(tId)
            .then(function(task,err){
                if(err)
                    {console.log(err);}
                console.log(task)
                res.end(JSON.stringify(task))
            })
               
        })

        app.get('/api/v1/employee/:empId',function(req,res){
            var empId=req.params.empId;
        res.writeHead(200, {"Content-Type": "application/json"});
            emsServices.getOneEmployee(empId)
            .then(function(employee,err){
                if(err)
                    {console.log(err);}
                console.log(employee)
                res.end(JSON.stringify(employee))
            })
               
    
        })

     app.post('/api/v1/employee',function(req,res){
       
        
        var newEmployee=req.body;
        
        emsServices.addEmployee(newEmployee);
           res.end()
       })
       app.post('/api/v1/task',function(req,res){
       
         var newTask=req.body;
            emsServices.addTask(newTask);
            res.end()
    })
    app.put('/api/v1/employee/:empId',function(req,res){
        var empId=req.params.empId;
           var employee=req.body;
           
            emsServices.updateEmployee(empId,employee);
            res.end()
    })
    app.put('/api/v1/task/:tId',function(req,res){
        var tId=req.params.tId;
        var task=req.body;
            emsServices.updateTask(tId,task);
            res.end()
    })

    app.delete('/api/v1/task/:tId',function(req,res){
        var tId=req.params.tId;
        
        emsServices.deleteTask(tId)
        .then(
            function(result){
                console.log('deleted')
                res.end()
            }
        )
    })
    app.delete('/api/v1/employee/:empId',function(req,res){
        var empId=req.params.empId;
        
        emsServices.deleteEmployee(empId)
        .then(
            function(result){
                console.log('deleted')
                res.end()
            }
        )
    })

    app.get('/api/v1/employee/manager/:managerId',function(req,res){
        res.setHeader('Content-Type', 'application/json');
        let managerId=req.params.managerId;
          
            emsServices.getAllEmployeesWithManagerID(managerId)
           
            .then(function(task,err){
                if(err)
                    {console.log(err);}
                console.log(task)
                res.end(JSON.stringify(task))
            })
               
    
    })

    
        
    
}