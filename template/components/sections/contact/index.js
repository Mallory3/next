//Icons
import { BsChatLeftText } from "react-icons/bs"; //text
import { FiPhoneCall } from "react-icons/fi"; //call
import { FaRegPaperPlane } from "react-icons/fa"; //email
import { MdLocationPin } from "react-icons/md"; //location
import { FaRegClock } from "react-icons/fa"; //hours
//Icon Styles
import { IconContext } from "react-icons";
// Components
import { QuestionsForm } from '../../forms/questions'
import Button from '../../atoms/button'
import Flex from '../../atoms/flex'
import Map from '../../atoms/map'
import Section from '../../atoms/section'
import ContentHeader from '../../molecules/ContentHeader'
//Get content data
import { GetData } from '../../helper'
import data from '../../../content/data'
//Global content variables
const content = GetData(data);
const phone = content?.contact?.phone
const text = content?.contact?.text
const email = content?.contact?.email

export const Phone = () => {
  return <span>{ phone }</span>;
}

export const Text = () => {
  return <span>{ text }</span>;
}

export const Email = () => {
  return <span>{ email }</span>;
}

export const PhoneUs = () => {
  return (
    <a href={`tel:${phone}`}>
      <IconContext.Provider value={{ className:"contact-icon phone-icon" }}>
        <div>
          <FiPhoneCall />
        </div>
      </IconContext.Provider>
    </a>
  );
}

export const TextUs = () => {
  return (
    <a href={`sms:${phone}`}>
      <IconContext.Provider value={{ className: "contact-icon text-icon" }}>
        <div>
          <BsChatLeftText />
        </div>
      </IconContext.Provider>
    </a>
  );
}

export const EmailUs = () => {
  return (
    <a href={`email:${email}`}>
      <IconContext.Provider value={{ className: "contact-icon email-icon" }}>
        <div>
          <FaRegPaperPlane />
        </div>
      </IconContext.Provider>
    </a>
  );
}

export const LocateUs = () => {
  const number = content?.contact?.address?.number
  const street = content?.contact?.address?.street
  const city = content?.contact?.address?.city
  const postal = content?.contact?.address?.postal
  const mapUrl = content?.contact?.map.url

  return (
    <Flex>
        <a href={mapUrl}>
          <IconContext.Provider value={{ className: "contact-icon location-icon" }}>
            <div>
              <MdLocationPin />
            </div>
          </IconContext.Provider>
        </a>
        <span>
          {number !== '' ? `${number} ` : null}
          {street !== '' ? `${ street } ` : null}
          {city !== '' ? `${ city } ` : null}
          {postal !== '' ? `${ postal }` : null}
        </span>
    </Flex>
  );
}

export const ContactList = () => {
  return (
    <ul className="contact-list">
      <li>
        <PhoneUs />
        <span className="contact-header">Phone Us:&nbsp;</span>
        <Phone />
      </li>
      <li>
        <TextUs />
        <span className="contact-header">Text Us:&nbsp;</span>
        <Text />
      </li>
      <li>
        <EmailUs />
        <span className="contact-header">Email Us:&nbsp;</span>
        <Email />
      </li>
    </ul>
  );
}


export const ContactMapSection = () => {
  const contact = content?.sections?.contact
  const firstCardheader = contact?.firstCard.header
  const firstCardSubHeader = contact?.firstCard.subHeader
  const secondCardheader = contact?.secondCard.header
  const secondCardSubHeader = contact?.secondCard.subHeader
  const thirdCardheader = contact?.thirdCard.header
  const thirdCardSubHeader = contact?.thirdCard.subHeader

  const mapEmbedded = content?.contact?.map.embedded

  return (
    <Flex className="contact-items">
      <div className="contact-item phone-item">
        <ContentHeader header={firstCardheader} subHeader={firstCardSubHeader} />
        <ContactList />
        <Button className="secondary" label="Hours">
          <FaRegClock />
        </Button>
      </div>
      <div className="contact-item email-item">
        <ContentHeader header={secondCardheader} subHeader={secondCardSubHeader} />
        <QuestionsForm />
      </div>
      <div className="contact-item map-item">
        <ContentHeader header={thirdCardheader} />
        <LocateUs />
        <Map src={mapEmbedded} />
      </div>
    </Flex>
  );
}

export const ContactSection = () => {

  return (
    <>
      <Section 
        id="contact-section" 
      >
        <ContactMapSection />
      </Section>
    </>
  )
}
