# e-project

## Cập nhật UI 0.1.0

1. Đã làm

- Bắt đầu từ phiên bản này, mọi component của AdminLTE sẽ thay bằng Vuetify

2. Chưa làm:

- Summernote (cái soạn tin nhắn) -> Tiptap vuetify

3. Bug

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
