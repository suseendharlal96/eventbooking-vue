<template>
  <div v-if="show" @click="closed" class="Backdrop"></div>
</template>
<script>
export default {
  props: ["show"],
  methods: {
    closed() {
      this.$emit("clicked");
    }
  }
};
</script>
<style >
.Backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

// import React from "react";

// import classes from "./Backdrop.module.css";

// const backdrop = (props) =>
//   props.show ? (
//     <div className={classes.Backdrop} onClick={props.click}></div>
//   ) : null;

// export default backdrop;
