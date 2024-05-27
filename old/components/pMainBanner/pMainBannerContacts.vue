<template>
  <div class="p-main-banner-contacts">
    <div class="p-main-banner-contacts__container">
      <div class="p-main-banner-contacts__wrapper">
        <div class="p-main-banner-contacts__row">
          <div class="p-main-banner-contacts__head" v-html="item.info.title"></div>
          <div class="p-main-banner-contacts__content">
            <div class="p-main-banner-contacts__content-item" :key="index" v-for="(contact, index) in item.info.socials">
              <div class="p-contact-item__title">{{contact.title}}</div>
              <a class="p-contact-item__link" :href="contact.link">{{contact.content}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: {
    type: string,
    src: string,
    info: {
      title: string,
      subtitle: string
    }
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    type: 'contacts',
    src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    info: {
      title: "<h1>Контакты</h1><span>Если вы не смогли дозвониться, мы обязательно с вами свяжемся</span>",
      socials: [
        {
          title: "Телефон",
          link: "tel:+79612061213",
          content: "+7(961)026-12-13"
        },
        {
          title: "Адрес",
          link: "https://yandex.ru/maps/-/CDFEi03H",
          content: "г.Ярославль, Лисицина 2В"
        },
        {
          title: "Телеграм",
          link: "https://tl.com/kissa",
          content: "https://tl.com/kissa"
        }
      ]
    }
  }
});
</script>

<style lang="scss">

</style>