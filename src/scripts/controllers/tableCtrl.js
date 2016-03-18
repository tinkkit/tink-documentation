'use strict';

angular.module('tinkApp')
  .controller('tableCtrl', ['$scope', 'TableService', function (scope, TableService) {

    scope.tinkTable = {
      data: [],
      emptyMessage: 'No users available',
      loading: true,
      paging: {
        current: 1,
        itemsPerPage: 3,
        total: 0,
        options: [3, 5, 10]
      },
      sorting: {
        type: '',
        asc: false,
        property: 'title'
      },
      headers: [
        {
          field: 'name',
          alias: 'Name',
          checked: true,
          sort: 'name',
          disabled: true
        },
        {
          field: 'username',
          alias: 'User name',
          checked: true,
          sort: 'username'
        },
        {
          field: 'email',
          alias: 'Email',
          checked: true,
          sort: 'email',
          sortalias: 'Email address'
        },
        {
          field: 'phone',
          alias: 'Phone',
          checked: false,
          sort: 'phone'
        }
      ],
      actions: [
        {
          name: 'remove',
          callback: function(items) {
            angular.forEach(items, function(val) {
              scope.tinkTable.data.splice(scope.tinkTable.data.indexOf(val),1);
            });
            scope.tinkTable.paging.total = scope.tinkTable.data.length;
          },
          order: 1,
          master: true,
          icon: 'fa-trash-o'
        }
      ]
    };

    // Sort order was changed
    scope.sortHeader = function sortHeader(property, order, type) {
      // console.log(property, order, type);
      scope.tinkTable.sorting.property = property;
      scope.tinkTable.sorting.asc = order;
      scope.tinkTable.sorting.type = type;
    };

    // Pagination has changed
    scope.changePage = function changePage(page, perPage, next){
      // console.log(page,perPage,next);
      scope.tinkTable.paging.current = page;
      scope.tinkTable.paging.itemsPerPage = perPage;
      next();
    };

    // Retrieve user data from table service
    function initialize() {
      // TableService.getPosts()
      //   .then(function(data) {
      //     scope.tinkTable.data = data;
      //     scope.tinkTable.paging.total = data.length;
      //     scope.tinkTable.loading = false;
      // });
      TableService.getUsers()
        .then(function(data) {
          scope.tinkTable.data = data;
          scope.tinkTable.paging.total = data.length;
          scope.tinkTable.loading = false;
      });

      // scope.tinkTable.data = [
      //   {
      //     firstname: 'Jasper',
      //     lastname: 'Van Proeyen',
      //     username: '@trianglejuice'
      //   },
      //   {
      //     firstname: 'Tom',
      //     lastname: 'Wuyts',
      //     username: '@pxlpanic'
      //   },
      //   {
      //     firstname: 'Kevin',
      //     lastname: 'De Mulder',
      //     username: '@clopin'
      //   },
      //   {
      //     firstname: 'Vincent',
      //     lastname: 'Bouillart',
      //     username: '@bouillartv'
      //   },
      //   {
      //     firstname: 'Lieven',
      //     lastname: 'Van Gestel',
      //     username: 'xxx'
      //   }
      // ];
    }

    initialize();


}]);
