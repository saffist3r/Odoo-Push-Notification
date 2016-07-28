# -*- coding: utf-8 -*-
from openerp import http

# class Pushodoo(http.Controller):
#     @http.route('/pushodoo/pushodoo/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/pushodoo/pushodoo/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('pushodoo.listing', {
#             'root': '/pushodoo/pushodoo',
#             'objects': http.request.env['pushodoo.pushodoo'].search([]),
#         })

#     @http.route('/pushodoo/pushodoo/objects/<model("pushodoo.pushodoo"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('pushodoo.object', {
#             'object': obj
#         })