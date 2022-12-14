<template>
  <section class="grid justify-center grid-flow-row w-auto p-6">
    <PhotoCard
      image="https://kacperbylicki.github.io/wladyslaw-bendyk/portrait.webp"
      image-alt="portrait-photo"
    />
    <SocialMediaCard
      v-for="(item, key) in socialMediaItems"
      :key="key"
      :name="item.name"
      :url="item.url"
      :image="item.image"
    />
  </section>
</template>

<script>
import PhotoCard from "./components/PhotoCard.vue";
import SocialMediaCard from "./components/SocialMediaCard.vue";

export default {
  components: {
    PhotoCard,
    SocialMediaCard,
  },
  data() {
    return {
      socialMediaItems: [
        {
          name: "instagram",
          url: "https://www.instagram.com/wwwladyslawww",
          image: "https://kacperbylicki.github.io/wladyslaw-bendyk/insta-pattern.svg",
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/wwwladyslawww",
          image: "https://kacperbylicki.github.io/wladyslaw-bendyk/fb-pattern.svg",
        },
        {
          name: "telegram",
          url: "https://t.me/Wladyslaw_Bendyk",
          image: "https://kacperbylicki.github.io/wladyslaw-bendyk/telegram-pattern.svg",
        },
        {
          name: "whatsapp",
          url: "https://wa.me/qr/XGBKTODZVY7CM1",
          image: "https://kacperbylicki.github.io/wladyslaw-bendyk/whatsapp-pattern.svg",
        },
      ],
    };
  },
};
</script>
