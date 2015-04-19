angular.module('starter.services', [])

.factory('Lines', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lines = [{
      id: 1,
      type: 'top rope',
      routes: [{
          id: 1,
          color: 'pink', 
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-2T15:41:31.344Z',
      },{
          id: 2,
          color: 'grey',
          grade: '5+',
          setter: 'A. Jack',
          dateSet: '2015-04-2T15:41:31.344Z'
      },{
          id: 3,
          color: 'black',
          grade: '6a',
          setter: 'A. Jack',
          dateSet: '2015-04-2T15:41:31.344Z'
      }]
  }, {
      id: 2,
      type: 'lead',
      routes: [{
          id: 4,
          color: 'rainbow',
          grade: '5',
          setter: 'A. Jack',
          dateSet: '2015-04-2T15:41:31.344Z'
      },{
          id: 5,
          color: 'blue',
          grade: '5+',
          setter: 'A. Jack',
          dateSet: '2015-04-2T15:41:31.344Z'
      }]
  },{
      id: 3,
      type: 'top rope',
      routes: [{
          id: 6,
          color: 'yellow',
          grade: '5',
          setter: 'A. Jack',
          dateSet: '2015-04-2T15:41:31.344Z'
      }]
  },{
      id: 4,
      type: 'top rope',
      routes: [{
          id: 7,
          color: 'pink',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-2T15:41:31.344Z'
      }]
  },{
      id: 5,
      type: 'lead',
      routes: [{
          id: 8,
          color: 'blue',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-2T15:41:31.344Z'
      },{
          id: 9,
          color: 'green',
          grade: '4+',
          setter: 'A. Jack',
          dateSet: '2015-04-2T15:41:31.344Z'
      }]
  }];

  return {
        all: function() {
          return lines;
        },
        remove: function(line) {
          lines.splice(lines.indexOf(line), 1);
        },
        getRoute: function(routeId) {
            for (var i = 0; i < lines.length; i++) {
                for (var j = 0; j < lines[i].routes.length; j++) {
                    if (lines[i].routes[j].id === parseInt(routeId)) {
                      return lines[i].routes[j];
                    }
                }
          }
          return null;
        },
        getLine: function(lineId) {
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].id === parseInt(lineId)) {
                  return lines[i];
                }
            }
            return null;
        }
    }
})

.factory('routeAttempts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var attempts = [{
      routeId: 1,
      date: '2015-04-16T15:41:31.344Z',
      success: false   
  },{
     routeId: 1,
      date: '2015-04-19T15:41:31.344Z',
      success: true   
  },{
     routeId: 4,
      date: '2015-04-19T15:41:31.344Z',
      success: true   
  },{
     routeId: 5,
      date: '2015-04-19T15:41:31.344Z',
      success: true   
  },{
     routeId: 7,
      date: '2015-04-19T15:41:31.344Z',
      success: true   
  },{
     routeId: 2,
      date: '2015-04-19T15:41:31.344Z',
      success: true   
  },{
     routeId: 5,
      date: '2015-04-19T15:41:31.344Z',
      success: true   
  },{
     routeId: 9,
      date: '2015-04-19T15:41:31.344Z',
      success: true   
  }];

  return {
        all: function() {
          return lines;
        },
        remove: function(line) {
          lines.splice(lines.indexOf(line), 1);
        },
        get: function(routeId) {
            for (var i = 0; i < attempts.length; i++) {
                if (attempts[i].routeId === parseInt(routeId)) {
                  return attempts[i];
                }
            }
            return null;
        }
    }
})
