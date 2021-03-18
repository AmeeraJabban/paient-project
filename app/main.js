define(['jquery'],function($){    
  $(document).ready(function() {
    if(document.readyState == 'complete'){
      patientEditScreen.init();
      userListScreen.init();
    RouterEngin.init([
    {
      name:'root',
      Url:'patientsystem',
      templateUrl:'http://localhost/patientsystem/app/patient/patientList.html',
      component:'Patientslist',
      init : 'Patientslist.init()'
    },
    {
      name:'Patients-list',
      Url:'Patients-list',
      templateUrl:'http://localhost/patientsystem/app/patient/patientList.html',
      component:'Patientslist',
      init : 'Patientslist.init()'

    },
    {
      name:'patients-editor',
      Url:'Patients-editor',
      templateUrl:'http://localhost/patientsystem/app/patient/patientEdit.html',
      component:'patientEditScreen.init()',
    },
    {
      name:'users-list',
      Url:'Users-list',
      templateUrl:'http://localhost/patientsystem/app/user/userList.html',
      component:'userListScreen.init()',
    },
    {
      name:'users-editor',
      Url:'Users-editor',
      templateUrl:'http://localhost/patientsystem/app/user/userEdit.html',
      component:'userEditScreen.init()',
    },
  ]);
  }});
});



 
