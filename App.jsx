import Navigator from './src/router/Navigator';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigator />
    </ApplicationProvider>
  );
};

export default App;
