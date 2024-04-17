'use client'
import Header from "@/app/components/Header";
import Banner from "@/app/components/Banner";
import  staticData from "@/app/data/staticData";
import { 
  Typography,
  Button,
  Box
} from "@mui/material";
import Companies from "@/app/components/Companies";
import Services from "@/app/components/Services";
import Manager from "@/app/components/Manager";
import Questions from "@/app/components/Questions";
import Reviews from "@/app/components/Reviews";
import FreeTrial from "@/app/components/FreeTrial";
import Footer from "@/app/components/Footer";
import Image from 'next/image';


export default function Home() {
  return (
    <div>
        <Header
          companyLogo={staticData.header.companyLogo}
          comapnyName={staticData.header.comapnyName}
          items={staticData.header.items}
          profile={staticData.header.profile} 
        />
        <div className="flex flex-col text-center items-center mt-24">
          {staticData.companies[0] && (
            <Banner
              firstContent={staticData.banner[0].firstContent}
              secondContent={staticData.banner[0].secondContent}
              thirdContent={staticData.banner[0].thirdContent}
              applyStyling={true} 
            />
          )}
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:w-auto w-80">
            <Button variant="contained" sx={{ 
              padding:"10px", 
              borderRadius:"8px",
              backgroundColor:"#6941C6", 
              textTransform: "none",
              "&:hover": {
                bgcolor: "#6941C6",
              },
            }}>
              Sign up
            </Button>
            <Button 
              sx={{ 
                padding:"10px", 
                borderRadius:"8px", 
                border:"1px solid #757575", 
                color:"#000000", 
                display:"flex", 
                gap:"6px",
                textTransform: "none",
              }}
            >
              <Image
                src={"/assets/play_button.png"}
                alt="I am Photo"
                width={100}
                height={100}
                style={{width:"20px", height:"20px" }}
              />
              Demo
            </Button>
          </div>
          <div className="p-10">
            <div className="lg:hidden">
              <Box
                component="img"
                alt="my logo."
                src={"/assets/laptop.png"}                                     
              />
            </div>
            <div className="hidden lg:block">
              <Box
                component="img"
                alt="my logo."
                src={"/assets/laptop_half.png"}                                     
              />
            </div>
            <div className="mt-10 lg:mt-24">
              <Typography color="textSecondary">Join 4,000 companies already growing</Typography>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-4 lg:flex lg:space-x-8">
            {staticData.companies.map((company, index) => (
              <div key={index}>
                 <Companies
                  name={company.name}
                  image={company.image}
                 />
              </div>
            ))}
          </div>
            {staticData.companies[1] && (
              <Banner
                firstContent={staticData.banner[1].firstContent}
                secondContent={staticData.banner[1].secondContent}
                thirdContent={staticData.banner[1].thirdContent}
                applyStyling={false} 
              />
            )}
            <div className="lg:grid lg:grid-cols-3 lg:p-16">
              {staticData.services.map((service, index) => (
                <div key={index}>
                  <Services
                    image={service.image}
                    header={service.header} 
                    description={service.description}
                    additionalContent={false}
                    icon={service.icon}
                    learnMore={service.learnMore}
                  />
                </div>              
              ))}
            </div>
            
            <Manager
              companyImage={staticData.companyManager.companyImage}
              companyName={staticData.companyManager.companyName}
              header={staticData.companyManager.header}
              managerImage={staticData.companyManager.managerImage}
              managerName={staticData.companyManager.managerName}
              managerPosition={staticData.companyManager.managerPosition}
            />
            {staticData.companies[2] && (
              <Banner
                firstContent={staticData.banner[2].firstContent}
                secondContent={staticData.banner[2].secondContent}
                thirdContent={staticData.banner[2].thirdContent}
                applyStyling={false} 
              />
            )}
            <div className="lg:hidden">
               <Box
                component="img"
                alt="my logo."
                src={"/assets/iphone.png"}                                     
              />
            </div>
            <div className="hidden lg:block lg:mt-10">
              <Box
                  component="img"
                  alt="my logo."
                  src={"/assets/larger_iphone.png"}                                     
               />
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:p-16">
              {staticData.services.map((service, index) => {
                if (index < 3) {
                    return (
                        <div key={index}>
                            <Services
                                image={service.image}
                                header={service.header} 
                                description={service.description}
                                additionalContent={true}
                                learnMore={service.learnMore}
                                icon={<service.icon />}
                            />
                        </div>  
                    )       
                }
                return null; 
              })}
            </div>
            <Questions 
              header={staticData.faqs.header}
              poster={staticData.faqs.poster}
              queries={staticData.faqs.queries}
              image={staticData.faqs.image}
              confirmation={staticData.faqs.confirmation}
              chatTeam={staticData.faqs.chatTeam}
              buttonLabel={staticData.faqs.buttonLabel}
            />
            <Reviews
              title={staticData.reviews.title} 
              poster={staticData.reviews.poster}
              description={staticData.reviews.description}
              reviewDetails={staticData.reviews.reviewDetails}
            />
            <FreeTrial
              title={staticData.freeTrial.title}
              poster={staticData.freeTrial.poster}
              getStartedButtonLabel={staticData.freeTrial.getStartedButtonLabel}
              learnMoreButtonLabel={staticData.freeTrial.learnMoreButtonLabel} 
            />
            <Footer
              footer={staticData.footer} 
            />
        </div>
    </div>
  );
}
