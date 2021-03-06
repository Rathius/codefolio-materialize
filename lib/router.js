Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    this.route('home',{
        path: '/',
        template: 'home',
        data: function(){
            templateData = {
                projects: Projects.find()
            };
            return templateData;
        }
    });
    
    this.route('about');
    
    this.route('portfolio',{
        path: '/portfolio',
        template: 'work',
        data: function(){
            templateData = {
                projects: Projects.find()
            };
            return templateData;
        }
    });
    
    this.route('project',{
        path: '/project/:_id',
        template: 'project',
        data: function(){
          var currentProject = this.params._id;
          return Projects.findOne({_id: currentProject}); 
        }
    });
    
    this.route('services',{
        path: '/services',
        template: 'services',
        data: function(){
            templateData = {
                services: Services.find()
            };
            return templateData;
        }
    });
    
    this.route('resume');
    
    this.route('blog',{
        path: '/blog',
        template: 'blog',
        data: function(){
            templateData = {
                posts: Posts.find()
            };
            return templateData;
        }
    });
    
    this.route('single_post',{
        path: 'blog/post/:_id',
        template: 'single_post',
        data: function(){
          var currentPost = this.params._id;
          return Posts.findOne({_id: currentPost}); 
        }
    });
    
    this.route('contact');
    
    this.route('list_posts',{
        path: '/admin/posts',
        template: 'list_posts',
        data: function(){
            templateData = {
                posts: Posts.find()
            };
            return templateData;
        },
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });
    
    this.route('add_post',{
        path: '/admin/posts/add',
        template: 'add_post',
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });
    
    this.route('edit_post',{
        path: '/admin/posts/:_id/edit',
        template: 'edit_post',
        data: function(){
          var currentPost = this.params._id;
          return Posts.findOne({_id: currentPost}); 
        },
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });
    
    this.route('list_projects',{
        path: '/admin/projects',
        template: 'list_projects',
        data: function(){
            templateData = {
                projects: Projects.find()
            };
            return templateData;
        },
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });
    
    this.route('add_project',{
        path: '/admin/projects/add',
        template: 'add_project',
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });
    
    this.route('edit_project',{
        path: '/admin/projects/:_id/edit',
        template: 'edit_project',
        data: function(){
          var currentProject = this.params._id;
          return Projects.findOne({_id: currentProject}); 
        },
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });
    
    this.route('list_services',{
        path: '/admin/services',
        template: 'list_services',
        data: function(){
            templateData = {
                services: Service.find()
            };
            return templateData;
        },
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });
    
    this.route('add_service',{
        path: '/admin/services/add',
        template: 'add_service',
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });
    
    this.route('edit_service',{
        path: '/admin/services/:_id/edit',
        template: 'edit_service',
        data: function(){
          var currentPost = this.params._id;
          return Posts.findOne({_id: currentPost}); 
        },
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });
    
    this.route('login',{
        path: '/admin',
        template: 'login'
    });
    
    this.route('note');
    
    
});

Router.onRun("materializeFlashMessages");
Router.onAfterAction("materializeFlashMessages");

