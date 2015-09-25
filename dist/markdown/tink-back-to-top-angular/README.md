# Tink back to top Angular directive

v1.0.6

## What is this repository for?

The Tink back to top Angular directive provides you with a button that, when clicked, will scroll your page back to the top.

Tink is an in-house developed easy-to-use front-end framework for quick prototyping and simple deployment of all kinds of websites and apps, keeping a uniform and consistent look and feel.

## Setup

### Prerequisites

* nodeJS [http://nodejs.org/download/](http://nodejs.org/download/)
* bower: `npm install -g bower`

### Install

1. Go to the root of your project and type the following command in your terminal:

   `bower install tink-back-to-top-angular --save`

2. Add the following files to your project:

   `<link rel="stylesheet" href="bower_components/tink-core/dist/tink.css" />` (or one of the Tink themes)

   `<script src="bower_components/tink-back-to-top-angular/dist/tink-back-to-top-angular.js"></script>`

3. Add `tink.backtotop` to your app module's dependency.

   `angular.module('myApp', ['tink.backtotop']);`



----------



## How to use

### tink-back-to-top

To use this directive you have to add `tink-back-to-top` to a button in your html page.

```html
<button tink-back-to-top=""></button>
```

### Options

Attr | Type | Default | Details
--- | --- | --- | ---
data-offset | `number` | `300` | The height in pixels, measured from the top, when the button will be visible.

###Example

A working example can be found in [the Tink documentation](http://tink.digipolis.be/#/docs/directives/back-to-top#example).

## Contribution guidelines

* If you're not sure, drop us a note
* Fork this repo
* Do your thing
* Create a pull request

## Who do I talk to?

* Jasper Van Proeyen - jasper.vanproeyen@digipolis.be - Lead front-end
* Tom Wuyts - tom.wuyts@digipolis.be - Lead UX
* [The hand](https://www.youtube.com/watch?v=_O-QqC9yM28)
