Ext.define('AM.view.user.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.useredit',
	title: 'Edit User',
	layout: 'fit',
	autoShow: true,
	initComponent: function () {
		var me = this;
		
		me.refs = (function (self) {
			var form; // privately scoped variable
			var getForm = function () {
				// Only run component query for the form once per view instance, 
				// this enables us to call this many method as many times in the view as we would like,
				// without considering performance issues.
				if(typeof form == 'undefined') {
					form = self.down('form').getForm();
				}
				return form;
			}
			return {getForm: getForm}
		}(me));
		
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
					me.refs.getForm().updateRecord();
					me.fireEvent("updateUser", me, me.refs.getForm().getRecord());
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
