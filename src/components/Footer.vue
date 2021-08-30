<template>
  <div class="footer">
    <div class="footer-top">
      <div class="list-dog container">
        <div class="item-dog" v-for="(itemDog, index) in listDog" :key="index">
          <a href="#" class="imgDog">
            <img :src="itemDog.url" alt />
          </a>
          <div class="title-dog">
            <h3 class="nameDog">{{ itemDog.name }}</h3>
            <img
              src="https://matpetfamily.com/wp-content/themes/haustiere/assets/css/images/icon/arrow.png"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-middle">
      <div class="row container">
        <div class="col contact">
          <h2>LIÊN LẠC</h2>
          <ul class="inforShop">
            <li class="address">
              <i class="far fa-map"></i>
              <p>
                <strong>Địa chỉ:&nbsp;</strong>
                Số 168 Thượng Đình - Thanh Xuân - Hà Nội
              </p>
            </li>
            <li class="address">
              <i class="far fa-map"></i>
              <p>
                <strong>Địa chỉ:&nbsp;</strong>
                294 -296 Đồng Đen - Quận Tân Bình - Hồ Chí Minh
              </p>
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <p>
                <strong>Điện thoại:&nbsp;</strong>
                0987654321
              </p>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <p>
                <strong>Email:&nbsp;</strong>
                mevnteam@gmail.com
              </p>
            </li>
          </ul>
        </div>
        <div class="col twitter">
          <h2>TWITTER</h2>
          <a href="https://twitter.com/ngTrnQuyn1">quyenutt2000</a>
        </div>
        <div class="col facebook">
          <h2>FACEBOOK</h2>
          <div>
            <div class="avatar-facebook">
              <img
                src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/67791882_1362442263903854_3726737766914981888_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=s5O8_A9CNSYAX8ffURh&_nc_ht=scontent.fhan5-4.fna&edm=ADwHzz8EAAAA&oh=6c6764f70ebb512f807dfbe635f85d8a&oe=6141F36D"
                alt
              />
            </div>
            <div class="page-facebook">
              <p>
                <a href="#">MEVN TEAM</a>
                <!-- <i class="fa fa-check-circle-o" aria-hidden="true"></i> -->
                <span class="icon-check"></span>
              </p>
              <div
                class="fb-like"
                data-href="https://developers.facebook.com/docs/plugins/"
                data-width
                data-layout="button_count"
                data-action="like"
                data-size="small"
                data-share="true"
              ></div>
            </div>
          </div>
        </div>
        <div class="col youtube">
          <h2>YOUTUBE</h2>
          <div>
            <div class="avatar-youtube">
              <a href="#">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLTE3UyiCfZljDEKh-3YKJ1_xIDn0bnz2DDU3L_U=s48-c-k-c0x00ffffff-no-rj"
                  alt
                />
              </a>
            </div>
            <div class="page-youtube">
              <a href="#">MEVNTEAM</a>
              <div
                class="g-ytsubscribe"
                data-channel="GoogleDevelopers"
                data-layout="default"
                data-count="default"
              ></div>
            </div>
          </div>
          <div>
            <!-- <iframe
              width="270"
              height="152"
              src="https://www.youtube.com/watch?v=9eu4acISYg0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>-->
            <iframe
              width="270"
              height="152"
              src="https://www.youtube.com/embed/9eu4acISYg0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col follow">
          <h2>FOLLOW</h2>
          <ul class="socials">
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom container">
      <div class="logo-footer">
        <img
          src="https://matpetfamily.com/wp-content/uploads/2019/11/m%E1%BA%ADt-pet-logo-300x297.png"
          alt
        />
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Chính sách</a>
          </li>
          <li>
            <a href="#">Tern &amp; Conditions</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Thông tin</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
        <p>@2019 - Design by: MEVN Team</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        listDog: [
          {
            id: 1,
            name: "Jack Russel",
            url: "https://matpetfamily.com/wp-content/uploads/2018/01/dog1.png",
          },
          {
            id: 2,
            name: "Parson Russel",
            url: "https://matpetfamily.com/wp-content/uploads/2018/01/dog2.png",
          },
          {
            id: 3,
            name: "Golden Retriever Gâu Đần",
            url: "https://matpetfamily.com/wp-content/uploads/2018/01/dog3.png",
          },
          {
            id: 4,
            name: "Yorkie",
            url: "https://matpetfamily.com/wp-content/uploads/2018/01/dog4.png",
          },
          {
            id: 5,
            name: "Bull Pháp",
            url: "https://matpetfamily.com/wp-content/uploads/2018/01/dog5.png",
          },
          {
            id: 6,
            name: "Bull Pháp",
            url: "https://matpetfamily.com/wp-content/uploads/2018/01/dog6.png",
          },
          {
            id: 7,
            name: "Beagle Chó săn thỏ",
            url: "https://matpetfamily.com/wp-content/uploads/2018/01/dog7.png",
          },
          {
            id: 8,
            name: "Pug Móm mũm mĩm",
            url: "https://matpetfamily.com/wp-content/uploads/2018/01/dog8.png",
          },
        ],
      };
    },
  };
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  ul {
    padding: 0;
  }
  i {
    color: blue;
  }
  li {
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
  h2 {
    font-family: coiny;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 18px;
  }
  .footer {
    font-family: Open Sans;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  /* -----------------------------------------------footer-top------------------------------------------ */
  .footer-top {
    /* background: red; */
    position: relative;
  }
  .footer-top::before {
    content: "";
    height: 3px;
    position: absolute;
    bottom: 32px;
    left: 0;
    right: 0;
    z-index: -1;
    background: blue;
  }
  .list-dog {
    display: flex;
    justify-content: space-around;
  }
  .item-dog {
    padding-top: 100px;
    position: relative;
  }
  .imgDog {
    width: 150px;
    height: 185px;
  }
  .title-dog {
    position: absolute;
    top: 0;
    right: 0;
    visibility: hidden;
    transform: rotate(240deg);
    transition: 0.5s ease-in;
    transition: 0.3s ease-out;
    opacity: 0;
  }
  .nameDog {
    display: block;
    font-size: 10px;
    max-width: 100%;
    font-weight: 400;
  }

  .title-dog > img {
    float: right;
  }
  .item-dog:hover .title-dog {
    visibility: visible;
    transform: rotate(360deg);
    opacity: 1;
  }
  .item-dog:hover .imgDog img {
    animation: shake 1.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-2px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  /* -----------------------------------------------footer-middle------------------------------------------ */
  .footer-middle {
    background: #fbfbfb;
    padding: 40px 0;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 36px 0;
  }
  .col {
    padding: 0 15px;
  }
  .contact li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px dashed rgba(0, 0, 255, 0.616);
    padding: 10px 0;
  }
  .contact strong {
    font-weight: 600;
    color: #555;
  }
  .contact li p {
    line-height: 24px;
    color: #555;
  }
  .contact li:last-child {
    border-bottom: 1px dashed rgba(0, 0, 255, 0.616);
  }
  .contact i {
    font-size: 20px;
    display: inline-block;
    /* margin: auto 0; */
    margin-right: 20px;
  }
  .twitter a {
    display: inline-block;
    font-weight: 200;
    color: #999;
  }
  .facebook > div {
    border: 1px solid rgb(224, 223, 223);
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    padding: 6px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgb(230, 227, 227);
  }
  .facebook .avatar-facebook {
    border: 1px solid #000000;
    width: 50px;
    height: 50px;
    margin-right: 6px;
  }
  .facebook img {
    object-fit: cover;
  }
  .facebook .page-facebook {
    display: block;
  }
  .page-facebook > div {
  }
  .page-facebook > p {
    display: block;
    margin: 0;
    position: relative;
  }
  .page-facebook > p > a {
    margin-right: 6px;
  }
  .page-facebook > p > a:hover {
    text-decoration: underline;
  }
  .icon-check {
    display: inline-block;
    width: 20px;
    height: 20px;
    object-fit: cover;
    background: url("https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/qGoWo6gBwwP.png");
    background-size: 20px;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
  }
  .youtube > div {
    display: flex;
    cursor: pointer;
  }
  .youtube .avatar-youtube {
    margin-right: 8px;
    width: 57px;
    height: 57px;
  }
  .avatar-youtube img {
    object-fit: cover;
    border-radius: 4px;
  }
  .youtube .page-youtube {
    margin-bottom: 34px;
  }
  /* .follow {
} */
  .socials {
    display: flex;
    justify-content: flex-start;
  }
  .socials li {
    margin-right: 8px;
  }
  .socials li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #000000;
    transform: translateY(0px);
    transition: all 0.3s ease-in;
    position: relative;
  }
  .socials li a::before {
    display: none;
    content: "";
    position: absolute;
    left: 2px;
    bottom: -14px;
    width: 80%;
    height: 1px;
    border-radius: 10px;
    background: black;
    border-radius: 50%;
    filter: blur(4px);
  }
  .socials li a:hover {
    background: blue;
    transform: translateY(-6px);
    /* box-shadow: 0 14px 2px 0px black;
  border-radius: 50%; */
  }
  .socials li a:hover::before {
    display: block;
  }
  .socials li a:hover i {
    color: #fff;
  }
  /* -----------------------------------------------footer-bottom-------------------------------------------- */
  .footer-bottom {
    display: flex;
    align-items: center;
    padding: 24px 0;
  }
  .logo-footer {
    display: inline-block;
    width: 70px;
    height: 70px;
  }
  .footer-bottom > div:nth-child(2) {
    display: inline-block;
    border-left: 1px solid blue;
    padding-left: 40px;
  }
  .footer-bottom > div:nth-child(2) ul li {
    display: inline-block;
  }
  .footer-bottom > div:nth-child(2) a {
    color: #000000;
    padding: 0 12px;
    transition: all 0.2s ease-in-out;
  }
  .footer-bottom > div:nth-child(2) a:first-child {
    padding-left: 0;
  }
  .footer-bottom > div:nth-child(2) a:hover {
    color: #0000006b;
  }
  .footer-bottom > div:nth-child(2) p {
    display: block;
    margin: 0;
  }
</style>
