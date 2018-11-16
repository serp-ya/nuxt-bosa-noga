<template>
  <section class="subscribe">
    <div class="subscribe__wrapper">
      <h2 class="subscribe__title">подписаться на рассылку выгодных предложений</h2>
      <form
        class="subscribe__radios"
        action=""
      >
        <label class="subscribe__radio_label">
          <input
            class="subscribe__radio"
            type="radio"
            name="subscribe"
            value="women"
          >
          <div class="subscribe__radio_text">Женское</div>
        </label>
        <label class="subscribe__radio_label">
          <input
            class="subscribe__radio"
            type="radio"
            name="subscribe"
            value="men"
          >
          <div class="subscribe__radio_text">Мужское</div>
        </label>
        <label class="subscribe__radio_label">
          <input
            class="subscribe__radio"
            type="radio"
            name="subscribe"
            value="both"
            checked=""
          >
          <div class="subscribe__radio_text">Всё</div>
        </label>
        <input
          class="subscribe__email"
          type="email"
          placeholder="Ваш e-mail"
        >
        <input
          class="subscribe__submit"
          type="submit"
          value="ПОДПИСАТЬСЯ"
        >
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Subscribe',
};
</script>
