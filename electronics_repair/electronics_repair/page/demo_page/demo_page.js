frappe.pages['demo-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Demo Page',
		single_column: true
	});

	// page.set_title('My Page')
	// page.set_indicator('Done','green')
	// let $btn = page.set_primary_action('New', () =>frappe.msgprint("Clicked New"))
	// let $btnone = page.set_secondary_action('Refresh', ()=> frappe.msgprint("Clicked Refresh"))
	// page.add_menu_item('Send Email',() =>frappe.msgprint("Clicked Send Email"))
	// page.add_action_item('Delete',()=>frappe.msgprint("Clicked Delete"))

	// let field = page.add_field({
	// 	label:'Status',
	// 	fieldtype:'Select',
	// 	fieldname:'status',
	// 	options:[
	// 		'Open',
	// 		'Closed',
	// 		'Canacelled'
	// 	],
	// 	change(){
	// 		frappe.msgprint(field.get_value());
	// 	}
	// });

	// $(frappe.render_template("demo_page", {})).appendTo(page.body);

	$(frappe.render_template("demo_page",{
		data:"Welcome Back!"
	})).appendTo(page.body);
}