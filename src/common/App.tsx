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

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 50, overflow: 'hidden' }}>
    <Header />
    <Landing />
    <Warming />
    <AboutAuthor />
    <Advantages />
    <KnowledgeAndSkills />
    <Tariffs />
    <CatchyInfo />
    <Faq />
    <Contacts />
    <Footer />
  </div>
);

export default App;
