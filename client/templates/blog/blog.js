Template.blog.helpers({
	postsList: function(){
		return Posts.find({}, {sort: {timeCreated: -1}});
	}
});

/*Template.blog.events({
	'click button.lazyload': function(e, template){
		var currentLimit = Session.get('lazyloadLimit');
		
		Session.set('lazyloadLimit', currentLimit + 5);
	}
});*/