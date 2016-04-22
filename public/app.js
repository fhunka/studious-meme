import uiModules from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
//import './less/main.less';

import overviewTemplate from './templates/index.html';
import detailTemplate from './templates/details.html';

console.log("Import done");

uiRoutes.enable();
uiRoutes
.when('/', {
  template: overviewTemplate,
  controller: 'elasticsearchStatusController',
  controllerAs: 'ctrl'
})
.when('/index/:name', {
  template: detailTemplate,
  controller: 'elasticsearchDetailController',
  controllerAs: 'ctrl'
});

console.log("Routes done");

uiModules
.get('app/studious-meme')
.controller('elasticsearchStatusController', function ($http) {
  //$http.get('../api/elasticsearch_status/indices').then((response) => {
  //  this.indices = response.data;
  //});

	console.log("elasticsearchStatusController");

})
.controller('elasticsearchDetailController', function($routeParams, $http) {
  this.index = $routeParams.name;

	console.log("elasticsearchDetailController");

  //$http.get(`../api/elasticsearch_status/index/${this.index}`).then((response) => {
  //  this.status = response.data;
  //});
});

console.log("Modules done");