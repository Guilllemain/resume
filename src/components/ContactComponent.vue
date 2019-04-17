<template>
    <section class="section">
        <h3 class="section__title">{{$t('contact.title')}}</h3>
        <p class="section__subtitle section__subtitle--light">{{$t('contact.subtitle')}}</p>
        <div class="container">
            <div class="contact">
                <div class="contact__email">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path
                            d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                        ></path>
                    </svg>
                    <a href="mailto:devguillemain@gmail.com">devguillemain@gmail.com</a>
                </div>
                <div class="contact__phone">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path
                            d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
                        ></path>
                    </svg>
                    <span>06 07 08 09 10</span>
                </div>
            </div>
            <p class="contact__made">{{$t('contact.madeWith')}}</p>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.contact {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 3rem;
    margin-bottom: 6rem;

    svg {
        color: $main-color;
        fill: currentColor;
        margin-right: 0.5rem;
    }
    
    &__email, &__phone {
        display: flex;
        align-items: center;
    }

    &__email {
        a {
            color: currentColor;
            transition: all .2s ease-in-out;

            &:hover {
                transform: translateY(-.1rem) scale(1.01);
            }
        }
    }

    &__made {
        text-align: center;
        font-size: .9rem;
    }
}

</style>
