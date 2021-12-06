import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useCalculate} from './src/library/hooks/useCalculate';

const App = () => {
  const {contador, handleChange, handleChangeTrue} = useCalculate();
  return (
    <>
      <Text>{contador}</Text>
      <Button title="ADD 10" onPress={()=>handleChange(10)} />
      <Button title="ADD 5" onPress={handleChangeTrue} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
