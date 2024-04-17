import { 
    Product,
    CompanyFooter,
    Resources,
    UseCases,
    Social,
    Legal
} from "@/app/models/FooterModel";
import { Question } from "@/app/models/QuestionModel";
import { ReviewDetails } from "@/app/models/ReviewDetailsModel";
import { HeaderItems } from "@/app/models/HeaderModel";
export interface BannerItem {
    firstContent: string;
    secondContent: string;
    thirdContent: string;
    applyStyling: boolean | null;
}
export interface Company {
    name: string;
    image: string;
}
export interface Service {
    image: string;
    header: string;
    description: string;
    additionalContent: boolean | null;
    icon: any;
    learnMore: string | null;
}
export interface CompanyManager {
    companyImage: string;
    companyName: string;
    header: string;
    managerImage: string;
    managerName: string;
    managerPosition: string;
}
export interface FAQS {
    header: string;
    poster: string;
    queries: Question[];
    image: string;
    confirmation: string;
    chatTeam: string;
    buttonLabel: string;
}
export interface Reviews {
    title: string;
    poster: string;
    description: string;
    reviewDetails: ReviewDetails[];
}
export interface FreeTrials {
    title: string;
    poster: string;
    getStartedButtonLabel:string;
    learnMoreButtonLabel:string
}
export interface Footers {
    product: Product;
    company: CompanyFooter;
    resources: Resources;
    useCases: UseCases;
    social: Social;
    legal: Legal;
    image: string;
    companyName: string;
    allRights: string;
}

export interface Headers {
    companyLogo: string;
    comapnyName: string;
    items: HeaderItems;
    profile: string;
}