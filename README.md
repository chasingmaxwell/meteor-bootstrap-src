bootstrap-src
=============

A smart package for the Meteor platform providing Twitter Bootstrap source files for applications.

## How to install:

### Quickstart (meteorite/atmosphere).

1. Navigate to your app's directory. `cd ~/pathto/yourapp`
2. Add bootstrap-src. `mrt add bootstrap-src`

### For developers or control freaks (like me).

1. Navigate to your app's packages directory. `cd ~/pathto/yourapp/packages`
2. Clone this repo into your packages directory. `git clone https://github.com/chasingmaxwell/bootstrap-src.git`
3. Add this package to your meteor app. `meteor add bootstrap-src`

## How to use:

By default, all of the javascript and less files which make up the bootstrap source will be automatically included in your application and you will not have access to any mixins or variables in your own separate less files. If you would like to select which files to include or have access to variables and mixins, keep reading!

### What if I don't want every file included?

If you would like to remove certain files, you can do so by commenting out the corresponding line in package.js. If you are using the @import method below, you can import specific files (say, just mixins.less) instead of every one. Keep in mind that if you import a file which, in turn, imports additional files, those additional files will be included in your application.

### Accessing and overriding variables and mixins.

In order to access or override variables and mixins, you will need to import the bootstrap less files into your own less file.

```css
@import 'packages/bootstrap-src/less/bootstrap.less';
@import 'packages/bootstrap-src/less/responsive.less';

// Override variables and mixins here.

// Your own less/css goes here with full access to mixins and variables.
```

The two files imported above (bootstrap.less and responsive.less) import the rest of the bootstrap source into your file.

Remember to comment out the lines for bootstrap.less and responsive.less in package.js as described above. Otherwise all the bootstrap css will be included in your application twice!
