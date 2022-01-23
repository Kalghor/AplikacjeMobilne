import * as React from 'react';
import { Button } from 'react-native-paper';

const AddButton = (props) => (
  <Button mode="contained" onPress={props.onAddButton}>
    Add
  </Button>
);

export default AddButton;