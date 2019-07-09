import * as React from 'react';
import { createStore } from 'redux';
import ListStore from './ListStore';
import DetailStore from './DetailStore';
import FlightsStore from './FlightsStore';

const listStore = new ListStore();
const detailStore = new DetailStore();
const flightsStore = new FlightsStore();

const store = createStore((state, action) => {
  return {
    [listStore.name]: listStore.onActionReceived(state, action),
    [detailStore.name]: detailStore.onActionReceived(state, action),
    [flightsStore.name]: flightsStore.onActionReceived(state, action)
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// HOC: high-order component
export function connect(Com) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        store: store
      }
      store.subscribe(() => {
        this.setState({
          store: store
        });
      });
    }

    render() {
      return <Com store={this.state.store} />
    }
  }
}