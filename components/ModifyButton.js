import * as React from 'react';
import { Button } from 'react-native-paper';

const ModifyButton = (props) => (
  <Button mode="contained" onPress={props.onModifyButton}>
    Modify
  </Button>
);

export default ModifyButton;