'use strict';

 angular.module('tinkApp')
 .controller('ChangelogCtrl', function ($scope) {

  // --- Define Controller Variables. ----------------- //

  // --- Define Scope Variables. ---------------------- //

  /**
   * Changelog
   * ----------------------------------------------------------------
   * For 'type', choose one of the following:
   * - added
   * - changed
   * - fixed
   * - removed
   * - deprecated
   */

  $scope.changelog = [
    {
      'date': '2015-04-27',
      'version': '1.2.6',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'fixed',
          'content': 'Fixed the determinate checkbox directive'
        }
      ]
    },
    {
      'date': '2015-04-21',
      'version': '1.2.5',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'fixed',
          'content': 'Fixed the accordion directive'
        }
      ]
    },
    {
      'date': '2015-04-20',
      'version': '1.2.4',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'fixed',
          'content': 'Fixed badge behaviour and styling'
        },
        {
          'type': 'fixed',
          'content': 'Fixed an issue where the date object could not be addressed'
        },
        {
          'type': 'fixed',
          'content': 'Fixed an issue where code blocks were minified (where they should not)'
        }
      ]
    },
    {
      'date': '2015-04-13',
      'version': '1.2.3',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'changed',
          'content': 'Added more badge options'
        }
      ]
    },
    {
      'date': '2015-04-07',
      'version': '1.2.2',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'changed',
          'content': 'Added determinate checkbox'
        },
        {
          'type': 'fixed',
          'content': 'Fixed some issues with the responsiveness of SVG images'
        },
        {
          'type': 'fixed',
          'content': 'Fixed uncorrect display of select in Internet Explorer'
        }
      ]
    },
    {
      'date': '2015-03-31',
      'version': '1.2.1',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'fixed',
          'content': 'Fixed an issue with the upload directive when no ng-model was defined'
        },
        {
          'type': 'fixed',
          'content': 'Removed unnecessary scripts'
        },
        {
          'type': 'fixed',
          'content': 'The whole surface area of the upload directive wasn\'t clickable'
        }
      ]
    },
    {
      'date': '2015-03-30',
      'version': '1.2.0',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'added',
          'content': 'Back to top directive'
        },
        {
          'type': 'added',
          'content': 'Breadcrumbs'
        },
        {
          'type': 'added',
          'content': 'Added styling for the interactive table options'
        },
        {
          'type': 'changed',
          'content': 'Modal dialogs can now also work without an external template'
        },
        {
          'type': 'changed',
          'content': 'Popovers can now also work without an external template'
        },
        {
          'type': 'changed',
          'content': 'Skeleton now works the other way around; new helper classes make sure your layout is exactly how you want it to be'
        },
        {
          'type': 'changed',
          'content': 'Added drag and drop functionality to interactive table'
        },
        {
          'type': 'changed',
          'content': 'Datepicker now supports ARIA'
        },
        {
          'type': 'changed',
          'content': 'A calendar date is now updated live in the accompanying field and vice versa'
        },
        {
          'type': 'changed',
          'content': 'Changed the inner workings of the accordion directive'
        },
        {
          'type': 'fixed',
          'content': 'The datepicker months were not displayed correctly'
        },
        {
          'type': 'fixed',
          'content': 'Fixed an issue where the side navigation would chop off if there was not enough content on the page'
        },
        {
          'type': 'fixed',
          'content': 'Fixed faulty deletion behaviour in the upload directive'
        },
        {
          'type': 'fixed',
          'content': 'Fixed a label alignment issue'
        },
        {
          'type': 'fixed',
          'content': 'Updated documentation to reflect latest changes'
        }
      ]
    },
    {
      'date': '2015-03-10',
      'version': '1.1.2',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'added',
          'content': 'Styling for interactive table sorting'
        },
        {
          'type': 'changed',
          'content': 'Better scrolling for modal dialog'
        },
        {
          'type': 'changed',
          'content': 'Better pagination'
        },
        {
          'type': 'fixed',
          'content': 'National number behaviour and validation'
        },
        {
          'type': 'fixed',
          'content': 'Datepicker weekdays'
        }
      ]
    },
    {
      'date': '2015-03-09',
      'version': '1.1.1',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'fixed',
          'content': 'Fallback for interactive table without heading'
        },
        {
          'type': 'fixed',
          'content': 'Better sorting for interactive table'
        },
        {
          'type': 'fixed',
          'content': 'Popover transition on Safari'
        }
      ]
    },
    {
      'date': '2015-03-06',
      'version': '1.1.0',
      'description': '',
      'notes': 'Yanked release!',
      'items': [
        {
          'type': 'added',
          'content': 'National number component'
        },
        {
          'type': 'added',
          'content': 'Interactive table component'
        },
        {
          'type': 'added',
          'content': 'Drag and drop upload component'
        },
        {
          'type': 'added',
          'content': 'Modal dialog component'
        },
        {
          'type': 'added',
          'content': 'Popover component'
        },
        {
          'type': 'added',
          'content': 'Theme for Politie'
        },
        {
          'type': 'fixed',
          'content': 'Theme select bug on Chrome'
        },
        {
          'type': 'fixed',
          'content': 'Miscellaneous bugfixes'
        }
      ]
    },
    {
      'date': '2015-02-13',
      'version': '1.0.1',
      'description': '',
      'notes': '',
      'items': [
        {
          'type': 'fixed',
          'content': 'Top navigation overflow'
        },
        {
          'type': 'fixed',
          'content': 'Datepicker focus'
        }
      ]
    },
    {
      'date': '2015-02-12',
      'version': '1.0.0',
      'description': 'Initial release',
      'items': []
    },
  ];



/**
 * First timeline
 * ----------------------------------------------------------------
 * Less informative than the changelog
 * 'We work in an agile way, so the roadmap can change at all time'
 */
  $scope.timeline = [
    // {
    //   'type': 'next',
    //   'logs': [
    //     {
    //       'date': 'The future',
    //       'title': 'To be defined',
    //       'items': [
    //         'Bugfixes',
    //         'More components',
    //         'More UX guidelines',
    //         'More awesomesauce'
    //       ]
    //     }
    //   ]
    // },
    // {
    //   'type': 'doing',
    //   'logs': [
    //     {
    //       'date': '2015-02-12',
    //       'title': 'Tink v1.0.1',
    //       'items': [
    //         'We t(h)ink this is release-worthy :-)',
    //         'A more detailed changelog will be revealed upon launch'
    //       ]
    //     }
    //   ]
    // },
    {
      // 'type': 'done',
      'type': 'Road to 1.0.0',
      'logs': [
        {
          'date': '2015-02-12',
          'title': 'Tink v1.0.0',
          'items': [
            'Cross-browser compatibility',
            'Hit area box component',
            'Refactored side navigation',
            'Theme switcher',
            'New start page',
            'Updated documentation',
            'Bugfixes'
          ]
        },
        {
          'date': '2015-02-03',
          'title': 'Tink release candidate',
          'items': [
            'Optimised component variants',
            'New callout component',
            'More bugfixes'
          ]
        },
        {
          'date': '2015-01-30',
          'title': 'Fifth public beta',
          'items': [
            'Lots of bugfixes'
          ]
        },
        {
          'date': '2015-01-27',
          'title': 'Fourth public beta',
          'items': [
            'Tink theme variants optimisation',
            'Revised datepicker component',
            'Optimised bar component',
            'More UX guidelines',
            'Bugfixes'
          ]
        },
        {
          'date': '2015-01-20',
          'title': 'Third public beta',
          'items': [
            'First Tink theme variant (OCMW)',
            'Native mobile datepicker and timepicker',
            'Accordion component',
            'Contribution guidelines',
            'First UX guidelines'
          ]
        },
        {
          'date': '2015-01-13',
          'title': 'Second public beta',
          'items': [
            'Fixing all issues that arose from our first public beta',
            'Better code examples'
          ]
        },
        {
          'date': '2015-01-06',
          'title': 'First public beta',
          'items': [
            'Functional skeleton app',
            'Menu bar and behaviour',
            'Side navigation and behaviour',
            'Optimised components',
            'Documentation overhaul'
          ]
        },
        {
          'date': '2014-12-02',
          'title': 'Architecture',
          'items': [
            'First navigation development',
            'Panels',
            'Breadcrumbs',
            'Styling'
          ]
        },
        {
          'date': '2014-11-25',
          'title': 'Styleguide + bugfixing',
          'items': [
            'Further implementation of code examples',
            'Complete missing documentation',
            'Code normalisation'
          ]
        },
        {
          'date': '2014-11-18',
          'title': 'Further form development',
          'items': [
            'Further development of form elements',
            'Form validation',
            'Advanced typography',
            'Further development of documentation',
            'Mobile navigation'
          ]
        },
        {
          'date': '2014-11-12',
          'title': 'Cleanup',
          'items': [
            'Code normalisation',
            'Preparing and packaging'
          ]
        },
        {
          'date': '2014-11-04',
          'title': 'Form elements',
          'items': [
            'First form elements',
            'First buttons',
            'First responsive media',
            'First helper classes',
            'First styleguide development'
          ]
        },
        {
          'date': '2014-10-24',
          'title': 'Documentation',
          'items': [
            'Setup documentation',
            'Styleguide'
          ]
        },
        {
          'date': '2014-10-17',
          'title': 'Basic framework',
          'items': [
            'Grid system',
            'Variable definition',
            'Typography and basic styling',
            'First development of tables',
            'Icons',
            'First development of helper classes'
          ]
        },
        {
          'date': '2014-10-03',
          'title': 'Preparation',
          'items': [
            'Code standards',
            'Guidelines',
            'Best practices',
            'Accessibility',
            'Definition of done'
          ]
        }
      ]
    }
  ];

  // --- Bind To Scope Events. ------------------------ //

  // --- Define Controller Methods. ------------------- //
  // function initialize() {}

  // --- Define Scope Methods. ------------------------ //

  // --- Initialize. ---------------------------------- //
  // initialize();

});
