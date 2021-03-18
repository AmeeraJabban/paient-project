class RouterEnginClass{
  constructor(){
    this.states=[];
    this.caching=[];
  }
  init=(config)=>{
    this.states=config;
    this.checkUrl();
    $('[data-state]').click(this.on_navigator_click);
    $(window).on('popstate', function(e){
      history.go(`${e.state}`);
    });
  }
  on_navigator_click=(e)=>{
    e.preventDefault();
    this.navigate($(e.target).data('state'));
  }
  navigate=(statename)=>{
    var currentstate=this.getStateByName(statename);
    this.show(currentstate);
  }
  show=(currentstate)=>{
    var cache=this.getfromCache(currentstate);
    if( cache != null){
      $('.router-outlet').empty().append(cache.Data);
      //currentstate.component.onAfterrendering();

    }else{
      this.getfromAjax(currentstate).then(function(data){
        $('.router-outlet').empty().append(data);
        //currentstate.component.onAfterrendering();
        var result={
          state: currentstate.name,
          Data : data
        };
        RouterEngin.caching.push(result);
      });
    }  
    this.displayUrl(currentstate.Url);
  }
  getfromCache=(currentstate)=>{
    return this.caching.find(item=> item.state == currentstate.name);
  }
  getfromAjax=(currentstate)=>{
    var deferred = $.Deferred();    
    $.ajax({
      type: 'GET',
      async: true,
      url : currentstate.templateUrl,
      success : function(data){
      if(currentstate.component){
        deferred.resolve(data);
      }
     }});
  return deferred;
  }
  checkUrl=()=>{
    var url=this.getCurrentUrl();
    var state=this.getstateByUrl(url);
    this.show(state);
  }
  displayUrl=(url)=>{
    history.pushState(`${url}`, null , `#${url}`);
  }
  getCurrentUrl=()=>{
    var currentUrl=location.href.split('/');
    return  `${currentUrl.reverse()[1]}`;
  }  
  getStateByName=(currentstatename)=>{
    return this.states.find(item=> item.name == currentstatename);
  }
  getstateByUrl=(url)=>{
    return this.states.find(item=> item.Url == url);
  }
}
var RouterEngin=new RouterEnginClass();
