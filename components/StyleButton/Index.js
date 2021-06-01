import React  from 'react';
import {Button,View,Pressable,Text} from 'react-native';
import styles from './styles';
const StyledButton =props=>
{
    const type=props.type;
    const content=props.content;
    const onPress=props.onPress;
    const backgroundColor=type==='primary'?'black': '#FFFFFFA6';
    const textColor=type==='primary'?'white': '#171A20';
return(
    
    <View style={styles.container}>
        <Pressable style={{...styles.button,...{backgroundColor:backgroundColor}}}
        onPress={()=>onPress} >
                <Text style={{...styles.text,...{ color: textColor }}}>{content}</Text>
        </Pressable>
    </View>

);
};

export default StyledButton;