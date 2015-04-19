angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SearchCtrl', function($scope) {})

.controller('LinesCtrl', function($scope, Lines, $ionicModal) {
  $scope.lines = Lines.all();
  $scope.remove = function(line) {
    Lines.remove(line);
  }

  $ionicModal.fromTemplateUrl('templates/filter-modal.html', {
        scope: $scope
      
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.closeModal = function(index) {
        $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };
})

.controller('RouteDetailCtrl', function($scope, $stateParams, Lines, routeAttempts) {
  $scope.route = Lines.getRoute($stateParams.routeId);
  $scope.line = Lines.getLine($stateParams.lineId);
  $scope.attempts = routeAttempts.get($stateParams.routeId);
})