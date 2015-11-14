if (Meteor.isClient) {
  alert('client starting...');
  // counter starts at 0
  Session.setDefault('counter', 1000);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 10);
      alert("clicked");
    }
  });
}

if (Meteor.isServer) {
  console.log('server starting...');
  Meteor.startup(function () {
    // code to run on server at startup
    console.log('server is ready');
  });
}
