'use client'
import Header from "@/app/components/Header";
import Banner from "@/app/components/Banner";
import  staticData from "@/app/data/staticData";
import { 
  Typography,
  Box,
  Card,
  CardContent,
  IconButton
} from "@mui/material";
import Services from "@/app/components/Services";
import ItemCategories from "@/app/components/ItemCategories";
import BestSeller from "@/app/components/BestSellers";
import 'react-multi-carousel/lib/styles.css';
import ProductDetails from "./components/ProductDetails";

export default function Home() {

  const items = {
    home: "Home",
    product: "Explore",
    shop: "Shop",
    preOrder: "Pre-Order",
    faqs: "FAQS",
    aboutUs: "About Us",
    contact: "Contact",
    myAccount: "My Account"
  }

  return (
    <div>
       <Header
          companyLogo="/assets/company_logo.png"
          comapnyName="Untitled UI"
          items={items}
          profile="/assets/olivia.png"
          component="Home" 
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
                          background: "rgba(0, 0, 0, 0.5)",
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
      <ProductDetails/>       
    </div>
  );
}
