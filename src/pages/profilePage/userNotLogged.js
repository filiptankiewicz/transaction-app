function userNotLogged() {
  const userNotLogged = localStorage.getItem("userData_Name");
  const errorUserNotLoggedIn = document.getElementById("errorUserNotLoggedIn");

  if (!userNotLogged == "" || null) {
    document.getElementById("mainContainer").removeAttribute("hidden");
  } else {
    document.getElementById("mainContainer").setAttribute("hidden", true);
    errorUserNotLoggedIn.innerHTML =
      "Brak danych do wyświetlenia: <br> Nie jesteś zalogowany";
  }
}
// userNotLogged();
