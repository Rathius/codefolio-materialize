
Template.add_service.rendered=function() {
    $('#servicesDate').datepicker();
};

Template.edit_service.rendered=function() {
    $('#servicesDate').datepicker();
};

Template.add_service.events({
    'submit .add_services_form': function(event){
        var name = event.target.name.value;
        var time = event.target.servicesDate.value;
        var price = event.target.client.value;
        var description = event.target.description.value;
        
                
        FlashMessages.sendSuccess("Services Added");
        Router.go('/admin/servicess');
        
        // Prevent Submit
        return false;
    }
});


Template.edit_service.events({
    'submit .edit_services_form': function(event){
        var name = event.target.name.value;
        var time = event.target.servicesDate.value;
        var price = event.target.client.value;
        var description = event.target.description.value;
        
                
        FlashMessages.sendSuccess("Service Edited");
        Router.go('/admin/servicess');
        
        // Prevent Submit
        return false;
    }
});

Template.list_servicess.events({
    'click .delete_services': function(event){
        if(confirm("Are you sure?")){
            Servicess.remove(this._id);
            FlashMessages.sendSuccess("Service Deleted");
            
            // Prevent submit
            return false;
        }
    }
});
