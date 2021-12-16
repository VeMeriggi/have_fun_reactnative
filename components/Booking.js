import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

function Booking({navigation}) {
  var radio_props = [
    {label: '05:00 - 07:45', value: 0},
    {label: '08:00 - 10:45', value: 1},
    {label: '11:00 - 13:45 ', value: 1},
    {label: '14:00 - 17:45', value: 1},
    {label: '18:00 - 21:45', value: 1},
    {label: '22:00 - 00:45', value: 1},
  ];
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booking Options</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentTitleContainer}>
          <Text style={styles.contentTitle}>
            Tallinn Teenagers Football match
          </Text>
          <Text style={styles.contentDate}>03.12.2021</Text>
          <Text style={styles.contentLocation}>Tallinn Harjuma City</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Tallinn Teenager Football match occurs every two years on December
            6th
          </Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'#2196f3'}
          animation={true}
          labelStyle={styles.optionLabel}
          onPress={value => {
            console.log(value);
          }}
        />
      </View>
      <View style={styles.mapContainer}>
        <View style={styles.bookingButtion}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentGateway')}
            style={styles.btn}>
            <Text>Proceed Payment</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.map}>
          <Image source={require('../assets/images/map.png')} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  contentTitleContainer: {
    marginRight: 10,
    display: 'flex',
    maxWidth: '40%',
  },
  contentTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'verdana',
    marginBottom: 5,
  },
  contentDate: {
    color: 'blue',
    marginBottom: 5,
  },
  contentLocation: {
    color: 'green',
  },
  descriptionContainer: {
    maxWidth: '60%',
  },
  description: {
    fontFamily: 'verdana',
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  optionLabel: {
    fontSize: 20,
    marginLeft: 30,
  },
  mapContainer: {
    display: 'flex',
    resizeMode: 'center',
  },
  btn: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#1E969C',
    height: 35,
    alignItems: 'center',
    width: 'auto',
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  bookingButtion: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: -10,
  },
});

export default Booking;
