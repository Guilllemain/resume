<template>
    <section class="hero">
        <div class="hero__lang">
            <a @click="changeLocale('fr')" :class="{ 'lang-selected': lang === 'fr' }">fr</a>
            <a @click="changeLocale('en')" :class="{ 'lang-selected': lang === 'en' }">en</a>
        </div>
        <h2 class="hero__title">Yann Guillemain</h2>
        <h3 class="hero__subtitle">{{$t('title')}}</h3>
        <a class="mouse" href="#profile" :class="{animated: isScrolling}">
            <svg
                class="mouse__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 76 130"
                preserveAspectRatio="xMidYMid meet"
            >
                <g fill="none" fill-rule="evenodd">
                    <rect
                        width="70"
                        height="118"
                        x="1.5"
                        y="1.5"
                        stroke="#FFF"
                        stroke-width="3"
                        rx="36"
                    ></rect>
                    <circle class="mouse__scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"></circle>
                </g>
            </svg>
        </a>
    </section>
</template>

<script>
import i18n from "../assets/js/i18n";

export default {
    props: {
        isScrolling: {
            required: true,
            type: Boolean
        }
    },
    computed: {
        lang() {
            return i18n.locale;
        }
    },
    methods: {
        changeLocale(locale) {
            i18n.locale = locale;
        }
    }
};
</script>

<style lang="scss" scoped>
.mouse {
    opacity: 0.9;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    animation: slideUp 1s ease-in-out 0.5s backwards;

    &__icon {
        max-width: 2.5rem;
        width: 100%;
        height: auto;
    }

    &__scroll {
        animation: scroll 1.5s cubic-bezier(0.65, -0.55, 0.25, 1.5) infinite;
        transform-origin: 50% 20.5px;
        will-change: transform, opacity;
    }
}
.hero {
    position: relative;
    @include flexCenter(center, center);
    flex-direction: column;
    color: white;
    height: 100vh;
    background-image: url("/codecode-1x.jpg");
    background-image: linear-gradient(
            to right bottom,
            rgba(0, 68, 73, 0.6),
            rgba(0, 68, 73, 0.6)
        ),
        url("/codecode-1x.jpg");
    @media
        only screen and (-webkit-min-device-pixel-ratio: 1.25),
        only screen and ( min--moz-device-pixel-ratio: 1.25),
        only screen and ( -o-min-device-pixel-ratio: 1.25/1),
        only screen and ( min-device-pixel-ratio: 1.25),
        only screen and ( min-resolution: 200dpi),
        only screen and ( min-resolution: 1.25dppx)
    {
        background-image: linear-gradient(
            to right bottom,
            rgba(0, 68, 73, 0.6),
            rgba(0, 68, 73, 0.6)
        ),
        url("/codecode-2x.jpg");
    }
    background-size: cover;
    background-attachment: fixed;

    .animated {
        animation: scaleOut 0.6s ease-in-out forwards;
    }

    &__lang {
        position: absolute;
        z-index: 10;
        top: 1.5rem;
        right: 2rem;
        color: white;
        display: flex;
        animation: flipInX 2s ease-in;
        backface-visibility: visible;

        .lang-selected {
            font-weight: 400;
            opacity: 1;

            &::after {
                font-weight: 300;
                opacity: 0.7;
            }
        }

        a {
            opacity: 0.7;
            cursor: pointer;
            text-transform: uppercase;
            @include flexCenter(center);

            &:hover {
                text-decoration: underline;
            }

            &:first-child {
                margin-right: 1rem;

                &::after {
                    content: "";
                    display: block;
                    background-color: white;
                    height: 60%;
                    width: 1px;
                    margin-left: 1rem;
                }
            }
        }
    }

    &__subtitle {
        font-size: 1.5rem;
        font-weight: 300;
        opacity: 0.9;
        animation: zoomIn 1s ease-in-out .5s backwards;
    }

    &__title {
        font-weight: 300;
        font-size: 4rem;
        letter-spacing: 0.1rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        animation: bounceInLeft 1s cubic-bezier(.215,.61,.355,1);

        &::after {
            content: "";
            background-color: rgba(255, 255, 255, 0.5);
            display: block;
            margin: auto;
            width: 70%;
            height: 1px;
            margin-top: 1rem;
            animation: appears 1s ease-in-out 1s backwards;
        }
    }
}
</style>
