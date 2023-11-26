import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const VeiculoCard = ({ index, nome, preco, potencia, autonomia, imagem }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(`Carro${index + 1}`);
  };

  return (
    <View style={styles.veiculoCard}>
      <Image source={imagem} style={styles.carImage} />
      <View style={styles.carInfoContainer}>
        <Text style={styles.carName}>{nome}</Text>
        <Text style={styles.carInfoText}>Diária: R$ {preco}</Text>
        <Text style={styles.carInfoText}>Potência e torque: {potencia}</Text>
        <Text style={styles.carInfoText}>Autonomia: {autonomia}</Text>
        <Text style={styles.disponivelText}>DISPONÍVEL</Text>
        <TouchableOpacity style={styles.selecionarButton} onPress={handlePress}>
          <Text style={styles.buttonText}>SELECIONAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Catalogo = () => {
  
   const veiculos = [
    {
      nome: 'e-2008 GT',
      preco: '209,00',
      potencia: '136 cv e 26,5 kgfm',
      autonomia: '234 km',
      imagem: require('./assets/peugeote20082.png'),
    },
    
    {
      nome: 'Zoe e-Tech',
      preco: '209,00',
      potencia: '136 cv e 26,5 kgfm',
      autonomia: '234 km ',
      imagem: require('./assets/renault-zoe.png'), 
    },
    {
      nome: 'Caoa Chery iCar',
      preco: '209,00 ',
      potencia: '61 cv e 15,3 kgfm',
      autonomia: '282 km',
      imagem: require('./assets/Icar.png'), 
    },
    {
      nome: 'Kwid e-Tech',
      preco: '209,00 ',
      potencia: '65 cv e 11,4 kgfm ',
      autonomia: '185 km ',
      imagem: require('./assets/kwid.png'),
    },
    {
      nome: 'Seres 3',
      preco: '209,00 ',
      potencia: '163 cv e 30,6 kgfm ',
      autonomia: '300 km',
      imagem: require('./assets/seres3.png'), 
    },
    {
      nome: 'e-JSI',
      preco: '209,00',
      potencia: '136 cv e 40,3 kgfm',
      autonomia: '352 km',
      imagem: require('./assets/jac.png'), 
    },
    {
      nome: 'Kona EV',
      preco: '209,00 ',
      potencia: '185 cv e 28,3 kgfm ',
      autonomia: '230 km ',
      imagem: require('./assets/kona.png'),
    },
  ];

  const handleVeiculoPress = (veiculoIndex) => {
  navigation.navigate(`Carro${veiculoIndex + 1}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SELECIONE UM VEÍCULO</Text>
      </View>
      <Image source={require('./assets/bmw-i3.jpg')} style={styles.bmwImage} />
      <View style={styles.appInfoContainer}>
        <Text style={styles.appName}>EletriCar</Text>
      </View>
      <View style={styles.catalog}>
        {veiculos.map((veiculo, index) => (
          <VeiculoCard
            key={index}
            index={index}
            {...veiculo}
            onPress={() => handleVeiculoPress(veiculo)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  header: {
    width: 400,
    height: 127,
    backgroundColor: '#307A59',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 33,
    fontWeight: '400',
    lineHeight: 55,
    textAlign: 'center',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginTop: 80,
  },
  bmwImage: {
    width: 350,
    height: 150,
    borderRadius: 40,
    marginTop: 10,
  },
  appInfoContainer: {
    alignItems: 'center',
  },
  appName: {
    color: '#307A59',
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 10,
  },
  catalog: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 15,
  },
  veiculoCard: {
    width: 390,
    height: 150,
    backgroundColor: '#307A59',
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  carImage: {
    width: 180,
    height: 120,
    borderRadius: 50,
  },
  carInfoContainer: {
    marginTop: 10,
    paddingHorizontal: 40,
    marginLeft: -30,
  },
  carName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    marginTop: -10,
    textAlign: 'center',
  },
  carInfoText: {
    color: '#FFF',
    fontSize: 11,
    lineHeight: 18,
  },
  disponivelText: {
    color: '#FFF',
    fontSize: 19,
    lineHeight: 30,
    alignSelf: 'center',
  },
  selecionarButton: {
    width: 150,
    height: 30,
    backgroundColor: '#F3B33D',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Catalogo;
