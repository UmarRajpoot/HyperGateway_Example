import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const colors = {
    textcolor: 'black',
    placeholderColor: 'black',
    inputcolor: 'black',
    bgInput: '#dee2e6',
    bg: '#b9b5ff',
    bgBtn: '#8C52FF',
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: colors.bg}}>
      <SafeAreaView>
        <StatusBar />
        <View style={{alignItems: 'center'}}>
          <View style={{width: '90%', marginVertical: 20}}>
            <Text style={{fontSize: 30, color: colors.textcolor}}>Example</Text>
            <Text style={{fontSize: 14, color: colors.textcolor}}>
              Code for Hyper Gateway Solution.
            </Text>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Image
              source={{uri: 'asset:/hostIonicAppLogo.png'}}
              width={130}
              height={130}
            />
          </View>
          <View
            style={{
              backgroundColor: colors.bgInput,
              elevation: 10,
              width: '90%',
              borderRadius: 10,
              marginVertical: 15,
            }}>
            <TextInput
              placeholder="Card Number"
              selectionColor={colors.bg}
              placeholderTextColor={colors.placeholderColor}
              style={{paddingLeft: 10, color: colors.inputcolor, fontSize: 16}}
              keyboardType="number-pad"
            />
          </View>
          <View style={{flexDirection: 'row', width: '90%'}}>
            <View
              style={{
                backgroundColor: '#dee2e6',
                elevation: 10,
                width: '50%',
                borderRadius: 10,
                marginRight: 2.5,
              }}>
              <TextInput
                placeholder="Expiry"
                placeholderTextColor={colors.placeholderColor}
                style={{
                  paddingLeft: 10,
                  color: colors.inputcolor,
                  fontSize: 16,
                }}
                keyboardType="number-pad"
              />
            </View>
            <View
              style={{
                backgroundColor: '#dee2e6',
                elevation: 10,
                width: '50%',
                borderRadius: 10,
                marginLeft: 2.5,
              }}>
              <TextInput
                placeholder="Cvv"
                placeholderTextColor={colors.placeholderColor}
                style={{
                  paddingLeft: 10,
                  color: colors.inputcolor,
                  fontSize: 16,
                }}
                keyboardType="number-pad"
              />
            </View>
          </View>
          {isLoading ? (
            <View
              style={{
                width: '90%',
                backgroundColor: colors.bgBtn,
                padding: 10,
                borderRadius: 14,
                marginVertical: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={{uri: 'asset:/hostIonicAppLogo.png'}}
                width={25}
                height={25}
              />
              <ActivityIndicator
                style={{paddingHorizontal: 5}}
                color={'white'}
              />
              <Text style={{fontSize: 16}}>Processing....</Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                width: '90%',
                backgroundColor: colors.bgBtn,
                padding: 10,
                borderRadius: 14,
                marginVertical: 15,
              }}
              activeOpacity={0.8}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{uri: 'asset:/hostIonicAppLogo.png'}}
                  width={25}
                  height={25}
                />
                <Text style={{fontSize: 18, paddingLeft: 5}}>Pay</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
