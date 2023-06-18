import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { SkyscannerMainPane } from '../styles/SkyscannerMainPane';
import { UserInput } from './UserInputDto';
import { KayakMainPane } from '../styles/KayakMainPane';

export class KayakService {
  public static shared = new KayakService();

  private constructor() {
    // nothing to do here
  }

  public isKayak(): boolean {
    return location.hostname.includes('kayak');
  }

  public processKayakPage() {
    const urlData = this.getUserInput();
    const betterData = this.getInfoFromScreen(urlData);

    const data = betterData.from && betterData.to ? betterData : urlData;

    this.appendEmissionInfo(data);
  }

  private getUserInput(): UserInput {
    const path = location.pathname;
    const input = path.split('/')?.[2]?.toUpperCase();
    const inputParts = input.split('-');
    const from = inputParts[0].substring(0, 2);
    const to = inputParts[1].substring(0, 2);

    return { from, to } as UserInput;
  }

  private getInfoFromScreen(userInput: UserInput) {
    const from = $(`[aria-label*='${userInput.from}']`).attr('aria-label');
    const to = $(`[aria-label*='${userInput.to}']`).attr('aria-label');

    return {
      from: from?.substring(from.indexOf(userInput.from)),
      to: to?.substring(to.indexOf(userInput.to)),
    } as UserInput;
  }

  private appendEmissionInfo(userInput: UserInput) {
    const rootElement = document.createElement('div');
    rootElement.id = 'eco-mio-chrome-app';

    $('.keel-grid .col-list-body').prepend(rootElement);

    const root = ReactDOM.createRoot(rootElement);

    root.render(
      <React.StrictMode>
        <KayakMainPane from={userInput.from} to={userInput.to} />
      </React.StrictMode>,
    );
  }
}
