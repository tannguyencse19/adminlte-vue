<template>
  <v-app>
    <body class="login-page" style="background-color: #2d3a4b; position: relative">
      <v-alert
        type="error"
        v-model="wrong"
        class="alert-wrong-pass"
        :class="{ transition: wrong }"
        transition="slide-x-reverse-transition"
        dismissible
      >
        Wrong Password
      </v-alert>
      <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary">
          <div class="card-header text-center">
            <router-link to="/" class="h1">
              <b>Admin</b>
              <span>LTE</span>
            </router-link>
          </div>
          <div class="card-body">
            <p class="login-box-msg">Sign in to start your session</p>

            <form action="../../index3.html" method="post">
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" v-model="user.name" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="user.password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember Me</label>
                  </div>
                </div>
                <!-- /.col -->
                <div class="col-4">
                  <!-- <button type="submit" class="btn btn-primary btn-block">Sign In</button> -->
                  <v-btn
                    color="blue"
                    dark
                    style="box-sizing: content-box"
                    @click="handleSignin"
                    @keyup.enter="handleSignin"
                  >
                    Sign In
                  </v-btn>
                </div>
                <!-- /.col -->
              </div>
            </form>

            <h6>Username: admin, Password: admin</h6>

            <div class="social-auth-links text-center mt-2 mb-3">
              <a href="#" class="btn btn-block btn-dark">
                <i class="fab fa-github mr-2"></i>
                Sign in using Github
              </a>
              <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i>
                Sign in using Facebook
              </a>
              <a href="#" class="btn btn-block btn-danger">
                <i class="fab fa-google-plus mr-2"></i>
                Sign in using Google+
              </a>
            </div>
            <!-- /.social-auth-links -->

            <p class="mb-1">
              <router-link to="/forgot-password" exact-path>I forgot my password</router-link>
            </p>
            <p class="mb-0">
              <router-link to="/register" class="text-center">
                Register a new membership
              </router-link>
            </p>

            <v-overlay :value="overlay">
              <v-progress-circular indeterminate size="96"></v-progress-circular>
            </v-overlay>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.login-box -->
    </body>
  </v-app>
</template>
<script>
export default {
  name: "Login",
  data: () => ({
    overlay: false,
    user: {
      name: "",
      password: "",
    },
    wrong: false,
    // pushAlert: 0,
  }),

  mounted() {
    // const vue = this;
    window.addEventListener("keyup", (event) => {
      if (event.key === 'Enter') {
        this.handleSignin();
      }
    });
  },

  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          if (this.user.name === "admin" && this.user.password === "admin") {
            window.localStorage.setItem("user", JSON.stringify(this.user));
            this.$router.push({ name: "Dashboard" });
          } else {
            this.wrong = true;
          }
          this.overlay = false;
        }, 2000);
    },
    wrong(val) {
      val &&
        setTimeout(() => {
          this.wrong = false;
        }, 3000);
    },
  },

  methods: {
    handleSignin() {
      this.overlay = !this.overlay;
    },
  },
};
</script>

<style scoped>
.alert-wrong-pass {
  position: absolute;
  right: 0px;
  top: 10px;
}

/* Viet vay moi chiu transition */
.alert-wrong-pass.transition {
  margin-right: 30px;
}
</style>
