import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
function PaymentGateway({navigation}) {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Payment Confirmation',
      'Your ticket details has been sent to your registerd email.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Home')},
        ,
      ],
    );

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Gateway</Text>
      </View>
      <TextInput style={styles.input} placeholder="card number" />
      <TextInput style={styles.input} placeholder="CVV" />
      <View style={styles.cvv}>
        <TextInput style={styles.cvvInput} placeholder="DD" />
        <TextInput style={styles.cvvInput} placeholder="YYYY" />
      </View>
      <View style={styles.loginBtnSeperator} />
      <Button
        style={styles.loginBtn}
        color="#1E969C"
        title="Pay"
        onPress={createTwoButtonAlert}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    fontWeight: 900,
    fontSize: 54,
    color: '#1E969C',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#1E969C',
  },
  footer: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
  },
  loginBtnSeperator: {
    marginTop: 10,
  },
  cvv: {
    display: 'flex',
    flexDirection: 'row',
  },
  cvvInput: {
    width: 60,
    marginRight: 5,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
  },
});

export default PaymentGateway;
