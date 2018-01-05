import { UserState } from './user';
import Vue from "vue";
import Vuex from "vuex";
import {UIState} from './ui';
import {StaticLinks} from './links';
Vue.use(Vuex);

// root state object
const state = {
  ui: new UIState(),
 // user: new UserState(),
  links: new StaticLinks(),
};

// mutations are operations that actually mutates the state.
const mutations = {

};

const actions = {
};

const getters = {

};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules :{
      ui: new UIState(),
      user: new UserState(),
      
  }
  // strict: true
});