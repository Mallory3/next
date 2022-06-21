import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MobileNav from '../components/mobileNav/MobileNav'
import Header from '../components/atoms/header'
import HeaderSub from '../components/atoms/headerSub'
import HeaderSection from '../components/atoms/headerSection'
import Paragraph from '../components/atoms/paragraph'
import Button from '../components/atoms/button'
import Map from '../components/atoms/map'
import {FAQS} from '../components/molecules/faqs'

import { 
  Email, 
  EmailUs, 
  Phone, 
  PhoneUs,
  TextUs,
  ContactList,
  ContactMapSection,
  ContactSection
} from '../components/atoms/contact'
import SectionHeader from '../components/molecules/SectionHeader'
import ContentHeader from '../components/molecules/ContentHeader'
import ExpandText from '../components/molecules/ExpandText'
import { ParallaxBanner } from '../components/templates/parallaxBanner'
import Footer from '../components/templates/footer'


// ICONS
import { FaArrowRight } from "react-icons/fa";
//GET DATA CONTENT
import { GetData } from '../components/helper'
import data from '../content/data'



export default function Homepage() {
  //Importing data from content/data
  const content = GetData(data);
  //Define content
  const mapEmbedded = content.contact.map.embedded
  const sectionHeader = content.globalContent.sectionHeader
  return (
    <>
      <MobileNav />
      <div className={styles.container}>
        {/* Atoms */}
        {/* <Header title="Header" /> */}
        {/* <HeaderSub title="Sub Header" /> */}
        {/* <HeaderSection title="--CHECK OUT OUR" /> */}
        <Button label="primary" type="primary"> <FaArrowRight /></Button>
        <Button label="secondary" type="secondary"> <FaArrowRight /></Button>
        <Button label="underline" type="underline"> <FaArrowRight /></Button>

        {/* Moleules */}
        <SectionHeader header="Header" sectionHeader={sectionHeader} />
        <ContentHeader header="Header" subHeader="Sub Header" />
        <Paragraph>I am a paragraph</Paragraph>
        <ExpandText 
          content="I am expandable text. I am expandable text. I am expandable text. I am expandable text. I am expandable text. I am expandable text. I am expandable text. I am expandable text. I am expandable text. I am expandable text. I am expandable text. I am expandable text. I am expandable text." 
          />
        {/* <Map src={mapEmbedded} /> */}
        {/* <PhoneUs />
        <TextUs />
        <EmailUs /> */}
        {/* <ContactList /> */}
        {/* <ContactMapSection /> */}
        <ContactSection />
        {/* <ParallaxBanner /> */}
        <Footer />
        <FAQS />
      </div>
    </>
  )
}
