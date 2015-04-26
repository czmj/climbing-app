angular.module('starter.controllers', ['rzModule'])

.controller('DashCtrl', function($scope, $stateParams, Users) {
    $scope.users = Users.all();
    $scope.user = Users.get($stateParams.userId);

})

.controller('LinesCtrl', function($scope, $ionicModal, Lines) {
  $scope.lines = Lines.all();

    //modal
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
    
    //range slider - rz-slider
    var gradeArray = ["1","2","3","3+","4","4+","5","5+","6a","6a+","6b","6b+","6c","6c+","7a","7a+","7b","7b+","7c","7c+","8a","8a+","8b","8b+","8c","8c+"];
  
    $scope.gradeLow = 6;
    $scope.gradeHigh = 10;
    $scope.gradeMax = gradeArray.length - 1;
    $scope.gradeMin = 2;
    
    $scope.gradeTranslate = function(value)
    {
        return gradeArray[value];
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
    
    $scope.addClimb = function(attempt){
        RouteAttempts.add($stateParams.routeId, attempt.success);
        $scope.attemptList = RouteAttempts.get($stateParams.routeId);
    }
    
    $ionicModal.fromTemplateUrl('templates/modals/add-climb-modal.html', {
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