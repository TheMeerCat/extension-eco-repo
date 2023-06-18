import React from 'react';
import ReactDOM from 'react-dom/client';

import $ from 'jquery'; 
import { SkyscannerMainPane } from '../styles/SkyscannerMainPane';
import { UserInput } from './UserInputDto';

/*
function getDetailsFromInput(): UserInputSkyscanner | undefined {
    let to = $("input[aria-controls='destinationInput-menu']").val() as unknown as string;
    let from = $("input[aria-controls='originInput-menu']").val() as unknown as string;

    if (to && from) {
        return { from, to } as UserInputSkyscanner;
    }
}

function getDetailsFromText(): UserInputSkyscanner | undefined {
    const from = $("[class*=' SearchControlSummary_origin__']").text();
    const to = $("[class*=' SearchControlSummary_destination__']").text();

    if (to && from) {
        return { from, to } as UserInputSkyscanner;
    }
}

export function getSkyscannerTravelDetails(): UserInputSkyscanner | undefined {
    return getDetailsFromInput() ?? getDetailsFromText()
}
*/

export class KayakService {
    public static shared = new KayakService()

    private constructor() {
     // nothing to do here   
    }
    
    public isKayak(): boolean {
        return location.hostname.includes("kayak")
    }

    public processSkyscannerPage() {
        const urlData = this.getUserInput()
        const betterData = this.getInfoFromScreen(urlData)
        
        const data = betterData.from && betterData.to ? betterData : urlData

        this.appendEmissionInfo(data)
    }

    private getUserInput(): UserInput {
        const path = location.pathname
        const input = path.split('/')?.[3]?.toUpperCase()
        const inputParts = input.split('-')
        const from = inputParts[0].substring(0, 2)
        const to = inputParts[1].substring(0, 2)

        return { from, to } as UserInput
    }

    private getInfoFromScreen(userInput: UserInput) {
        const from = $(`[aria-label*='${userInput.from}']`).attr("aria-label");
        const to = $(`[aria-label*='${userInput.to}']`).attr("aria-label");
        console.log("from, to: ", from, to)

        return { from, to } as UserInput
    }

    private appendEmissionInfo(userInput: UserInput) {
        const rootElement = document.createElement("div");
        rootElement.id = "eco-mio-chrome-app";

        $("#oc-ui-wrapper-flights-search-summary").append(rootElement);

        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <SkyscannerMainPane from={userInput.from} to={userInput.to} />
            </React.StrictMode>
        );
        
    }
}