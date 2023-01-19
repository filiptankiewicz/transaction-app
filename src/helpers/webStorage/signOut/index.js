function signOut() {
  localStorage.removeItem("userData_Name");
  localStorage.removeItem("userData_Password");
  alert("Wylogowywanie...");
  goToHomePage();
}
