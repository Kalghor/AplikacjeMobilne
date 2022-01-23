import React, {useState} from 'react'
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const { control } = useForm();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

return (
    <View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label="Email"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />

<Controller
        control={control}
        render={({ onBlur }) => (
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />

      <View>
        <Button
          mode="contained"
          compact={false}
          // onPress={handleSignIn}
          icon="account-arrow-right"
        >
          Sign in
        </Button>
      </View>
    </View>
  )
};
export default LoginScreen;