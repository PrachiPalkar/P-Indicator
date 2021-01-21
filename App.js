import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import AddItem from './screens/addItem';
import bookingDetails from './screens/bookingDetails'
import Slot from './screens/Slot';
import payment from './screens/payment';



export class firstpage extends Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress() {
        console.log('called');
        this.props.navigation.navigate('bookhere');
    }

    render() {

        return (

            <View>
                <button onClick={this.buttonPress}>hay</button>
            </View>
        );
    }
}
const AppStackNavigator = createStackNavigator({

    // Add:AddItem,
    bookhere: bookingDetails,
    Mazemap: Slot,
    pay: payment,
})

const App = createAppContainer(AppStackNavigator);

export default App;

