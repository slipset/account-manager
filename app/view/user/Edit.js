Ext.define('AM.view.user.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.useredit',
	title: 'Edit User',
	layout: 'fit',

	autoCreate: true,
	config: {
		user: null
	},
	
	initComponent: function () {
		var me = this;
		me.form = new Ext.FormPanel({
			items: [
				{
					xtype: 'textfield',
					name : 'name',
					fieldLabel: 'Name'
				},
				{
					xtype: 'textfield',
					name : 'email',
					fieldLabel: 'Email'
				}
			]
		});
		
		me.items = [
			me.form
		];
		
		me.buttons = [
			{
				text: 'Save',
				handler: function () {
					me.form.updateRecord();
					me.fireEvent("updateUser", me, me.getUser());
				}
			},
			{
				text: 'Cancel',
				scope: me,
				handler: me.close
			}
		];
		
		me.callParent(arguments);
	}
});
