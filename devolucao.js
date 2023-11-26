import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";


const DevolucaoScreen = () => {
  const route = useRoute();
  const [selectedHour, setSelectedHour] = useState('08:00 AM');

const handleHourPress = (hour) => {
    setSelectedHour(hour);
  };
const navigation = useNavigation();
const { selectedDays } = route.params
const handleVoltarPress = () => {
  navigation.navigate("retirada"); 
};
const handleConfirmarDevolucaoPress = () => {
  navigation.navigate("pagamento", { selectedDays }); 
};



  const renderHourButtons = () => {
    const hourOptions = [
      '08:00',
      '10:00',
      '12:00',
      '14:00',
      '16:00',
      '18:00',
      '20:00',
    ];
    const firstRowHours = hourOptions.slice(0, 4);
    const secondRowHours = hourOptions.slice(4);

    return (
      <>
        <View style={styles.rowContainer}>
          {firstRowHours.map((hour) => (
            <TouchableOpacity
              key={hour}
              style={[
                styles.hourButton,
                hour === selectedHour && styles.selectedHourButton,
              ]}
              onPress={() => handleHourPress(hour)}
            >
              <Text style={styles.hourButtonText}>{hour}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {secondRowHours.map((hour) => (
            <TouchableOpacity
              key={hour}
              style={[
                styles.hourButton,
                hour === selectedHour && styles.selectedHourButton,
              ]}
              onPress={() => handleHourPress(hour)}
            >
              <Text style={styles.hourButtonText}>{hour}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.voltarButton} onPress={handleVoltarPress}>
          <Text style={styles.voltarButtonText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Devolução do Veículo</Text>

        <Text style={styles.subtitle}>Escolha o horário de devolução:</Text>
        {renderHourButtons()}

        
        <Text style={styles.infoText}>Local de Devolução:</Text>
        <Text style={styles.infoValue}>Shopping Sp Market</Text>

        <TouchableOpacity style={styles.confirmarButton} onPress={handleConfirmarDevolucaoPress}>
          <Text style={styles.confirmarButtonText}>Confirmar Devolução</Text>
        </TouchableOpacity>

        <Text style={styles.logoText}>EletriCar</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 60,
  },
  content: {
    marginTop: 90, 
    alignItems: 'center',
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
    top: -100,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#307A59',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#307A59',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  hourButton: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F3B33D',
    marginBottom: 20,
  },
  selectedHourButton: {
    backgroundColor: '#459373',
  },
  hourButtonText: {
    color: '#F3B33D',
    fontSize: 25,
  },

  infoText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#307A59',
  },
  infoValue: {
    fontSize: 20,
    color: '#459373',
  },
  confirmarButton: {
    backgroundColor: '#F3B33D',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  confirmarButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
  },
  logoText: {
    color: '#307A59',
    fontFamily: 'Inter',
    fontSize: 30,
    fontWeight: '900',
    marginTop: 70,
  },
});

export default DevolucaoScreen;
