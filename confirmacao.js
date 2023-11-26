import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const ConfirmacaoScreen = ({ navigation }) => {
  const handleVoltarPress = () => {
    navigation.navigate('Catalogo'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação de Aluguel</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/logoEletricar.PNG')} 
          style={styles.image}
        />
      </View>

      <Text style={styles.confirmationText}>
        Suas informações foram recebidas com sucesso! Em breve, você receberá detalhes do aluguel no seu e-mail.
      </Text>

      <TouchableOpacity style={styles.voltarButton} onPress={handleVoltarPress}>
        <Text style={styles.voltarButtonText}>Voltar para o Catálogo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307A59', 
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10, 
    marginTop: 20, 
    color: 'white', 
  },
  imageContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 270,
    height: 190,
  },
  confirmationText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: 'white', 
  },
  voltarButton: {
    backgroundColor: '#F3B33D', 
    padding: 15,
    borderRadius: 30,
    width: '80%',
  },
  voltarButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default ConfirmacaoScreen;
