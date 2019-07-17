import FlightsStore from './FlightsStore';
import { Actions } from '../actionCreators/GetFlights';

it("test flights store", () => {
  const state = {
    flights: null
  };
  const newState = FlightsStore.prototype.onGetFlightsSuccess(state, {
    type: Actions.GetFlightsSuccess,
    data: {
      flights: ["aaa"]
    }
  });
  expect(newState).toEqual({
    flights: ["aaa"]
  });
});