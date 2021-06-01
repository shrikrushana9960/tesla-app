import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyleButton/Index';
const CarItem=props=>{
    const {name,tagline,image}=props.car;
 
return( 
    <View style={styles.carContainer}>
    <ImageBackground source={image} style={styles.image}/>
        <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{tagline}</Text>
      <View style={styles.buttonContainer}>
      <StyledButton type="primary" content="Set As Wallpaper" onPress={()=>{}}/>
      <StyledButton type="secondary" content="share" onPress={()=>{}}/>
      </View>
    </View>
    

);
};
export default CarItem;