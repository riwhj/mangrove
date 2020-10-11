/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';
import {Component} from 'react';

//Import all required component
import {
  View,
  Text,
  Picker,
  ImageBackground,
  Button,
  TextInput,
} from 'react-native';

export default class Borrow extends Component {
  constructor() {
    super();
    this.state = {selectedLabel: ''};
    this.state = {text: ''};
  }
  Show = (value) => {
    alert(value);
    this.setState({selectedLabel: value});
  };

  render() {
    return (
      // <ImageBackground
      //   source={require('D:/application/WUbadminton/Image/back07.png')}
      //   style={{flex: 1, resizeMode: 'cover'}}>
        <View>
          <Text
            style={{
              minHeight: 10,
              minWidth: 10,
              elevation: 50,
              borderRadius: 20,
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              color: '#2F4F4F',
            }}>
            Customer : Chutima
          </Text>
          <TextInput
            style={{
              minHeight: 10,
              minWidth: 10,
              elevation: 50,
              borderRadius: 20,
              backgroundColor: 'white',
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}
            placeholder="Time"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{
              minHeight: 10,
              minWidth: 10,
              elevation: 50,
              borderRadius: 20,
              backgroundColor: 'white',
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}
            placeholder="Date"
            onChangeText={(text) => this.setState({text})}
          />
         
          <View
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 10,
              minWidth: 10,
              elevation: 50,
              borderRadius: 20,
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              color: '#2F4F4F',
            }}>
            <Text
              style={{
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                color: '#2F4F4F',
              }}>
              {' '}
              Packages :{' '}
            </Text>
            <Picker
              selectedValue={this.state.selectedLabel}
              onValueChange={this.Show.bind()}>
                 <Picker.Item label="Cloose" value="Cloose "></Picker.Item>
              <Picker.Item label="Garden tour" value="Garden tour "></Picker.Item>
              <Picker.Item label="Boat tour" value="Boat tour "></Picker.Item>
              <Picker.Item label="Lunch" value="Lunch "></Picker.Item>
              <Picker.Item label="Dinner" value="Dinner "></Picker.Item>
            </Picker>
          </View>

          <View
            style={[
              {width: '95%', borderRadius: 30, margin: 10, marginTop: 20},
            ]}>
            <Button
              title="submit"
              color="#2F4F4F"
              onPress={() => navigation.navigate('')}
            />
          </View>

          <View
            style={[
              {width: '95%', borderRadius: 30, margin: 10, marginTop: 20},
            ]}>
            <Button
              title="edit"
              color="#2F4F4F"
              onPress={() => navigation.navigate('')}
            />
          </View>
        </View>
      // </ImageBackground>
    );
  }
}
