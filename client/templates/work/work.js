Template.work.helpers({
	projects: function(){
		return Projects.find({}, {sort: {timeCreated: -1}});
	}
});