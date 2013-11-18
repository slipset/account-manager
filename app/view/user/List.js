Ext.define('AM.view.user.List' ,{
	extend: 'Ext.grid.Panel',
	alias: 'widget.userlist',
	title: 'All Users',
	store: 'Users',
	
	initComponent: function() {
		var me = this;
		me.columns = [
			{
				header: 'Name',
				dataIndex: 'name',
				flex: 1
			},

			{
				header: 'Email',
				dataIndex: 'email',
				flex: 1
			}
		];
		me.buttons = [
			{
				text: 'New user',
				handler: function () {
					me.fireEvent("newUser", me);
				}
			}
		];

		me.callParent(arguments);
	},

	listeners: {
		'itemclick': function(grid, index) {
			var user = grid.getStore().getAt(index);
			grid.fireEvent("editUser", grid, user);
		}		
    }

});
