import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHeader from "../components/HomePageHeader";
import HomePageTeaser from "../components/HomePageTeaser";
import HomepageModules from "../components/HomePageModules";
import HomePageFormateur from "../components/HomePageFormateur";
import HomePageEnroll from "../components/HomePageEnroll";
import HomePageFaq from "../components/HomePageFaq";
import ContactUs from "../components/ContactForm";


export default function Form() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <main>
                <ContactUs/>
            </main>
        </Layout>
    );
}
