import * as React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import AddButton from './AddButton';
import { TextInput } from 'react-native-paper';



const AddDebt = (props) => {
  const baseUrl = "http://192.168.0.27:8080/app"; 
  const [visible, setVisible] = React.useState(true);
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");


  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 140};

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    debtName: name,
    debtValue: value
  })
}

  const onAddButton =  () => {

    fetch(baseUrl + "/addDebt", requestOptions)
    .then(response => {
        return response.json();
    }).then(responseData => {

    }).catch(err => {
        console.log(err);
    })
props.refreshData();

    
  };

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <TextInput label="name" onChangeText={text => setName(text)} value={name}/>
          <TextInput label="value" onChangeText={text => setValue(text)} value={value} />
          <AddButton onAddButton={onAddButton}/>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default AddDebt;