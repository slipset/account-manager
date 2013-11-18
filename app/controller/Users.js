Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [
        'user.List',
        'user.Edit'
    ],
	refs: [
        {
            ref: 'editUser',
            selector: 'useredit'
        }
	],

	stores: ['Users'],
	models: ['User'],

    init: function () {
        this.control({
            'userlist': {
                editUser: this.editUser,
	            newUser: this.newUser
            },
	        'useredit': {
                updateUser: this.updateUser
            }
        });
    },

	newUser: function(grid)  {
		var me = this; 
		me.editUser(grid, Ext.create('AM.model.User'));
    },

    editUser: function (grid, record) {
        var me = this,
            view = Ext.create("AM.view.user.Edit");
	    view.setUser(record);
	    view.show();
    },

	updateUser: function (view, user) {
		var me = this;
		view.close();
		me.getUsersStore().add(user);
//		this.getUsersStore().sync();
    }
});
