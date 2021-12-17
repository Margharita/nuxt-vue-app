import { getAccessorType } from "typed-vuex";

import { ActionContext } from "vuex";

import { $axios } from "~/utils/api";

import { User } from "~/utils/interfaces";

export const state = () => ({
  users: [] as User[],
});

export type RootState = ReturnType<typeof state>;

export const mutations = {
  setUsers(state: RootState, users: User[]) {
    state.users = users;
  },
};

export const actions = {
  async fetch({ commit }: ActionContext<RootState, RootState>) {
    const users = await $axios.$get(
      // "https://gorest.co.in/public/v1/users"
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("setUsers", users);
  },
};

export const getters = {
  users: (s: RootState) => s.users,
};

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
});
