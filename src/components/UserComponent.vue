<script>
export default {
  name: "HomeView",
  props: ["displayName", "img", "followers"],
};
</script>

<template>
  <h1>Username: {{displayName}}</h1>
  <h1>Folowers: {{followers}}</h1>
  
  <img :src="img">
</template>
