window.Loan= {
    API_BASE_URL: "http://localhost:8085",

    getLoans: function () {
        $.ajax({
            url: Loan.API_BASE_URL + "/loans"
            //default ajax method: "GET"

        }).done(function (response) {
            console.log(response);

        });
    },


    createItem: function() {
        let loanType=$("#loan-type").val();
        let sum =$("#loan-sum").val();
        let period=$("#loan-period").val();
        var requestBody= {

            loanType:loanType,
            loanSum:sum,
            loanPeriod:period
        };
        $.ajax({

            url:Loan.API_BASE_URL + "/loans",
            method:"POST",
            // MIME  type
            contentType:"application/json",
            data:JSON.stringify(requestBody)
        }) .done(function () {
            Loan.getLoans();

        })
    },


    bindEvents: function () {

        $("#loan-form").submit(function (event) {
            event.preventDefault();
            Loan.createItem();

                confirm("Doriti efectuarea calculului?")

        });

        }


}

//Loan.createItem();
Loan.getLoans();


Loan.bindEvents();