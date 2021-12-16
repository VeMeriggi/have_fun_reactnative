import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const categoriesData = [
  {
    id: 1,
    title: 'Cinema show, Spider man',
    date: '12.23.2021 | 12.23.20',
    location: 'Tallinn, Harjuma',
  },
  {
    id: 2,
    title: 'Movie theatre, Tallinn teenagers',
    date: '12.23.2021 | 12.23.20',
    location: 'Tartu, Estonia',
  },
  {
    id: 3,
    title: 'Easter day eve, night club',
    date: '12.23.2021 | 12.23.20',
    location: 'Killiskivi, Jarjuma',
  },
  {
    id: 4,
    title: 'Moder Art Museum',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 5,
    title: 'Christmas concert',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 6,
    title: 'Football match',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 7,
    title: 'Tennis Match',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 8,
    title: 'Food Festival',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 9,
    title: 'Aida Opera',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 10,
    title: 'La Traviata Opera',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 11,
    title: 'Kids Party',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 12,
    title: 'Bicycle Tour',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 13,
    title: 'Lapland trip departure',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 14,
    title: 'Ferry to Helsinki',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 15,
    title: 'Night Club',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 16,
    title: 'Casino special event',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
  {
    id: 17,
    title: 'Estonian all you can eat',
    date: '12.23.2021 | 12.23.20',
    location: 'Kesklin, Harjuma',
  },
];

function Fun({navigation}) {
  const renderCategoryItem = ({item}) => {
    return (
      <View style={styles.categoyItemWrapper}>
        <View>
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <Text style={styles.categoryItemDate}>{item.date}</Text>
          <Text style={styles.categoryItemLocation}>{item.location}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Booking');
            }}
            style={styles.btn}>
            <Text>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.categoriesListWrapper}>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categoryItemTitle: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 16,
  },
  categoryItemDate: {
    fontSize: 10,
    marginTop: 5,
  },
  categoyItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginTop: 35,
  },
  categoryItemLocation: {
    fontSize: 10,
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'grey',
  },
  btn: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#1E969C',
    height: 35,
    alignItems: 'center',
    width: 70,
    justifyContent: 'center',
  },
});

export default Fun;
