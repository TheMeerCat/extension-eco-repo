import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { SkyscannerMainPane } from '../styles/SkyscannerMainPane';
import { UserInput } from './user-input';

export class SkyscannerService {
  public static shared = new SkyscannerService();

  private constructor() {
    // nothing to do here
  }

  public isSkyscanner(): boolean {
    return location.hostname.includes('skyscanner');
  }

  public processSkyscannerPage() {
    const urlData = this.getUserInput();
    const betterData = this.getInfoFromScreen(urlData);

    const data = betterData.from && betterData.to ? betterData : urlData;

    this.appendEmissionInfo(data);
  }

  private getUserInput(): UserInput {
    const path = location.pathname;
    const from = path.split('/')?.[3]?.toUpperCase().substring(0, 2);
    const to = path.split('/')?.[4]?.toUpperCase().substring(0, 2);

    return { from, to } as UserInput;
  }

  private getInfoFromScreen(userInput: UserInput) {
    const from = $(`[aria-label*='${userInput.from}']`).attr('aria-label');
    const to = $(`[aria-label*='${userInput.to}']`).attr('aria-label');

    return { from, to } as UserInput;
  }

  private appendEmissionInfo(userInput: UserInput) {
    const rootElement = document.createElement('div');
    rootElement.id = 'eco-mio-chrome-app';

    $('#oc-ui-wrapper-flights-search-summary').append(rootElement);

    const root = ReactDOM.createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <SkyscannerMainPane from={userInput.from} to={userInput.to} />
      </React.StrictMode>,
    );
  }
}
