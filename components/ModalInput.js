import * as React from 'react';
import { TextInput } from 'react-native-paper';

const ModalInput = (props) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label={props.label}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default ModalInput;