import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

function About({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Who we are?</Text>
      </View>
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>
          Welcome to our information section, feel free to raise your query on
          our contact us page.
        </Text>
        <View style={styles.messageActionWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contact')}
            style={styles.messageActionBtn}>
            <Text>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.aboutUseWrapper}>
        <View style={styles.aboutUsContentWrapper}>
          <Text style={styles.aboutUsContentTitle}>
            About HaveFun Organization
          </Text>
          <Text style={styles.aboutUsContent}>
            we are a +10 years experienced team of multi national experts,
            trying to help people connect and enjoy all sorts of event & fun
            happining arround them. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sapiente necessitatibus dicta consequatur culpa ex
            accusamus quos eum alias totam, ratione sunt. Dolorum optio vero
            fuga distinctio. Aliquid cumque nisi facilis.
          </Text>
          <Image
            style={styles.teamImage}
            source={require('../assets/images/team.jpeg')}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    display: 'flex',
  },
  about: {
    display: 'flex',
  },
  container: {
    display: 'flex',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  messageActionWrapper: {
    display: 'flex',
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    paddingHorizontal: 20,
    fontFamily: 'verdana',
  },
  messageActionBtn: {
    marginLeft: 10,
    backgroundColor: '#1E969C',
    height: 35,
    alignItems: 'center',
    width: 'auto',
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  aboutUseWrapper: {
    display: 'flex',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  aboutUsContentTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'verdana',
  },
  aboutUsContent: {
    fontFamily: 'verdana',
  },
  teamImage: {
    marginTop: 20,
    width: '100%',
    resizeMode: 'stretch',
    height: 300,
  },
});

export default About;
