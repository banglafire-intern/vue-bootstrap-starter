<template>
    <div class="row">
  <div class="col-8">
<UserName />
<div class=".d-inline-flex ">
<div class="d-flex justify-content-start ">
   Dummy Text 1
   </div>
</div>
<div class=".d-inline-flex">
<div class="d-flex justify-content-end">Dummy text 2</div>
</div>
</div>


  

  <div class="col-4">
    <div class="d-flex flex-column p-3">
      <div class="d-flex justify-content-center p-3">
      <h5>Active User</h5>
    </div>
<ActiveUser username="fuad"/>
<ActiveUser username="tanjim"/>
<ActiveUser username="rotno"/>
</div>
  </div>
</div>
</template>
<script>
import ActiveUser from "./ActiveUser";
import UserName from "./UserName";
export default {
  components: {
    ActiveUser,
    UserName,
  },
};
</script>
<style scoped>
.chat {
  background-color: blueviolet;
}
</style>