<template>
<footer class="p-footer">
  <div class="p-footer__container">
    <div class="p-footer__wrapper">
      <div class="p-footer__row">
        <div class="p-footer__row-item logo"></div>
        <div class="p-footer__row-item content" v-html="item.content"></div>
        <div class="p-footer__row-item links">
          <div class="p-footer__row-item--social">
            <div class="p-footer__social-item" v-for="(item, index) in item.socials" :key="index">
              <nuxt-link :to="item.link"><i class="p-icon" :class="`p-icon-${item.icon}`"></i></nuxt-link>
            </div>
          </div>
          <div class="p-footer__row-item--info">
            <div class="p-footer__row-item--content">
              <nuxt-link class="p-footer-info__item" :to="item.link" v-for="(item, index) in item.links" :key="index">
                <div class="p-footer-info__item-text" v-html="item.text"></div>
              </nuxt-link>
            </div>
            <div class="p-footer__row-item--action">
              <p>Подпишись на наши новости</p>
              <input/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>
<script setup lang="ts">
interface Props {
  item: {
    content: string,
    links: [
      {
        text: string,
        link: string,
      }
    ]
    socials: [
      {
        icon: string,
        link: string
      }
    ]
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    content: '<p>Рыба – неповторимое создание природы. В мире существует огромное разнообразие видов, от крошечных до гигантских. Благодаря своей анатомии и поведению, они завораживают и вдохновляют нас. Мир под водой – загадочное и удивительное место, где рыбы являются неотъемлемой частью его прекрасного пространства.</p><br/><p>Их разноцветие и формы ошеломляют</p>',
    links: [
      {
        text: '<p>Лисицина 2в</p><span>смотреть на карте</span>',
        link: 'https://yandex.ru/maps/-/CDFEi03H'
      },
      {
        text: '<p>+79526554455</p><span>Записаться на консультацию</span>',
        link: 'tel:+79526554455'
      }
    ],
    socials: [
      {
        icon:'facebook',
        link: 'https://ssas'
      },
      {
        icon:'twitter',
        link: 'https://ssassadf'
      },
      {
        icon: 'instagram',
        link: 'dfsgdfgdf'
      }
    ]
  }
});
</script>

<style lang="scss">
@import "pFooter";
</style>