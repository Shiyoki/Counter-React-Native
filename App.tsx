import React from 'react';
import {SafeAreaView} from 'react-native';
import { FlexScreen } from './src/screens/FlexScreen';
import {PositionScreen} from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
