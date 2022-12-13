<template>
  <div class="card w-96 bg-base-100 shadow-xl image-full mt-8">
    <figure><img :src="image" :alt="`${name}-image`" /></figure>
    <div class="card-body">
      <h2 class="card-title"></h2>
      <p></p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary gap-2 fill-current">
          <FacebookIcon v-if="name === 'facebook'" />
          <InstagramIcon v-if="name === 'instagram'" />
          <TelegramIcon v-if="name === 'telegram'" />
          {{ name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookIcon from "./icons/FacebookIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import TelegramIcon from "./icons/TelegramIcon.vue";

export default {
  name: "SocialMediaCard",
  components: {
    FacebookIcon,
    InstagramIcon,
    TelegramIcon,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
};
</script>
