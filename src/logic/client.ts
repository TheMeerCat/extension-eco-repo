export async function getEmissions(from: string, to: string): Promise<EmissionsDto> {
    try {
        const response = await fetch(`http://localhost:3003/dev/emissions?from=${from}&to=${to}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          console.log('GET request successful');
          const data = await response.json()

          return data as unknown as EmissionsDto;
        } else {
          console.error('GET request failed');
          throw new Error(`Backend responded ${response.status}. It is down?`)
        }
      } catch (error) {
        console.error('Error:', error);
        throw new Error(`Backend request failed. It is down?`)
      }
}

interface EmissionsDto {
    from: string,
    to: string,
    co2: number
}