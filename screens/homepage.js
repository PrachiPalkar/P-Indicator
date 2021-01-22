import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class homepage extends React.Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.buttonPressmyprof = this.buttonPressmyprof.bind(this);
        this.buttonPressabout = this.buttonPressabout.bind(this);
    }

    buttonPress() {
        console.log('called');
        this.props.navigation.navigate('bookhere');
    }
    buttonPressmyprof() {
        console.log('called');
        this.props.navigation.navigate('myprof');
    }
    buttonPressabout() {
        console.log('called');
        this.props.navigation.navigate('Aboutu');
    }

    render() {

        const buttonStylesubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            paddingBottom: "17px",
            paddingTop: "3px",
            paddingRight: "18px",
            paddingLeft: "18px",
            fontFamily: "calibri",
            fontSize: "35px",
            marginRight: "80px",
            height: "60px",
            width: "350px",
            borderWidth: 6,
            borderColor: "#FFFFFF",
            marginLeft: 55,
            marginBottom: 40
        }

        return (
            <View style={styles.container}>
                <View style={styles.RectangleShapeView}>
                    <Text style={styles.textHeading}>Home</Text>
                </View>
                <View style={styles.RectangleShapeout}>
                    <View><button style={buttonStylesubmit} onClick={this.buttonPress}>Book My Slot</button>
                </View>
                <View>
                        <button style={buttonStylesubmit} onClick={this.buttonPressmyprof}>My Profile</button>
                </View>
                <View>
                        <button style={buttonStylesubmit} onClick={this.buttonPressabout}>About Us</button>
                </View>
                
               </View>
                <View style={styles.RectangleShapedown}></View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RectangleShapeView: {

        marginTop: 25,
        width: 450,
        height: 150,
        backgroundColor: '#008484',
        marginBottom: 5,
        textAlign:'center'
    },
    RectangleShapeout: {

        marginTop: 25,
        width: 450,
        height: 300,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        textAlign: 'center',
        border:6,
        borderColor:'#008484'
    },
    RectangleShapedown: {

        width: 450,
        height: 80,
        backgroundColor: '#008484',
        textAlign: 'center',
    },
    textHeading: {
        color: "#FFFFFF",
        fontSize: "40px",
        fontFamily: "calibri",
        paddingTop:60
    },
});