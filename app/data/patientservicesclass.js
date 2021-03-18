class patientServicesClass{
    constructor(){}
    GetAll=()=>{
        return patientsData;
    }
    GetByID=(ID)=>{
        return patientsData.find(item=> item.ID == ID);
    }
    GetIndex=(ID)=>{
        return patientsData.findIndex(item=>item.ID == ID);
    }
    Add=(NewPatient)=>{
        NewPatient.ID=this.GetMaxID()+1;
        patientsData.push(NewPatient);
    }
    Update=(NewPatient)=>{
        for(var i=0;i<patientsData.length;i++){
            if(patientsData[i].ID == NewPatient.ID){
                patientsData.splice(i,1,NewPatient);
                break;
            }
        }
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
    Delete=(ID)=>{
        for(var i=0;i<patientsData.length;i++){
            if(patientsData[i].ID==ID){
                patientsData.splice(i,1);
                break;
            }
        }
    }
}
var patientSvc=new patientServicesClass();