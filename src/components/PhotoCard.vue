<template>
  <div class="card w-auto bg-base-100 shadow-xl image-full">
    <figure><img :src="image" :alt="imageAlt" /></figure>
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  props: {
    image: {
      type: String,
      default: "",
    },
    imageAlt: {
      type: String,
      default: "default-image-alt",
    },
  },
};
</script>
