import { getAccessorType } from "typed-vuex";

import { ActionContext } from "vuex";

import { $axios } from "~/utils/api";

import { User } from "~/utils/interfaces";

export const state = () => ({
  user: null as null | User,
});

export type RootState = ReturnType<typeof state>;

export const mutations = {
  setUsers(state: RootState, user: User) {
    state.user = user;
  },
};

export const actions = {
  async fetch(
    { commit }: ActionContext<RootState, RootState>,
    payloadData: {
      name: string;
      id: string;
      username: string;
    }
  ) {
    const user = await $axios.$post(
      "https://jsonplaceholder.typicode.com/users",
      {
        id: payloadData.id,
        name: payloadData.name,
        phone: "024-648-3804",
        username: payloadData.username,
        website: "ambrose.net",
      }
    );
    commit("setUser", user);
  },
};

export const getters = {
  user: (s: RootState) => s.user,
};

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
});
