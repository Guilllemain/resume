<template>
    <section class="experiences">
      <h3>Experiences</h3>
      <div class="container experiences__list">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
        </p>
      </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

  .experiences {
    background-color: #00444980;

    h3, p {
      color: white;
      opacity: .9;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 3rem;
    }
  }

</style>
