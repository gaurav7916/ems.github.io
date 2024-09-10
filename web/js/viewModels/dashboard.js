/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['../accUtils', 'knockout', 'ojs/ojchart', 'text!models/data.json', 'ojs/ojarraydataprovider','ojs/ojselectsingle'],
  function(accUtils, ko, chart, file, ArrayDataProvider, select) {
    function DashboardViewModel() {
      
      //Observable array for data
      var data = [
          {name:"Pedestrians", items:[42]},
          {name:"Vehicles", items:[82]},
          {name:"Bicycles", items:[20]},
          {name:"Busses", items:[76]},
          {name:"Trains", items:[31]}
      ];

      self.datasource = ko.observableArray(data);
      // var data2 = JSON.parse(file);
      // self.datasource2 = ko.observableArray(data2);
      self.selectVal = ko.observable('pie');

      var chartoptions = [
        { value: 'pie', label: 'pie' },
        { value: 'bar', label: 'bar' }
      ];
  
      this.chartsDP = new ArrayDataProvider(chartoptions, { keyAttributes: 'value' });




      this.connected = () => {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
        console.log("Connected Dashboard")
      };



      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
          console.log("Disconnected Dashboard");
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
    return DashboardViewModel;
  }
);
