export default defineAppConfig({
  app: {
    title: "VKambulov",
    description: "Vladislav Kambulov - Full Stack Web Developer from Russia",
    image: {
      src: "/preview.png",
      alt: "Image",
      width: 400,
      height: 300,
    },
    header: {
      position: "left",
    },
    footer: {
      credits: {
        enabled: false,
      },
      navigation: true,
      alignment: "center",
      message: "My social networks",
    },
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/VKambulov",
        icon: "uil:github",
      },
      {
        label: "Stack Overflow",
        href: "https://ru.stackoverflow.com/users/268562/vladislav",
        icon: "cib:stackoverflow",
      },
      {
        label: "VK",
        href: "https://vk.com/vkamb",
        icon: "uil:vk",
      },
    ],
  },
});
