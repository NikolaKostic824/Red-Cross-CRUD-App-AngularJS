app.controller('profileCtrl', ['$scope','$mdSidenav','$mdToast','profileFactory','$mdDialog',function ($scope,$mdSidenav,$mdToast,profileFactory,$mdDialog) {
    //Geting Data with Factory
    profileFactory.getProfiles().then(function(profiles){
        $scope.profiles = profiles.data;
    });
    //Open Sidebar Function
    $scope.openSidebar = function() {
        $mdSidenav('right').open();
    };
    //Close Sidebar Function
    $scope.closeSidebar = function() {
        $mdSidenav('right').close();
    };
    //Cancel Button Event
    $scope.cancelButton = function() {
        $scope.event = {};
        $scope.closeSidebar();
    }
    //Message for Alerts
    function showMessage (message) {
        $mdToast.show(
            $mdToast.simple()
                .content(message)
                .position("top, left")
                .hideDelay(300)
        );
    };
    //Saving New profile
    $scope.saveProfile = function(profile) {
        if(profile) {
            $scope.profiles.push(profile);
            $scope.profile = {};
            $scope.closeSidebar();
            showMessage("Profile saved!");
        }
    };
    //Editing Event
    $scope.editProfile = function(profile) {
        $scope.editing = true;
        $scope.openSidebar();
        $scope.profile = profile;
    };
    //Saving Editing Event on button
    $scope.saveEditProfile = function() {
        $scope.editing = false;
        $scope.profile = {};
        $scope.closeSidebar();
        showMessage("Profile edited!");
    };
    //Deleting Event on button
    $scope.deleteProfile = function(ev,profile) {
        //mdDialog confirm
        let confirm = $mdDialog.confirm()
            .title('Are you sure you wanna to delete ' + profile.name + '?')
            .ok('Yes')
            .cancel('Nope')
            .targetEvent(ev);
    };
    //showAdvance Function for $mdDialog to Display Modal Profile
    $scope.showAdvanced = function(event,profile) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'pages/profiledialog.html',
          parent: angular.element(document.body),
          targetEvent: event,
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen ,
          locals:{dataToPass: profile}
        })
    }
    //Dialog Controller Funcionality
    function DialogController($scope,$mdDialog,dataToPass) {
        $scope.hide = function() {
            $mdDialog.hide();
          };
      
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
          //Data from ng-repeat
          $scope.profile = dataToPass; 
    }
}]);