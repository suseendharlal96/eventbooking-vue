import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    tempOrders: [],
    loading: false,
    email: null,
    userId: null,
    token: null
  },
  getters: {
    getTempOrders: state => {
      return state.tempOrders;
    },
    getLoaders: state => {
      return state.loading;
    },
    getAuthData: state => {
      const authData = {
        email: state.email,
        userId: state.userId,
        token: state.token
      };
      return authData;
    }
  },
  mutations: {
    purchaseData: (state, payload) => {
      console.log(payload);
      state.tempOrders.length = 0;
      state.tempOrders.push(payload);
      console.log(state.tempOrders);
    },
    setLoader: (state, payload) => {
      state.loading = payload;
    },
    setAuthData: (state, payload) => {
      state.email = payload.email;
      state.userId = payload.userId;
      state.token = payload.token;
    }
  },
  actions: {}
});
