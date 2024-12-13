const apiUrl = "http://localhost:3000"; // Backend URL

fetch(`${apiUrl}/`)
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
    document.getElementById("message").innerText = data;
  })
  .catch((error) => {
    console.error("Error:", error);
    document.getElementById("message").innerText =
      "Error connecting to backend.";
  });
