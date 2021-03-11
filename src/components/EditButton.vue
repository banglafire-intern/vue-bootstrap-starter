<template>
  <div class="policy">
    <div v-if="toggle">
      <button v-on:click="handleSubmit">Save</button>
      <button v-on:click="toggle = !toggle">Cancel</button>
    </div>
    <div v-else>
      <button v-on:click="toggle = !toggle" class="button button2">Edit</button>
    </div>
    <!-- <Button @toggle="$emit('toggle')" text="Edit" color="#A8A7F9" /> -->
  </div>
</template>

<script>
export default {
    props: {
    text: String,
    color: String,
  },
  data() {
    return {
      toggle: false,
      title: "Bye",
    };
    

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
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  
}
</style>