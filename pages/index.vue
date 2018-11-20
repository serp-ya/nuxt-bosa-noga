<template>
  <div>
    <WideSlider :delay="delay.number">
      <WideSliderImageSlide
        v-for="(slide, i) in slides"
        :key="i"
        :imageSrc="slide.imageSrc"
        :imageLink="slide.imageLink"
      />
    </WideSlider>

    <NewDeals
      :categories="categories"
      :products="featured"
    />

    <section class="sales-and-news wave-bottom">
      <h2 class="h2">акции и новости</h2>
      <div class="sales-and-news__items">
        <div class="sales-and-news__item sales-and-news__item_1">
          <a href="#">
            <h3 class="h3">обувь к свадьбе</h3>
          </a>
        </div>
        <div class="sales-and-news__item sales-and-news__item_2">
          <a href="#">
            <h3 class="h3">20% скидка
              <br>
              <span>На летнюю обувь</span>
            </h3>
          </a>
        </div>
        <div class="sales-and-news__item sales-and-news__item_3">
          <a href="#">
            <h3 class="h3">готовимся к лету!</h3>
          </a>
        </div>
        <div class="sales-and-news__item sales-and-news__item_4">
          <a href="#">
            <h3 class="h3">
              Больше покупок –
              <br>
              больше скидка!
            </h3>
          </a>
        </div>
        <div class="sales-and-news__news">
          <div class="sales-and-news__arrow sales-and-news__arrow_up arrow" />
          <div class="sales-and-news__new">
            <time datetime="2017-01-18 00:00">18 января 2017</time>
            <a href="#">Американские резиновые сапоги Bogs идеально подходят для русской зимы!</a>
          </div>
          <div class="sales-and-news__new">
            <time datetime="2017-05-18 00:00">18 мая 2017</time>
            <a href="#">Магазины Bosa Noga</a>
          </div>
          <div class="sales-and-news__new">
            <time datetime="2017-03-10 00:00">10 марта 2017</time>
            <a href="#">Тенденция весны 2018: розовый и фуксия. 10 пар обуви для яркого образа</a>
          </div>
          <div class="sales-and-news__arrow sales-and-news__arrow_down arrow" />
        </div>
      </div>
    </section>

    <section class="about-us">
      <h2 class="about-us__title">
        Клиенты делают заказ
        <br>
        в интернет-магазине BosaNoga!
      </h2>
      <p class="about-us__text">
        В Интернете можно встретить немало магазинов, предлагающих аксессуары. Но именно к нам хочется возвращаться снова и снова.
      </p>
      <h3 class="about-us__text_header">Мы предлагаем вам особые условия:</h3>
      <ol class="about-us__text">
        <li>
          Индивидуальный подход специалиста. Когда поступает новая коллекция обуви весна-лето или же коллекция обуви осень-зима – покупателям бывает трудно сориентироваться во всем многообразии новинок. Наш менеджер по телефону поможет вам определиться с товарами, подходящими именно вам.
        </li>
        <li>
          Мы периодически проводим распродажи как женских и мужских, так и детских моделей. Вы будете приятно удивлены ценами на аксессуары в мага- зине BosaNoga.
        </li>
        <li>
          У нас всегда есть из чего выбрать. Неважно, какую категорию вы прос- матриваете: осень-зима, или же весна-лето – вы всегда сможете найти ва- рианты, подходящие вам по внешнему виду и цене.
        </li>
        <li>
          Мы несем ответственность за все товары.
        </li>
        <li>
          Молодые мамы будут рады обширному ассортименту детских моделей.
        </li>
      </ol>
      <p class="about-us__text">
        Если вы ищете место, где представлены обувные новинки от самых известных брендов, то вы зашли по верному адресу.
      </p>
      <p class="about-us__text">
        У нас представлены модели для мужчин, женщин, а также детские сапоги, босоножки, ботинки и туфли. Сделав заказ в нашем интернет-магазине, вы сможете быть модным и стильным как осенью-зимой, так и весной-летом. Просто наберите номер нашего телефона, и мы поможем вам определиться с покупкой.
      </p>
      <span class="about-us__text_overlay" />
      <button class="about-us__text_button">читать</button>
    </section>
  </div>
</template>

<script>
import WideSlider from '~/components/WideSlider/WideSlider';
import WideSliderImageSlide from '~/components/WideSlider/WideSliderImageSlide';
import NewDeals from '~/components/NewDeals/NewDeals';
import { mapState } from 'vuex';

export default {
  name: 'HomePage',
  components: {
    WideSlider,
    WideSliderImageSlide,
    NewDeals,
  },
  async fetch({ store, app, error }) {
    try {
      const featuredIsEmpty = store.getters['products/checkFeaturedIsEmpty'];

      if (featuredIsEmpty) {
        const featuredItems = await app.$axios.$get('featured.json');
        store.dispatch('products/initFeatured', { featuredItems });
      }
    } catch (e) {
      error(e);
    }
  },
  computed: {
    ...mapState('mainSlider', [
      'slides',
      'delay',
    ]),
    ...mapState('products', [
      'categories',
      'featured',
    ]),
  },
}
</script>
