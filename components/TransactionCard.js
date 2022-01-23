import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const TransactionCard = (props) => (
  <Card style={props.style}>
      <Card.Content>
        <Title>{props.name}</Title>
        <Paragraph>{props.value} zł</Paragraph>
        <Paragraph>{props.date}</Paragraph>
      </Card.Content>
  </Card>
);

export default TransactionCard;