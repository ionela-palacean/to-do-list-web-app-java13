window.ToDoList={

    API_URL:"http://localhost:8081/to-do-items",
    getItems: function () {
        $.ajax({
            url:ToDoList.API_URL,
            method:"GET"
        }).done(function (response) {
           console.log("GET done");
            console.log(response);

            ToDoList.displayItems(JSON.parse(response));
        });
    },

    createItem: function() {
        let descriptionValue=$("#descripion-field").val();
        let deadlineValue=$("#deadline-field").val();
        var requestBody={

            description:descriptionValue,
            deadline:deadlineValue
        };
        $.ajax({

                url:ToDoList.API_URL,
                method:"POST",
                // MIME  type
                contentType:"application/json",
                data:JSON.stringify(requestBody)
            }) .done(function () {

            ToDoList.getItems();

        })
    },


    displayItems: function (items) {
        var tableContent="";

        items.forEach(item => tableContent+=ToDoList.getItemTableRow(item));
        $("#to-do-items tbody").html(tableContent);

    },

    getItemTableRow: function (item) {
   //spread
         var deadline = new Date(...item.deadline).toLocaleDateString("ro");

         // ternary operator

         var checkAttribute=item.done ? "checked" : "";
         return `<tr>
              <td>${item.description}</td>
              <td>${deadline}</td>
              <td><input type="checkbox" class="mark-done" data-id="${item.id}" ${checkAttribute}/></td>
              <td><a href="#" class="delete-item"><i class="far fa-trash-alt" data-id="${item.id}"></i></a></td> 
          </tr>`
    },

    bindEvents: function () {

        $("#create-item-form").submit(function (event) {
            event.preventDefault();
            ToDoList.createItem();

        })
    }
};

ToDoList.getItems();
ToDoList.bindEvents();
