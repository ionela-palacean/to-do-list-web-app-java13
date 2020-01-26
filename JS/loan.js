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
        let calculator;
        var requestBody= {

            loanType:loanType,
            loanSum:sum,
            loanPeriod:period,

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



    calculator: function() {

        let loanType=$("#loan-type").val();
        let sum =$("#loan-sum").val();
        let period=$("#loan-period").val();

        var calculation= {

            loanType:loanType,
            loanSum:sum,
            loanPeriod:period,

        };

        let newVar= ((sum / period) + ((sum * 7.5) / 100) / 12).toFixed(2);

      return newVar;


    },

    bindEvents: function () {

        $("#loan-form").submit(function (event) {
            event.preventDefault();
           Loan.createItem();

                confirm("Do you want to return the Monthly Loan rate?")

            console.log(Loan.calculator());

                confirm("Monthly Loan rate is :   "+Loan.calculator()+"Eur");
        });

        }


}

Loan.getLoans();
Loan.bindEvents();