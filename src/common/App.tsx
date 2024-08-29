import { CustomInput } from '@common/components/CustomInput/CustomInput';

const App = () => (
  <div>
    <h2>Привет</h2>
    <div style={{ position: 'relative', width: 300, marginLeft: 100, marginTop: 100 }}>
      <CustomInput label='Email' />
    </div>
  </div>
);

export default App;
