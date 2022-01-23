import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const CustomCard = (props) => (
  <Card style={props.style}>
    {props.name === "Account Balance" ? 
      <Card.Content>
        <Title>Account Balance: {props.value} zł</Title>
      </Card.Content>
    :
      <Card.Content>
        <Title>{props.name}</Title>
        <Paragraph>{props.value} zł</Paragraph>
        <Paragraph>{props.text}</Paragraph>
      </Card.Content>
    }
  </Card>
);

export default CustomCard;