import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { FAB } from 'react-native-paper';
import FlatListBasics from '../components/List';


import AddShoppingListElement from '../components/AddShoppingListElement';
import CategoryCard from '../components/CustomCard';

const ShoppingListScreen = () => {

    const baseUrl = "http://192.168.0.27:8080/app"; 
    const [shoppingListElement, setShoppingListElement] = useState([]);
    const [showModal, setShowModal] = useState(false);


    const toggleAddExpense = () => {
        setShowModal(!showModal);
    }

    const refreshData = () => {
            fetch(baseUrl + "/getShoppingList")
            .then(response => {
                return response.json();
            }).then(responseData => {
                setShoppingListElement(responseData);
            }).catch(err => {
                console.log(err);
            })
    }
   

    return (
        <View style={styles.container}>
        {!showModal ?
            <View>
                <FlatListBasics data={shoppingListElement} refreshList={() => refreshData()} />
                <Button onPress={() => refreshData()} title='Odśwież' />
            </View>
            : 
            <View></View>
         }

        {showModal ?
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={toggleAddExpense}
      />
      : <View></View>
      }
            <FAB
        style={styles.fab}
        icon="plus"
        onPress={toggleAddExpense}
      />
      {showModal ? <AddShoppingListElement refreshData={refreshData}/> : <View></View>}
        </View> 
    )
}

export default ShoppingListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#FFA07A',
        marginRight: 10,
        marginTop: 30
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#c7c7c7',
      },
      categoryCard: {
        height: 90, 
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      accountBalanceCard: {
        height: 70, 
        margin: 10,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 5
      },
      cardContainer: {
        flex: -1,
        flexDirection: 'column'
      }
})
