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
					var form   = me.down('form'),

					   // checkout form.updateRecord or such
					    record = form.getRecord(),
					    values = form.getValues();
					record.set(values);
					me.fireEvent("updateUser", me, record);

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
