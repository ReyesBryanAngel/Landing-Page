'use client'
import Header from "@/app/components/Header";
import Banner from "@/app/components/Banner";
import  staticData from "@/app/data/staticData";
import { 
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  IconButton
} from "@mui/material";
import Companies from "@/app/components/Companies";
import Services from "@/app/components/Services";
import Manager from "@/app/components/Manager";
import Questions from "@/app/components/Questions";
import Reviews from "@/app/components/Reviews";
import FreeTrial from "@/app/components/FreeTrial";
import Footer from "@/app/components/Footer";
import Image from 'next/image';
import ItemCategories from "@/app/components/ItemCategories";
import BestSeller from "@/app/components/BestSellers";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
      <div>
        <Header
          companyLogo={staticData.header.companyLogo}
          comapnyName={staticData.header.comapnyName}
          items={staticData.header.items}
          profile={staticData.header.profile} 
        />
        <div className="flex flex-col text-center items-center mt-24">
          <div className="items-center lg:self-start lg:ml-44">
            {staticData.companies[0] && (
              <Banner
                firstContent={staticData.banner[0].firstContent}
                secondContent={staticData.banner[0].secondContent}
                thirdContent={staticData.banner[0].thirdContent}
                applyStyling={true} 
              />
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:self-start lg:ml-44">
            {staticData.services.map((service, index) => { 
              if (index < 3) {
                  return (
                      <div key={index}>
                          <Services
                              image={service.image}
                              header={service.header} 
                              description={service.description}
                              additionalContent={true}
                              // learnMore={service.learnMore}
                              // icon={<service.icon />}
                          />
                      </div>  
                  )       
              }
                return null; 
              })}
          </div>
          <ItemCategories
            header={staticData.popularCategories.header}
            title={staticData.popularCategories.title}
            categoryItems={staticData.popularCategories.categoryItems}
            categoryButton={staticData.popularCategories.categoryButton}
          />
          <BestSeller
            title={staticData.bestSellers.title}
            products={staticData.bestSellers.products}
          />
          <div className="grid lg:grid-cols-3 mt-10 gap-5">
            {staticData.mainItems.map((mainItem, index) => {
              return (
                <IconButton key={index}>
                  <Card elevation={4} sx={{ width: "300px", height: "200px", flexShrink: 0, position: "relative", overflow: "hidden", }}>
                    <CardContent sx={{ padding: 0 }}>
                        <Box
                          component="img"
                          alt="mainItems"
                          src={mainItem.product}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better text visibility
                            color: "white",
                            textAlign: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Typography variant="subtitle1">{mainItem.title}</Typography>
                        </Box>
                    </CardContent>
                  </Card>
                </IconButton>
              )
            })}
          </div>              
        </div>
        {/* <Footer
          footer={staticData.footer} 
        /> */}
        <div>
          
        </div>
        <Carousel responsive={responsive} className="flex lg:ml-56 border ">
          <div>
            <div className="lg:size-1/2"> 
              <Box
                component="img"
                alt="mainItems"
                src={"/assets/tennis_assets/women_tennis.jpg"}
              />       
              <Typography variant="subtitle1">palda</Typography>
            </div>
            <div className="lg:size-1/2">
              <Box
                  component="img"
                  alt="mainItems"
                  src={"/assets/tennis_assets/women_tennis.jpg"}
                  sx={{
                    // width: "45%",
                    // height: "45%",
                    objectFit: "cover",
                  }}
                />       
                <Typography variant="subtitle1">palda2</Typography>
            </div>
          </div>
          <div>
            <div className="lg:size-1/2">
              <Box
                component="img"
                alt="mainItems"
                src={"/assets/tennis_assets/women_tennis.jpg"}
                sx={{
                  // width: "45%",
                  // height: "45%",
                  objectFit: "cover",
                }}
              />       
              <Typography variant="subtitle1">palda3</Typography>
            </div>
            <div className="lg:size-1/2">
              <Box
                component="img"
                alt="mainItems"
                src={"/assets/tennis_assets/women_tennis.jpg"}
                sx={{
                  // width: "45%",
                  // height: "45%",
                  objectFit: "cover",
                }}
              />       
              <Typography variant="subtitle1">palda3</Typography>
            </div>
          </div>
          <div>
            <div className="lg:size-1/2"> 
              <Box
                component="img"
                alt="mainItems"
                src={"/assets/tennis_assets/women_tennis.jpg"}
                sx={{
                  // width: "45%",
                  // height: "45%",
                  objectFit: "cover",
                }}
              />       
              <Typography variant="subtitle1">palda</Typography>
            </div>
            <div className="lg:size-1/2">
              <Box
                  component="img"
                  alt="mainItems"
                  src={"/assets/tennis_assets/women_tennis.jpg"}
                  sx={{
                    // width: "45%",
                    // height: "45%",
                    objectFit: "cover",
                  }}
                />       
                <Typography variant="subtitle1">palda2</Typography>
            </div>
          </div>
          <div>
            <div className="lg:size-1/2">
              <Box
                component="img"
                alt="mainItems"
                src={"/assets/tennis_assets/women_tennis.jpg"}
                sx={{
                  // width: "45%",
                  // height: "45%",
                  objectFit: "cover",
                }}
              />       
              <Typography variant="subtitle1">palda3</Typography>
            </div>
            <div className="lg:size-1/2">
              <Box
                component="img"
                alt="mainItems"
                src={"/assets/tennis_assets/women_tennis.jpg"}
                sx={{
                  // width: "45%",
                  // height: "45%",
                  objectFit: "cover",
                }}
              />       
              <Typography variant="subtitle1">palda3</Typography>
            </div>
          </div>
        </Carousel>
        </div>
  );
}
