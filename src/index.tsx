import React from 'react';
import ReactDOM from 'react-dom/client';

import $, { each } from 'jquery'; 
import { SkyscannerMainPane } from './styles/SkyscannerMainPane';
import { getSkyscannerTravelDetails } from './logic/skyscanner';

$( document ).ready(function() {
  const location = window.location;
  console.log(location, location.pathname)
  if (location.pathname.includes("/flights")) {
    console.log("fly")
    waitForSomeElement ();
  }
})

let waitForSomeElement = () => {
  const container = $("[data-testid='place-card']")
  if (!container.length) {
      setTimeout(waitForSomeElement , 50); // give everything some time to render
  } else {
    const data = getSkyscannerTravelDetails();

    console.log("From: ", data);

    if (!data) {
      return;
    }

    const rootElement = document.createElement("div");
    rootElement.id = "react-chrome-app";

    $("#CombinedResultsPlaces").prepend(rootElement)

    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <SkyscannerMainPane from={data.from} to={data.to} />
      </React.StrictMode>
    );
  }
};

console.log("HEYAI1")
