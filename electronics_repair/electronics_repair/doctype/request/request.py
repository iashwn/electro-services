# Copyright (c) 2024, Ashwin Sanker and contributors
# For license information, please see license.txt

# Copyright (c) 2024, Ashwin Sanker and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document

class Request(Document):
    def validate(self):
        self.send_mail()

    def send_mail(self):
        template = "test"
        args = {
            "customer_name": self.customer_full_name,
            "child_table_values": self.get_child_table_values(),
        }
        frappe.sendmail(
            recipients=['ashwinsankar2001@gmail.com','ashwin.sankerr@gmail.com'],
            template=template,
            args=args,
            delayed=False,
            subject=_("Service Request"),
        )

    def get_child_table_values(self):
        child_table_values = []

        # Assuming your child table is named 'items'. Replace it with your actual child table name.
        for item in self.get("devices_details"):
            # Customize this based on the actual field names in your child table
            child_table_values.append({
                "product_name": item.product_name,
                "model_number": item.model_number,
                "brand": item.brand,
                "colour": item.colour,
                # Add more fields as needed
            })

        return child_table_values
