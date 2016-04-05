'use strict';

// framework

  // scope

  var Scope = function() {

    this.$$watchers = [];

    this.$watch = function(watcherFn, listenerFn) {
      this.$$watchers.push({
        watcherFn: watcherFn,
        listenerFn: listenerFn
      });
    };

  };

  var $scope = new Scope();
  // compiler

// tests & logs

$scope.hello = 'Hello World';

$scope.$watch(function() {
  return $scope.hello;
}, function(newValue, oldValue) {
  console.log('hello changed from', oldValue, 'to', newValue);
});
