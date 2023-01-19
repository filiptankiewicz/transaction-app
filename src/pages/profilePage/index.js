const profileHTML = `<h2 id="errorUserNotLoggedIn"></h2>
<div id="mainContainer">
  <div class="buttonsContainer">
    <div>
      <p class="userName" id="userName">
      </p>
    </div>
    <div>
      <button class="button btn" id="signOutButton">
        <p class="titleOfButton">Wyloguj się</p>
      </button>
    </div>
  </div>
  <div class="chartsContainer">
    <div class="pieChartContainer">
      <canvas id="pieChart"></canvas>
    </div>
    <div class="barChartContainer">
      <canvas id="barChart"></canvas>
    </div>
  </div>
  <div class="transactionsContainer">
    <table class="tableContainer" id="transactions" border="1">
      <thead>
        <th>data</th>
        <th>typ</th>
        <!-- typ to ikona -->
        <th>opis</th>
        <th>kwota</th>
        <th>saldo</th>
      </thead>
    </table>
  </div>
  <p id="fetchError"></p>
</div>`;