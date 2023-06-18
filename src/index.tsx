import $ from 'jquery';

import { KayakService } from './logic/kayak';
import { SkyscannerService } from './logic/skyscanner';

$(document).ready(function () {
  const location = window.location;

  if (location.pathname.includes('/flights')) {
    setTimeout(waitForPageElements, 1000);
  }
});

const waitForPageElements = () => {
  const container = $("[data-testid='place-card']") ?? $(`[data-resultid]`);
  
  if (!container) {
    setTimeout(waitForPageElements, 1000);
  } else {
    if (SkyscannerService.shared.isSkyscanner()) {
      SkyscannerService.shared.processSkyscannerPage();
    } else if (KayakService.shared.isKayak()) {
      KayakService.shared.processKayakPage();
    }
  }
};
