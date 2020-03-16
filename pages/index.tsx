import Head from 'next/head'

import Header from "../components/header"
import Hero from "../components/hero";
import Services from "../components/services";
import Footer from '../components/footer';

const Home = () => (
    <>
        <Head>
            <title>SimpleBEEZ - Finance Transformation, Business Process Management, Interim Management</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
            />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700&display=swap" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <Header />
        <Hero heading="Think Differently, Go Beyond!" content="We dream, we think, and we work to make the world around us more simple, smarter and meaningful." />
        <Services />
        <Footer />
    </>
);

export default Home;