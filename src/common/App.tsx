import { CustomButton } from '@common/components/CustomButton/CustomButton';
import { SocialsButton } from '@common/components/SocialsButton/SocialsButton';

const handleOpenYoutube = () => {
  window.open('https://youtube.com');
};

const handleOpenX = () => {
  window.open('https://x.com');
};

const handleOpenTelegram = () => {
  window.open('https://web.telegram.org/');
};

const App = () => (
  <div>
      <h2>Привет</h2>
      <CustomButton buttonType='third'>Hello</CustomButton>
        <br/>
      <SocialsButton onClick={handleOpenYoutube} buttonIcon='yt'>
        { 235331 }
      </SocialsButton>
        <br/>
      <SocialsButton onClick={handleOpenTelegram} buttonIcon='tg'>
        { 425725 }
      </SocialsButton>
        <br/>
      <SocialsButton onClick={handleOpenX} buttonIcon='x'>
        { 80412 }
      </SocialsButton>
  </div>
);

export default App;
