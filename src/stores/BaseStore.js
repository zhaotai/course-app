class BaseStore {
  constructor() {
    this.reducers = {};
  }

  get name() {
    throw Error('please implement this function');
  }
  
  get defaultState() {
    return {};
  }

  registerReducer(type, callback) {
    this.reducers[type] = callback;
  }

  onActionReceived(state, action) {
    if (!state) {
      return this.defaultState;
    }
    if (this.reducers[action.type]) {
      return this.reducers[action.type](state[this.name], action);
    }
    return state[this.name];
  }
}

export default BaseStore;