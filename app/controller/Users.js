Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [
        'user.List',
        'user.Edit'
    ],
	stores: ['Users'],
	models: ['User'],

    init: function () {
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
	        'useredit': {
                updateUser: this.updateUser
            }
        });
    },

    editUser: function (grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    },

	updateUser: function (view, user) {
		view.close();
		// synchronize the store after editing the record
		this.getUsersStore().sync();
    }
});
