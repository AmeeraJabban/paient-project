var Patientslist= (function PatientslistScreen(){
    define(['knockout'],function(ko){    
        var allpatient = patientSvc.GetAll();
        var patientsViewModel={
            patients:ko.observableArray(allpatient),
            onAddbtnClick:(function(){
                patientEditScreen.open();
            }),
            onEditbtnClick : (function(currentpatient){
                patientEditScreen.open(currentpatient.ID);
            }),
        }
        var onAfterrendering = function () {
           return ko.applyBindings(patientsViewModel,$('.PatientslistScreen')[0]);  

        };
        ko.applyBindings(patientsViewModel,$('.PatientslistScreen')[0]); 
    });

})();
