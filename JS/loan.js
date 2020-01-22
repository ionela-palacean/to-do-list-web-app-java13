window.Loan= {
    API_BASE_URL: "http://localhost:8085",

    getLoans: function () {
        $.ajax({
            url: Loan.API_BASE_URL + "/loans"
            //default ajax method: "GET"

        }).done(function (response) {
            console.log(response);
            //Loan.displayLoans(response.content);
        });
    },

}

Loan.getLoans();
//Loan.getLoan();
//Loan.bindEvents();