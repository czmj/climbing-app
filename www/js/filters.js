angular.module('starter.filters', [])

.filter('capitalize', function() {
    return function(input, all) {
        return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
})

.filter('successBool', function() {
    return function(input) {
        if (input === true || input === 'true'){
            return 'Successful';
        }else{
            return 'Failed';
        }
    }
})
 
.filter('grade', function() {
  return function(input){
      var intGrade = Math.floor(input-1);
      
      switch(intGrade) {
              case 0: return "1";
              case 1: return "2";
              case 2: return "3";
              case 3: return "3+";
              case 4: return "4";
              case 5: return "4+";
              case 6: return "5";
              case 7: return "5+";
              case 8: return "6a";
              case 9: return "6a+";
              case 10: return "6b";
              case 11: return "6b+";
              case 12: return "6c";
              case 13: return "6c+";
              case 14: return "7a";
              case 15: return "7a+";
              case 16: return "7b";
              case 17: return "7b+";
              case 18: return "7c";
              case 19: return "7c+";
              case 20: return "8a";
              case 21: return "8a+";
              case 22: return "8b";
              case 23: return "8b+";
              case 24: return "8c";
              case 25: return "8c+";
              default: return "No grade set";
      }
    }
});