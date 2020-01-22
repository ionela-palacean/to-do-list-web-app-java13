window.Loan= {
    API_BASE_URL: "http://localhost:8085",

    getLoans: function () {
        $.ajax({
            url: Loan.API_BASE_URL + "/loans"
            //default ajax method: "GET"

        }).done(function (response) {
            console.log(response);
           // Loan.displayLoans(response.content);
        });
    },

    getLoanHtml:function(loan) {
        return `  
        
       <div id="content">
 <h1>Simple Loan Calculator</h1>

    <h3>Please Introduce bellow the amount  and the period</h3>

     <form id="loan-form">
        <label for="loan">Loan Type:</label><input type="text"  id="${loan.id}" placeholder="${loan.loanType}">

        <label for="loan">Total Loan Sum: </label><input type="double"  id="${loan.id}" placeholder="${loan.loanSum}">

        <label for="loan">Loan Period: </label><input type="integer"  id=${loan.id}" placeholder="${loan.loanPeriod}">
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

displayLoans: function(loans){
        var loansHtml="";
        loans.forEach(oneLoan => loansHtml+=Loan.getLoanHtml(oneLoan));
        $(".label .form").html(loansHtml);
}

}


Loan.getLoans();
//Loan.getLoanHtml();

//Loan.bindEvents();