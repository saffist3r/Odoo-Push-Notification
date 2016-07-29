openerp.pushodoo = function (session) {
    var model = new openerp.web.Model("pushodoo.config");
    var self = this;


    function demo_alert(view) {
        window.setInterval(function () {
            model.call("nb_notif", {context: new openerp.web.CompoundContext()}).then(function (result) {

                notif_body = "vous avez ";
                notif_body = notif_body.concat(result['nb']);
                notif_body = notif_body.concat(" notifications non lus");
                var date_last_notif = new Date(result['time'].substr(1,result['time'].length-2));
                console.log(result['notif']);
                console.log(date_last_notif);
                console.log(notif_body);
                var img = '/pushodoo/static/img/icon.png';
                console.log((result['last_notif'] -  date_last_notif))
                if ((result['last_notif'] -  date_last_notif)>0) {
                    var notification = new Notification("ODOO Notifications", {
                        body: notif_body,
                        icon: img,
                        url: ''
                    });
                    notification.onclick = function (event) {
                        event.preventDefault(); // empêche le navigateur de donner le focus à l'onglet relatif à la notification
                        window.open('http://127.0.0.1:8069/web?#', '_blank');
                    }
                }
            });
        }, 10000);
    }

    openerp.web.WebClient.include({
        start: function () {
            this._super();
            demo_alert(this);
        },
    });

}
