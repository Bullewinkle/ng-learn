import './styles/index.scss'

angular.module('eMailer',['vendor'])
.run(()=> {
    "ngInject";
    console.log('eMailer',$http)
    window._injector = angular.element(document.body).injector();
})