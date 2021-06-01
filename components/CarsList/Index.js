import React from 'react';
import  {View,Text, FlatList,Dimensions} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem/Index';
const carItems=({item})=>{
    return(
    <CarItem car={item}/>);
};
const CarsList=(props)=>
{

    return(
        <View style={styles.container}> 
          <FlatList data={cars} renderItem={carItems} snapToAlignment={'start'} decelerationRate={'normal'} snapToInterval={Dimensions.get('window').height} showsVerticalScrollIndicator={false}/>
        </View>
    );
};

export default CarsList;