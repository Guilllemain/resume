<template>
    <section class="projects">
      <h3>{{ $t('projects.title') }}</h3>
      <p class="subtitle">{{ $t('projects.subtitle') }}</p>
      <div class="container projects__list">
        <div class="projects__details">
          <img src="mazlo.jpg" alt="mazlo-project">
        </div>
        <div class="projects__details">
          <img src="natours.jpg" alt="natours-project">
        </div>
        <div class="projects__details">
          <img src="hotel-booking.jpg" alt="hotel-booking-project">
        </div>
        <div class="projects__details">
          <img src="nexter.jpg" alt="nexter-project">
        </div>
      </div>
      <div class="projects__github" v-html="$t('projects.description')"></div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

  .projects {
    background-color: #00444980;

    h3, p {
      color: white;
      opacity: .9;
      text-align: center;
      margin-bottom: 1rem;
    }

    .subtitle::before {
      content: "";
      display: block;
      background-color: rgba(255, 255, 255, .5);
      height: 1px;
      width: 25%;
      margin: auto;
      margin-bottom: 1rem;
    }

    &__list {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 3rem;
    }

    &__details {
      img {
        width: 100%;
        opacity: .9;
      }
    }

    &__github {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
    }
    
  }

</style>
