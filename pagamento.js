import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PagamentoScreen = () => {
  const [diariaValue, setDiariaValue] = useState(209.0);

  const navigation = useNavigation();
  const route = useRoute();

  
  const selectedDays = route.params ? route.params.selectedDays : 1;

  useEffect(() => {
    const novoValorDiaria = selectedDays * 209.0;
    setDiariaValue(novoValorDiaria);
  }, [selectedDays]);

  const handleCancelarPress = () => {
    navigation.navigate('Catalogo');
  };

  const handleConfirmarPress = () => {
    navigation.navigate('confirmacao');
  };

  const handleDaysChange = (value) => {
    setSelectedDays(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nº do Cartão</Text>
        <TextInput
          style={styles.input}
          placeholder="1234 5678 9101 1121"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Validade</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/AA"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          placeholder="123"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome no Cartão</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite Seu Nome"
        />
      </View>

      <View style={styles.valorContainer}>
        <Text style={styles.valorLabel}>Valor Total:</Text>
        <Text style={styles.valor}>R$ {diariaValue.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.botaoCancelar}
        onPress={handleCancelarPress}
      >
        <Text style={styles.botaoTexto}>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoFinalizar}
        onPress={handleConfirmarPress}
      >
        <Text style={styles.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>

      <Image
        source={require('./assets/logoEletricar.PNG')}
        style={styles.logoImage}
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

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#307A59',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#307A59',
  },
  input: {
    height: 40,
    borderColor: '#459373',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  valorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  valorLabel: {
    fontSize: 18,
    marginRight: 10,
    color: '#307A59',
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#307A59',
  },
  botaoCancelar: {
    backgroundColor: '#F3B33D',
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    width: '80%',
  },
  botaoFinalizar: {
    backgroundColor: '#F3B33D',
    padding: 15,
    borderRadius: 30,
    width: '80%',
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  logoImage: {
    width: 250,
    height: 150,
    marginTop: 0,
  },
});

export default PagamentoScreen;
