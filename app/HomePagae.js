import React, { useState } from 'react';
import {View,StyleSheet, Text, Appearance} from 'react-native';
import DarkMode from './Colors';

const HomePagae = () => {
    const [isDark, setIsDark]=useState(Appearance.getColorScheme())
    Appearance.addChangeListener((scheme) =>{
        setIsDark(scheme.colorScheme);
    })
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>HomePagae</Text>
    </View>
  )
}

export default HomePagae