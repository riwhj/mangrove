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
              จำนวนจอง :{' '}
            </Text>
            <Picker
              selectedValue={this.state.selectedLabel}
              onValueChange={this.Show.bind()}>
              <Picker.Item label="1" value="1 "></Picker.Item>
              <Picker.Item label="2" value="2 "></Picker.Item>
              <Picker.Item label="3" value="3 "></Picker.Item>
              <Picker.Item label="4" value="4 "></Picker.Item>
              <Picker.Item label="5" value="5 "></Picker.Item>
              <Picker.Item label="6" value="6 "></Picker.Item>
              <Picker.Item label="7" value="3 "></Picker.Item>
              <Picker.Item label="8" value="4 "></Picker.Item>
              <Picker.Item label="9" value="5 "></Picker.Item>
              <Picker.Item label="10" value="6 "></Picker.Item>
              <Picker.Item label="11" value="4 "></Picker.Item>
              <Picker.Item label="12" value="5 "></Picker.Item>
              <Picker.Item label="13" value="6 "></Picker.Item>
            </Picker>
          </View>

          <View
            style={[
              {width: '95%', borderRadius: 30, margin: 10, marginTop: 20},
            ]}>
            <Button
              title="ตกลง"
              color="#2F4F4F"
              onPress={() => navigation.navigate('')}
            />
          </View>
        </View>
      // </ImageBackground>
    );
  }
}
