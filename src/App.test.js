import React from 'react';
import ReactDOM from 'react-dom';
import Renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as GetFlights from './actionCreators/GetFlights';
import App from './App';

jest.mock('./stores');
GetFlights.getFlights = jest.fn();

describe("App test", () => {
  let store;
  beforeEach(() => {
    store = {
      getState: jest.fn(() => {
        return {
          flightsStore: {
            flights: null
          }
        }
      })
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store} />, div);
    expect(GetFlights.getFlights.mock.calls.length).toBe(1);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('render the whole tree', () => {
    const tree = Renderer
      .create(<App store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  describe('shallow render', () => {
    let renderer;
    beforeEach(() => {
      renderer = new ShallowRenderer();
    });
  
    it('loading', () => {
      renderer.render(<App store={store} />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  
    it('list', () => {
      store.getState = jest.fn(() => {
        return {
          flightsStore: {
            flights: ["testFlight"]
          }
        }
      })
      renderer.render(<App store={store} />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });
});
