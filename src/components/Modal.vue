<template>
  <div class="text-center modal-quickview">
    <v-dialog v-model="open" scrollable width="80%">
      <v-card>
        <v-card-title>
          <a @click.prevent="open = false" href="#" class="btn btn-close-modal"></a>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="px-4 py-2">
              <v-col cols="12" md="5" style="position: relative">
                <div class="product-label">new</div>
                <div
                  ref="gallery"
                  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
                  class="swiper-container gallery"
                >
                  <div class="swiper-wrapper">
                    <div v-for="(image, index) in images" :key="index" class="swiper-slide">
                      <inner-image-zoom
                        :src="image"
                        :zoomSrc="image"
                        :alt="image"
                        :hideHint="true"
                        className="gallery-border"
                      />
                    </div>
                  </div>
                </div>
                <div ref="thumbs" thumbsSlider="" class="swiper-container thumnails">
                  <div class="swiper-wrapper">
                    <div v-for="(image, index) in images" :key="index" class="swiper-slide">
                      <img :src="image" class="pointer gallery-border" />
                    </div>
                  </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
                <div class="single-list-social mt-4">
                  <ul class="d-flex align-center justify-center pa-0">
                    <li class="envelope">
                      <a target="_blank" title="" href="#">
                        <span class="share-icon envelope-social">
                          <i class="fas fa-envelope"></i>
                          <span class="number">0</span>
                        </span>
                      </a>
                    </li>
                    <li class="facebook">
                      <a target="_blank" title="" href="#">
                        <span class="share-icon facebook-social">
                          <i class="fab fa-facebook-f"></i>
                          <span class="number">0</span>
                        </span>
                      </a>
                    </li>
                    <li class="twitter">
                      <a target="_blank" title="" href="#">
                        <span class="share-icon twitter-social">
                          <i class="fab fa-twitter"></i>
                          <span class="number">0</span>
                        </span>
                      </a>
                    </li>
                    <li class="pinterest">
                      <a target="_blank" title="" href="#">
                        <span class="share-icon pinterest-social">
                          <i class="fab fa-pinterest-p"></i>
                          <span class="number">0</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </v-col>
              <v-col cols="12" md="7">
                <div class="product">
                  <h1 class="product-name mb-5">MÈO TAI CỤP</h1>
                  <div class="product-price mb-4">20.000.000₫</div>
                  <div class="product-action mb-8">
                    <span>Số lượng:</span>
                    <div class="product-quantity">
                      <input type="number" value="1" />
                      <div class="product-adjust-number">
                        <a href="#" class="btn btn-increase">
                          <i class="fas fa-angle-up"></i>
                        </a>
                        <a href="#" class="btn btn-decrease">
                          <i class="fas fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                    <button class="btn btn-cart">Mua hàng</button>
                  </div>
                  <div class="product-info">
                    <span>Mã đơn hàng:</span>
                    <a href="#" class="tag">SP00095</a>
                    <a href="#" class="tag">SP00095</a>
                  </div>
                  <div class="product-info">
                    <span>Mã đơn hàng:</span>
                    <a href="#" class="tag">SP00095</a>
                    <a href="#" class="tag">SP00095</a>
                  </div>
                  <div class="product-info">
                    <span>Mã đơn hàng:</span>
                    <a href="#" class="tag">SP00095</a>
                    <a href="#" class="tag">SP00095</a>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { wait } from "@/helpers/";
  import Swiper from "swiper";
  import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper/core";
  import InnerImageZoom from "vue-inner-image-zoom";
  import "swiper/swiper-bundle.css";
  import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";

  SwiperCore.use([Navigation, Pagination, Thumbs]);

  export default {
    components: { InnerImageZoom },

    data() {
      return {
        open: false,
        swiper: null,
        images: [
          "https://swiperjs.com/demos/images/nature-1.jpg",
          "https://swiperjs.com/demos/images/nature-2.jpg",
          "https://swiperjs.com/demos/images/nature-3.jpg",
          "https://swiperjs.com/demos/images/nature-4.jpg",
          "https://swiperjs.com/demos/images/nature-5.jpg",
          "https://swiperjs.com/demos/images/nature-6.jpg",
          "https://swiperjs.com/demos/images/nature-7.jpg",
          "https://swiperjs.com/demos/images/nature-8.jpg",
          "https://swiperjs.com/demos/images/nature-9.jpg",
          "https://swiperjs.com/demos/images/nature-10.jpg",
        ],
      };
    },

    mounted() {
      this.$root.$on("show-modal:quickview", () => (this.open = true));
    },

    updated() {
      if (this.open && !this.swiper) {
        // wait DOM ready
        wait().then(() => {
          var swiper = new Swiper(this.$refs.thumbs, {
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
          });
          new Swiper(this.$refs.gallery, {
            spaceBetween: 10,
            thumbs: {
              swiper: swiper,
            },
          });
        });
      }
    },
  };
</script>

<style scoped>
  img {
    width: 100%;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .product {
    --tw-ring-offset-shadow: 0 0 transparent;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --tw-ring-shadow: 0 0 transparent;
    color: #444;
  }
  .product .product-price {
    font-size: 18px;
    font-weight: 700;
    color: var(--app-color);
  }
  .product .product-action {
    display: flex;
    align-items: center;
  }
  .product .product-action > span {
    width: 100px;
    font-weight: 700;
    font-size: 14px;
  }
  .product .product-action .btn-cart {
    background-color: var(--app-color);
    margin-left: 10px;
    flex-grow: 1;
    -wbkit-flex-grow: 1;
    text-align: center;
    position: relative;
    border-radius: 10px;
    vertical-align: middle;
    border: none;
    height: 40px;
    color: #fff;
    line-height: 40px;
    /* border-radius: 4px; */
    display: inline-block;
    padding: 0 20px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    position: relative;
    border-radius: 10px;
    max-width: 150px;
  }
  .product .product-action .btn-cart::before {
    position: absolute;
    content: "";
    border: 1px dashed #fff;
    top: 3px;
    left: 3px;
    bottom: 3px;
    right: 3px;
    border-radius: 10px;
  }
  .product .product-action .btn-cart::after {
    font-family: "Font Awesome 5 Free";
    content: "\f054";
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    margin-left: 10px;
  }
  .product .product-action .product-quantity {
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
  }
  .product .product-action .product-quantity > input[type="number"] {
    /* height: 38px; */
    outline: none;
    padding: 0 15px;
    max-width: 60px;
    padding-right: 0;
  }
  .product .product-action .product-quantity > .product-adjust-number {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #e5e5e5;
    font-size: 13px;
  }
  .product .product-action .product-quantity > .product-adjust-number > .btn {
    text-decoration: none;
    padding: 0 0.5rem;
    color: #555;
    text-align: center;
    line-height: 1.5;
  }
  .product .product-action .product-quantity > .product-adjust-number > .btn:hover {
    color: var(--app-color);
  }
  .product .product-info {
    margin: 1rem 0;
  }
  .product .product-info > span {
    width: 100px;
    display: inline-block;
  }
  .product .product-info > .tag {
    border: 1px solid #e5e5e5;
    padding: 0.25rem 0.75rem;
    margin: 0 0.5rem 0 0;
    text-decoration: none;
    color: #555;
    border-radius: 4px;
  }
  .product .product-info > .tag:hover {
    color: var(--app-color);
  }
  .btn-close-modal {
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    cursor: pointer;
    z-index: 8040;
    background-image: url(../assets/fancybox_sprite.png);
  }
  .swiper-slide-thumb-active > img {
    border: 1px solid #f9fafb;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
  }
  .swiper-button-next:after,
  .swiper-container-rtl .swiper-button-prev:after,
  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    font-size: 14px;
    font-weight: 600;
  }
  .product-label {
    --dimension: 40px;
    position: absolute;
    z-index: 2;
    right: 0;
    transform: translate(-25px, 10px);
    background: #9cc914;
    height: var(--dimension);
    width: var(--dimension);
    border-radius: 50%;
    border: 2px dashed #fff;
    color: #fff;
    line-height: calc(var(--dimension) - 5px);
    text-align: center;
  }
  .single-list-social > ul > li {
    list-style-type: none;
    width: 50px;
    height: 30px;
    padding: 5px 10px;
    background: coral;
    border-radius: 25px;
    margin: 0 5px;
    text-align: center;
  }
  .single-list-social > ul > li.envelope {
    background: #484745;
  }
  .single-list-social > ul > li.facebook {
    background: #2d5f9a;
  }
  .single-list-social > ul > li.twitter {
    background: #58c7ff;
  }
  .single-list-social > ul > li.pinterest {
    background: #ed2024;
  }
  .single-list-social > ul li a {
    color: #fff;
  }
  .single-list-social > ul li i {
    margin-right: 5px;
  }
  .single-list-social > ul li a {
    text-decoration: none;
  }
  .gallery-border {
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
    border-radius: 0.25rem;
  }
</style>
