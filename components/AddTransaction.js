import * as React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import AddButton from './AddButton';
import { TextInput } from 'react-native-paper';
import MyDatePicker from './DatePicker';



const AddTransaction = (props) => {
  const baseUrl = "http://192.168.0.27:8080/app"; 
  const [visible, setVisible] = React.useState(true);
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("2022-01-01");
  const [value, setValue] = React.useState("");


  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 140};

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: name,
    value: value,
    date: date
  })
}

  const onAddButton =  () => {
    fetch(baseUrl + "/addTransaction", requestOptions)
    .then(response => {
        return response.json();
    }).then(responseData => {

    }).catch(err => {
        console.log(err);
    })
    props.refreshData();  
  };

  const onDateChange = (date) => {
    return date;
  }

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <TextInput label="name" onChangeText={text => setName(text)} value={name}/>
          <TextInput label="value" onChangeText={text => setValue(text)} value={value} />
          <MyDatePicker date={date} onDateChange={() => onDateChange()}/>
          <AddButton onAddButton={onAddButton}/>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default AddTransaction;