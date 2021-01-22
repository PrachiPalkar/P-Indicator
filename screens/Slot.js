import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { db } from '../config';

let id=1;
let addItem = item => {
    db.ref('/Slot'+id).push({
        slot: item
    });
};


export default class Slot extends React.Component {

    state = {
        slot: '',
    };

    Slot1 = () => {
        this.setState({
            slot: 'slot 1'
        });
    }
    Slot2 = () => {
        this.setState({
            slot: 'slot 2'
        });
    }
    Slot3 = () => {
        this.setState({
            slot: 'slot 3'
        });
    }

    Slot4 = () => {
        this.setState({
            slot: 'slot 4'
        });
    }
    Slot5 = () => {
        this.setState({
            slot: 'slot 5'
        });
    }
    Slot6 = () => {
        this.setState({
            slot: 'slot 6'
        });
    }
    Slot7 = () => {
        this.setState({
            slot: 'slot 7'
        });
    }
    Slot8 = () => {
        this.setState({
            slot: 'slot 8'
        });
    }
    Slot9 = () => {
        this.setState({
            slot: 'slot 9'
        });
    }
    Slot10 = () => {
        this.setState({
            slot: 'slot 10'
        });
    }

    
    handleSubmit = () => {
        addItem(this.state.slot);
            console.log('Item saved successfully');
            this.props.navigation.navigate('pay');     
    };

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress() {
        console.log('called');
        this.props.navigation.navigate('pay');
    }
    render() {
        const buttonStyle = {
            color: "#008484",
            backgroundColor: "#FFFFFF",
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyleten = {
            color: "#008484",
            backgroundColor: "#FFFFFF",
            padding: "17px",
            paddingTop: "10px",
            paddingRight: "18px",
            paddingLeft: "18px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyleentry = {
            color: "#008484",
            backgroundColor: "#FFFFFF",
            padding: "17px",
            paddingTop: "10px",
            paddingRight: "18px",
            paddingLeft: "18px",
            fontFamily: "calibri",
            fontSize: "25px",
            marginRight: "80px",
            height: "60px",
            width: "200px"
        }
        const buttonStyleGo = {
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
            width: "150px",
            borderWidth: 6,
            borderColor: "#FFFFFF",
        }
        const selectText = {
            color: "#FFFFFF",
            fontFamily: "calibri",
            justifyContent: 'center',
            fontSize: "40px",
            marginRight: 65
        }
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Text style={selectText}>Select Your Slot</Text>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyle} onClick={this.Slot1}>Slot 1</button>
                    <button style={buttonStyle} onClick={this.Slot2}>Slot 2</button>
                </View>
                {/* disabled="true" */}
                <View style={styles.rowContainer}>
                    <button style={buttonStyle} onClick={this.Slot3}>Slot 3</button>
                    <button style={buttonStyle} onClick={this.Slot4}>Slot 4</button>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyle} onClick={this.Slot5}>Slot 5</button>
                    <button style={buttonStyle} onClick={this.Slot6}>Slot 6</button>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyle} onClick={this.Slot7}>Slot 7</button>
                    <button style={buttonStyle} onClick={this.Slot8}>Slot 8</button>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyle} onClick={this.Slot9}>Slot 9</button>
                    <button style={buttonStyleten} onClick={this.Slot10} >Slot 10</button>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyleentry} disabled="true">Entry Gate</button>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyleGo} onClick={this.handleSubmit}>GO</button>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008484',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowContainer: {
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2px'
    },
    buttonText :{
        color: "#008484",
        backgroundColor: "#FFFFFF",
        fontFamily: "calibri",
        fontSize: "30px",
        borderColor: "#FFFFFF"
    }

});
