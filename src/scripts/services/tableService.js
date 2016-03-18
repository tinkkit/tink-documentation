(function() {
  'use strict';

  function TableService($q, $http) {
    var apiHost = 'http://jsonplaceholder.typicode.com';

    // Posts
    function getPosts() {
      var request = $http({
        method: 'get',
        url: apiHost + '/posts',
      });
      return request.then(handleSuccess, handleError);
    }

    // Users
    function getUsers() {
      var request = $http({
        method: 'get',
        url: apiHost + '/users',
      });
      return request.then(handleSuccess, handleError);
    }

    function handleError(error) {
      if(!angular.isObject(error.data) || !error.data.message) {
          return($q.reject('Er is een ongekende fout opgetreden.'));
      }
      return $q.reject(error.data.message);
    }

    function handleSuccess(success) {
        return success.data;
    }

    var service = {
      getPosts: getPosts,
      getUsers: getUsers
    };

    return service;

  }

  angular
    .module('tinkApp')
    .factory('TableService', TableService);

})();
