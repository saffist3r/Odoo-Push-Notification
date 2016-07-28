openerp.pushodoo = function (session) {
    var model = new openerp.web.Model("pushodoo.config");
    var self = this;


    function demo_alert(view) {
        window.setInterval(function () {
            model.call("nb_notif", {context: new openerp.web.CompoundContext()}).then(function (result) {

                notif_body = "vous avez ";
                notif_body = notif_body.concat(result['nb']);
                notif_body = notif_body.concat(" notifications non lus");
                console.log(notif_body);
                var img = '/pushodoo/static/img/icon.png';
                var notification = new Notification("ODOO Notifications", {
                    body: notif_body,
                    icon: img,
                    url: ''
                });
                notification.onclick = function (event) {
                    event.preventDefault(); // empêche le navigateur de donner le focus à l'onglet relatif à la notification
                    window.open('http://127.0.0.1:8069/web?#', '_blank');
                }
            });
        }, 60000);
    }

    openerp.web.WebClient.include({
        start: function () {
            this._super();
            demo_alert(this);
        },
    });

}
