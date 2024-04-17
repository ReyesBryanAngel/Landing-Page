import { 
    BannerItem, 
    Company, 
    Service, 
    CompanyManager, 
    FAQS, 
    Reviews,
    FreeTrials,
    Footers,
    Headers
} from "@/app/models/StaticDataModel";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface StaticData {
    banner: BannerItem[];
    companies: Company[];
    services: Service[];
    companyManager: CompanyManager;
    faqs: FAQS;
    reviews: Reviews;
    freeTrial: FreeTrials;
    footer: Footers;
    header: Headers;
}

const staticData: StaticData = {
    header: {
        companyLogo: "/assets/company_logo.png",
        comapnyName: "Untitled UI",
        items: {
            home: "Home",
            product: "Products",
            resources: "Resources",
            pricing: "Pricing"
        },
        profile: "/assets/olivia.png"
    },
    banner:[
        {
            firstContent: "New feature Check out the team dashboard",
            secondContent: "Beautiful analytics to grow smarter",
            thirdContent: "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
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
            header: "Share team inboxes",
            description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
            additionalContent: null,
            icon: ArrowForwardIcon,
            learnMore: "Learn more",
        },
        {
            image: "/assets/analytics_icon.png",
            header: "Deliver instant answers",
            description: "An all-in-one customer service platform that helps you balance everything your costumers need to be happy",
            additionalContent: null,
            icon: ArrowForwardIcon,
            learnMore: "Learn more",
        },
        {
            image: "/assets/charge_icon.png",
            header: "Manage your team with reports",
            description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple of clicks.",
            additionalContent: null,
            icon: ArrowForwardIcon,
            learnMore: "Learn more",
        },
        {
            image: "/assets/smile_icon.png",
            header: "Connect with customers",
            description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
            additionalContent: null,
            icon: null,
            learnMore: null,
        },
        {
            image: "/assets/unknown_icon.png",
            header: "Connect the tools you already use",
            description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
            additionalContent: null,
            icon: null,
            learnMore: null,
        },
        {
            image: "/assets/message_icon.png",
            header: "Our people make the difference",
            description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
            additionalContent: null,
            icon: null,
            learnMore: null,
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