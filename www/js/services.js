angular.module('starter.services', [])

.factory('Lines', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lines = [{
      id: 1,
      type: 'top rope',
      routes: [{
          color: 'pink', 
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          color: 'grey',
          grade: '5+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          color: 'black',
          grade: '6a',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      }]
  }, {
      id: 2,
      type: 'lead',
      routes: [{
          color: 'rainbow',
          grade: '5',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          color: 'blue',
          grade: '5+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      }]
  },{
      id: 3,
      type: 'top rope',
      routes: [{
          color: 'yellow',
          grade: '5',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      }]
  },{
      id: 4,
      type: 'top rope',
      routes: [{
          color: 'pink',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      }]
  },{
      id: 5,
      type: 'lead',
      routes: [{
          color: 'blue',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      },{
          color: 'green',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-19T15:41:31.344Z'
      }]
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

