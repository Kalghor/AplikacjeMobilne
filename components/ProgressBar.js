import React from "react"
import { Text } from 'react-native';

import {
  Box,
  Progress,
  VStack,
  Heading,
  Center,
  NativeBaseProvider,
  
} from "native-base";

export const Example = (props) => {

  return (
    <Box w="100%">
      <VStack space="md">
        <VStack mx="4" space="md">
            <Text>{props.actulatValue}/{props.target}</Text>
          <Progress colorScheme="emerald" value={props.value} min={0} max={100} />
        </VStack>
      </VStack>
    </Box>
  )
}

export default (props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example value={props.value} target={props.target} actulatValue={props.actulatValue}/>
      </Center>
    </NativeBaseProvider>
  )
}