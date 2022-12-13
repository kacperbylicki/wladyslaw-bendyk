<template>
  <section class="grid justify-center grid-flow-row w-auto p-4">
    <PhotoCard image="https://placeimg.com/400/225/arch" image-alt="profile-photo" />
    <SocialMediaCard
      name="facebook"
      :url="facebook.url"
      :icon="facebook.icon"
      :image="facebook.image"
    />
    <SocialMediaCard
      name="instagram"
      :url="instagram.url"
      :icon="instagram.icon"
      :image="instagram.image"
    />
    <SocialMediaCard
      name="telegram"
      :url="telegram.url"
      :icon="telegram.icon"
      :image="telegram.image"
    />
  </section>
</template>

<script>
import FacebookIcon from "./components/icons/FacebookIcon.vue";
import PhotoCard from "./components/PhotoCard.vue";
import SocialMediaCard from "./components/SocialMediaCard.vue";

export default {
  components: {
    PhotoCard,
    SocialMediaCard,
  },
  data() {
    return {
      facebook: {
        url: "",
        icon: FacebookIcon,
        image: "https://placeimg.com/400/225/arch",
      },
      instagram: {
        url: "",
        icon: "./instagram.svg",
        image: "https://placeimg.com/400/225/arch",
      },
      telegram: {
        url: "",
        icon: "./telegram.svg",
        image: "https://placeimg.com/400/225/arch",
      },
    };
  },
};
</script>
