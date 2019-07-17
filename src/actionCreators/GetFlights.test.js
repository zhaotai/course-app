import { getFlights, Actions } from './GetFlights';

jest.mock('../dataLayer');
test('dispatch normal', () => {
  return new Promise((resolve, reject) => {
    const dispatch = jest.fn(action => {
      expect(action.type).toEqual(Actions.GetFlightsSuccess);
      resolve();
    });
    getFlights(dispatch);
  });
});