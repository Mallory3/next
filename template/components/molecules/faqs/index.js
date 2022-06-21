import Accordion from '../../atoms/accordion'
import Header from '../../atoms/header'
import HeaderSub from '../../atoms/headerSub'
import Typing from '../../atoms/typing'
import Button from '../../atoms/button'
import Paragraph from '../../atoms/paragraph'

// ICONS
import { FaArrowRight } from "react-icons/fa";


//Get content data
import { GetData } from '../../helper'
import data from '../../../content/data'
//Global content variables
const content = GetData(data);

export const FAQS = () => {
  const faqs = content?.faqs?.questions;
  const header = content?.faqs?.header;
  const subHeader = content?.faqs?.subHeader;

  return (
    <div className="faqs__molecule">
      <div class="header-icon">
        <Header title={header} />
        <Typing />
      </div>
      <HeaderSub title={subHeader} />
      <ul className="faq-list">
        {faqs.map((faq, index) => {
          return (
            <>
              <Accordion 
                key={`${index}-${faq.question[0]}`}
                title={faq.question} 
                content={faq.answer} 
              />
            </>
          )
          })
        }
      </ul>
      <div className="faq-contact">
        <Paragraph content="Still have questions?" />
        <Button 
          type="underline"
          label="Contact Us"
        >
          &nbsp;<FaArrowRight />
        </Button>
      </div>
    </div>
   
  )
}