<template>
  <div :style="{marginTop:'55px'}">
    <Toolbar @drawerToggleClicked="sidebarToggleHandler"></Toolbar>
    <SideDrawer :open="showSideDrawer" @closed="sideDrawerClosedHandler"></SideDrawer>
  </div>
</template>
<script>
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
export default {
  data() {
    return {
      showSideDrawer: false
    };
  },
  methods: {
    sideDrawerClosedHandler() {
      this.showSideDrawer = false;
    },

    sidebarToggleHandler() {
      this.showSideDrawer = !this.showSideDrawer;
    }
  },
  components: {
    Toolbar: Toolbar,
    SideDrawer: SideDrawer
  }
};
</script>
<style >
</style>
