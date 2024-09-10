define(['../accUtils'],function(accUtils) {
    function IncidentsViewModel() {
      var arr= [];
      function displaytable(){
          str = "<table class='table table-striped' border='2'><tr><th>Emp Id </th><th>Emp Name </th><th>Designation </th><th>Salary</th></tr>";
          for(var ob of arr){
              str+=`<tr><td>${ob.id}</td><td>${ob.name}</td><td>${ob.desg}</td><td>${ob.sal}</td></tr>`
          }
          str += "</table>"
          document.getElementById("mydiv").innerHTML = str;
      }

      function addnewEmp(){
          var id=parseInt(document.getElementById("id").value);
          var name=document.getElementById("ename").value;
          if (!id || !name) {
              alert("Please enter Employee ID and Name");
              return; 
          }
          var desg=document.getElementById("desg").value;
          var sal=parseInt(document.getElementById("sal").value) ;
          // ob = {id:id, name:name, desg:desg, sal:sal};   older version
          var ob = {id, name, desg, sal};
          arr.push(ob);
          clearForm();
          displaytable();
      }

      function deleteEmp(){
        var id=parseInt(document.getElementById("id").value);
        var pos=arr.findIndex(x=>x.id===id)
        if(pos!=-1){
            arr.splice(pos,1);
            alert("Data Deleted successfully");
            displaytable();
            document.getElementById("id").value="";
        }
        else{
            alert("Data not found. Please provide Id of employee to delete");
        }
      }

      function clearForm(){
          document.getElementById("id").value="";
            document.getElementById("ename").value="";
            document.getElementById("desg").value=""
            document.getElementById("sal").value="";
      }

      function editEmp(){
          var id=parseInt(document.getElementById("id").value);
            var ob=arr.find(x=>x.id===id)
            document.getElementById("ename").value=ob.name;
            document.getElementById("desg").value=ob.desg
            document.getElementById("sal").value=ob.sal;
      }

      function modifyEmp(){
          var name=prompt("Enter New Name");
          var desg=prompt("Enter new Designation");
          var sal=prompt("Enter new Salary");
          var id=parseInt(document.getElementById("id").value);
          var pos=arr.findIndex(x=>x.id===id);
          if(pos!=-1){
              arr.splice(pos,1,{id:id,name:name,desg:desg,sal:sal})
              displaytable();
              clearForm();
          }
      };

      this.connected = () => {
        accUtils.announce('Employee page loaded.', 'assertive');
        document.title = "Employee";
        // Implement further logic if needed
      };
      this.disconnected = () => {
        // Implement if needed
      };

      this.transitionCompleted = () => {
        // Implement if needed
      };
    }
    return IncidentsViewModel;
  }
);
