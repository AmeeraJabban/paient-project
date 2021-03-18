class patientEditScreenClass{
    constructor(){
        this.currentID;
        this.currentPatient;
        this.mode;
    }
    init=()=>{
        this.mode='Add';
       
    }
    bind=()=>{
        this.currentPatient={
            ID: null,
            fname: ko.observable(),
            mname: ko.observable(),
            lname: ko.observable(),
            DOB: ko.observable(),
            gender: ko.observable(),
            email: ko.observable(),
            lastCheck:new Date(),
            status: ko.observableArray(),
            Active:ko.observable(true),
            creationDate:new Date(),
        }
    }
    open=(ID)=>{
        this.currentID=ID;
        if(this.currentID == undefined){
            this.mode='Add';
            this.bind();
            this.Reset();
        }
        else{
            this.mode='edit';
            this.bind();
            this.go();
        }
        RouterEngin.navigate('patients-editor');
    }
    go=()=>{
        var patient=patientSvc.GetByID(this.currentID);
        this.currentPatient.fname(patient.fname); 
        this.currentPatient.mname(patient.mname); 
        this.currentPatient.lname(patient.lname); 
        this.currentPatient.email(patient.email); 
        this.currentPatient.Active((patient.Active == true ? true : false)); 
        this.currentPatient.status(patient.status == 1 ? 'single' : 'Married'); 
        this.currentPatient.gender(patient.gender); 
        this.currentPatient.DOB(patient.DOB);
    }
    onSavebtnClick=()=>{
        var validmsg =validationEngin.Isvalid();
        if(validmsg.isvalid == false){
            $('.alert-warning').show();
            $('.alert-warning').text(validmsg.errormsg);
            return;
        }
        if(this.mode=='Add'){
            patientSvc.Add(this.currentPatient);
        }else{
            patientSvc.Update(this.currentPatient);
        }
        ko.applyBindings(patientEditScreen,$('.PatientsEditScreen')[0]);    
        this.close();
    }   
    close=()=>{
        RouterEngin.navigate('Patients-list');  
    }
    Reset=()=>{
        this.currentPatient.fname(''); 
        this.currentPatient.mname(''); 
        this.currentPatient.lname(''); 
        this.currentPatient.email(''); 
        this.currentPatient.Active(true); 
        this.currentPatient.status(); 
        this.currentPatient.gender(); 
        this.currentPatient.DOB();
    }
}
var patientEditScreen = new patientEditScreenClass();


