import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AlterarInformacoes = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltarButton}>
        <Text style={styles.voltarButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.alterarInfoText}>ALTERAR{"\n"}INFORMAÇÕES</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { marginTop: 0 }]} 
          placeholder="   Nome"
        />
        <TextInput
          style={styles.input}
          placeholder="   CPF"
        />
        <TextInput
          style={styles.input}
          placeholder="   Data de Nascimento"
        />
        <TextInput
          style={styles.input}
          placeholder="   E-mail"
        />
        <TextInput
          style={styles.input}
          placeholder="   Senha"
        />
        <TextInput
          style={styles.input}
          placeholder="   Confirmar Senha"
        />
      </View>

      <TouchableOpacity style={styles.salvarButton}>
        <Text style={styles.salvarButtonText}>SALVAR ALTERAÇÕES</Text>
      </TouchableOpacity>

      <Image
        source={require('./assets/logoEletricar.PNG')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF', 
    paddingTop: 60, 
  },
  voltarButton: {
    width: 100, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: '#F3B33D',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    position: 'absolute',
    top: 20, 
    left: 10, 
  },
  voltarButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 20, 
    fontWeight: '900',
    lineHeight: 40, 
  },
  alterarInfoText: {
    width: 430,
    height: 74, 
    color: '#307A59',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 36,
    fontWeight: '900',
    lineHeight: 37,
    marginTop: 40, 
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: 308,
    height: 39,
    backgroundColor: '#F0F9F6',
    color: '#307A59',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '300',
    marginBottom: 10,
  },
  salvarButton: {
    width: 338,
    height: 62,
    borderRadius: 30,
    backgroundColor: '#F3B33D',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    marginTop: 20,
  },
  salvarButtonText: {
    color: '#F0F9F6',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 62,
  },
  logo: {
    width: 300, 
    height: 150, 
    marginTop: 15,
  },
});

export default AlterarInformacoes;
