angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SearchCtrl', function($scope) {})

.controller('LinesCtrl', function($scope, Lines) {
  $scope.lines = Lines.all();
  $scope.remove = function(line) {
    Lines.remove(line);
  }
})

.controller('LineDetailCtrl', function($scope, $stateParams, Lines, Routes) {
  $scope.line = Lines.get($stateParams.lineId);
  $scope.routes = Routes;

})