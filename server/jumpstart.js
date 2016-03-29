Meteor.startup(function(){
    if(Meteor.users.find().count() === 0){
        Accounts.createUser({
            username: 'rathius',
            email: 'rathius@icloud.com',
            password: 'tfz2xl9RCPort',
            profile: {
				// The profile is writable by the user by default.
				name: "Gary L. Glasscock"
  			}
        });
    }
});

