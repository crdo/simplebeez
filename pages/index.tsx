import Head from 'next/head'

import { GA_TRACKING_ID } from "../data/gtag";
import Header from "../components/header"
import Hero from "../components/hero";
import Services from "../components/services";
import Footer from '../components/footer';

const Home = () => (
    <>
        <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
                }}
            />


            <title>SIMPLEBEEZ - Finance Transformation, Business Process Management, Interim Management</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
            />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <Hero heading="Think Differently, Go Beyond!" content="We dream, we think, and we work to make the world around us more simple, smarter and meaningful." />
        <Services />
        <Footer />
    </>
);

export default Home;