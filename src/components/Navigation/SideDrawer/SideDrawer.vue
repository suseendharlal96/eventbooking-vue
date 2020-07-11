<template>
  <div>
    <Backdrop :show="open" @clicked="closed"></Backdrop>
    <div class="SideDrawer Open" onclick="closed">
      <div class="Logo">
        <Logo></Logo>
      </div>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  </div>
</template>
<script>
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../Backdrop/Backdrop";
import Logo from "../../Logo/Logo";
export default {
  props: ["open"],
  methods: {
    closed() {
      this.$emit("closed");
    }
  },
  components: {
    NavigationItems: NavigationItems,
    Backdrop: Backdrop,
    Logo: Logo
  }
};
</script>

<style >
.SideDrawer {
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: var(--primaryBg);
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
}

@media (min-width: 500px) {
  .SideDrawer {
    display: none;
  }
}

.Open {
  transform: translateX(0);
}

.Close {
  transform: translateX(-100%);
}
</style>
