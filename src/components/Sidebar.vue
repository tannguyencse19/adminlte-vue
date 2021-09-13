<template>
  <!-- Left Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="@/plugins/dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="@/plugins/dist/img/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <router-link to="/profile" class="d-block">Alexander Pierce</router-link>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar nav-child-indent flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Dashboard -->
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact-active-class="active">
              <i class="nav-icon fas fa-home"></i>
              <p>Dashboard</p>
            </router-link>
          </li>
          <!-- Feed -->
          <!-- <li class="nav-item">
              <a href="#feed" class="nav-link">
                <i class="nav-icon far fa-newspaper"></i>
                <p>Feed</p>
              </a>
            </li> -->
          <!-- Discuss -->
          <li class="nav-item">
            <router-link to="/inbox" class="nav-link" active-class="active">
              <i class="nav-icon far fa-comment-dots"></i>
              <p>Inbox</p>
            </router-link>
          </li>
          <!-- Calendar -->
          <li class="nav-item">
            <router-link to="/calendar" class="nav-link" active-class="active">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>Calendar</p>
            </router-link>
          </li>
          <!-- Projects -->
          <li class="nav-item">
            <router-link to="/project" class="nav-link" active-class="active">
              <i class="nav-icon fas fa-suitcase"></i>
              <p>Project Summary</p>
            </router-link>
          </li>
          <!-- WORK OVERVIEW treeview -->
          <!-- <li class="nav-item menu-open">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-chevron-circle-up"></i>
                <p>WORK OVERVIEW</p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="#tasks" class="nav-link">
                    <p>Tasks</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#issues" class="nav-link">
                    <p>Issues</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#milestones" class="nav-link">
                    <p>Milestones</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#timesheets" class="nav-link">
                    <p>Timesheets</p>
                  </a>
                </li>
              </ul>
            </li> -->
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  <!-- /.left-sidebar-container -->
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({}),
};
</script>

<style scoped>
</style>