'use client'

import Image from "next/image";
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


export default function Home() {
  return (
    <div>
        <Header />
        <div className="flex flex-col text-center items-center mt-24">
          {staticData.companies[0] && (
            <Banner
              firstContent={staticData.banner[0].firstContent}
              secondContent={staticData.banner[0].secondContent}
              thirdContent={staticData.banner[0].thirdContent}
              applyStyling={true} 
            />
          )}
          <div className="mt-5 flex flex-col gap-5 w-full">
            <Button variant="contained">Sign up</Button>
            <Button variant="outlined">Demo</Button>
          </div>
          <div className="mt-10">
            {/* <Box /> */}
            <h4>IMAGE</h4>
            <Typography>Join 4,000 companies already growing</Typography>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-4">
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
            {/* {staticData.services.map((service, index) => {
              if (index < 3) {
                return (
                  <div key={index}>
                    <Services
                      image={service.image}
                      header={service.header} 
                      description={service.description}
                      additionalContent={true}
                      icon={service.icon}
                      learnMore={service.learnMore}
                    />
                  </div>  
                )       
              }
              return null; 
            })} */}
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
                              icon={<service.icon />} // Pass the icon component directly
                          />
                      </div>  
                  )       
              }
              return null; 
          })}
        </div>
    </div>
  );
}
