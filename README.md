# e-project

## Cập nhật UI 0.1.9

1. Đã làm

- Refactoring
  - Dashboard
    - Stat box: API
      - Tên box
      - Hiện màu nào
      - Refactoring hover
    - Table:
      - Slot: Data cần hiển thị

2. Chưa làm:

- Refactoring

  - Dashboard
    - Table: API
      - Data cần hiển thị
  - Navbar notification: API

- Vuetify statbox

  - Làm sao để icon flex-end?
  - Sửa màu

- Sidebar

  - Fix lòi scroll

- Navbar

  - Notification + Message v-menu

- Fix layout các views

- User list

  - Styling
    - Edit dialog show data đang edit => Gây khó chịu
    - header bị lệch do có icon sort

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
