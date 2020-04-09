import Head from 'next/head'

import { GA_TRACKING_ID } from "../data/gtag";
import Header from "../components/header"
import Hero from "../components/hero";
import Services from "../components/services";
import Footer from '../components/footer';
import About from '../components/about';
import Download from '../components/download';

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


            <title>SIMPLEBEEZ - Váš partner pro transformaci financí</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
            />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <Hero />
        <Download />
        <Services />
        <About />
        <Footer />
        <style global jsx>{`
            :root {
                --primary: #f4ae9c;
            }
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
                padding-left: 20px;
                padding-right: 20px;
                background: transparent;
            }

            .carousel .slide h2 {
                font-size: 20px;
                font-weight: 400;
            }
        `}</style>
    </>
);

export default Home;