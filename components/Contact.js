import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Contact() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text>Name</Text>
        <TextInput style={styles.input} placeholder="enter your name" />
      </View>
      <View style={styles.inputWrapper}>
        <Text>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your email address"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text>Qeury</Text>
        <TextInput
          style={styles.inputArea}
          placeholder="enter your query here"
        />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputWrapper: {
    display: 'flex',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
  },
  inputArea: {
    height: 100,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
  },
  btn: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#1E969C',
    height: 35,
    alignItems: 'center',
    width: 70,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  actions: {
    display: 'flex',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
export default Contact;
