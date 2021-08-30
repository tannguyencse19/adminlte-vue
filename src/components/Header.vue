<template>
  <header class="header">
    <div class="grid wide">
      <div class="header__communi">
        <ul class="header__communi-list">
          <li class="header__communi-item">
            <a href="" class="header__communi-item-link header__communi-line-seperate">
              Kênh người bán
            </a>
          </li>
          <li
            class="header__communi-item header__communi-line-seperate header__communi-line-has-qr"
          >
            Tải ứng dụng
            <div class="header_qr">
              <img src="@/assets/image/qr_shopee.png" alt="" class="header_qr-img" />
              <div class="header_qr-app">
                <a href="" class="header_qr-link">
                  <img src="@/assets/image/google play.png" alt="" class="qr-app-img" />
                </a>
                <a href="" class="header_qr-link">
                  <img src="@/assets/image/apstore.png" alt="" class="qr-app-img" />
                </a>
              </div>
            </div>
          </li>
          <li class="header__communi-item">
            <span class="header__communi-item-title-no-pointer">Kết nối</span>
            <a href="" class="header__communi-icon-link">
              <i class="header__communi-icon fab fa-facebook"></i>
            </a>
            <a href="" class="header__communi-icon-link">
              <i class="header__communi-icon fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <ul class="header__communi-list">
          <li class="header__communi-item header__communi-item-has-notyfi">
            <a href="" class="header__communi-item-link header__communi-icon-link">
              <i class="header__communi-icon fas fa-bell"></i>
              Thông báo
            </a>
            <div class="header_notify">
              <header class="header_notify-header">
                <h3>Thông báo mới nhận</h3>
              </header>
              <ul class="header_notify-list">
                <li class="header_notify-item">
                  <a href="" class="header_notify-link">
                    <img
                      src="https://cf.shopee.vn/file/552c8aeee0dbdf904c18f45122f47e09_tn"
                      alt=""
                      class="header_notify-img"
                    />
                    <div class="header_notyfi-info">
                      <span class="header_notify-name">
                        Mỹ phẩm chính hãng trị mùi hôi chính hãng sale 50% chuẩn bị sale
                      </span>
                      <span class="header_notify-description">Mô tả mỹ phẩm chính hãng</span>
                    </div>
                  </a>
                </li>
                <li class="header_notify-item">
                  <a href="" class="header_notify-link">
                    <img
                      src="https://cf.shopee.vn/file/552c8aeee0dbdf904c18f45122f47e09_tn"
                      alt=""
                      class="header_notify-img"
                    />
                    <div class="header_notyfi-info">
                      <span class="header_notify-name">Mỹ phẩm chính hãng trị mùi hô</span>
                      <span class="header_notify-description">Mô tả mỹ phẩm chính hãng</span>
                    </div>
                  </a>
                </li>
                <li class="header_notify-item">
                  <a href="" class="header_notify-link">
                    <img
                      src="https://cf.shopee.vn/file/552c8aeee0dbdf904c18f45122f47e09_tn"
                      alt=""
                      class="header_notify-img"
                    />
                    <div class="header_notyfi-info">
                      <span class="header_notify-name">Mỹ phẩm chính hãng trị mùi hôi</span>
                      <span class="header_notify-description">Mô tả mỹ phẩm chính hãng</span>
                    </div>
                  </a>
                </li>
                <li class="header_notify-item">
                  <a href="" class="header_notify-link">
                    <img
                      src="https://cf.shopee.vn/file/552c8aeee0dbdf904c18f45122f47e09_tn"
                      alt=""
                      class="header_notify-img"
                    />
                    <div class="header_notyfi-info">
                      <span class="header_notify-name">Mỹ phẩm chính hãng trị mùi hô</span>
                      <span class="header_notify-description">Mô tả mỹ phẩm chính hãng</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="footer_notyfi">
                <a href="" class="footer_notyfi-btn">Xem tất cả</a>
              </div>
            </div>
          </li>
          <li class="header__communi-item">
            <a href="" class="header__communi-item-link header__communi-icon-link">
              <i class="header__communi-icon fas fa-question-circle"></i>
              Hỗ trợ
            </a>
          </li>
          <li class="header__communi-item">
            <a href="#" class="header__communi-item-link item-strong">Đăng kí</a>
          </li>
          <li class="header__communi-item">
            <a href="#" class="header__communi-item-link item-strong">Đăng nhập</a>
          </li>
        </ul>
      </div>
      <div class="header__container">
        <div class="header__container-logo hide-on-table">
          <img src="@/assets/image/logo.png" alt="" class="header__container-logo-img" />
        </div>
        <div class="header__container-wrap">
          <div class="header__container-wrap-search">
            <div class="header__container-search">
              <div class="header__search-grap">
                <input
                  type="text"
                  class="header__container-search-input"
                  placeholder="Tìm kiếm..."
                />
                <div class="header__search-history">
                  <h3 class="header__search-history-heading">Lịch sử tìm kiếm</h3>
                  <ul class="header__search-history-list">
                    <li class="header__search-history-item">
                      <a href="">Chó alaska</a>
                    </li>
                    <li class="header__search-history-item">
                      <a href="">Dịch vụ spa</a>
                    </li>
                  </ul>
                </div>
              </div>
              <a class="header__container-search-link">
                <i class="header__container-search-icon-search fas fa-search"></i>
              </a>
            </div>
            <div class="header__container-cart">
              <a class="header__container-cart-link"></a>
              <i class="header__container-search-icon-cart fas fa-shopping-cart"></i>
            </div>
          </div>
          <div class="header__cotainer-nav">
            <ul class="header__container-nav-list">
              <li class="header__container-nav-item">
                <router-link to="/danh-muc-cun" class="header__container-nav-list-link">
                  Thú Cưng
                </router-link>
                <ul class="header__nav-list">
                  <router-link to="/danh-muc-cun/alaska-malamute" class="header__nav-item">
                    Chó Alaska Malamute
                  </router-link>
                  <router-link to="/danh-muc-cun/beagle" class="header__nav-item">
                    Chó Beagle
                  </router-link>
                  <li class="header__nav-item">Chó Corgi</li>
                  <li class="header__nav-item">Chó Golden</li>
                </ul>
              </li>
              <li class="header__container-nav-item">
                <a href="" class="header__container-nav-list-link">Phụ Kiện</a>
              </li>
              <li class="header__container-nav-item">
                <a href="" class="header__container-nav-list-link">Dịch Vụ</a>
              </li>
              <li class="header__container-nav-item">
                <a href="" class="header__container-nav-list-link">Giới Thiệu</a>
              </li>
              <li class="header__container-nav-item">
                <a href="" class="header__container-nav-list-link">Liên Hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<style scoped>
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  .grid {
    width: 1300px;
    margin: 0px auto;
  }
  .header {
    height: 200px;
    background-image: linear-gradient(0, #fe6433, #f53e2d);
  }
  .header__communi {
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__communi-list {
    margin-top: 4px;
    display: flex;
    align-items: center;
    padding: 0px;
  }

  .header__communi-item {
    display: inline-block;
    position: relative;
    margin-right: 16px;
  }
  .header__communi-item-title-no-pointer {
    cursor: text;
    color: #fff;
  }

  .header__communi-item-link,
  .header__communi-item {
    font-size: 1rem;
    color: #fff;
    font-weight: 300;
  }
  .header__communi-item-link,
  .header__communi-item,
  .header__communi-icon-link {
    display: inline-flex;
    align-items: center;
  }

  .header__communi-item:hover,
  .header__communi-item-link:hover,
  .header__communi-icon-link:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  }
  .header_qr {
    display: none;
  }
  .header_qr::before {
    content: "";
    position: absolute;
    left: 0;
    top: -7px;
    width: 45%;
    height: 20px;
    display: block;
  }

  .header__communi-line-has-qr:hover .header_qr {
    display: block;
  }
  .header__communi-line-seperate::after {
    content: "";
    position: absolute;
    background-color: rgb(196, 195, 195);
    border: 1px solid rgb(196, 195, 195);
    height: 12px;
    top: 50%;
    right: -9px;
    transform: translateY(-50%);
  }
  .item-strong {
    font-weight: 400;
  }
  .header__communi-icon-link {
    color: #fff;
  }
  .header__communi-icon {
    font-size: 1rem;
    margin: 0 4px;
  }
  /* HEADER QR_CODE */
  .header_qr {
    width: 186px;
    background-color: #fff;
    position: absolute;
    top: 140%;
    left: 0px;
    padding: 8px;
    border-radius: 2px;
    z-index: 1;
  }
  .header_qr-img {
    width: 100%;
  }
  .header_qr-app {
    display: flex;
    justify-content: space-between;
  }
  .header_qr-link:first-child {
    margin-left: 11px;
  }
  .header_qr-link:last-child {
    margin-right: 11px;
  }
  .qr-app-img {
    height: 16px;
  }

  /* Header Notifications */
  .header_notify {
    display: none;
    position: absolute;
    z-index: 2;
    top: 140%;
    width: 404px;
    right: 0px;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    transform-origin: calc(100% - 20px) top;
    will-change: opacity, transform;
    animation: headerNotifyGrowth ease-in 0.2s;
  }
  .header_notify::before {
    content: "";
    position: absolute;
    width: 20%;
    height: 14px;
    top: -2%;
    right: 0px;
    display: block;
  }
  .header_notify-header::before {
    content: "";
    position: absolute;
    border-width: 16px 20px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    top: -7%;
    right: 22px;
    display: block;
  }
  @keyframes headerNotifyGrowth {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .header__communi-item-has-notyfi:hover .header_notify {
    display: block;
  }
  .header_notify-header {
    cursor: default;
    height: 40px;
    background-color: #fff;
  }

  .header_notify-header h3 {
    color: rgb(133, 132, 132);
    margin: 0px 0 0 12px;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 40px;
  }

  .header_notify-list {
    padding-left: 0;
  }
  .header_notify-item {
    display: flex;
  }
  .header_notify-item:hover {
    background-color: #f7f7f7;
  }
  .header_notify-link {
    display: flex;
    padding: 12px;
    width: 100%;
    background-color: rgba(238, 77, 45, 0.04);
  }
  .header_notify-img {
    width: 48px;
    object-fit: contain;
  }
  .header_notyfi-info {
    margin-left: 12px;
  }
  .header_notify-name {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    color: #bdbdbd;
    margin-bottom: 4px;
    line-height: 1.2rem;
  }

  .header_notify-description {
    display: block;
    color: #756f6e;
    font-size: 0.8rem;
  }
  .footer_notyfi {
    height: 36px;
    display: flex;
  }
  .footer_notyfi-btn {
    width: 100%;
    line-height: 36px;
    color: #bdbdbd;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
  }

  /* Authen-modal */
  .authen-form {
    width: 500px;
  }
  .authen-form__container {
    padding: 0 32px;
  }
  .authen-form__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
  }
  .authen-form__heading {
    margin: 0px;
    font-size: 2.2rem;
    font-weight: 500;
    color: #333;
  }

  .authen-form__switch-btn {
    font-size: 1.6rem;
    cursor: pointer;
    font-weight: 700;
    color: rgb(238, 77, 45);
  }
  .auth_form-input {
    width: 100%;
    height: 40px;
    font-size: 1.6rem;
    margin-bottom: 16px;
    text-indent: 12px;
    border: 1px solid #bdbdbd;
    outline: none;
    border-radius: 2px;
  }
  .auth_form-input:focus {
    border-color: #777;
  }
  .authen-form-aside {
    margin-top: 6px;
  }
  .authen-form__policy-text {
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: 400;
  }
  .authen-form__policy-link {
    color: red;
  }
  .authen-form__controls {
    margin-top: 100px;
    display: flex;
    justify-content: flex-end;
  }
  .authen-form__controls .btn:first-child:hover {
    background-color: rgba(202, 202, 202, 0.4);
  }
  .authen-form_socials {
    background-color: rgba(202, 202, 202, 0.4);
    width: 100%;
    margin-top: 20px;
    padding: 16px 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn.btn-with-icon-facebook,
  .btn.btn-with-icon-gg {
    width: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    padding: 20px 16px;
    border-radius: 2px;
  }
  .btn.btn-with-icon-facebook {
    background-color: rgb(57, 25, 240);
    color: #fff;
    margin-right: 5px;
  }
  .btn.btn-with-icon-gg {
    background-color: rgb(2, 219, 56);
    color: #fff;
  }
  .authen-form_socials-icon {
    font-size: 1.8rem;
    padding-right: 25px;
  }
  /* Header search */
  .header__container {
    display: flex;
    margin-top: 40px;
    align-items: center;
    height: 84px;
    position: relative;
  }
  .header__container-logo {
    width: 200px;
  }
  .header__container-logo-img {
    width: 160px;
  }
  .header__container-search {
    display: flex;
    flex-grow: 1;
    position: relative;
    border: none;
    align-items: center;
  }
  .header__container-wrap {
    flex: 1;
  }
  .header__container-wrap-search {
    display: flex;
  }
  .header__search-grap {
    flex: 3;
    position: relative;
    width: 100%;
  }
  .header__container-search-input {
    height: 35px;
    width: 90%;
    font-size: 1.2rem;
    font-weight: 300;
    text-indent: 10px;
    border-radius: 2px;
    outline: none;
    background-color: white;
    border-color: transparent;
  }
  .header__container-search-input:focus ~ .header__search-history {
    display: block;
  }
  .header__search-history {
    position: absolute;
    top: 110%;
    left: 0;
    width: calc(90% - 70px);
    background-color: #fff;
    box-shadow: 0 0 3px #666;
    border-radius: 3px;
    display: none;
  }
  .header__search-history-heading {
    margin: 0px;
    font-size: 1.2rem;
    color: rgb(153, 152, 152);
    font-weight: 300;
    padding: 10px 0px;
    padding-left: 10px;
  }
  .header__search-history-list {
    padding: 0px;
    margin: 0px;
  }
  .header__search-history-item {
    padding: 10px 0px;
  }
  .header__search-history-item a {
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: 300;
    color: black;
  }
  .header__search-history-item:hover {
    background-color: rgb(194, 192, 192);
  }
  .header__container-search-link {
    background-image: linear-gradient(0, #fe6433, #f53e2d);
    width: 50px;
    height: 30px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100px;
  }
  .header__container-search-icon-search {
    font-size: 1.2rem;
    color: #fff;
    padding-left: 18px;
  }

  .header__container-cart-link {
    position: absolute;
    top: 0;
    right: 0;
  }

  .header__container-cart {
    width: 150px;
    padding-left: 15px;
  }
  .header__container-cart-link {
    display: inline-block;
  }
  .header__container-search-icon-cart {
    margin-top: 8px;
    font-size: 1.4rem;
    color: #fff;
  }
  .header__cotainer-nav {
    margin-top: 10px;
    margin-left: -50px;
  }
  .header__container-nav-list {
    display: flex;
  }
  .header__container-nav-item {
    position: relative;
    padding: 10px 30px;
  }
  .header__container-nav-item:hover .header__nav-list {
    display: block;
  }
  .header__container-nav-list-link {
    font-size: 1.2rem;
    color: white;
  }
  .header__nav-list {
    position: absolute;
    display: none;
    top: 45px;
    left: 16px;
    width: 160px;
    background-color: white;
    padding: 0px;
    z-index: 99999;
  }
  .header__nav-item {
    overflow: hidden;
    font-size: 1rem;
    padding: 8px 10px;
    border-bottom: 1px solid rgb(151, 151, 151);
  }
  .header__nav-item:hover {
    background-color: red;
  }
</style>
