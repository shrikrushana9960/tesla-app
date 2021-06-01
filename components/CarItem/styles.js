import React from'react';
import {Dimensions, StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height
      },
      title:{
        fontSize:40,
        marginTop:'30%',
        width:'100%',
        textAlign:'center',
        fontWeight:'bold',
    
      },
      titles:{
        marginTop:'30',
        width:'100%',
        alignItems:'center'
      },
      subtitle:{
        fontSize:16,
        width:'100%',
        textAlign:'center',
        color:'#5c5e62',
    
      },
      image:
      {
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },
      buttonContainer:{
        position:'absolute',
        bottom:50,
        width:'100%'
      }
});
export default styles;