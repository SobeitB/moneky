import Accordion from './accordion';
import {
   Main,
   MainTitle,
} from './faq.styled'

import {useEffect, useRef} from 'react'
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {chengedComponent} from '../../app/chengedSlice'

interface faqTextI{
   title:string;
   text:string;
}

function Faq() {
   const dispatch = useAppDispatch();
   let mainref = useRef<HTMLDivElement>(null);
   const {component} = useAppSelector((state:any) => state.chengedSlice);

   useEffect(() => {
      if(component === 'faq') {
         if(mainref.current !== null) {
            mainref.current.scrollIntoView({
               block:"center",
               inline:"nearest",
               behavior:"smooth"
            })

            dispatch(chengedComponent(''));
         }
      }
   }, [component])

   const faqText:faqTextI[] =[
      {
         title:'1. How often will the collections be released?',
         text:'Each month we will announce the collection devoted to certain sports'
      },

      {
         title:"2. What's the minimum price?",
         text:'0.02 ETH'
      },

      {
         title:'3. How can one get on the whitelist?',
         text:'Before collection release we will publish the link to our whitelist on our Twitter and Instagram accounts. Follow us to learn more about future presales'
      },

      {
         title:'4. How many tokens are there in total? ',
         text:'The first collection contains 1016 unique tokens '
      },
   ]

   return (
      <Main ref={mainref}>
         <MainTitle 
           
            data-aos="fade-down"
         >FAQ</MainTitle>

         {
            faqText.map((faq:faqTextI, i:number) => {
               return(
                  <Accordion 
                     key={i}
                     title={faq.title}
                     text={faq.text}
                  />
               )
            })
         }
      </Main>
   );
}

export default Faq;