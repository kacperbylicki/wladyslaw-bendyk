<template>
  <div class="card w-80 max-h-48 bg-base-100 shadow-xl image-full">
    <figure><img class="w-80 object-cover" :src="image" :alt="`${name}-image`" /></figure>
    <div class="card-body">
      <h2 class="card-title"></h2>
      <p></p>
      <div class="card-actions justify-end">
        <a :href="url" target="_blank" class="btn btn-primary gap-2 fill-current">
          <InstagramIcon v-if="name === 'instagram'" />
          <FacebookIcon v-if="name === 'facebook'" />
          <TelegramIcon v-if="name === 'telegram'" />
          <WhatsAppIcon v-if="name === 'whatsapp'" />
          {{ name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookIcon from "./icons/FacebookIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import TelegramIcon from "./icons/TelegramIcon.vue";
import WhatsAppIcon from "./icons/WhatsAppIcon.vue";

export default {
  name: "SocialMediaCard",
  components: {
    FacebookIcon,
    InstagramIcon,
    TelegramIcon,
    WhatsAppIcon,
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
