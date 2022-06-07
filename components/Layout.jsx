import Head from "next/head";
import { Box } from '@chakra-ui/react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <>
    <Head>
        <title>UAE Properties</title>
    </Head>
    <Box background='linear-gradient(315deg, #d5fefd 0%, #fffcff 74%)'>
        <Box maxWidth='1280px' m='auto'>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </Box>
    </>
);


export default Layout;


{/*background-color: #f1dfd1;
background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);

background-color: #89d4cf;
background-image: linear-gradient(315deg, #89d4cf 0%, #6e45e1 74%);

background-color: #d5fefd;
background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);

*/}