import dataLayer from "../dataLayer";

export const Actions = {
  GetFlightsSuccess: "GetFlightsSuccess"
};

export function getFlights(dispatch) {
  setTimeout(() => {
    dataLayer.getFlights().then(res => {
      dispatch({
        type: Actions.GetFlightsSuccess,
        data: res
      });
      document.body.setAttribute("data-flights", res.flights.join(" "));
    });
  }, 1000);
}