import { Box, Container } from "@mui/material";
import RegisterForm from "./registration-form";
import Header from "@/components/Header";
import { navItems } from "@/utils/navItems";

import Copyright from "@/components/Copyright";



const creactAccount = () => {


  return (
    <>
        <Header
            logoLight=""
            logoDark="/logo.svg"
            navItems={navItems}
            forceScrolled={true}
          />
              <Box
            sx={(theme) => ({
              ...theme.mixins.sectionLayout,
              paddingTop: { xs: '50px',},
            })}
          >
    <Container maxWidth="lg">
   <RegisterForm />
   </Container>
   </Box>
   <Copyright />
    </>

  );
};

export default creactAccount;
