import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const RetiradaScreen = () => {
  const navigation = useNavigation();
  const [selectedDays, setSelectedDays] = useState(1);
  const [selectedHour, setSelectedHour] = useState('08:00 AM');
  const handleVoltarPress = () => {
  navigation.navigate("Catalogo");
};
const handleConfirmarRetiradaPress = () => {
  navigation.navigate("devolucao", { selectedDays: selectedDays });
};


  const handleDayPress = (days) => {
  if (days <= 10) {
    setSelectedDays(days);
  }
};

  const handleHourPress = (hour) => {
    setSelectedHour(hour);
  };

  const renderDayButtons = () => {
    const dayOptions = Array.from({ length: 10 }, (_, index) => index + 1);
    const firstRowDays = dayOptions.slice(0, 5);
    const secondRowDays = dayOptions.slice(5);

    return (
      <>
        <View style={styles.rowContainer}>
          {firstRowDays.map((days) => (
            <TouchableOpacity
              key={days}
              style={[
                styles.dayButton,
                days === selectedDays && styles.selectedDayButton,
              ]}
              onPress={() => handleDayPress(days)}
            >
              <Text style={styles.dayButtonText}>{days} Dia(s)</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {secondRowDays.map((days) => (
            <TouchableOpacity
              key={days}
              style={[
                styles.dayButton,
                days === selectedDays && styles.selectedDayButton,
              ]}
              onPress={() => handleDayPress(days)}
            >
              <Text style={styles.dayButtonText}>{days} Dia(s)</Text>
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
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
    const firstRowHours = hourOptions.slice(0, 5);
    const secondRowHours = hourOptions.slice(5);

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
      <TouchableOpacity style={styles.voltarButton} onPress={handleVoltarPress}>
        <Text style={styles.voltarButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Retirada do Veículo</Text>

      <Text style={styles.subtitle}>Escolha a quantidade de diárias:</Text>
      {renderDayButtons()}

      <Text style={styles.subtitle}>Escolha a hora de retirada:</Text>
      {renderHourButtons()}

      <Text style={styles.subtitle}>Local de Retirada:</Text>
      <Text style={styles.localText}>Shopping Sp Market</Text>

      <TouchableOpacity style={styles.confirmarButton}  onPress={handleConfirmarRetiradaPress}>
        <Text style={styles.confirmarButtonText}>Confirmar Retirada</Text>
      </TouchableOpacity>

      <Text style={styles.eletricarText}>EletriCar</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#307A59',
  },
  subtitle: {
    fontSize: 25,
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
  dayButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#459373',
    marginBottom: 10,
  },
  selectedDayButton: {
    backgroundColor: '#F3B33D',
  },
  dayButtonText: {
    color: '#459373',
    fontSize: 15,
  },
  hourButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F3B33D',
    marginBottom: 10,
  },
  selectedHourButton: {
    backgroundColor: '#459373',
  },
  hourButtonText: {
    color: '#F3B33D',
    fontSize: 15,
  },
  localText: {
    fontSize: 30,
    color: '#307A59',
  },
  confirmarButton: {
    backgroundColor: '#F3B33D',
    padding: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  confirmarButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
  },
  eletricarText: {
    color: '#307A59',
    fontFamily: 'Inter',
    fontSize: 30,
    fontWeight: '900',
    marginTop: 10,
  },
});

export default RetiradaScreen;
