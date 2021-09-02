let jquery = document.createElement("script");
jquery.defer = true;
jquery.setAttribute("src", "../../plugins/jquery/jquery.min.js");
document.body.appendChild(jquery);

let jqueryUI = document.createElement("script");
jqueryUI.defer = true;
jqueryUI.setAttribute("src", "../../plugins/jquery-ui/jquery-ui.min.js");
document.body.appendChild(jqueryUI);

let bootstrap = document.createElement("script");
bootstrap.defer = true;
bootstrap.setAttribute("src", "../../plugins/bootstrap/js/bootstrap.bundle.min.js");
document.body.appendChild(bootstrap);

let chart = document.createElement("script");
chart.defer = true;
chart.setAttribute("src", "../../plugins/chart.js/Chart.min.js");
document.body.appendChild(chart);

let sparkline = document.createElement("script");
// co file .mjs
sparkline.defer = true;
sparkline.setAttribute("src", "../../plugins/sparklines/sparkline.js");
document.body.appendChild(sparkline);

let JQVMap = document.createElement("script");
JQVMap.defer = true;
JQVMap.setAttribute("src", "../../plugins/jqvmap/jquery.vmap.min.js");
document.body.appendChild(JQVMap);

let JQVMapUSA = document.createElement("script");
JQVMapUSA.defer = true;
JQVMapUSA.setAttribute("src", "../../plugins/jqvmap/maps/jquery.vmap.usa.js");
document.body.appendChild(JQVMapUSA);

let jqKnobChat = document.createElement("script");
jqKnobChat.defer = true;
jqKnobChat.setAttribute("src", "../../plugins/jquery-knob/jquery.knob.min.js");
document.body.appendChild(jqKnobChat);

let moment = document.createElement("script");
moment.defer = true;
moment.setAttribute("src", "../../plugins/moment/moment.min.js");
document.body.appendChild(moment);

let datepicker = document.createElement("script");
datepicker.defer = true;
datepicker.setAttribute("src", "../../plugins/daterangepicker/daterangepicker.js");
document.body.appendChild(datepicker);

let bootstrapTempusdominus = document.createElement("script");
bootstrapTempusdominus.defer = true;
bootstrapTempusdominus.setAttribute(
  "src",
  "../../plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"
);
document.body.appendChild(bootstrapTempusdominus);

let summernote = document.createElement("script");
summernote.defer = true;
summernote.setAttribute("src", "../../plugins/summernote/summernote-bs4.min.js");
document.body.appendChild(summernote);

let overlayScrollbar = document.createElement("script");
overlayScrollbar.defer = true;
overlayScrollbar.setAttribute(
  "src",
  "../../plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"
);
document.body.appendChild(overlayScrollbar);

let adminlte = document.createElement("script");
adminlte.defer = true;
adminlte.setAttribute("src", "../../plugins/dist/js/adminlte.min.js");
document.body.appendChild(adminlte);

let demo = document.createElement("script");
demo.defer = true;
demo.setAttribute("src", "../../plugins/dist/js/demo.js");
document.body.appendChild(demo);

let dashboard = document.createElement("script");
dashboard.defer = true;
dashboard.setAttribute("src", "../../plugins/summernote/summernote-bs4.min.js");
document.body.appendChild(dashboard);

// Page customize script
let myCustom = document.createElement("script");
myCustom.defer = true;
myCustom.setAttribute("src", "./customize.js");
document.body.appendChild(myCustom);
