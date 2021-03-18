class validationEnginClass{
    constructor(){ }
    Isvalid=()=>{
        var result='';
        var formElements = $("form :input");
        for(var i=0 ;i<formElements.length;i++){
            var element=$(formElements[i]);
            var type=$(element).data('validation');
            switch(type){
                case type ='required' : 
                    if(!this.IsValidRequiered(element.val())){
                        result += ` ${ element.data('ref') } `;
                    };
                    break;                                                                    
                case type ='date' : 
                    if(!this.IsValidDate(element.val())){
                        result += ` ${ element.data('ref') } `;
                    };
                    break;
                case type ='email' : 
                    if(!this.IsValidEmail(element.val())){
                        result += ` ${ element.data('ref') } `;
                    };
                    break;
                case type ='Selected' : 
                    if(!this.IsValidSelected(element.val())){
                        result += ` ${ element.data('ref') } `;
                    };
                    break;
            }
        }
        var resultObj={
            errormsg: ` ${ result } is required `,
            isvalid :(result == '' ? true : false),
        }
        return  resultObj; 
    }
    IsValidEmail=(emailel)=>{
        if(emailel != ''){
            var emailtester=emailel.match(/([A-Z]+)(@)([A-Z]+)(.)([A-Z]{3})/i);
            if(emailtester.lenght != 0){
                return true;
            }
        }
        return false;
    }
    IsValidRequiered=(textel)=>{
        if(textel == ''){
            return false;
        }
        return true;
    }
    IsValidSelected=(Selectel)=>{
        if(Selectel== null){
            return false;
        }
        return true;
    }
    IsValidDate=(dateEl)=>{
        if ( dateEl == ''){
            return false;
        }
        return true;
    }
}
var validationEngin = new validationEnginClass();