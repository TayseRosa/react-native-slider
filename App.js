import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Slider from '@react-native-community/slider';

export default function App() {
  const [valor, setValor] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}> React Native - Slider  </Text>

      <Slider 
        style={{width:300, height:50}}
        minimumValue={0}
        maximumValue={100}
        onValueChange={ (valSelecionado) => setValor(valSelecionado) }
        value={valor}
      />
      
      <Text style={{color: 'blue', fontSize:20}}> O valor atual é: {valor} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
