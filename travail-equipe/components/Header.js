import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Header = ({titre, couleurFond}) => {
    return (
        <View style={[styles.header, {backgroundColor: couleurFond}]}>
            <Text style={styles.title}>{ titre }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "blue",
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: "white",
        fontSize: 20,
        fontWeight: '500',
        textTransform: 'uppercase' 
    }
});

export default Header;