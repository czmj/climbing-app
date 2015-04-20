angular.module('starter.filters', [])

.filter('capitalize', function() {
    return function(input, all) {
        return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
})

.filter('successBool', function() {
    return function(input, all) {
        if (input === true || input === 'true'){
            return 'Successful';
        }else{
            return 'Failed';
        }
    }
});
 