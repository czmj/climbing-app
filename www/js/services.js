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
          grade: 7,
          setter: 'A. Jack',
          dateSet: '2015-04-20T18:37:56.552Z',
      },{
          id: 2,
          color: 'grey',
          grade: 9,
          setter: 'A. Jack',
          dateSet: '2015-04-20T18:37:56.552Z'
      },{
          id: 3,
          color: 'black',
          grade: 12,
          setter: 'A. Jack',
          dateSet: '2015-04-20T18:37:56.552Z'
      }]
      
  }, {
      id: 2,
      type: 'lead',
      routes: [{
          id: 4,
          color: 'rainbow',
          grade: 3,
          setter: 'A. Jack',
          dateSet: '2015-04-20T18:37:56.552Z'
      },{
          id: 5,
          color: 'blue',
          grade: 5,
          setter: 'A. Jack',
          dateSet: '2015-04-20T18:37:56.552Z'
      }]
      
  },{
      id: 3,
      type: 'top rope',
      routes: [{
          id: 6,
          color: 'yellow',
          grade: 5,
          setter: 'A. Jack',
          dateSet: '2015-04-20T18:37:56.552Z'
      }]
      
  },{
      id: 4,
      type: 'top rope',
      routes: [{
          id: 7,
          color: 'pink',
          grade: 8,
          setter: 'A. Jack',
          dateSet: '2015-04-20T18:37:56.552Z'
      }]
      
  },{
      id: 5,
      type: 'lead',
      routes: [{
          id: 8,
          color: 'blue',
          grade: 6,
          setter: 'A. Jack',
          dateSet: '2015-04-20T18:37:56.552Z'
      },{
          id: 9,
          color: 'green',
          grade: 7,
          setter: 'A. Jack',
          dateSet: '2015-04-20T18:37:56.552Z'
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

.factory('RouteAttempts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var attempts = [{
      routeId: 1,
      date: '2015-04-19T15:41:31.344Z',
      success: false   
  },{
     routeId: 1,
      date: '2015-04-20T18:37:56.552Z',
      success: true   
  },{
     routeId: 1,
      date: '2015-04-18T18:37:56.552Z',
      success: true   
  },{
     routeId: 1,
      date: '2015-04-1718:37:56.552Z',
      success: false   
  },{
     routeId: 1,
      date: '2015-04-16T18:37:56.552Z',
      success: true   
  },{
     routeId: 1,
      date: '2015-04-15T18:37:56.552Z',
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
          return attempts;
        },
        add: function(id, successBool) {
            var today = new Date(),
                dateString = today.toISOString(),
                idInt = parseInt(id);
            
            var attempt = {
                routeId: idInt,
                date: dateString,
                success: successBool
            }
            
            attempts.push(attempt);
            
        },
        remove: function(attempt) {
          attempts.splice(attempts.indexOf(attempt), 1);
        },
        get: function(routeId) {
            var attemptList = [];
            for (var i = 0; i < attempts.length; i++) {
                if (attempts[i].routeId === parseInt(routeId)) {
                    attemptList.push(attempts[i]);
                }
            }
            
            if (attemptList.length === 0){
                return null;
            }
            
            return attemptList;
        }
    }
})

.factory('Users', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var users = [{
      id: 1,
      firstName: 'Clara',
      lastName: 'Jordan',
      image: 'clara.jpg',
      highestGrade: 9,  
      averageGrade: 7
  },{
      id: 2,
      firstName: 'Tim',
      lastName: 'Dobson',
      image: 'tim.jpg',
      highestGrade: 10,  
      averageGrade: 8
  }];

  return {
        all: function() {
          return users;
        },
        add: function(input_firstName,input_lastName) {
            var userId = users.length + 1;
            var user = {
                id: userId,
                firstName: input_firstName,
                lastName: input_lastName,
                image: 'ionic.png',
                highestGrade: '',
                averageGrade: ''
            }
            
            users.push(user);
        },
        remove: function(user) {
          users.splice(users.indexOf(user), 1);
        },
        get: function(userId) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === parseInt(userId)) {
                  return users[i];
                }
            }
            return null;
        }
    }
});
