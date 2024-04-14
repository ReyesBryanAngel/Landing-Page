import React from "react";

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