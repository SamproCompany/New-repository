window.onload = async function () {
  try {
    const response = await fetch('/config'); // Pobiera ENCRYPTION_KEY z backendu
    const data = await response.json();
    document.getElementById('api-url').innerText = `ENCRYPTION KEY: ${data.encryptionKey}`;
  } catch (error) {
    document.getElementById('api-url').innerText = "Error fetching ENCRYPTION_KEY.";
  }
};
