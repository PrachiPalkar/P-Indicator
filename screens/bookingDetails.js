import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import RadioForm from 'react-native-simple-radio-button';
import { db } from '../config';

var TypeOfVehi = [
    { label: "  Car            ", value: "Car" },
    { label: "  Bike", value: "Bike" },
];

let addItem = (item,item2,item3,item4,item5) => {
    db.ref('/BookingDet').push({
        timeDur: item,
        timehr: item2 + ":" + item3 + " " + item4,
        vehitype: item5,
    });
};

export default class bookingDetails extends React.Component {


    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress= () => {
        console.log('called');
        this.props.navigation.navigate('Mazemap');
    }

    state = { 
        timeDur: '',
        timehr:'',
        timemin:'',
        timeap:'',
        vehitype:''
    }
    TimeDur = (td) => {
        this.setState({ timeDur: td })
    };
    Timehr = (th) => {
        this.setState({ timehr: th })
    };
    Timemin = (tm) => {
        this.setState({ timemin: tm })
    };
    Timeap = (tap) => {
        this.setState({ timeap: tap })
    };
    VehiType = (VT) => {
        this.setState({ vehitype: VT })
    }


    dataSubmit = () => {
        addItem(this.state.timeDur, this.state.timehr, this.state.timemin,this.state.timeap,this.state.value);
        console.log('Item saved successfully');
        this.props.navigation.navigate('Mazemap');
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


        return (

            <View style={styles.container}>
                <Text style={styles.textHeading}>Booking Details</Text>
                <View style={styles.RectangleShapeView}>
                    <br></br>
                    <Text style={styles.texttypevehi}>Type of Vehicle</Text>
                    <View>                        
                        <RadioForm style={styles.dropdown}
                            radio_props={TypeOfVehi}
                            initial={2}
                            onPress={(value) => { this.setState({ value: value }) }}
                            // onPress={(value) => { this.state.vehitype }}
                            buttonSize={10}
                            buttonColor={"#008484"}
                            buttonOuterSize={20}
                            selectedButtonColor={"#008484"}
                            labelStyle={{ fontSize: "25px", fontFamily: "calibri", color: "#008484" }}
                            disable={true}
                            formHorizontal={true}
                            // selectedValue={this.state.vehitype}
                            // onValueChange={this.VehiType}
                        ></RadioForm>
                    </View><br></br>
                    <Text style={styles.texttypevehi}>Time Duration</Text>
                    <View >
                        <Picker style={styles.pickeratt} selectedValue={this.state.timeDur} onValueChange={this.TimeDur}>
                            <Picker.Item label="Select Time Duration" value="0"></Picker.Item>
                            <Picker.Item label="1 hour" value="1hr"></Picker.Item>
                            <Picker.Item label="2 Hours" value="2hr"></Picker.Item>
                            <Picker.Item label="3 Hours" value="3hr"></Picker.Item>
                            <Picker.Item label="4 Hours" value="4hr"></Picker.Item>
                        </Picker>
                    </View><br></br>
                    <Text style={styles.texttypevehi}>Starting Time</Text>
                    <View style={styles.rowalightime}>
                        <Picker style={styles.pickerhr} selectedValue={this.state.timehr} onValueChange={this.Timehr}>
                            <Picker.Item label="Hr" value="0"></Picker.Item>
                            <Picker.Item label="01" value="01"></Picker.Item>
                            <Picker.Item label="02" value="02"></Picker.Item>
                            <Picker.Item label="03" value="03"></Picker.Item>
                            <Picker.Item label="04" value="04"></Picker.Item>
                            <Picker.Item label="05" value="05"></Picker.Item>
                            <Picker.Item label="06" value="06"></Picker.Item>
                            <Picker.Item label="07" value="07"></Picker.Item>
                            <Picker.Item label="08" value="08"></Picker.Item>
                            <Picker.Item label="09" value="09"></Picker.Item>
                            <Picker.Item label="10" value="10"></Picker.Item>
                            <Picker.Item label="11" value="11"></Picker.Item>
                            <Picker.Item label="12" value="12"></Picker.Item>
                        </Picker>
                        <Picker style={styles.pickermin} selectedValue={this.state.timemin} onValueChange={this.Timemin}>
                            <Picker.Item label="Min" value="0"></Picker.Item>
                            <Picker.Item label="00" value="00"></Picker.Item>
                            <Picker.Item label="15" value="15"></Picker.Item>
                            <Picker.Item label="30" value="30"></Picker.Item>
                            <Picker.Item label="45" value="45"></Picker.Item>
                        </Picker>
                        <Picker style={styles.pickermin} selectedValue={this.state.timeap} onValueChange={this.Timeap}>
                            <Picker.Item label=" " value="0"></Picker.Item>
                            <Picker.Item label="AM" value="AM"></Picker.Item>
                            <Picker.Item label="PM" value="PM"></Picker.Item>
                        </Picker>
                    </View>
                    <Text style={styles.texttypevehi}>Ending Time</Text>
                    <View style={styles.rowalightime}>
                        <Picker style={styles.pickerhr}>
                            <Picker.Item label="Hr" value="0"></Picker.Item>
                            <Picker.Item label="01" value="8000"></Picker.Item>
                            <Picker.Item label="02" value="7000"></Picker.Item>
                            <Picker.Item label="03" value="6000"></Picker.Item>
                            <Picker.Item label="04" value="5000"></Picker.Item>
                            <Picker.Item label="05" value="4000"></Picker.Item>
                            <Picker.Item label="06" value="3000"></Picker.Item>
                            <Picker.Item label="07" value="2000"></Picker.Item>
                            <Picker.Item label="08" value="1000"></Picker.Item>
                            <Picker.Item label="09" value="900"></Picker.Item>
                            <Picker.Item label="10" value="800"></Picker.Item>
                            <Picker.Item label="11" value="700"></Picker.Item>
                            <Picker.Item label="12" value="600"></Picker.Item>
                        </Picker>
                        <Picker style={styles.pickermin}>
                            <Picker.Item label="Min" value="0"></Picker.Item>
                            <Picker.Item label="00" value="8000"></Picker.Item>
                            <Picker.Item label="15" value="7000"></Picker.Item>
                            <Picker.Item label="30" value="6000"></Picker.Item>
                            <Picker.Item label="45" value="5000"></Picker.Item>
                        </Picker>
                        <Picker style={styles.pickermin}>
                            <Picker.Item label=" " value="0"></Picker.Item>
                            <Picker.Item label="AM" value="8000"></Picker.Item>
                            <Picker.Item label="PM" value="8000"></Picker.Item>
                        </Picker>
                    </View>
                    <View>
                        <button style={buttonStylesubmit} onClick={this.dataSubmit}>Choose Your Slot</button>
                    </View>

                </View>


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
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2px',
        marginLeft: 80,
        marginTop: 100,
        marginBottom: 70
    },
    buttoncontainer: {
        backgroundColor: "#1abc9c",
        paddingVertical: 10,
        justifyContent: 'center'
    },
    RectangleShapeView: {

        marginTop: 25,
        width: 450,
        height: 600,
        backgroundColor: '#FFFFFF',
        marginBottom: 5
    },
    texttypevehi: {
        color: "#008484",
        fontSize: "35px",
        fontFamily: "calibri",
        paddingLeft: 80,

        paddingBottom: 10
    },
    textTime: {
        color: "#008484",
        fontSize: "30px",
        fontFamily: "calibri",
        paddingLeft: 30,

        paddingBottom: 10
    },
    textHeading: {
        color: "#FFFFFF",
        fontSize: "40px",
        fontFamily: "calibri"
    },
    pickeratt: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        width: "250px",
        marginLeft: 80,
    },
    pickerhr: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        width: "50px",
        marginLeft: 80,
        height: 30
    },
    pickermin: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        width: "65px",
        marginLeft: 80,
        height: 30,
        marginLeft: 20
    },
    pickerAMPM: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        width: "65px",
        marginLeft: 80,
        height: 30
    },
    dropdown: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        marginLeft: 80,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    rowalightime: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: '2px',
    },
    buttontext: {
        textAlign: 'center',
        color: "#ecf0f1",
        fontSize: 20
    }

});