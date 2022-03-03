import { getField, updateField } from "vuex-map-fields";

const getDefaultState = () => ({
  cardTitle: 'Example project for Quoti extensions',
  cardSubtitle: 'Card subtitle from vuex store'
});

export const state = getDefaultState();

export const getters = {
  getField
};

export const actions = {
  resetState({ commit }) {
    commit("resetState");
  },
};

export const mutations = {
  updateField,
  resetState(state) {
    Object.assign(state, getDefaultState());
  }
};

export default {
  override: true,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
