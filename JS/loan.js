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

    getLoanHtml:function(loan) {
        return `  
        
       <div id="content">
 <h1>Simple Loan Calculator</h1>

    <h3>Please Introduce bellow the amount and the period</h3>

     <form id="loan-form">
        <label for="loan">Loan Type:</label><input type="text" id="${loan.id}" placeholder="${loan.loanType}">

         <label for="loan">Total Loan Sum: </label><input type="double" id="${loan.id}" placeholder="${loan.loanSum}">

         <label for="loan">Loan Period: </label><input type="integer"  id="${loan.id}" placeholder="${loan.loanPeriod}">
        
          <input type="submit" id="submit-form"/>

    </form>
   <table id="loan">
   </table>

       <thead>
       <tr>
       </tr>

       </thead>
       <tbody>

       </tbody>
   </table>

</div>
       
`

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