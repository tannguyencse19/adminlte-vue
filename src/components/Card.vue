<template>
  <div class="product">
    <div>
      <div class="product-thumb">
        <a href="#" class="product-thumb-link">
          <img
            src="https://matpetfamily.com/wp-content/uploads/2021/08/C9337040-7567-4A71-A7B1-9253A9B97B49-270x270.jpeg"
            alt=""
          />
        </a>

        <div class="product-thumb-label">
          <span>New</span>
        </div>

        <div class="product-thumb-extra text-center">
          <ul class="product-thumb-extra-list">
            <li>
              <a href="#" class="add_to_wishlist">
                <ion-icon class="icon" name="heart-outline"></ion-icon>
                <span>Yêu thích</span>
              </a>
            </li>
            <li>
              <a href="#" class="product-quick-view">
                <ion-icon class="icon" name="search-outline"></ion-icon>
                <span>Xem nhanh</span>
              </a>
            </li>
          </ul>
          <a href="#" class="add-to-cart-btn">
            <span>Mua hàng</span>
            <ion-icon class="icon" name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
      </div>

      <div class="product-info">
        <div class="product-info-header">
          <div class="product-infor-id">ID:SP00122</div>
          <div class="product-rate"></div>
        </div>
        <h3 class="product-title">
          <a href="#">Sam ú</a>
        </h3>
        <span class="product-price">
          13.000.000
          <span>₫</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  a,
  span,
  img {
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  .product {
    width: 25%;
    height: auto;
    padding: 0 15px;
    margin-bottom: 20px;

    > div {
      border: 1px solid #ddd;
      padding-bottom: 20px;
    }
  }

  .product-thumb {
    position: relative;
  }

  .product-thumb-link img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 0.3s all;
    // border: 10px solid #ddd;
  }

  .product-thumb-link {
    overflow: hidden;
    position: relative;

    &::before {
      background: rgba(255, 255, 255, 0.7);
      z-index: 1;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      content: "";
      transition: all 0.3s ease-out 0s;
    }
  }

  .product-thumb-label {
    width: 45px;
    height: 45px;
    background-color: #9cc914;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    color: white;
    font-size: 13px;
    display: flex;
    transition: 0.3s all;

    span {
      display: block;
      margin: auto;

      &::before {
        position: absolute;
        top: 3px;
        left: 3px;
        bottom: 3px;
        right: 3px;
        content: "";
        border: 1px dashed #fff;
        border-radius: 50%;
      }
    }
  }

  .product-thumb-extra {
    position: absolute;
    height: 100px;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
    z-index: 12;
    transition: all 0.3s ease-out 0s;
    -webkit-transition: all 0.3s ease-out 0s;
    visibility: hidden;

    .product-thumb-extra-list {
      margin-bottom: 20px;

      li {
        display: inline-block;

        a {
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: #fff;
          border-radius: 50%;
          position: relative;
          margin: 0 7px;

          opacity: 0;
          visibility: hidden;
          transform: scale(0);
          transition: all 0.25s;

          &::before {
            position: absolute;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            border: 1px solid #ca76aa;
            content: "";
            top: 0;
            left: 0;
          }

          .icon {
            color: rgba(202, 118, 170, 0.9);
            position: relative;
            top: 4px;
            font-size: 20px;
            line-height: 38px;
            margin: 0;
          }

          span {
            background: rgba(202, 118, 170, 0.9);
            position: absolute;
            font-size: 13px;
            margin: auto;
            bottom: 100%;
            color: #fff;
            padding: 5px;
            line-height: 12px;
            border-radius: 10px;
            min-width: 74px;
            left: 50%;
            margin-left: -36px;
            margin-bottom: 8px;
            transition: all 0.3s ease-out 0s;
            -webkit-transition: all 0.3s ease-out 0s;
            opacity: 0;
            padding: 4px 20px;
            transition: all 0.25s;

            &::before {
              position: absolute;
              content: "";
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              border: 7px solid transparent;
              border-top: 7px solid #ca76aa;
            }
          }

          &:hover {
            transition: all 0.25s;
            background-color: #ca76aa;
            .icon {
              color: white;
            }

            span {
              opacity: 1;
            }
          }
        }
      }
    }

    .add-to-cart-btn {
      background-color: #de8ebe;

      display: inline-block;
      // height: 40px;
      padding: 10px 20px;
      text-align: center;
      border-radius: 10px;
      color: white;
      position: relative;

      opacity: 0;
      visibility: hidden;
      transform: scale(0);
      transition: all 0.25s;

      &::before {
        position: absolute;
        top: 3px;
        left: 3px;
        bottom: 3px;
        right: 3px;
        border: 1px dashed rgba(255, 255, 255, 0.5);
        content: "";
        border-radius: 10px;
      }

      span {
        float: left;
      }
      .icon {
        position: relative;
        top: 3px;
        margin-left: 5px;
      }
    }
  }

  /* HOVER */
  .product-thumb:hover {
    .product-thumb-link::before {
      opacity: 1;
    }

    .product-thumb-link img {
      transform: scale(1.2);
    }

    .product-thumb-label {
      transform: rotate(180deg) scale(0);
    }

    .product-thumb-extra .product-thumb-extra-list a {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    .product-thumb-extra .add-to-cart-btn {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

  // INFOR
  .product-info {
    padding: 0 10px;
    padding-top: 14px;

    .product-info-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .product-infor-id {
        font-size: 12.5px;
        font-weight: 700;
        color: #de8ebe;
      }

      .product-rate {
        background-image: url(https://matpetfamily.com/wp-content/themes/haustiere/assets/css/images/icon/rate-star.png);
        background-position: 0 -13px;
        background-repeat: repeat-x;
        height: 13px;
        transition: all 0.3s ease-out 0s;
        -webkit-transition: all 0.3s ease-out 0s;
        width: 85px;
      }
    }

    .product-title {
      margin: 6px 0 10px;
      a {
        color: #333;
        transition: all 0.3s;
        font-family: "Coiny", cursive !important;
        font-weight: 700;

        &:hover {
          color: #de8ebe;
        }
      }
    }

    .product-price {
      font-weight: 700;
      font-size: 18px;
      display: inline-block;
      color: #de8ebe;
      display: flex;
    }
  }
</style>
