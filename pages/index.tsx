import Head from 'next/head'

import { GA_TRACKING_ID } from "../data/gtag";
import Header from "../components/header"
import Hero from "../components/hero";
import Services from "../components/services";
import Footer from '../components/footer';
import About from '../components/about';

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

            <script src="http://localhost:8097"></script>


            <title>SIMPLEBEEZ - Your partner for finance transformation</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
            />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Header />
        <Hero />
        <Services />
        <About />
        <Footer />
        <style global jsx>{`
            .triangle {
                position: relative;
            }

            h1 .triangle:after {
                content: '';
                position: absolute;
                display: block;
                right: -30px;
                top: 15px;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 17px solid #f4ae9c;
            }

            .carousel .control-dots {
                padding: 0;
                bottom: -5px;
            }
            .carousel .slide {
                padding-bottom: 40px;
                padding-left: 40px;
                padding-right: 40px;
                background: transparent;
            }

            .carousel .slide h2 {
                font-size: 20px;
            }
        `}</style>
    </>
);

export default Home;