import { useEffect } from 'react';
import { AboutAuthor } from '@modules/aboutAuthor/aboutAuthor';
import { Advantages } from '@modules/advantages/Advantages';
import { CatchyInfo } from '@modules/catchyInfo/catchyInfo';
import { Contacts } from '@modules/contacts/Contacts';
import { Faq } from '@modules/Faq/faq';
import { Footer } from '@modules/footer/Footer';
import { Header } from '@modules/header/Header';
import { KnowledgeAndSkills } from '@modules/KnoledgeAndSkiils/KnowledgeAndSkills';
import { Landing } from '@modules/landing/landing';
import { Tariffs } from '@modules/tariffs/Tariffs';
import { Warming } from '@modules/warming/Warming';

const App = () => {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;

                if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerHeight;

                    window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth',
                    });
                }
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 50, overflow: 'hidden' }}>
          <div id='header'>
              <Header />
          </div>
          <Landing />
          <Warming />
          <div id='author'>
              <AboutAuthor />
          </div>
          <Advantages />
          <KnowledgeAndSkills />
          <div id='tariffs'>
              <Tariffs />
          </div>
          <CatchyInfo />
          <div id='questions'>
              <Faq />
          </div>
          <div id='form'>
              <Contacts />
          </div>
          <Footer />
      </div>
    );
};

export default App;
