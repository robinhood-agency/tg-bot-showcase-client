import { CustomButton } from '@common/components/CustomButton/CustomButton';

const App = () => (
  <div>
    <h2>Привет</h2>
    <div style={{ width: 250, marginLeft: 150 }}>
      <CustomButton height={45} buttonType='fourth' >
        Стать участником
      </CustomButton>
    </div>
  </div>
);

export default App;
