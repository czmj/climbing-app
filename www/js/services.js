angular.module('starter.services', [])

.factory('Lines', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lines = [{
      id: 1,
      type: "top rope",
  }, {
      id: 2,
      type: "lead"
  },{
      id: 3,
      type: "top rope"
  },{
      id: 4,
      type: "top rope"
  },{
      id: 5,
      type: "lead"
  }];

  return {
    all: function() {
      return lines;
    },
    remove: function(line) {
      lines.splice(lines.indexOf(line), 1);
    },
    get: function(lineId) {
      for (var i = 0; i < lines.length; i++) {
        if (lines[i].id === parseInt(lineId)) {
          return lines[i];
        }
      }
      return null;
    }
  }
})

.factory('Routes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var routes = [{
          line: 1,
          color: 'pink',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          line: 1,
          color: 'grey',
          grade: '5+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          line: 1,
          color: 'black',
          grade: '6a',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          line: 2,
          color: 'rainbow',
          grade: '5',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          line: 2,
          color: 'blue',
          grade: '5+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          line: 3,
          color: 'yellow',
          grade: '5',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          line: 4,
          color: 'pink',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          line: 5,
          color: 'blue',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          line: 6,
          color: 'green',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      }] 
  
    return routes;

});

