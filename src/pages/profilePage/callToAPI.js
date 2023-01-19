function callToAPI() {
    const apiUrl = "https://api.npoint.io/38edf0c5f3eb9ac768bd";

    fetch(apiUrl) // apiUrl
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        for (let i = 1 && 0; i < data.transactions.length; i++) {
          let date = data.transactions[i].date;
          let type = data.transactions[i].type;
          let description = data.transactions[i].description;
          let amount = data.transactions[i].amount;
          let balance = data.transactions[i].balance;

          let typeCheck = typeOfTransaction(type);

          function typeOfTransaction(type) {
            switch (type) {
              case 1:
                return "Wpływy - inne";
              case 2:
                return "Wydatki - zakupy";
              case 3:
                return "Wpływy - wynagrodzenie";
              case 4:
                return "Wydatki - inne";
              default:
                return "Invalid type";
            }
          }

          document.querySelector("#transactions").innerHTML += `
          <tbody>
            <tr>
              <td>${date}</td>
              <td>${type}</td>
              <td>${description} <br> ${typeCheck}</td>
              <td>${amount}</td>
              <td>${balance}</td>
            </tr>
            </tbody>
            `;
        }
      })
      .catch((error) => {
        const fetchError = document.getElementById("fetchError");
        fetchError.innerHTML =
          "Wystąpił błąd z wyświetleniem tabeli: " + "<br><br>" + error;
      });
  }
  