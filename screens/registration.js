// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { db } from '../config';


let addItem = item => {
    db.ref('/items').push({
        name: item
    });
};

export default class registration extends React.Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }
    buttonPress() {
        console.log('called');
        this.props.navigation.navigate('loginpg');
    }
    // state = {
    //     email: "",
    //     password: "",
    //     username: "",
    //     phoneNo: ""
    // }
    state = {
        name: ''
    };


    handleChange = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };
    handleSubmit = () => {
        addItem(this.state.name);
        console.log('Item saved successfully');
    };

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

        const register = {
            fontFamily: "calibri",
            fontWeight: "bold",
            fontSize: 20,
            color: "#008484"
        }

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>P-Indicator</Text>
                <Text style={styles.inputText}>Username</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="username..."
                        placeholderTextColor="#e1e1e1"
                        onChange={this.handleChange} />
                </View>
                <Text style={styles.inputText}>E-mail Id</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#e1e1e1"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <Text style={styles.inputText}>Password</Text>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#e1e1e1"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <Text style={styles.inputText}>Contact No</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="phoneNo..."
                        placeholderTextColor="#e1e1e1"
                        onChangeText={text => this.setState({ phoneNo: Number })} />
                </View>
                <View>
                    {/* <button style={buttonStylesubmit} onClick={this.buttonPress}>Register</button> */}
                    <button style={buttonStylesubmit} onClick={this.buttonPress}>Register</button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#008484",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        fontFamily: "calibri",
        color: "#e1e1e1",
        // fontStyle:"italic",
        marginBottom: 40
    },
    inputView: {
        width: "50%",
        backgroundColor: "#e1e1e1",
        height: 40,
        marginBottom: 20,
        marginTop: 10,
        justifyContent: "center",
        padding: 10
    },
    inputText: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 16,
        marginRight: 250,
        fontStyle: "italic",
        color: "#000000"
    },
    registerBtn: {
        width: "20%",
        backgroundColor: "#e1e1e1",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 30
    }
});
