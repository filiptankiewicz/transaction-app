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
        <th>data <i class="fa fa-calendar" aria-hidden="true"></i></th>
        <th>typ <i class="fa fa-tasks" aria-hidden="true"></i></th>
        <th>opis <i class="fa fa-info" aria-hidden="true"></i></th>
        <th>kwota <i class="fa fa-money" aria-hidden="true"></i></th>
        <th>saldo <i class="fa fa-balance-scale" aria-hidden="true"></i></th>
      </thead>
    </table>
  </div>
  <p id="fetchError"></p>
</div>`;
