<template>
  <ul class="NavigationItems">
    <router-link tag="li" class="NavigationItem" active-class="active" to="/events" exact>
      <a>Events</a>
    </router-link>
    <router-link tag="li" class="NavigationItem" active-class="active" to="/bookings">
      <a>Bookings</a>
    </router-link>
    <router-link tag="li" class="NavigationItem" active-class="active" to="/logout">
      <a>Logout</a>
    </router-link>
    <router-link tag="li" class="NavigationItem" active-class="active" to="/auth">
      <a>SignIn/Signup</a>
    </router-link>
    <button
      :style="{
           outline: 'none',
           cursor:'pointer',
           borderRadius: '15px',
           padding: '9px',
           float: 'right',
           color: ' var(--primaryText)',
           backgroundColor: 'var(--primaryBg)'}"
      @click="changeTheme"
    >{{theme==='light'?'Dark Mode':'Light Mode'}}</button>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      theme: "light"
    };
  },
  methods: {
    changeTheme() {
      const activetheme = this.theme === "light" ? "dark" : "light";
      this.theme = activetheme;
      document.documentElement.classList.add("color-theme-in-transition");
      document.documentElement.setAttribute("data-theme", activetheme);
      window.setTimeout(() => {
        document.documentElement.classList.remove("color-theme-in-transition");
      }, 1000);
    }
  }
};
</script>
<style>
.NavigationItems {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
}

@media (min-width: 500px) {
  .NavigationItems {
    flex-flow: row;
  }
}
.NavigationItem {
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
}

.NavigationItem a {
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
}

@media (min-width: 500px) {
  .NavigationItem {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }

  .NavigationItem a {
    color: white;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
  }

  .NavigationItem:active,
  .NavigationItem.active {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
    color: white;
  }
  .NavigationItem:hover {
    background-color: #8f5c2c;
    border-bottom: 4px solid orange;
    color: white;
  }
}
</style>
