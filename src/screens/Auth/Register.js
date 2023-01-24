import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Landing from './Landing';

    const SignUp =  () =>{


    }

const Register = ({navigation}) => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <TextInput placeholder="Name" onChangeText={name => setName(name)} />
      <TextInput placeholder="Email" onChangeText={email => setEmail(email)} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <Button title={'Regiester'} onPress={SignUp} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
