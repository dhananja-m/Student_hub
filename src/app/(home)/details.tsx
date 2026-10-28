import React, { useState } from "react";
import {View,Text,Image,StyleSheet} from 'react-native';

export default function DetailsScreen(){
    const[modalVisible,setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Digital ID Card</Text>
            <Image source={require('C:\\Users\\Dhananja Milindu\\Documents\\Kelaniya\\YEAR 3\\SEM II\\COSC 32152\\Practical Guide 03\\Practical Guide 03\\Mini Student Hub\\StudentHub\\assets\\images\\user.png')} style={styles.image}/>
            <Text style={styles.text}>Name: Enter your name hear</Text> 
            <Text style={styles.text}>Student ID: Enter Your ID hear</Text>
            <Text style={styles.text}>Course: Mobile Application Development</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1,padding: 20, alignItems: 'center'},
    title: {fontSize: 22, fontWeight: 'bold', marginBottom: 100, marginTop: 40},
    text: {fontSize: 18, marginBottom: 10},
    image: {width: 200, height: 200, resizeMode: 'contain', marginBottom: 20}
})