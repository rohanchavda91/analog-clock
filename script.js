var app = angular.module('clockApp', []);

app.controller('ClockController', function($scope, $window) {
    
    // Create an array of 60 items for the markings
    $scope.markers = new Array(60);

    function update() {
        const now = new Date();
        const ms = now.getMilliseconds();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        // 1. Continuous Second Hand
        const secDeg = (seconds * 6) + (ms * 0.006);
        
        // 2. Continuous Minute Hand
        const minDeg = (minutes * 6) + (seconds * 0.1);
        
        // 3. Continuous Hour Hand
        const hourDeg = ((hours % 12) * 30) + (minutes * 0.5);

        // Apply translations
        $scope.secondStyle = { transform: 'translateX(-50%) rotate(' + secDeg + 'deg)' };
        $scope.minuteStyle = { transform: 'translateX(-50%) rotate(' + minDeg + 'deg)' };
        $scope.hourStyle   = { transform: 'translateX(-50%) rotate(' + hourDeg + 'deg)' };

        $scope.$applyAsync();
        $window.requestAnimationFrame(update);
    }

    $window.requestAnimationFrame(update);
});
