<script>
import UserComponent from "../components/UserComponent.vue";
import spotifyAPI from "../utils/spotifyAPI";

export default {
  name: "UserView",
  data() {
    return {
      displayName: "",
      img: "",
      followers: 0,
    };
  },
  components: {
    UserComponent,
  },
  async created() {
    const userData = await spotifyAPI.getUser();
    this.displayName = userData.display_name;
    this.followers = userData.followers.total;
    this.img = userData.images[0].url;
  },
};
</script>

<template>
  <main>
    <UserComponent
      :displayName="displayName"
      :img="img"
      :followers="followers"
    />
  </main>
</template>
