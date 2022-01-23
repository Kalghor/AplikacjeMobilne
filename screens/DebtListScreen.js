import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { FAB } from 'react-native-paper';


import AddDebt from '../components/AddDebt';
import CategoryCard from '../components/CustomCard';
import AccountBalanceCard from '../components/CustomCard';

const DebtListScreen = () => {

    const baseUrl = "http://192.168.0.27:8080/app"; 
    const [debts, setDebts] = useState([]);
    const [showModal, setShowModal] = useState(false);


    const toggleAddExpense = () => {
        setShowModal(!showModal);
    }

    const refreshData = () => {
            fetch(baseUrl + "/getAll")
            .then(response => {
                return response.json();
            }).then(responseData => {
                setDebts(responseData);
                
            }).catch(err => {
                console.log(err);
            })
    }
   

    return (
        <View style={styles.container}>
            { !showModal ? 
                <View style={styles.cardContainer}>
                {debts.map((obj, id) => (
                    <View style={styles.cardContainer}>  
                        <View >
                            <CategoryCard text={id} style={styles.categoryCard} name={obj.debtName} value={obj.debtValue} />
                        </View>
                    </View>
                ))}
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
      {showModal ? <AddDebt refreshData={refreshData}/> : <View></View>}
            <StatusBar style='auto' />
        </View>
    )
}

export default DebtListScreen

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
