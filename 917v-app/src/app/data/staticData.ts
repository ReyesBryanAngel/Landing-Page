import { BannerItem, Company, Service, CompanyManager } from "@/app/models/StaticDataModel";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface StaticData {
    banner: BannerItem[];
    companies: Company[];
    services: Service[];
    companyManager: CompanyManager;
}

const staticData: StaticData = {
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
            image: "/assets/github.png"
        },
        {
            name: "Circooles",
            image: "/assets/github.png"
        },
        {
            name: "Quotient",
            image: "/assets/github.png"
        },
        {
            name: "SisyPhus",
            image: "/assets/github.png"
        },
        {
            name: "Catalog",
            image: "/assets/github.png"
        },
        {
            name: "HourGlass",
            image: "/assets/github.png"
        }
    ],
    services: [
        {
            image: "/assets/github.png",
            header: "Share team inboxes",
            description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
            additionalContent: null,
            icon: ArrowForwardIcon,
            learnMore: "Learn more",
        },
        {
            image: "/assets/github.png",
            header: "Deliver instant answers",
            description: "An all-in-one customer service platform that helps you balance everything your costumers need to be happy",
            additionalContent: null,
            icon: ArrowForwardIcon,
            learnMore: "Learn more",
        },
        {
            image: "/assets/github.png",
            header: "Manage your team with reports",
            description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple of clicks.",
            additionalContent: null,
            icon: ArrowForwardIcon,
            learnMore: "Learn more",
        },
        {
            image: "/assets/github.png",
            header: "Connect with customers",
            description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
            additionalContent: null,
            icon: null,
            learnMore: null,
        },
        {
            image: "/assets/github.png",
            header: "Connect the tools you already use",
            description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
            additionalContent: null,
            icon: null,
            learnMore: null,
        },
        {
            image: "/assets/github.png",
            header: "Our people make the difference",
            description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
            additionalContent: null,
            icon: null,
            learnMore: null,
        }
    ],
    companyManager: {
        companyImage: "/assets/github.png",
        companyName: "Sisyphus",
        header: "We've been using untitled to kick start every new project and can't imagine working without it.",
        managerImage: "/assets/github.png",
        managerName: "Candice Wu",
        managerPosition: "Product Manager, Sisyphus"
    }
}

export default staticData;