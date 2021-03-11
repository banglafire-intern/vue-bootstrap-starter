<template>
  <div id="app">
    <navbar title="BanglaFire" />
    <!-- <button class="btn btn-secondary">Welcome</button>
    <button class="btn btn-danger">Vue.js</button> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <div class="d-flex justify-content-center mt-5">
    <h2>Assigned Policy</h2>
  </div>
    <AssignedPolicy />
  <div class="d-flex justify-content-center mt-5">
    <h2>Leave Request</h2>
  </div>
    <LeaveRequest />
    <Requests /> -->
    <div class="d-flex justify-content-center p-3">
      <h2>Chat</h2>
    </div>
    <Chat/>
    
 </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import navbar from "./components/navbar.vue";
import Chat from "./Chatfolder/Chat"
// import AssignedPolicy from "./components/AssignedPolicy.vue";
// import LeaveRequest from "./components/LeaveRequest";
// import Requests from "./components/Requests.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    navbar,
    // AssignedPolicy,
    // LeaveRequest,
    // Requests,
    Chat
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
