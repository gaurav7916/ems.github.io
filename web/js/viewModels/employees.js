/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your employees ViewModel code goes here
 */
define(['../accUtils'],function(accUtils) {
    function IncidentsViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      var arr= [];
      function displaytable(){
          str = "<table class='table table-striped' border='2'><tr><th>Emp Id </th><th>Emp Name </th><th>Designation </th><th>Salary(in $) </th></tr>";
          for(var ob of arr){
              str+=`<tr><td>${ob.id}</td><td>${ob.name}</td><td>${ob.desg}</td><td>${ob.sal}</td></tr>`
          }
          str += "</table>"
          //alert(str);
          document.getElementById("mydiv").innerHTML = str;
      }


      //add new object in array
      function addnewEmp(){
          var id=parseInt(document.getElementById("id").value);
          var name=document.getElementById("ename").value;
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

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return IncidentsViewModel;
  }
);
