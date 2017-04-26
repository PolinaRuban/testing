//import 'styles/bootstrap.css';

//import angular from 'angular';
//import services from './services';
//import directives from './directives';
//import 'videa.utils';
//import ngMessages from 'angular-messages';

//var app = angular.module('videaShared', [ngMessages, services.name, directives.name]);

app.constant("AppConfig", {
    listItemsPerPageCount: 50,
    listDefaultPageIndex: 1,
    maxPaginationSize: 10,
    datePattern: "MM/dd/yyyy"
});

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.constant("Enums", {
    StationsCheckboxModes: {
        None: 'None',
        CheckAll: 'CheckAll',
        UncheckAll: 'UncheckAll',
        Active: 'Active'
    },
    Sorting: {
        Asc: 'ascending',
        Desc: 'descending'
    },
    CRUD: {
        Edit: 'Edit',
        Create: 'Create'
    }
});
