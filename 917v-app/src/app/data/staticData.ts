import { 
    BannerItem, 
    Company, 
    Service, 
    CompanyManager, 
    FAQS, 
    Reviews,
    FreeTrials,
    Footers,
    Headers,
    PopularCategories,
    BestSellers,
    MainItems,
    RackerAndString,
    Cart
} from "@/app/models/StaticDataModel";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface StaticData {
    carts: Cart[];
    banner: BannerItem[];
    racketAndString: RackerAndString[];
    popularCategories: PopularCategories;
    bestSellers: BestSellers;
    mainItems: MainItems[];
    companies: Company[];
    services: Service[];
    companyManager: CompanyManager;
    faqs: FAQS;
    reviews: Reviews;
    freeTrial: FreeTrials;
    footer: Footers;
    // header: Headers;
}

const staticData: StaticData = {
    // header: {
    //     companyLogo: "/assets/company_logo.png",
    //     comapnyName: "Untitled UI",
    //     items: {
    //         home: "Home",
    //         product: "Explore",
    //         shop: "Shop",
    //         preOrder: "Pre-Order",
    //         faqs: "FAQS",
    //         aboutUs: "About Us",
    //         contact: "Contact",
    //         myAccount: "My Account"
    //     },
    //     profile: "/assets/olivia.png",
    //     component: ""
    // },
    carts: [
        {
            product: {
                image: "/assets/tennis_assets/sales/wilson_ultrapower.jpeg",
                title: "Wilson Ultra Power",
                price: 2500
            },
            quantity: 1,
            total: 2500
        },
        {
            product: {
                image: "/assets/tennis_assets/sales/wilson_ultrapower.jpeg",
                title: "Wilson Ultra Power",
                price: 2500
            },
            quantity: 1,
            total: 2500
        },
        {
            product: {
                image: "/assets/tennis_assets/sales/wilson_ultrapower.jpeg",
                title: "Wilson Ultra Power",
                price: 2500
            },
            quantity: 1,
            total: 2500
        },
        {
            product: {
                image: "/assets/tennis_assets/sales/wilson_ultrapower.jpeg",
                title: "Wilson Ultra Power",
                price: 2500
            },
            quantity: 1,
            total: 2500
        },
        {
            product: {
                image: "/assets/tennis_assets/sales/wilson_ultrapower.jpeg",
                title: "Wilson Ultra Power",
                price: 2500
            },
            quantity: 1,
            total: 2500
        }
    ],
    racketAndString: [
        {
            id: 1,
            image: "/assets/tennis_assets/sales/wilson_ultrapower.jpeg",
            title: "Wilson Ultra Power",
            price: 2500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, rerum. Sequi maiores, officia voluptate earum, accusantium officiis ullam pariatur iste rerum eum, voluptatibus quod? Est alias dignissimos architecto, id rem blanditiis! Quos obcaecati, corporis fugiat sed odio, nihil sint adipisci facere vero animi tempore amet deserunt debitis odit impedit ullam?"
        },
        {
            id: 2,
            image: "/assets/tennis_assets/sales/babolat_boostaero.jpeg",
            title: "Head Speed MP 2024",
            price: 2500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, rerum. Sequi maiores, officia voluptate earum, accusantium officiis ullam pariatur iste rerum eum, voluptatibus quod? Est alias dignissimos architecto, id rem blanditiis! Quos obcaecati, corporis fugiat sed odio, nihil sint adipisci facere vero animi tempore amet deserunt debitis odit impedit ullam?"
        },
        {
            id: 3,
            image: "/assets/tennis_assets/sales/head_speedmp.jpeg",
            title: "Babolat Boost Aero (Grey Yellow White)",
            price: 2500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, rerum. Sequi maiores, officia voluptate earum, accusantium officiis ullam pariatur iste rerum eum, voluptatibus quod? Est alias dignissimos architecto, id rem blanditiis! Quos obcaecati, corporis fugiat sed odio, nihil sint adipisci facere vero animi tempore amet deserunt debitis odit impedit ullam?"
        },
        {
            id: 4,
            image: "/assets/tennis_assets/sales/wilson_rolandgarros.jpeg",
            title: "Wilson Roland Garros Blade 98",
            price: 2500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, rerum. Sequi maiores, officia voluptate earum, accusantium officiis ullam pariatur iste rerum eum, voluptatibus quod? Est alias dignissimos architecto, id rem blanditiis! Quos obcaecati, corporis fugiat sed odio, nihil sint adipisci facere vero animi tempore amet deserunt debitis odit impedit ullam?"
        }
    ],
    popularCategories: {
        header: "Your One Stop Shop for Everything Tennis",
        title: "Popular Categories",
        categoryItems: [
           {
            categoryImage: "/assets/tennis_assets/replacement_grip.jpg",
            categoryName: "Replacement Grips"
           },
           {
            categoryImage: "/assets/tennis_assets/dampiners.jpg",
            categoryName: "Tennis Equipments"
           },
           {
            categoryImage: "/assets/tennis_assets/tennis_shirts.jpg",
            categoryName: "Men's Tennis"
           },
           {
            categoryImage: "/assets/tennis_assets/women_tennis.jpg",
            categoryName: "Women's Tennis"
           }
        ],
        categoryButton: "VIEW ALL CATEGORIES"
    },
    bestSellers: {
        title: "Best Sellers",
        products: [
          {
            image: "/assets/tennis_assets/women_tennis.jpg",
            title: "Wilson Leather Replacement Grip",
            price: "1,550.00"
          },
          {
            image: "/assets/tennis_assets/women_tennis.jpg",
            title: "Wilson Leather Replacement Grip",
            price: "1,550.00"
          },
          {
            image: "/assets/tennis_assets/women_tennis.jpg",
            title: "Wilson Leather Replacement Grip",
            price: "1,550.00"
          },
          {
            image: "/assets/tennis_assets/women_tennis.jpg",
            title: "Wilson Leather Replacement Grip",
            price: "1,550.00"
          }
        ]
    },
    mainItems: [
        {
            title: "Tennis Shoes",
            product: "/assets/tennis_assets/shoes.png",
        },
        {
            title: "Tennis Rackets",
            product: "/assets/tennis_assets/raquet.png"
        },
        {
            title: "Tennis balls",
            product: "/assets/tennis_assets/balls.png"
        }
    ],
    banner:[
        {
            firstContent: "New feature Check out the team dashboard",
            secondContent: "Smash your Limits with the\n Best Tennis Gear",
            thirdContent: "We provide essential tennis gears and equipment\n to level up your game.",
            applyStyling: true
        },
        {
            firstContent: "Features",
            secondContent: "Analytics that feels like it's from the future",
            thirdContent: "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
            applyStyling: false
        },
        {
            firstContent: "Features",
            secondContent: "Cutting-edge features for advanced analytics",
            thirdContent: "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
            applyStyling: false
        }
    ],
    companies: [
        {
            name: "Layers",
            image: "/assets/layers_logo.png"
        },
        {
            name: "Sisyphus",
            image: "/assets/sisyphus_icon.png"
        },
        {
            name: "Circooles",
            image: "/assets/circooles_logo.png"
        },
        {
            name: "Catalog",
            image: "/assets/catalog.png"
        },
        {
            name: "Quotient",
            image: "/assets/quotient.png"
        },
        {
            name: "HourGlass",
            image: "/assets/hourglass.png"
        }
    ],
    services: [
        {
            image: "/assets/mail.png",
            header: "100% authentic items",
            description: "100% Original Tennis Products guaranteed",
            additionalContent: null,
            // icon: ArrowForwardIcon,
            // learnMore: "Learn more",
        },
        {
            image: "/assets/analytics_icon.png",
            header: "Dedicated to tennis",
            description: "Easily find your favorite tennis brands",
            additionalContent: null,
            // icon: ArrowForwardIcon,
            // learnMore: "Learn more",
        },
        {
            image: "/assets/smile_icon.png",
            header: "Improve your game",
            description: "Updgrade your tennis equipment and skills",
            additionalContent: null,
            // icon: null,
            // learnMore: null,
        }
    ],
    companyManager: {
        companyImage: "/assets/sisyphus_icon.png",
        companyName: "Sisyphus",
        header: "We've been using untitled to kick start every new project and can't imagine working without it.",
        managerImage: "/assets/candice.png",
        managerName: "Candice Wu",
        managerPosition: "Product Manager, Sisyphus"
    },
    faqs: {
        header: "Frequently asked questions",
        poster: "Everything you need to know about the product and billing",
        queries: [
            {
                question: "is there a free trial available?",
                answer: "Yes, you can try us for free 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible"
            },
            {
                question: "can I change my plan later?",
                answer: "Yes, maybe"
            },
            {
                question: "What is your cancellation policy?",
                answer: "Cancellation is allowed within 30-days"
            },
            {
                question: "Can other info be added to an invoice?",
                answer: "Yes, maybe"
            },
            {
                question: "How does billing work?",
                answer: "Soon to answer"
            },
            {
                question: "How do I change my account email?",
                answer: "Soon to answer"
            }
        ],
        image: "/assets/questions_logo.png",
        confirmation: "Still have questions?",
        chatTeam: "Can't find the answer you're looking for? Please chat to our friendly team",
        buttonLabel: "Get in touch"
    },
    reviews: {
        title: "Launch faster",
        poster: "Build something great",
        description: "We've done all the heavy lifting so you don't have to get all the data you need to launch and grow your business faster",
        reviewDetails: [
            {
                rating: "4,000+",
                actionTitle: "Global customers",
                actionDescription: "We've helped over 4,000 amazing global companie."
            },
            {
                rating: "600%",
                actionTitle: "Return on investment",
                actionDescription: "Our customers have reported an average of ~600% ROI."
            },
            {
                rating: "10k",
                actionTitle: "Global downloads",
                actionDescription: "Our app has been downloaded over 10k times."
            },
            {
                rating: "200+",
                actionTitle: "5-star reviews",
                actionDescription: "We're proud of our 5-star rating with over 200 reviews."
            }
        ]
    },
    freeTrial: {
        title: "Start your free trial",
        poster: "Join over 4,000+ startups already growing with Untitled.",
        getStartedButtonLabel: "Get Started",
        learnMoreButtonLabel: "Learn more"
    },
    footer: {
        product: {
            overview: "Overview",
            features: "Features",
            solutions: "Solutions",
            tutorials: "Tutorials",
            pricing: "Pricing",
            releases: "Releases"
        },
        company: {
            aboutus: "About us",
            careers: "careers",
            press: "press",
            news: "news",
            mediaKit: "Media kit",
            contact: "Contact"
        },
        resources: {
            blog: "Blog",
            newsLetter: "Newsletter",
            events: "Events",
            helpCenter: "Help centre",
            tutorial: "Tutorials",
            support: "Support"
        },
        useCases: {
            startUps: "Startups",
            enterprise: "Enterprise",
            government: "Government",
            saas: "SaaS",
            marketplaces: "Martkeplaces",
            ecommerce: "Ecommerce"
        },
        social: {
            twitter: "Twitter",
            linkedIn: "LinkedIn",
            facebook: "Facebook",
            github: "Github",
            angelList: "AngelList",
            dribbble: "Dribbble"
        },
        legal: {
            terms: "Terms",
            privacy: "Privacy",
            cookies: "Cookies",
            licenses: "Licenses",
            settings: "Settings",
            contact: "Contact"
        },
        image: "/assets/company_logo.png",
        companyName: "Untitled UI",
        allRights: "2077 Untitled UI. All rights reserved."
    }
}

export default staticData;