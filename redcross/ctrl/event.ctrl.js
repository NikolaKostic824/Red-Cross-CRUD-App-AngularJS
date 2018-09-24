app.controller('eventCtrl',['$scope','$mdSidenav','eventFactory','$log','$mdToast','$mdDialog',function($scope,$mdSidenav,eventFactory,$log,$mdToast,$mdDialog) {
   
    //Geting Data with Factory
    eventFactory.getEvents().then(function(events){
        $scope.events = events.data;
    });

    //Open Sidebar Function
    $scope.openSidebar = function() {
        $mdSidenav('right').open();
    };
    //Close Sidebar Function
    $scope.closeSidebar = function() {
        $mdSidenav('right').close();
    };
    //Cancel Button Funcionality
    $scope.cancelButton = function() {
        $scope.event = {};
        $scope.closeSidebar();
    }
    //Saving new Event
    $scope.saveEvent = function(event) {
        if(event) {
            $scope.events.push(event);
            $scope.event = {};
            $scope.closeSidebar();
            showMessage("Event saved!");
        }
    };
    //Editing Event
    $scope.editEvent = function(event) {
        $scope.editing = true;
        $scope.openSidebar();
        $scope.event = event;
    };
    //Saving Editing Event on button
    $scope.saveEdit = function() {
        $scope.editing = false;
        $scope.event = {};
        $scope.closeSidebar();
        showMessage("Event edited!");
    };
    //Deleting Event on button
    $scope.deleteEvent = function(ev,event) { 
         //mdDialog confirm 
        let confirm = $mdDialog.confirm()
        .title('Are you sure you wanna to delete ' + event.title + '?')
        .ok('Yes')
        .cancel('Nope')
        .targetEvent(ev);

        //Promise After Confirm mdDialog
        $mdDialog.show(confirm).then(function() {
            let index = $scope.events.indexOf(event);
            $scope.events.splice(index, 1);
        }, function() {});
     };
    //Message for Alerts
    function showMessage (message) {
        $mdToast.show(
            $mdToast.simple()
                .content(message)
                .position("top, left")
                .hideDelay(300)
        );
    };
}]);


