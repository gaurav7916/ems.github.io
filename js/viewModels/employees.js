define(['../accUtils'],function(accUtils) {
    function IncidentsViewModel() {
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
