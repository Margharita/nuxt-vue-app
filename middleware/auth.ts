import { Context } from "@nuxt/types";

export default ({ store, redirect }: Context) => {
  if (!store.getters.hasToken) {
      console.log('kk')
    redirect("/login?message=login");
  }
};