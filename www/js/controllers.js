angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $stateParams, Users) {
    $scope.users = Users.all();
    $scope.user = Users.get($stateParams.userId);

})

.controller('LinesCtrl', function($scope, $ionicModal, Lines) {
  $scope.lines = Lines.all();
    
  $scope.remove = function(line) {
    Lines.remove(line);
  }

  $ionicModal.fromTemplateUrl('templates/modals/filter-modal.html', {
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

.controller('RegisterCtrl', function($scope, Users) {

    $scope.users = Users.all();    
    $scope.addUser = function(firstName,lastName){
        Users.add(firstName, lastName);
    }
    
    $scope.addUser('Alice','Snorgbottom');

})

.controller('RouteDetailCtrl', function($scope, $stateParams, $ionicModal, Lines, RouteAttempts) {
    $scope.route = Lines.getRoute($stateParams.routeId);
    $scope.line = Lines.getLine($stateParams.lineId);
    $scope.attemptList = RouteAttempts.get($stateParams.routeId);
    
    $ionicModal.fromTemplateUrl('templates/modals/add-attempt-modal.html', {
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

.controller('SearchCtrl', function($scope) {})