// Pobieramy zmienną środowiskową z Railway (wstrzykniemy ją podczas deploy)
window.onload = function () {
  const apiUrl = process.env.API_URL; // Zmienna środowiskowa Railway
  if (apiUrl) {
    document.getElementById('api-url').innerText = `API URL: ${apiUrl}`;
  } else {
    document.getElementById('api-url').innerText = "API URL not set.";
  }
};
