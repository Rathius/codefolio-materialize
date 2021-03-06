Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        max: 100
    },
    description: {
	    type: String,
	    max: 200
    },
    body:{
        type: String,
        max: 5000
    },
    userId: {
        type: String,
        autoValue: function(){
            return Meteor.userId()
        }
    },
    updatedAt:{
        type: Date,
        autoValue: function(){
            return new Date()
        }
    }
}));

Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
    name: {
        type: String,
        max: 100
    },
    description:{
        type: String,
        max: 500
    },
    client: {
        type: String,
        max: 100
    },
    type: {
        type: String,
        max: 100
    },
    projectDate: {
        type: String,
        max: 100,
        optional: true
    },
    userId: {
        type: String,
        autoValue: function(){
            return Meteor.userId()
        }
    },
    updatedAt: {
        type: Date,
        autoValue: function(){
            return new Date()
        }
    },
    projectImage: {
        type: String,
        max: 100,
        optional: true
    }
}));

ProjectImages = new FS.Collection('ProjectImages', {
    stores: [new FS.Store.GridFS('ProjectImages')]
});

Services = new Mongo.Collection('services');

Services.attachSchema(new SimpleSchema({
    name: {
        type: String,
        max: 20
    },
    time:{
        type: String,
        max: 30
    },
    price:{
        type: String,
        max: 6
    }
}));

Files = new FS.Collection('files', {
	stores: [new FS.Store.GridFS('files')]
});


