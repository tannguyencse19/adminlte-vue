<template>
  <div class="wrapper">
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Profile</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">User Profile</li>
              </ol>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <!-- Profile Image -->
              <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                  <div class="text-center">
                    <img
                      class="profile-user-img img-fluid img-circle"
                      src="@/plugins/dist/img/user4-128x128.jpg"
                      alt="User profile picture"
                    />
                  </div>

                  <h3 class="profile-username text-center">{{userName}}</h3>

                  <p class="text-muted text-center">{{title}}</p>

                  <ul class="list-group list-group-unbordered mb-3">
                    <li class="list-group-item">
                      <b>Email</b>
                      <a class="float-right">{{email}}</a>
                    </li>
                    <li class="list-group-item">
                      <b>Phone</b>
                      <a class="float-right">{{phone}}</a>
                    </li>
                    <li class="list-group-item">
                      <b>Address</b>
                      <a class="float-right">{{address}}</a>
                    </li>
                  </ul>

                  <button class="btn btn-primary btn-block" @click="tabActive = 2"><b>Edit</b></button>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.col -->
            <div class="col-md-9">
              <div class="card">
                <div class="card-header p-2">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        @click="tabActive = 0"
                        :class="{ active: tabActive === 0 }"
                      >
                        Activity
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        @click="tabActive = 1"
                        :class="{ active: tabActive === 1 }"
                      >
                        Timeline
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        @click="tabActive = 2"
                        :class="{ active: tabActive === 2 }"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane" :class="{ active: tabActive === 0 }">
                      <!-- Post -->
                      <div class="post">
                        <div class="user-block">
                          <img
                            class="img-circle img-bordered-sm"
                            src="@/plugins/dist/img/user1-128x128.jpg"
                            alt="user image"
                          />
                          <span class="username">
                            <a href="#">Jonathan Burke Jr.</a>
                            <a href="#" class="float-right btn-tool">
                              <i class="fas fa-times"></i>
                            </a>
                          </span>
                          <span class="description">Shared publicly - 7:30 PM today</span>
                        </div>
                        <!-- /.user-block -->
                        <p>
                          Lorem ipsum represents a long-held tradition for designers, typographers
                          and the like. Some people hate it and argue for its demise, but others
                          ignore the hate as they create awesome tools to help create filler text
                          for everyone from bacon lovers to Charlie Sheen fans.
                        </p>

                        <p>
                          <a href="#" class="link-black text-sm mr-2">
                            <i class="fas fa-share mr-1"></i>
                            Share
                          </a>
                          <a href="#" class="link-black text-sm">
                            <i class="far fa-thumbs-up mr-1"></i>
                            Like
                          </a>
                          <span class="float-right">
                            <a href="#" class="link-black text-sm">
                              <i class="far fa-comments mr-1"></i>
                              Comments (5)
                            </a>
                          </span>
                        </p>

                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Type a comment"
                        />
                      </div>
                      <!-- /.post -->

                      <!-- Post -->
                      <div class="post clearfix">
                        <div class="user-block">
                          <img
                            class="img-circle img-bordered-sm"
                            src="@/plugins/dist/img/user7-128x128.jpg"
                            alt="User Image"
                          />
                          <span class="username">
                            <a href="#">Sarah Ross</a>
                            <a href="#" class="float-right btn-tool">
                              <i class="fas fa-times"></i>
                            </a>
                          </span>
                          <span class="description">Sent you a message - 3 days ago</span>
                        </div>
                        <!-- /.user-block -->
                        <p>
                          Lorem ipsum represents a long-held tradition for designers, typographers
                          and the like. Some people hate it and argue for its demise, but others
                          ignore the hate as they create awesome tools to help create filler text
                          for everyone from bacon lovers to Charlie Sheen fans.
                        </p>

                        <form class="form-horizontal">
                          <div class="input-group input-group-sm mb-0">
                            <input class="form-control form-control-sm" placeholder="Response" />
                            <div class="input-group-append">
                              <button type="submit" class="btn btn-danger">Send</button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <!-- /.post -->

                      <!-- Post -->
                      <div class="post">
                        <div class="user-block">
                          <img
                            class="img-circle img-bordered-sm"
                            src="@/plugins/dist/img/user6-128x128.jpg"
                            alt="User Image"
                          />
                          <span class="username">
                            <a href="#">Adam Jones</a>
                            <a href="#" class="float-right btn-tool">
                              <i class="fas fa-times"></i>
                            </a>
                          </span>
                          <span class="description">Posted 5 photos - 5 days ago</span>
                        </div>
                        <!-- /.user-block -->
                        <div class="row mb-3">
                          <div class="col-sm-6">
                            <img
                              class="img-fluid"
                              src="@/plugins/dist/img/photo1.png"
                              alt="Photo"
                            />
                          </div>
                          <!-- /.col -->
                          <div class="col-sm-6">
                            <div class="row">
                              <div class="col-sm-6">
                                <img
                                  class="img-fluid mb-3"
                                  src="@/plugins/dist/img/photo2.png"
                                  alt="Photo"
                                />
                                <img
                                  class="img-fluid"
                                  src="@/plugins/dist/img/photo3.jpg"
                                  alt="Photo"
                                />
                              </div>
                              <!-- /.col -->
                              <div class="col-sm-6">
                                <img
                                  class="img-fluid mb-3"
                                  src="@/plugins/dist/img/photo4.jpg"
                                  alt="Photo"
                                />
                                <img
                                  class="img-fluid"
                                  src="@/plugins/dist/img/photo1.png"
                                  alt="Photo"
                                />
                              </div>
                              <!-- /.col -->
                            </div>
                            <!-- /.row -->
                          </div>
                          <!-- /.col -->
                        </div>
                        <!-- /.row -->

                        <p>
                          <a href="#" class="link-black text-sm mr-2">
                            <i class="fas fa-share mr-1"></i>
                            Share
                          </a>
                          <a href="#" class="link-black text-sm">
                            <i class="far fa-thumbs-up mr-1"></i>
                            Like
                          </a>
                          <span class="float-right">
                            <a href="#" class="link-black text-sm">
                              <i class="far fa-comments mr-1"></i>
                              Comments (5)
                            </a>
                          </span>
                        </p>

                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Type a comment"
                        />
                      </div>
                      <!-- /.post -->
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" :class="{ active: tabActive === 1 }">
                      <!-- The timeline -->
                      <div class="timeline timeline-inverse">
                        <!-- timeline time label -->
                        <div class="time-label">
                          <span class="bg-danger">10 Feb. 2014</span>
                        </div>
                        <!-- /.timeline-label -->
                        <!-- timeline item -->
                        <div>
                          <i class="fas fa-envelope bg-primary"></i>

                          <div class="timeline-item">
                            <span class="time">
                              <i class="far fa-clock"></i>
                              12:05
                            </span>

                            <h3 class="timeline-header">
                              <a href="#">Support Team</a>
                              sent you an email
                            </h3>

                            <div class="timeline-body">
                              Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly
                              ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers
                              sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli
                              hulu weebly balihoo...
                            </div>
                            <div class="timeline-footer">
                              <a href="#" class="btn btn-primary btn-sm">Read more</a>
                              <a href="#" class="btn btn-danger btn-sm">Delete</a>
                            </div>
                          </div>
                        </div>
                        <!-- END timeline item -->
                        <!-- timeline item -->
                        <div>
                          <i class="fas fa-user bg-info"></i>

                          <div class="timeline-item">
                            <span class="time">
                              <i class="far fa-clock"></i>
                              5 mins ago
                            </span>

                            <h3 class="timeline-header border-0">
                              <a href="#">Sarah Young</a>
                              accepted your friend request
                            </h3>
                          </div>
                        </div>
                        <!-- END timeline item -->
                        <!-- timeline item -->
                        <div>
                          <i class="fas fa-comments bg-warning"></i>

                          <div class="timeline-item">
                            <span class="time">
                              <i class="far fa-clock"></i>
                              27 mins ago
                            </span>

                            <h3 class="timeline-header">
                              <a href="#">Jay White</a>
                              commented on your post
                            </h3>

                            <div class="timeline-body">
                              Take me to your leader! Switzerland is small and neutral! We are more
                              like Germany, ambitious and misunderstood!
                            </div>
                            <div class="timeline-footer">
                              <a href="#" class="btn btn-warning btn-flat btn-sm">View comment</a>
                            </div>
                          </div>
                        </div>
                        <!-- END timeline item -->
                        <!-- timeline time label -->
                        <div class="time-label">
                          <span class="bg-success">3 Jan. 2014</span>
                        </div>
                        <!-- /.timeline-label -->
                        <!-- timeline item -->
                        <div>
                          <i class="fas fa-camera bg-purple"></i>

                          <div class="timeline-item">
                            <span class="time">
                              <i class="far fa-clock"></i>
                              2 days ago
                            </span>

                            <h3 class="timeline-header">
                              <a href="#">Mina Lee</a>
                              uploaded new photos
                            </h3>

                            <div class="timeline-body">
                              <img src="https://placehold.it/150x100" alt="..." />
                              <img src="https://placehold.it/150x100" alt="..." />
                              <img src="https://placehold.it/150x100" alt="..." />
                              <img src="https://placehold.it/150x100" alt="..." />
                            </div>
                          </div>
                        </div>
                        <!-- END timeline item -->
                        <div>
                          <i class="far fa-clock bg-gray"></i>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" :class="{ active: tabActive === 2 }">
                      <form class="form-horizontal">
                        <div class="form-group row">
                          <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputName"
                              placeholder="Name"
                              :value="userName"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputTitle" class="col-sm-2 col-form-label">Title</label>
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputTitle"
                              placeholder="Title"
                              :value="title"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                          <div class="col-sm-10">
                            <input
                              type="email"
                              class="form-control"
                              id="inputEmail"
                              placeholder="Email"
                              :value="email"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputPhone"
                              placeholder="Phone"
                              :value="phone"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputAddress"
                              placeholder="Address"
                              :value="address"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="offset-sm-2 col-sm-10">
                            <div class="checkbox">
                              <label>
                                <input type="checkbox" />
                                I agree to the
                                <a href="#">terms and conditions</a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="offset-sm-2 col-sm-10">
                            <input type="submit" class="btn btn-danger" value="Save Changes" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <!-- /.tab-pane -->
                  </div>
                  <!-- /.tab-content -->
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
  </div>
  <!-- ./wrapper -->
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    tabActive: 0,
    // form data default
    userName: "Nina Mcintire",
    title: "Software Engineer",
    email: "fip@jukmuh.al",
    phone: "(239) 816-9029",
    address: "Bay Area, San Francisco, CA",
  }),
};
</script>

<style scoped>
</style>