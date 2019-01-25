(function () {
  'use strict'
var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController ($scope,
  $injector) {
    $scope.countOf = function(lunchItems) {
      var cnt = lunchItems ? lunchItems.split(",") : 0;
      debugger;
      var strStatus =" ";
        if(typeof $scope.lunchItems === "undefined" || $scope.lunchItems==="" )
        {
          $scope.ErrorMsg='Please enter data first';
        }
        else {
          $scope.ErrorMsg="";
          if (cnt.length <= 3)
          {
             strStatus = "Enjoy!";
          }
          else if(cnt.length > 3)
          {
            strStatus = "Too much!";
          }
        }
      $scope.Status=strStatus;
      console.log($injector.annotate(LunchCheckController));
};
}
})();
