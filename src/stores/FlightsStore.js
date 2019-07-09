import BaseStore from "./BaseStore";
import { Actions } from "../actionCreators/GetFlights";

class FlightsStore extends BaseStore {
  constructor() {
    super();
    this.registerReducer(Actions.GetFlightsSuccess, this.onGetFlightsSuccess);
  }

  get name() {
    return 'flightsStore';
  }

  get defaultState() {
    return {
      flights: null
    };
  }

  onGetFlightsSuccess(state, action) {
    return Object.assign({}, state, {
      flights: action.data.flights
    });
  }
}

export default FlightsStore;