import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    id: "",
    accessToken: "",
  }),

  actions: {
    logout() {
      this.accessToken="";
      this.id=""
    },
    /**
     * Attempt to login a user
     * @param {string} user
     */
    async login(id, accessToken) {
      this.id=id;
      this.accessToken=accessToken;
    },
    isAuthenticated() {
      return this.id!=="";
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

//export default useUserStore;
