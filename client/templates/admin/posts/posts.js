Template.add_post.onRendered(function(){
	$('#postContent').materialnote();
});

Template.add_post.events({
    'submit .add_post_form': function(event){
        var title = event.target.title.value;
        var description = event.target.description.value;
        var body = event.target.postContent.value;
        
        // Insert Post
        Posts.insert({
            title: title,
            description: description,
            body: body
        });
        
        FlashMessages.sendSuccess("Post Added");
        Router.go('/admin/posts');
        
        // Prevent Submit
        return false;
    }
});

Template.edit_post.onRendered(function(){
	$('#postContent').materialnote();
});

Template.edit_post.events({
    'submit .edit_post_form': function(event){
        var title = event.target.title.value;
        var description = event.target.description.value;
        var body = event.target.body.value;
        
        // Update Post
        Posts.update({
            _id: this._id
        },{
            $set:{
                title: title,
                description: description,
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


