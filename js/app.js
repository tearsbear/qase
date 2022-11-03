var app = new Framework7({
  // App root element
  el: "#app",
  // App Name
  name: "Qase",
  // App id
  id: "com.qase.jiaan",
  theme: "ios",
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  // ... other parameters
});

var mainView = app.views.create(".view-main");
