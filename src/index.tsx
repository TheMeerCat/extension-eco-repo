import React from 'react';
import ReactDOM from 'react-dom/client';

import $ from 'jquery'; 
import { SkyscannerMainPane } from './styles/SkyscannerMainPane';
import { SkyscannerService } from './logic/skyscanner';

$( document ).ready(function() {
  const location = window.location;
  console.log(location, location.pathname)
  if (location.pathname.includes("/flights")) {
    console.log("fly")
    setTimeout(waitForSomeElement , 1000);
  }
})

let waitForSomeElement = () => {
  const container = $("[data-testid='place-card']") ?? $("[class*='FlightsResults_']")

  if (!container) {
      setTimeout(waitForSomeElement , 1000); // give everything some time to render
  } else {
    if (SkyscannerService.shared.isSkyscanner()) {
      SkyscannerService.shared.processSkyscannerPage()
    }
    /*
    const rootElement = document.createElement("div");
    rootElement.id = "react-chrome-app";

    if ($("#CombinedResultsPlaces")) {
      $("#CombinedResultsPlaces").prepend(rootElement)
    } else if ( $("[class*='SummaryInfo_itineraryCountContainer__']")) {
      $("[class*='SummaryInfo_itineraryCountContainer__']").prepend(rootElement)
    }

    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <SkyscannerMainPane from={data.from} to={data.to} />
      </React.StrictMode>
    );*/
  }
};

console.log("HEYAI1")
