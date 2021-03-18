class renderEnginClass{
    constructor(){}
    renderTemplate=(temp,data)=>{
        var token_Matches=[];
        var placeholder_Matches=temp.match(/({{)([A-Z]*)(}})/gi);
        var nums_of_tokens=0;
        while(nums_of_tokens!=placeholder_Matches.length){
          for(var i=0;i<placeholder_Matches.length;i++){
            token_Matches[i]=placeholder_Matches[i].match(/([a-z]+)/gi);
            var exist=temp.includes(placeholder_Matches[i]);
            if(exist){
              temp=temp.replace(placeholder_Matches[i],data[token_Matches[i]]); 
              nums_of_tokens = nums_of_tokens + 1;
            }
          }
        }
        return temp;
      } 
}
var renderEngin=new renderEnginClass();