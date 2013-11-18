Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',
	
	controllers: ['Users'],
	views: ['user.List'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userlist'
            }
        });
	    var store =  Ext.getStore("Users");
	    store.add(Ext.create("AM.model.User", {
		    name: "Erik",
		    email: "erik@foo.com"
	    }));	    
    }
});
