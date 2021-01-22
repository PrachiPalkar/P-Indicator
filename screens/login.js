// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';

// let addItem = item => {
//     db.ref('/items').push({
//         name: item
//     });
// };

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.buttonlogin = this.buttonlogin.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonlogin =()=>  {
        console.log('called');
        this.props.navigation.navigate('homepg');
    }

    buttonClick() {
        console.log('called');
        this.props.navigation.navigate('register');
    }

    state = {
        email: "",
        password: ""
    }
    // handleChange = e => {
    //     this.setState({
    //         name: e.nativeEvent.text
    //     });
    // };
    // handleSubmit = () => {
    //     addItem(this.state.name);
    //     console.log('Item saved successfully');
    // };

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

        const loginText = {
            fontFamily: "calibri",
            fontSize: 18,
            backgroundColor: "#FFFFFF",
            borderColor: "#FFFFFF",
            color: "#008484"
        }

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>P-Indicator</Text>

                <Text style={styles.EText}>E-mail Id</Text><br></br>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#e1e1e1"
                        onChange={this.handleChange} />
                </View>
{/* 
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} />
                </View>   */}
                

                <Text style={styles.EText}>Password</Text><br></br>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#e1e1e1"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.buttonlogin}
                >
                    <Text style={styles.buttonText}>login</Text>
                </TouchableHighlight>

                <Text style={styles.account}>Don't have an account?</Text>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.buttonClick}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableHighlight>
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
        marginBottom: 40
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center',
        color: '#008484',
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width:"20%",
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 6,
        borderColor: "#FFFFFF",
        color: '#008484',
    },
    inputView: {
        width: "50%",
        backgroundColor: "#FFFFFF",
        height: 40,
        marginBottom: 20,
        marginTop: 10,
        justifyContent: "center",
        // borderColor: "#e1e1e1",
        padding: 10
    },
    inputText: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 26,
        marginRight: 250,
        fontStyle: "italic",
        color: "#000000",
        alignItems: 'center',
        padding: 10
    },

    EText: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 26,
        marginRight: 250,
        fontStyle: "italic",
        color: "#e1e1e1",
        alignItems: 'center',
        padding: 10,
        color:"#FFFFFF"
    },
    forgot: {
        marginLeft: 200,
        color: "#e1e1e1",
        fontFamily: "calibri",
        fontSize: 14,
    },
    account: {
        color: "#e1e1e1",
        fontFamily: "calibri",
        fontStyle: "italic",
        fontSize: 14,
    },
    loginBtn: {
        width: "20%",
        backgroundColor: "#e1e1e1",
        borderRadius: 20,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 30,
        color: "#008484"
    },
    signUpBtn: {
        width: "20%",
        backgroundColor: "#e1e1e1",
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 20,
        color: "#008484"
    }
});
