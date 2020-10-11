import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  ImageBackground,
} from 'react-native';
// import Gallery from 'react-native-image-gallery';

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch('http://172.16.29.89/mangrove/DB/customer.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }

  render() {
    return (
    //   <ImageBackground
    //     source={require('D:/application/WUbadminton/Image/back07.png')}
    //     style={{flex: 1, resizeMode: 'cover'}}>
        <View>
          <ScrollView>
            <View>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: '#5F9EA0',
                      textAlign: 'center',
                      minHeight: 10,
                      minWidth: 10,
                      elevation: 50,
                      borderRadius: 10,
                      fontSize: 20,
                      marginTop: 15,
                      marginLeft: 10,
                      marginRight: 10,
                      color: '#5e3881',
                    }}>
                    <Text style={{fontSize: 25, marginTop: 10, marginLeft: 50}}>
                      customer
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    customerID: {item.CID}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    customerName: {item.CName}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    Telephone: {item.CTelephone}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      sex: {item.CSex}
                    </Text>  
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
    //   </ImageBackground>
    );
  }
}
