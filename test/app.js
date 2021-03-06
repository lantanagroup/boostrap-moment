angular.module('bootstrapMoment')
    .run(['$templateCache', '$http', function($templateCache, $http) {
        'use strict';

        if (!$templateCache.get('bootstrapmoment.html')) {
            $.ajax({
                method: 'GET',
                url: '../bootstrapmoment.html',
                async: false,
                success: function (results) {
                    $templateCache.put('bootstrapmoment.html', results);
                }
            });
        }
    }]);

angular.module('bmTestApp', ['bootstrapMoment'])
    .config(function() {
        moment.locale('en');
    })
    .controller('TestCtrl', function($scope) {
        $scope.Options = {
            Placement: 'bottom',
            Required: false,
            RunCustomValidation: false,
            InitWithDate: true
        };
        $scope.Data = {
            CurrentDate: null
        };
        $scope.Rendering = false;
        $scope.Message = '';

        $scope.ValidateDate = function(date) {
            if (!date) {
                return false;
            }

            var diff = moment().diff(date, 'minutes');
            return diff >= 0;
        };

        $scope.DateChanged = function(newDate) {
            $scope.Message = 'Date has changed to ' + (newDate ? newDate.format() : 'NULL');
            setTimeout(function() {
                $scope.Message = '';
                $scope.$apply();
            }, 3000);
        };

        $scope.$watch('Options', function() {
            $scope.Rendering = true;
            $scope.$apply();

            setTimeout(function() {
                $scope.Rendering = false;
                $scope.$apply();
            }, 500);
        }, true);
    });