export async function getEmissions(from: string, to: string): Promise<EmissionsDto> {
  try {
    const response = await fetch(`http://localhost:3003/dev/emissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to }),
    });

    if (response.ok) {
      console.log('POST request successful');
      const data = await response.json();

      return data.item as unknown as EmissionsDto;
    } else {
      console.error('POST request failed');
      throw new Error(`Backend responded ${response.status}. It is down?`);
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error(`Backend request failed. It is down?`);
  }
}

interface EmissionsDto {
  from: string;
  to: string;
  co2: number;
}
