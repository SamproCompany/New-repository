window.onload = function () {
  // Zmienna API_URL jest teraz dynamicznie wstawiana przez GitHub Actions
  const apiUrl = '';
  if (apiUrl) {
    document.getElementById('api-url').innerText = `API URL: ${apiUrl}`;
  } else {
    document.getElementById('api-url').innerText = "API URL not set.";
  }
};
