Temmplate.add_post.onRendered(function(){
	$('#postContent').materialnote();
});

Template.add_post.events({
    'submit .add_post_form': function(event){
        var title = event.target.title.value;
        var body = event.target.postContent.value;
        
        // Insert Post
/*
        Posts.insert({
            title: title,
            body: body,
            
        });
*/
        
        Meteor.call('insertPost', {
					title:			form.title.value,
					slug:			slug,
					description:	form.description.value,
					text:			form.text.value,
				}, function(error, slug) {
					Session.set('saveButton', 'Save Post');
					
					if(error) {
						return alert(error.reason);
					}
					
					// Here we use the probably changed slug from the server side method
					Router.go('Post', {slug: slug});
				});
        
        FlashMessages.sendSuccess("Post Added");
        Router.go('/admin/posts');
        
        // Prevent Submit
        return false;
    }
});

Template.edit_post.events({
    'submit .edit_post_form': function(event){
        var title = event.target.title.value;
        var body = event.target.body.value;
        
        // Update Post
        Posts.update({
            _id: this._id
        },{
            $set:{
                title: title,
                body: body
            }
        });
        
        FlashMessages.sendSuccess("Post Updated");
        Router.go('/admin/posts');
        
        // Prevent Submit
        return false;
    }
});

Template.list_posts.events({
    'click .delete_post': function(event){
        if(confirm("Are you sure?")){
            Posts.remove(this._id);
            FlashMessages.sendSuccess("Post Deleted");
            
            // Prevent submit
            return false;
        }
    }
});