<template>
    <section class="section section--dark">
        <h3 class="section__title section__title--light">{{$t('projects.title')}}</h3>
        <p class="section__subtitle">{{$t('projects.subtitle')}}</p>
        <div class="container projects">
            <div class="card">
                <div class="card__side card__side--front">
                    <img src="mazlo.jpg" alt="mazlo-project">
                </div>
                <div class="card__side card__side--back">
                    <h4>Karl Mazlo</h4>
                    <div class="card__description">{{$t('projects.card.card1.description')}}</div>
                    <a href="http://www.karlmazlo.com/" class="card__cta">{{$t('projects.card.cta')}}</a>
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front">
                    <img src="natours.jpg" alt="natours-project">
                </div>
                <div class="card__side card__side--back">
                    <h4>Natours</h4>
                    <div class="card__description">{{$t('projects.card.card2.description')}}</div>
                    <a href="https://guilllemain.github.io/natours/" class="card__cta">{{$t('projects.card.cta')}}</a>
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front">
                    <img src="hotel-booking.jpg" alt="hotel-booking-project">
                </div>
                <div class="card__side card__side--back">
                    <h4>Hotel Booking Page</h4>
                    <div class="card__description">{{$t('projects.card.card3.description')}}</div>
                    <a href="https://guilllemain.github.io/booking-page/" class="card__cta">{{$t('projects.card.cta')}}</a>
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front">
                    <img src="nexter.jpg" alt="nexter-project">
                </div>
                <div class="card__side card__side--back">
                    <h4>Nexter</h4>
                    <div class="card__description">{{$t('projects.card.card4.description')}}</div>
                    <a href="https://guilllemain.github.io/nexter/" class="card__cta">{{$t('projects.card.cta')}}</a>
                </div>
            </div>
        </div>
        <div class="projects__github">
            <p>{{$t('projects.description')}}</p>
            <a class="github-link" href="https://github.com/Guilllemain">
                <span>GitHub</span>
                <svg role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.github-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-weight: 400;

    &:hover {
        font-weight: 500;
    }

    span {
        margin: 0 0.4rem;
    }
}
h4 {
    font-weight: 300;
}
.card {
    perspective: 40rem;
    -moz-perspective: 40rem;
    position: relative;
    transition: all 1s ease-in-out;
    height: 15rem;

    &__side {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
		left: 0;
		border-radius: .3rem;
		overflow: hidden;
		box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
		transition: all .8s ease;
		backface-visibility: hidden;
        -webkit-backface-visibility: hidden;

        &--back {
            background-color: whitesmoke;
            transform: rotateY(180deg);
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
        }
    }

    &:hover &__side--front {
        transform: rotateY(-180deg);
    }

    &:hover &__side--back {
        transform: rotateY(0);
    }

    &__cta {
        outline: none;
        border: none;
        padding: .8rem 1.5rem;
        background-color: #00444980;
        border-radius: .2rem;
        color: whitesmoke;
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            background-color: #01626980;
        }
    }


    img {
        width: 100%;
        opacity: 0.9;
    }
}
.projects {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4.5rem;

    

    &__github {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
    }
}
</style>
