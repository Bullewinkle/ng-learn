import angular from 'angular';
import 'angular-ui-router';
angular.module('vendor', [
    'ui.router'
])
.run(() => {
    console.log('vendor')
})