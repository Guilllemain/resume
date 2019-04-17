const messages = {
    en: {
        title: 'Web Developer',
        profile: {
            title: 'Profile',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
                Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
                Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!`
        },
        experiences: {
            title: 'Experiences'
        },
        skills: 'Skills',
        projects: {
            title: 'Projects',
            subtitle: 'Here are some of my personal projects',
            description: 'Find all my others projects on',
            card: {
                cta: 'See the website',
                card1: {
                    title: 'Karl Mazlo',
                    description: `Jewelery website built using Laravel with a homemade CMS`,
                },
                card2: {
                    title: 'Natours',
                    description: 'Made using CSS latest properties',
                },
                card3: {
                    title: `Battleship game`,
                    description: 'Game in full javascript built using Vue.js',
                },
                card4: {
                    title: 'Nexter',
                    description: 'Made using CSS Grid',
                }
            }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Feel free to contact me',
            madeWith: 'Resume made with Vue.js'
        }
    },
    fr: {
        title: 'Développeur Web',
        profile: {
            title: 'Profil',
            description: `
                Passionné par le développement web et curieux des nouvelles technologies, je pratique différents 
                langages de programmation comme PHP, Javascript ou CSS.
                <br>
                Après 5 années en tant que Webmaster, je suis à la recherche d'une opportunité qui me permettrait d'allier ma passion et mon métier 
                et ainsi donner une nouvelle impulsion à ma carrière professionnelle.
                `
        },
        experiences: {
            title: 'Éxperiences',
            job1: {
                title: 'Webmaster',
                year: 'Depuis 2015',
                employer: 'Fédération Française de Tennis',
                tasks: [
                    'Gestion du site de <a class="task-link" href="http://www.lacentraleduclub.fft.fr/centralecat/">la Centrale du club</a>',
                    'Détourage des visuels produits',
                    'Mise en avant des promotions et nouveautés',
                    'Sélection et recette des évolutions',
                    'Statistiques de ventes'
                ]
            },
            job2: {
                title: 'Graphiste',
                year: 'De 2012 à 2015',
                employer: 'Fédération Française de Tennis',
                tasks: [
                    `Réalisation d'un catalogue produit`,
                    'Création de maquettes',
                    'Réalisation de newsletters',
                ]
            },
            job3: {
                title: 'Assistant',
                year: 'De 2009 à 2012',
                employer: 'Fédération Française de Tennis',
                tasks: [
                    'En charge de la logistique des opérations fédérales',
                    'Conseil aux clubs',
                    'Préparation et suivi des commandes',
                    'Facturation des fournisseurs',
                    'Gestion des contrats fournisseurs'
                ]
            }
        },
        skills: 'Compétences',
        projects: {
            title: 'Projets',
            subtitle: 'Voici quelques-uns de mes projets personnels',
            description: 'Retrouvez mes autres projets sur',
            card: {
                cta: 'Voir le site',
                card1: {
                    title: 'Karl Mazlo',
                    description: 'Site de joaillerie et CMS personnalisé construit avec Laravel',
                },
                card2: {
                    title: 'Natours',
                    description: 'Page réalisée avec les dernières propriétés CSS',
                },
                card3: {
                    title: `Bataille navale`,
                    description: 'Jeu en javascript construit avec Vue.js',
                },
                card4: {
                    title: 'Nexter',
                    description: 'Page construite avec CSS Grid',
                }
            }
        },
        contact: {
            title: 'Contact',
            subtitle: `N'hésitez pas à me contacter`,
            madeWith: 'CV réalisé avec Vue.js'
        }
    }
}

export default messages