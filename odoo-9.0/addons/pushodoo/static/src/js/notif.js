openerp.pushodoo = function (session) {
    var model = new openerp.web.Model("pushodoo.config");
    var self = this;

    function strip(html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
    function demo_alert(view) {
        window.setInterval(function () {
            model.call("nb_notif", {context: new openerp.web.CompoundContext()}).then(function (result) {
                notif_body = "";
                notif_title = "";
                // notif_body = "vous avez ";
                // notif_body = notif_body.concat(result['nb']);
                // notif_body = notif_body.concat(" notifications non lus");
                var img = '/pushodoo/static/img/icon.png';
                var i = 0;
                if ((result['nb'] > 0)) {
                    for (i = 0; i < result['nb']; i++) {
                        notif_body = result['notifs'][i].replace(/<(?:.|\n)*?>/gm, '');
                        notif_title = result['subs'][i];
                        if (notif_title == null)
                            notif_title = "ODOO Notification"
                        var notification = new Notification(notif_title, {
                            body: notif_body,
                            icon: img,
                        });
                        notification.onclick = function (event) {
                            event.preventDefault(); // empêche le navigateur de donner le focus à l'onglet relatif à la notification
                            window.open('http://127.0.0.1:8069/web?#', '_blank');
                        }
                    }
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
