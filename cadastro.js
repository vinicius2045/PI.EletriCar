import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
  const navigation = useNavigation();

  const handleEntrarPress = () => {
    navigation.navigate('Login');
  };

  const handleCadastrarPress = () => {
    navigation.navigate('Catalogo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>SEJA BEM VINDO!</Text>

      <Text style={styles.accessText}>ACESSE SUA CONTA</Text>

      <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OU</Text>

      <View style={styles.largeButton}>
        <Text style={styles.largeButtonText}>CRIE SUA CONTA</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { backgroundColor: '#F0F9F6' }]} 
            placeholder="Digite seu Nome"
          />
          <TextInput
            style={[styles.input, { backgroundColor: '#F0F9F6' }]}
            placeholder="Digite seu CPF"
          />
          <TextInput
            style={[styles.input, { backgroundColor: '#F0F9F6' }]} 
            placeholder="Digite sua data de Nascimento"
          />
          <TextInput
            style={[styles.input, { backgroundColor: '#F0F9F6' }]} 
            placeholder="Digite seu e-mail"
          />
          <TextInput
            style={[styles.input, { backgroundColor: '#F0F9F6' }]}
            placeholder="Digite sua senha"
          />
          <TextInput
            style={[styles.input, { backgroundColor: '#F0F9F6' }]} 
            placeholder="Confirme sua senha"
          />
        </View>
        <TouchableOpacity style={styles.smallButton} onPress={handleCadastrarPress}>
          <Text style={styles.smallButtonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.logoText}>EletriCar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307A59',
  },
  welcomeText: {
    color: '#F0F9F6',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 10,
  },
  accessText: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '200',
    marginBottom: 10,
  },
  button: {
    width: 200,
    height: 62,
    borderRadius: 30,
    backgroundColor: '#F3B33D',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 62,
  },
  orText: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: '200',
    marginBottom: -15,
  },
  largeButton: {
    width: 373,
    height: 514,
    backgroundColor: '#459373',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 80,
  },
  largeButtonText: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    width: 308,
    height: 39,
    color: '#307A59',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    marginBottom: 22,
  },
  smallButton: {
    width: 211,
    height: 62,
    borderRadius: 30,
    backgroundColor: '#F3B33D',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    marginBottom: 10,
  },
  smallButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 62,
  },
  logoText: {
    color: '#F0F9F6',
    fontFamily: 'Inter',
    fontSize: 30,
    fontWeight: '900',
    marginTop: 10,
  },
});

export default Cadastro;
