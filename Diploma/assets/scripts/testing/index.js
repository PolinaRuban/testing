import angular from 'angular';

import testingComponent from './testing-component';

export default angular.module('app.testing', [])
    .component('testing', testingComponent);