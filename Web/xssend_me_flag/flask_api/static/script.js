fetch("http://localhost:5000/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayCocktail(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayCocktail(data) {
  document.cookie = "flag=UiTHack23{XSS_is_fun}";
  const cocktailDiv = document.getElementById("cocktail");
  try {
    data.forEach((issue) => {
      const cocktailName = document.createElement("div");
      cocktailName.innerHTML = issue[1];
      cocktailDiv.appendChild(cocktailName);
    });
  } catch (e) {}
}

phantom.exit();
