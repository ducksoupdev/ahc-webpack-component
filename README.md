# ahc-webpack-component

This component is Webpack component

## Installation

`bower install ahc-webpack-component --save`

### How to use

Inject `ahcComponentTimeIcon` as a dependency to your app.

```js
let app = angular.module("demoApp", ["ahcComponentTimeIcon"])
```

Add the component to your markup.

```html
<ahc-component-time-icon time="ctrl.time" show-seconds="true" is-dynamic="true"></ahc-component-time-icon>
```

## Development

`npm run develop`

### Tests

`npm test`

### Building

`npm run dist`

### Live preview

`npm run serve`
