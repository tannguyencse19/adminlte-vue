<template>
  <router-link to="/project" class="info-box p-0">
    <span class="info-box-icon bg-info flex-column">
      <i class="far fa-envelope"></i>
      <b class="text-sm">My Tasks</b>
    </span>
    <!-- /.info-box-icon -->
    <div class="info-box-content flex-row align-items-center">
      <span class="info-box-text text-green text-bold">Open</span>
      <span class="info-box-number m-0 ml-1">6</span>
    </div>
    <!-- /.info-box-content -->
    <div class="info-box-content flex-row align-items-center">
      <span class="info-box-text text-red text-bold">Closed</span>
      <span class="info-box-number m-0 ml-1">0</span>
    </div>
    <!-- /.info-box-content -->
  </router-link>
  <!-- /.info-box -->
</template>

<script>
export default {
  name: "Box",
};
</script>

<style>
</style>