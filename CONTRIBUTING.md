Contributing to SideKit.js
==========================

Contributions to SideKit.js are welcome and encouraged, but please have a look through the guidelines in this document before raising an issue, or writing code for the project.


Using issues
------------

The [issue tracker](https://github.com/sidekit-ui/sidekit-core/issues) is the preferred channel for reporting bugs, requesting new features and submitting pull requests.


Reporting bugs
--------------

Well structured, detailed bug reports are hugely valuable for the project.

Guidelines for reporting bugs:

 - Check the issue search to see if it has already been reported
 - Isolate the problem to a simple test case
 - Please include a demonstration of the bug on a website such as [JS Bin](http://jsbin.com/), [JS Fiddle](http://jsfiddle.net/), or [Codepen](http://codepen.io/pen/). ([Template](http://codepen.io/pen?template=JXVYzq))

Please provide any additional details associated with the bug, if it's browser or screen density specific, or only happens with a certain configuration or data.


Local development
-----------------

Run `npm install` to install all the libraries, then run `gulp dev --test` to build and run tests as you make changes.


Pull requests
-------------

Clear, concise pull requests are excellent at continuing the project's community driven growth. But please review [these guidelines](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) and the guidelines below before starting work on the project.

Guidelines:

 - Please create an issue first and/or talk with a team member:
   - For bugs, we can discuss the fixing approach
   - For enhancements, we can discuss if it is within the project scope and avoid duplicate effort
 - Please make changes to the files in [`/src`](https://github.com/sidekit-ui/sidekit-core/tree/master/src), not `sidekit-ui-core.js` or `sidekit-ui-core.min.js` in the repo root directory, this avoids merge conflicts
 - Tabs for indentation, not spaces please
 - If adding new functionality, please also update the relevant `.md` file in [`/docs`](https://github.com/sidekit-ui/sidekit-core/tree/master/docs)
 - Please make your commits in logical sections with clear commit messages

License
-------

By contributing your code, you agree to license your contribution under the [MIT license](https://github.com/chartjs/Chart.js/blob/master/LICENSE.md).