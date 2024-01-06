const apiKey = '48741277E48619CF91FC60E15AAA0047';
const gameIds = [570, 730, 440]; // Reemplaza con los IDs reales de los juegos que estás buscando
const endpoint = 'https://api.steampowered.com/ISteamApps/GetAppDetails/v1/';

// Función para realizar una solicitud a la API de Steam para un ID de juego específico
async function getAppDetails(gameId) {
  try {
    const response = await fetch(`${endpoint}?appids=${gameId}&key=${apiKey}`);
    const responseData = await response.json();

    // Verificar si la respuesta tiene un formato diferente
    if (responseData[gameId]) {
      const data = responseData[gameId];

      if (data.success) {
        const appData = data.data;
        console.log(`Nombre del juego: ${appData.name}`);
        console.log(`Imagen del juego: ${appData.header_image}`);
        console.log('------');
      } else {
        console.log(`No se pudo obtener información para el ID ${gameId}`);
      }
    } else {
      console.log(`Respuesta inesperada para el ID ${gameId}:`, responseData);
    }
  } catch (error) {
    console.error(`Error al obtener información para el ID ${gameId}:`, error);
  }
}

// Iterar sobre cada ID de juego y llamar a la función getAppDetails
for (const gameId of gameIds) {
  getAppDetails(gameId);
}
