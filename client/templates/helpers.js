Template.login.events({
    'submit .login-user': function(event){
        var username = event.target.username.value;
        var password = event.target.password.value;
        
        Meteor.loginWithPassword(username, password, function(err){
            if(err){
                var username = event.target.username.value;
                var password = event.target.password.value;
                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess("You are now logged in");
                Router.go('/admin/projects');
            }
        });
        
        event.target.username.value = "";
        event.target.password.value = "";
        
        return false;
    }
});

Template.layout.events({
    'click .logout-user': function(event){
        Meteor.logout(function(err){
            if(err){
                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess("You are logged out");
                Router.go('/');
            }
        });
        
        // prevent submit
        return false;
    }
});

Template.registerHelper('formatDate', function(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

Template.registerHelper('getSiteTitle', function(){
    return "Rathius.com";
});

Template.registerHelper('getAdminName', function(){
    return "Gary Glasscock";
});

Template.registerHelper('getAdminImage', function(){
    return '/assets/img/me2.jpg';
});

Template.registerHelper('getAdminImage2', function(){
    return '/assets/img/me3.jpg';
});

Template.nav.onRendered(function () {
	$(".dropdown-button").dropdown({
      closeOnClick: true // Closes dropdown on <a> clicks, useful for Angular/Meteor
    }
  );
    $(".button-collapse").sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  	$('.collapsible').collapsible();
});


  // Initialize collapse button
  // $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //