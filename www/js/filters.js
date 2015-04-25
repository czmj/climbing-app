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
      var intGrade = Math.floor(input*2);
      
      switch(intGrade) {
              case 2: return "1";
              case 4: return "2";
              case 6: return "3";
              case 7: return "3+";
              case 8: return "4";
              case 9: return "4+";
              case 10: return "5";
              case 11: return "5+";
              case 12: return "6a";
              case 13: return "6a+";
              case 14: return "6b";
              case 15: return "6b+";
              case 16: return "6c";
              case 17: return "6c+";
              case 18: return "7a";
              case 19: return "7a+";
              case 20: return "7b";
              case 21: return "7b+";
              case 22: return "7c";
              case 23: return "7c+";
              case 24: return "8a";
              case 25: return "8a+";
              case 26: return "8b";
              case 27: return "8b+";
              case 28: return "8c";
              case 29: return "8c+";
              default: return "No grade set";
      }
    }
});