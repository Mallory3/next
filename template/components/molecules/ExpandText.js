import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Paragraph from '../atoms/paragraph'
import Button from '../atoms/button'


const ExpandableText = ({ content, charLimit }) => {
  const [expandableText, setExpandableText] = useState(false);

  const showText = () => setExpandableText(true);
  const hideText = () => setExpandableText(false);
  const shortText = content.length <= charLimit
  const text = content.substring(0, charLimit)

  if (shortText) {
    return (
      <Paragraph>
        {content}
      </Paragraph>
    )
  }
  if (expandableText) {
    return (
      <Paragraph>
        {content}&nbsp;
        <Button 
          label="Read less"
          type="readMore"
          onClick={hideText}
        > 
          &nbsp;<IoIosArrowUp />
        </Button>
      </Paragraph>
    )
  }
  return (
    <Paragraph>
        {text}&nbsp;
        <Button 
          label="...Read more"
          type="readMore"
          onClick={showText}
        >
          &nbsp;<IoIosArrowDown />
        </Button>
    </Paragraph>
  )
}

const ExpandText = ({ content }) => {

  return <ExpandableText content={content} charLimit={250} /> 
}

export default ExpandText;
