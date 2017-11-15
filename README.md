# dash-flux

An EventEmitter-based layman's Flux implementation

## Installation

Install with npm:

```shell
  npm install dash-flux --save
```

Install with yarn:

```shell
  yarn add dash-flux
```

## Basic Usage ("Hello World")

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Component, createStore, next } from 'dash-flux';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>Counter: {this.props.count} </span>
        <button onClick={() => this.dispatch('inc')}>INC</button>
      </div>
    );
  }
}
MyComponent.propTypes = {
  count: React.PropTypes.number.isRequired,
};

const store = createStore({
  actions: {
    inc: ({ val = 1 }) => {
      store.update(state => {
        const { count } = state;
        return next(state, { count: count + val });
      });
    },
  },
  renderer(state, provider) {
    return ReactDOM.render(
      provider(<MyComponent {...state} />),
      document.getElementById('example'));
  },
});

store.update(() => { count: 0 });	// this fires rendering
```

## Release History

* v0.5.0 Preliminary release (The code works beautifully but needs
  some decent documentations.)

* Forked from dash-ui v0.0.4 (since 2016-02-24); Not yet released.

## To-dos

- Improve the "Hello World" sample.

- Add regression tests.

- Add an API documentation.
