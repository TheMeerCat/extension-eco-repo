import $ from 'jquery'; 

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
    return getDetailsFromInput() ?? getDetailsFromText();
}

export class UserInputSkyscanner {
    from!: string;
    to!: string;
}