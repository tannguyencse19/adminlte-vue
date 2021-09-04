let jquery = document.createElement("script");
jquery.setAttribute("src", "../../plugins/jquery/jquery.js");
// Bug expected token:
//  1. Da dung path
//  2. Trang goc cung lam giong minh
document.body.appendChild(jquery);

let bootstrap = document.createElement("script");
bootstrap.setAttribute("src", "../../plugins/bootstrap/js/bootstrap.bundle.min.js");
document.body.appendChild(bootstrap);

let adminlte = document.createElement("script");
adminlte.setAttribute("src", "../../plugins/dist/js/adminlte.min.js");
document.body.appendChild(adminlte);
