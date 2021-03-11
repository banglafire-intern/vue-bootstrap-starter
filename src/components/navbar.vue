<template>
  <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #d0f5ea;">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">{{title}}</a> -->
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->

      
      <div
        class="btn-group float-left p-3"
        role="group"
        aria-label="Basic example"
      >
        <button type="button" class="btn btn-outline-dark btn-sm rounded mx-3">
          Home
        </button>
        <button type="button" class="btn btn-outline-dark btn-sm rounded mx-3">
          Leave Management
        </button>
        <button type="button" class="btn btn-outline-dark btn-sm rounded mx-3">
          Attendance
        </button>
        <button type="button" class="btn btn-outline-dark btn-sm rounded mx-3">
          Chat
        </button>
      </div>

      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
</style>