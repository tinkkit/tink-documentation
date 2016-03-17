'use strict';

angular.module('tinkApp')
  .controller('tableCtrl', ['$scope', 'TableService', function (scope, TableService) {

    scope.tinkTable = {
      data: [],
      emptyMessage: 'Geen data beschikbaar',
      loading: true,
      paging: {
        current: 4,
        itemsPerPage: 5,
        total: 0,
        options: [5, 10, 25]
      },
      sorting: {
        type: '',
        asc: false,
        property: 'title'
      },
      headers: [
        {
          field: 'title',
          alias: 'Titel',
          checked: true,
          sort: 'title'
        },
        {
          field: 'body',
          alias: 'Post',
          checked: true,
          sort: 'body'
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
      console.log(property, order, type);
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

    function initialize() {
      TableService.getPosts()
        .then(function(data) {
          scope.tinkTable.data = data;
          scope.tinkTable.paging.total = data.length;
          scope.tinkTable.loading = false;
        });
    }

    initialize();


}]);
