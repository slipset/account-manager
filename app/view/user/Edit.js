Ext.define('AM.view.user.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.useredit',
	title: 'Edit User',
	layout: 'fit',
	autoShow: true,
	initComponent: function () {
		var me = this;
		me.items = [
			{
				xtype: 'form',
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
			}
		];
		me.buttons = [
			{
				text: 'Save',
				handler: function () {
					var form   = me.down('form').getForm();
					form.updateRecord();
					me.fireEvent("updateUser", me, form.getRecord());
				}
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close
			}
		];
		this.callParent(arguments);
	}
});
