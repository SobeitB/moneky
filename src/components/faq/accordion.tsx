import { useState } from 'react';
import {
   PopapQuestion,
   TitleQuestion,
   TextQuestion,
   QuestionTop,
   Img,
} from './faq.styled'

import plus from './img/+.svg'
interface props {
   title: string;
   text: string;
}

function Accordion({ title, text}:props ) {
   const [open, setOpen] = useState<boolean>(false) 

   const onOpen = () => {
      setOpen(!open)
   }

   return (
      <PopapQuestion 
         onClick={onOpen}
         open={open}
      >
         <QuestionTop open={open}>
            <TitleQuestion>{title}</TitleQuestion>
            <Img 
               data-aos="flip-left" 
               data-aos-duration="2000"
               src={plus} 
               alt="" 
            />
         </QuestionTop>

         <TextQuestion open={open}>{text}</TextQuestion>
      </PopapQuestion>
   );
}

export default Accordion;