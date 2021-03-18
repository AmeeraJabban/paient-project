var allPatient= require('./patientsData');
var patientsData = allPatient.getPatients();
class patientServicesClass{
    constructor(){}
    GetAll=()=>{
        return patientsData;
    }
    GetByID=(ID)=>{
        return patientsData.find(item=> item.ID == ID);
    }
    Add=(NewPatient)=>{
        NewPatient.ID=this.GetMaxID()+1;
        patientsData.push(NewPatient);
        return NewPatient;
    }
    Update=(NewPatient)=>{
        var index = this.GetIndex(NewPatient.ID);
        patientsData.splice(index,1,NewPatient);
        return NewPatient;
    }
    Delete=(ID)=>{
        var patient =this.GetByID(ID);
        var index = this.GetIndex(ID);
        patientsData.splice(index,1);
        return patient;
    }
    GetIndex=(ID)=>{
        return patientsData.findIndex(item=>item.ID == ID);
    }
    GetMaxID=()=>{
        var max=0;
        for(var i=0;i<patientsData.length;i++){
            if(max <= patientsData[i].ID){
                max=patientsData[i].ID;
            }
        }
        return max;
    }
}
var patientSvc=new patientServicesClass();
module.exports = patientSvc;
