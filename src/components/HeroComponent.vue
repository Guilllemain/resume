<template>
    <section class="hero">
        <h2 class="hero__title">Yann Guillemain</h2>
        <h3 class="hero__subtitle">{{$t('title')}}</h3>
        <a class="scroll-link" href="#profile" :class="{animated: isScrolling}">
            <svg
                class="mouse"
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
                    <circle class="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"></circle>
                </g>
            </svg>
        </a>
    </section>
</template>

<script>
export default {
    props: {
        isScrolling: {
            required: true,
            type: Boolean
        }
    }
};
</script>

<style lang="scss" scoped>
.mouse {
    max-width: 2.5rem;
    width: 100%;
    height: auto;
}
.scroll {
    animation: scroll 1.5s cubic-bezier(0.65, -0.55, 0.25, 1.5) infinite;
    transform-origin: 50% 20.5px;
    will-change: transform, opacity;
}
.scroll-link {
    opacity: 0.9;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    animation: slideUp 1s ease-in-out 0.5s backwards;
}
.hero {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-image: url("/codecode.jpg");
    background-image: linear-gradient(
            to right bottom,
            rgba(0, 68, 73, 0.6),
            rgba(0, 68, 73, 0.6)
        ),
        url("/codecode.jpg");
    background-size: cover;
    background-attachment: fixed;

    .animated {
        animation: scaleOut 0.6s ease-in-out forwards;
    }

    &__subtitle {
        font-size: 1.5rem;
        font-weight: 300;
        color: white;
        opacity: 0.9;
        animation: zoomIn 1s ease-in-out backwards;
    }

    &__title {
        font-weight: 300;
        font-size: 4rem;
        letter-spacing: 0.1rem;
        margin-bottom: 2rem;
        color: white;
        opacity: 0.9;
        animation: bounceInLeft 1s cubic-bezier(.215,.61,.355,1) backwards;

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
