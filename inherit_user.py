# -*- coding: utf-8 -*-
from openerp import fields, models

class display_notif (models.Model):
    			
    _inherit =['res.users']
    notif_user = fields.Boolean("Enable Push Notification", default=False)
