import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button } from 'react-native'

import AccountBalanceCard from '../components/CustomCard';
import ExpensesSum from '../components/CustomCard';

const Dashboard = () => {

    const baseUrl = "http://192.168.0.27:8080/app"; 

    const [expensesSum, setExpensesSum] = useState([]);
    useEffect(() => {
        fetch(baseUrl + "/expensesSum")
        .then(response => {
            return response.json();
        }).then(responseData => {
            setExpensesSum(responseData);
            console.log(responseData);
        }).catch(err => {
            console.log(err);
        })
    }, [])

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

    const refreshExpensesSum = () => {
        fetch(baseUrl + "/expensesSum")
        .then(response => {
            return response.json();
        }).then(responseData => {
            setExpensesSum(responseData);
            console.log(responseData);
        }).catch(err => {
            console.log(err);
        })
    }

    const refreshData = () => {
        refreshAccountBalance();
        refreshExpensesSum();
    }

    return (
        <View style={styles.container}>
            <AccountBalanceCard style={styles.accountBalanceCard} name="Account Balance" value={accountBalance} />      
            <ExpensesSum style={styles.expensesSum} name="Suma wydatków z ostatnich 30 dni" value={expensesSum} />      
            <Button onPress={() => refreshData()} title='Odśwież' />
        </View>
    )
}

export default Dashboard

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
      expensesSum: {
        height: 100, 
        margin: 10,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',

      }
})
