import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProgressBar from '../components/ProgressBar';

const baseUrl = "http://192.168.0.27:8080/app"; 

const Item = ({ title, value, target, actulatValue }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <ProgressBar value={value} target={target} actulatValue={actulatValue}/>
  </View>
);

const App = (props) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity index={item.id} onPress={() => props.toggleModal(item.name)}>
        <Item title={item.name} value={item.procentOfTarget} target={item.value} actulatValue={item.actualValue} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

// const modifyElement = (id) => {
//     fetch(baseUrl + "/deleteShoppingElement/" + id, {method: 'DELETE'})
//     .then(response => {
//         return response.json();
//     }).then(responseData => {

//     }).catch(err => {
//         console.log(err);
//     })
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;