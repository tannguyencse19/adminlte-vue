# e-project

## Cập nhật UI 0.0.5.2

1. Đã làm

- Bỏ nested named views vào tất cả views.
- Tạo component footer.
- Chính thức uninstall vue-2-breadcrumbs. Breadcrumb.vue --> Chuyển vào folder archive
- Chưa biết để Project Kanban ở đâu + Sidebar ko sáng Project Summary (đã fix bằng cách sửa router-link path từ dạng [tên component1-tên component2] --> [tên component1/tên component2])

2. Chưa làm:

- Refactoring: NavLink đang copy paste.
- Chưa tích hợp Vuetify. Nhưng nếu adminlte đã dùng bootstrap thì cần không?
- index.js: path "" đang để tạm
- Preloader chưa có JS nên chưa xài được
- Project views: Add, Edit chưa có nút quay về project summary (nghĩa là ng ta phải tự suy ra muốn về project summary thì ấn vào sidebar => Xem xét)

3. Bug

- Dù dùng template src nhưng file html import vào phải có 1 thẻ root (xem Dashboard.html)
- Inbox: Compose >< Summary bị lệch
- Do dùng chung navbar, các views đều hiển thị mà ko cần login => Mới vào phải bắt Login trước?

## De serve project:

1. Clone ve
2. npm install de download node_modules
3. npm run serve

## Chuc nang da thuc hien

- Dashboard: Xuat hien ngay khi serve project cung voi button login
- Login: Button login nam o tren Dashboard
- Forgot-password: Nam trong trang login
- Calendar: Trong sidebar cua Dashboard. Sau khi an vao button calendar, scroll len de xem trang
  Calendar

## Bug chua fix

- Chua gan external script (vd: jquery, bootstrap - khong tinh BootstrapVue) vao Vue duoc
- Style cua Vuetify override local style

## Cach modify

1. Views (thu muc: src/views/[ten view])

- Moi views duoc gop tu: <template> [ten view].html; <script> main.js; <style> main.css
- File main.js import external scripts cua AdminLTE (dang bi bug)
- File main.css import external styles cua AdminLTE.

2. Router (thu muc: src/router/index.js)

3. Link github AdminLTE: https://github.com/ColorlibHQ/AdminLTE

---

## Project start custom

```
npm start
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
