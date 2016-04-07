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

    this.$digest = function() {
      this.$$watchers.forEach(function(watcher) {
        var newValue = watcher.watcherFn();
        var oldValue = watcher.last;
        if(newValue !== oldValue) {
          watcher.listenerFn(newValue, oldValue);
          watcher.last = newValue;
        }
      });
    };

    this.$apply = function(exprFn) {
      try{
        exprFn();
      } finally {
      this.$digest();
      }
    };

  };

  var $scope = new Scope();

  // compiler

// tests & logs

$scope.$watch(function() {
  return $scope.hello;
}, function(newValue, oldValue) {
  console.log('hello changed from', oldValue, 'to', newValue);
});

$scope.$apply(function() {
  $scope.hello = 'Hello World !!';
});




