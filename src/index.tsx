import $ from 'jquery';

import { KayakService } from './logic/kayak';
import { SkyscannerService } from './logic/skyscanner';

$(document).ready(function () {
  const location = window.location;
  console.log(location, location.pathname);
  if (location.pathname.includes('/flights')) {
    setTimeout(waitForSomeElement, 1000);
  }
});

const waitForSomeElement = () => {
  const container = $("[data-testid='place-card']") ?? $(`[data-resultid]`);
  if (!container) {
    setTimeout(waitForSomeElement, 1000);
  } else {
    if (SkyscannerService.shared.isSkyscanner()) {
      SkyscannerService.shared.processSkyscannerPage();
    } else if (KayakService.shared.isKayak()) {
      KayakService.shared.processKayakPage();
    }
  }
};
