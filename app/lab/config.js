requirejs.config({
    baseUrl: 'app',
    waitSeconds: 0,
    paths : {
        knockout :'utilles/knockout',
        patientData : 'patientsData',
        jquery :'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min',
        bootstrap : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min',
        router : "utilles/routerEngin",
        render : "utilles/renderEngin",
        patientsvc : "data/patientservicesclass",
        patientEditScreen :'patient/patientEditScreen',
        patientListScreen : 'patient/patientListScreen',
        userListScreen :"user/userListScreen",
        userEditScreen : "user/userEditScreen",
        validationEngin : "utilles/validationEngin",
        main : "main",
    }

});

define(['jquery','main','bootstrap','patientData','patientsvc','patientEditScreen','patientListScreen','knockout','router','render','userListScreen','userEditScreen','validationEngin'],function(){    
});
