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

angular.module('bmTestApp', ['bootstrapMoment']);