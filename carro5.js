import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const ChamadaCarro5 = () => {
const navigation = useNavigation();

const handleVoltarPress = () => {
  navigation.goBack();
};
const handleAlugarPress = () => {
  navigation.navigate("retirada");
};


  return (
    <View style={styles.container}>
      <View style={styles.voltarButtonContainer}>
        <TouchableOpacity 
        style={styles.voltarButton}
        onPress={handleVoltarPress}
        >
          <Text style={styles.voltarButtonText}>Voltar</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.carText}>Seres 3</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/seres3.png')}
          style={styles.carImage}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ar - Cond. Automático</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Painel Eletrônico</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cam. Grav. de Percurso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Câmera 360 Graus</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mult. de 10 Polegadas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Teto Solar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/icones.PNG')}
          style={styles.iconImage}
        />
        <View style={styles.iconTextContainer}>
          <Text style={styles.iconText}>Potência e torque: 163 cv e 30,6 kgfm</Text>
          <Text style={styles.iconText}>Autonomia: 300 km</Text>
          <Text style={styles.iconText}>Diária: R$ 209,00</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.alugarButton} onPress={handleAlugarPress}>
        <Text style={styles.alugarButtonText}>ALUGAR ESTE VEÍCULO</Text>
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
  },
  voltarButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
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
  },
  voltarButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 40,
  },
  carText: {
    color: '#F0F9F6',
    fontFamily: 'Inter',
    fontSize: 45,
    fontWeight: '900',
    marginTop: 70, 
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  carImage: {
    width: 550,
    height: 300,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 190,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#459373',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    marginBottom: 9,
  },
  buttonText: {
    color: 'rgba(240, 249, 246, 0.80)',
    textAlign: 'center',
    fontSize: 17, 
    fontWeight: 'bold',
    marginVertical: 5, 
  },
  iconImage: {
    width: 25,
    height: 80,
  },
  iconTextContainer: {
    marginLeft: 25,
  },
  iconText: {
    color: 'rgba(240, 249, 246, 0.80)',
    marginBottom: 7,
  },
  alugarButton: {
    width: 330,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#F3B33D',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    marginTop: -10,
  },
  alugarButtonText: {
    color: '#F0F9F6',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: '800',
    lineHeight: 43,
  },
});

export default ChamadaCarro5;
