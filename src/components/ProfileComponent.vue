<template>
    <section id="profile" class="section">
        <h3 class="section__title">{{ $t('profile.title') }}</h3>
        <div class="container profile__description">
            <figure class="profile__picture" :class="{animated: showPicture}">
                <img src="profile.jpg" alt="Yann Guillemain">
            </figure>
            <p v-html="$t('profile.description')"></p>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        showPicture: {
            required: true,
            type: Boolean
        }
    }
};
</script>

<style lang="scss" scoped>
.profile {
    &__description {
        display: flex;
        align-items: center;

        & .profile__picture {
            flex: 0 0 25%;
            clip-path: circle(45% at 50% 50%);
            margin-right: 3rem;
            opacity: 0;

            & img {
                transition: all 0.4s;
                width: 100%;

                &:hover {
                    transform: scale(0.93);
                }
            }
        }
    }
}

.animated {
    animation: scaleIn 0.4s ease-in forwards;
}
</style>
