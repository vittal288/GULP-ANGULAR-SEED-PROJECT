'use strict';

angular.module('inspinia')
  .controller('MainController', function () {

    var vm = this;

    vm.userName = 'Vittal Kamkar';
    vm.helloText = 'Welcome to sample Gulp SeedProject';
    vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

  });
