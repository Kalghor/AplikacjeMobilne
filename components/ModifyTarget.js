import * as React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import ModifyButton from './ModifyButton';
import { TextInput } from 'react-native-paper';




const ModifyTarget = (props) => {
  const baseUrl = "http://192.168.0.27:8080/app"; 
  const [visible, setVisible] = React.useState(true);
  const [name, setName] = React.useState("");
  const [actualValue, setActualValue] = React.useState("");
  const [value, setValue] = React.useState("");

  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 140};

  const putRequestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      actualValue: actualValue,
      value: value
    })
};

  const onModifyButton = () => {
    fetch(baseUrl + "/modifyTargetElement", putRequestOptions)
    .then(response => {
        return response.json();
    }).then(responseData => {

    }).catch(err => {
        console.log(err);
    })
    // props.refreshData();  
  };

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <TextInput label="name" onChangeText={text => setName(text)} value={name}/>
          <TextInput label="actualValue" onChangeText={text => setActualValue(text)} value={actualValue} />
          <TextInput label="value" onChangeText={text => setValue(text)} value={value} />
          <ModifyButton onModifyButton={onModifyButton}/>

        </Modal>
      </Portal>
    </Provider>
  );
};

export default ModifyTarget;