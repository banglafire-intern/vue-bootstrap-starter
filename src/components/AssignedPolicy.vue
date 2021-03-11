<template>
  <!-- <div class="d-flex justify-content-between">
     <p> Hello </p>
     <p>World</p>
    </div> -->
  <div class="container p-3">
    <div class="row justify-content-lg-center">
      <div class="col col-xs-1">Username</div>
      <div class="col-xxl-auto">
        <div v-if="toggle">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Policies
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">1st year</a>
              <a class="dropdown-item" href="#">2nd year</a>
              <a class="dropdown-item" href="#">Junior Developer</a>
              <a class="dropdown-item" href="#">Senior Developer</a>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Policy</p>
        </div>
      </div>

      <div class="col col-xs-1">
        <div v-if="toggle">
        <button v-on:click="handleSubmit" type="button" class="btn btn-outline-dark btn-sm rounded mx-3">
          Save
        </button>
        <button v-on:click="toggle=!toggle" type="button" class="btn btn-outline-dark btn-sm rounded mx-3">
          Cancel
        </button>

        </div>
        <div v-else>
<button v-on:click="toggle=!toggle" type="button" class="btn btn-outline-dark btn-sm rounded mx-3">
          Edit
        </button>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "AssignedPolicy",
  props: {},
  data() {
    return {
      toggle: false,
    };
  },
  components: {},
  mounted() {
    const button = document.querySelector("#drop");
    // const tooltip = document.querySelector('#tooltip');
    createPopper(button);
  },

methods: {
    toggleAdd() {
      this.showAdd = !this.showAdd;
    },

    handleSubmit: function () {
      // console.log(this.$refs.item.value)
      this.toggle = !this.toggle;
      this.title = this.$refs.item.value;
    },
  },
  }


</script>
<style scoped>
</style>