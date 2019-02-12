 var persons = new Array(50);
 var mytable;
 var order = true;
      for (var i = 0; i < persons.length; i++) {
        persons[i] = {
          name: "",
          lastname: "",
          job: "",
          address: "",
          phone: "",
          age: ""
        };

        persons[i]["name"] = faker.name.firstName();
        persons[i]["lastname"] = faker.name.lastName();
        persons[i]["job"] = faker.name.jobTitle();
        persons[i]["address"] = faker.address.streetAddress() + ', ' + faker.address.city();
        persons[i]["phone"] = faker.phone.phoneNumber();
        persons[i]["age"] = Math.round(faker.random.number() / 1000);
      }

    
      //renderTable();

    function renderTable(){
      mytable ="";
        for (var j = 0; j < persons.length; j++) {
          mytable += "<tr>";
          mytable += "<td>" + persons[j]["name"] + "</td>";
          mytable += "<td>" + persons[j]["lastname"] + "</td>";
          mytable += "<td>" + persons[j]["age"] + "</td>";
          mytable += "<td>" + persons[j]["job"] + "</td>";
          mytable += "<td>" + persons[j]["address"] + "</td>";
          mytable += "<td>" + persons[j]["phone"] + "</td>";
          mytable += "</tr>";

        }
        document.getElementById("tbody").innerHTML = mytable;
      }
      // sort
      function sortbyField(field) {
        if(order === true)
        {
           persons.sort(compare(field)); 
           order = false;
        }
        else 
        {
          persons.sort(compareDesc(field)); 
          order = true;
        }
        renderTable();
      }
      


      // helpers
      function compare(propName) {
        return function(a, b) {
          if (a[propName] < b[propName])
            return -1;
          if (a[propName] > b[propName])
            return 1;
          return 0;
        };
      }

      function compareDesc(propName) {
        return function(a, b) {
          if (a[propName] > b[propName])
            return -1;
          if (a[propName] < b[propName])
            return 1;
          return 0;
        };
      }
