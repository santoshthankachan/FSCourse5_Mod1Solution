(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.finalMsg = "";
        $scope.emptyItems = "";
        $scope.CheckIfTooMuch = function(foodList) {
        if (foodList.trim() != "") {
            // Split the foodList by commas and filter out any empty food items like ", ,"
            $scope.items = foodList.split(',').filter(function(items) {
                // if (items.trim() === '')
                //     $scope.emptyItems = "Not counting empty food Items.";
                return items.trim() != ""; 
            }); 
            
            // Total food items
            $scope.totalItems = $scope.items.length;      
            if ($scope.totalItems > 0)
            {
                if ($scope.totalItems <= 3)
                    $scope.finalMsg = "Enjoy!";
                else
                    $scope.finalMsg = "Too much!";    
                
                $scope.msgColor = "green";
            }
        }
        else
        {
            // Safe initialisation
            $scope.items = [];
            $scope.totalItems = 0; 
            $scope.finalMsg = "Please enter data first"; 
            $scope.msgColor = "red"; 
        }
       }; 
    }
    
    })();