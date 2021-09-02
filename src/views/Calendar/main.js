let jquery = document.createElement("script");
jquery.setAttribute("src", "../../plugins/jquery/jquery.min.js");
document.head.appendChild(jquery);

let bootstrap = document.createElement("script");
bootstrap.setAttribute("src", "../../plugins/bootstrap/js/bootstrap.bundle.min.js");
document.head.appendChild(bootstrap);

let jqueryUI = document.createElement("script");
jqueryUI.setAttribute("src", "../../plugins/jquery-ui/jquery-ui.min.js");
document.head.appendChild(jqueryUI);

let moment = document.createElement("script");
moment.setAttribute("src", "../../plugins/moment/moment.min.js");
document.head.appendChild(moment);

let fullcalendar = document.createElement("script");
fullcalendar.setAttribute("src", "../../plugins/fullcalendar/main.min.js");
document.head.appendChild(fullcalendar);

let adminlte = document.createElement("script");
adminlte.setAttribute("src", "../../plugins/dist/js/adminlte.min.js");
document.head.appendChild(adminlte);

let demo = document.createElement("script");
demo.setAttribute("src", "../../plugins/dist/js/demo.js");
document.head.appendChild(demo);

// Page customize script
let myCustom = document.createElement("script");
myCustom.setAttribute("src", "./customize.js");
document.head.appendChild(myCustom);
