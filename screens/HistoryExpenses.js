import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { FAB } from 'react-native-paper';


import AddExpense from '../components/AddExpense';
import CategoryCard from '../components/CustomCard';
import AccountBalanceCard from '../components/CustomCard';

const HistoryExpenses = () => {

    const baseUrl = "http://192.168.0.27:8080/app"; 
    const [showModal, setShowModal] = useState(false);
    
    const [accountBalance, setAccountBalance] = useState([]);
    useEffect(() => {
        fetch(baseUrl + "/accountBalance")
        .then(response => {
            return response.text();
        }).then(responseData => {
            setAccountBalance(responseData);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(baseUrl + "/categories")
        .then(response => {
            return response.json();
        }).then(responseData => {
            setCategories(responseData);
            console.log(responseData);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    // const navigation = useNavigation()

    const refreshAccountBalance = () => {
        fetch(baseUrl + "/accountBalance")
        .then(response => {
            return response.text();
        }).then(responseData => {
            setAccountBalance(responseData);
        }).catch(err => {
            console.log(err);
        })
    }

    const toggleAddExpense = () => {
        setShowModal(!showModal);
    }

        const refreshCategories = () => {
        fetch(baseUrl + "/categories")
        .then(response => {
            return response.json();
        }).then(responseData => {
            setCategories(responseData);
            console.log(responseData);
        }).catch(err => {
            console.log(err);
        })
    }

    const refreshData = () => {
        refreshAccountBalance();
        refreshCategories();
    }

    return (
        <View style={styles.container}>
            <AccountBalanceCard style={styles.accountBalanceCard} name="Account Balance" value={accountBalance} />
            { !showModal ? 
                <View style={styles.cardContainer}>
                {categories.map((obj, index) => (
                    index / 2 === 0 ? 
                    <View style={styles.cardContainer}>  
                        <View id={index}>
                            <CategoryCard id={index} text={index} style={styles.categoryCard} name={obj.categoryName} value={obj.actualValue} />
                        </View>
                    </View>
                    :
                    <View id={index}>
                        <CategoryCard id={index} text={index} style={styles.categoryCard} name={obj.categoryName} value={obj.actualValue} />
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
      {showModal ? <AddExpense refreshData={refreshData}/> : <View></View>}
            <StatusBar style='auto' />
        </View>
    )
}

export default HistoryExpenses

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
