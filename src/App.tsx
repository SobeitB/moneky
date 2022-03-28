import { useEffect, useState, useRef } from "react";
import {Suspense, lazy} from 'react';
import AOS from 'aos';

import {useAppSelector} from './app/hooks'

const Faq = lazy(() => import ('./components/faq/faq'));
const Header = lazy(() => import ('./components/header/header'));
const Main = lazy(() => import ('./components/main/main'));
const MarketPlace = lazy(() => import ('./components/marketPlace/marketPlace'));
const RoadMap = lazy(() => import ('./components/roadMap/roadMap'));
const Footer = lazy(() => import ('./components/footer/footer'));

function App() {
  const [contract, setContract] = useState<any>(false);
  const [error, setErrors] = useState<false | string>(false);
  const {component} = useAppSelector((state:any) => state.chengedSlice);

  const mainRef = useRef(null)
  const roadMapRef = useRef(null)
  const marketPlaceRef = useRef(null)
  const faqRef = useRef(null)
  const footerRef = useRef(null)

  const [main, setMain] = useState<boolean>(false);
  const [roadMap, setRoadMap] = useState<boolean>(false);
  const [marketPlace, setMarket] = useState<boolean>(false);
  const [faq, setFaq] = useState<boolean>(false);
  const [footer, setFooter] = useState<boolean>(false);

  useEffect(() => {
    let main = new IntersectionObserver((entry) => { 
      if(entry[0].isIntersecting) {
        setMain(true)
      }
    })

    let roadMap = new IntersectionObserver((entry) => { 
      if(entry[0].isIntersecting) {
        setRoadMap(true)
      }
    })

    let marketPlace = new IntersectionObserver((entry) => { 
      if(entry[0].isIntersecting) {
        setMarket(true)
      }
    })

    let faq = new IntersectionObserver((entry) => { 
      if(entry[0].isIntersecting) {
        setFaq(true)
      }
    })

    let footer = new IntersectionObserver((entry) => { 
      if(entry[0].isIntersecting) {
        setFooter(true)
      }
    })

    if(mainRef.current !== null) {
      main.observe(mainRef.current)
    }

    if(roadMapRef.current !== null) {
      roadMap.observe(roadMapRef.current)
    }

    if(marketPlaceRef.current !== null) {
      marketPlace.observe(marketPlaceRef.current)
    }

    if(faqRef.current !== null) {
      faq.observe(faqRef.current)
    }

    if(footerRef.current !== null) {
      footer.observe(footerRef.current)
    }
  }, [])

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])

  return (
    <div 
      className={component === '' ? 'App' : 'AppHeight'}
    >
      {error &&
        <div 
          className="bodyError" 
          onClick={() => {
            setErrors(false)
          }}
        >
          <div className="contError">
            {error}
          </div>
        </div>
      }
      <div>
        <Header 
          setContract={setContract}
        />

        <div ref={mainRef} />
        {main && 
          <Suspense fallback={<p>loading</p>}>
            <Main />
          </Suspense>
        }
      </div>
        <div className="body_top">
          <main className="main">
            <div ref={roadMapRef} />
            {roadMap && 
              <Suspense fallback={<p>loading</p>}>
                <RoadMap />
              </Suspense>
            }
          
            <div ref={marketPlaceRef} />
            {marketPlace && 
              <Suspense fallback={<p>loading</p>}>
                <MarketPlace 
                  contractValue={contract}
                  setErrors={setErrors}
                />
              </Suspense>
            }
          
            <div ref={faqRef} />
            {faq && 
              <Suspense fallback={<p>loading</p>}>
                <Faq />
              </Suspense>
            }
            
          </main>

          <div ref={footerRef} />
          {footer && 
            <Suspense fallback={<p>loading</p>}>
              <Footer />
            </Suspense>
          }

        </div>
    </div>
  );
}

export default App;
