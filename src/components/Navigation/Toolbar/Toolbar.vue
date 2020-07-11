<template>
  <div>
    <header class="Toolbar">
      <DrawerToggle @clicked="drawerToggleClicked"></DrawerToggle>
      <div class="Logo">
        <Logo></Logo>
      </div>
      <nav class="DesktopOnly">
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  </div>
</template>
<script>
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
export default {
  methods: {
    drawerToggleClicked() {
      this.$emit("drawerToggleClicked");
    }
  },
  components: {
    NavigationItems: NavigationItems,
    DrawerToggle: DrawerToggle,
    Logo: Logo
  }
};
</script>
<style >
.Toolbar {
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
}

.Toolbar nav {
  height: 100%;
}

.Logo {
  height: 80%;
}

@media (max-width: 499px) {
  .Toolbar .DesktopOnly {
    display: none;
  }
}
</style>
