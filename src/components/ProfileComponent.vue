<template>
    <section id="profile" class="section">
        <h3 class="section__title">{{ $t('profile.title') }}</h3>
        <div class="profile__description">
            <figure class="profile__picture" :class="{animated: showPicture}">
                <img src="profile-1x.jpg" srcset="profile-1x.jpg 1x, profile-2x.jpg 2x" alt="Yann Guillemain">
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
        @include flexCenter(center);
        width: $container-width;
        margin-left: auto;
        margin-right: auto;

        @include screen (medium) {
            width: 100%;
        }

        .profile__picture {
            flex: 0 0 25%;
            clip-path: circle(45% at 50% 50%);
            margin-right: 3rem;
            opacity: 0;

            @include screen (medium) {
                flex: 0 0 20%;
            }

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
