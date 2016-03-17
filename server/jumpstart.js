Meteor.startup(function(){
    if(Meteor.users.find().count() === 0){
        Accounts.createUser({
            username: 'rathius',
            email: 'rathius@icloud.com',
            password: 'tfz2xl9RCPort'
        });
    }
});