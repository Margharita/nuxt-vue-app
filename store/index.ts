import { getAccessorType } from "typed-vuex";

import { ActionContext } from "vuex";

import { $axios } from "~/utils/api";

export const state = () => ({
  token: null as string | null,
});

export type RootState = ReturnType<typeof state>;

export const mutations = {
  setToken(state: RootState, token: string) {
    state.token = token;
  },
  clearToken(state: RootState) {
    state.token = null;
  },
};

export const actions = {
  nuxtServerInit() {
    console.log("Server is started");
  },
  async login(
    { commit }: ActionContext<RootState, RootState>,
    payload: string
  ) {
    commit("setToken", payload);
  },
  async logout({ commit }: ActionContext<RootState, RootState>) {
    commit("clearToken");
  },
};

export const getters = {
  hasToken: (s: RootState) => !!s.token,
};

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
});
