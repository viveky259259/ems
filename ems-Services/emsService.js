var mongoose=require('mongoose');
var url= 'mongodb://root:root@ds145329.mlab.com:45329/ems';
mongoose.Promise = global.Promise;
var db=mongoose.connect(url,{useMongoClient:true});

var schema=mongoose.Schema;

var taskSchema=new schema({
    tId: {type:String,required:true},
    tTitle:{type:String,required:true},
    tStatus: {type:Number,required:true},
    empId: {type:String,required:true},
    tComments: {type:String}
},
{collection:'tasks'});
var tasks=mongoose.model('Tasks',taskSchema);

var employeeSchema=new schema({
   empId:{type:Number,required:true},
    name:{type:String,required:true},
    contactNumber:{type:Number ,required:true,max:10,min:10},
    emailid:{type:String,required:true},
    qualification:{type:String,required:true},
    address:{type:String,required:true},
    gender:{type:String,required:true},
    aadhar:{type:Number,required:true,min:12,max:12},
    DateOfBirth:{type:String,required:true},
    managerId:{type:String,required:true},
    taskId:{type:schema.tId,ref:'tasks',required:true}
    
},
{collection:'employees'});

var employees=mongoose.model('Employees',employeeSchema);


var dataBaseOperation=function dataBaseOperation(){
    dataBaseOperation.prototype.getAllEmployees=function(){
       
        return employees.find({});
        
    }
}
module.exports=new dataBaseOperation();