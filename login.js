import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
  
  navigation.navigate("Catalogo");
};

const handleSignupPress = () => {
  navigation.navigate("Cadastro");
};
  return (
    <View style={styles.container}>
      <View style={styles.mainSquare}>
        <Text style={styles.loginTitle}>LOGIN</Text>
        <View style={styles.innerSquare}>
          <Image
            source={require('./assets/LogoEletri.PNG')}
            style={styles.logoImage}
          />
          <TextInput
            placeholder="testesenac@senacsp.edu.br"
            style={styles.input}
          />
          <TextInput
            placeholder="**********"
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity style={styles.signupTextContainer} onPress={handleSignupPress}>
            <Text style={styles.signupText}>Não tem uma conta? Crie uma</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#307A59',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainSquare: {
    width: 375,
    borderRadius: 20,
    backgroundColor: '#F0F9F6',
    padding: 120,
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#307A59',
    marginLeft: 25,
  },
  innerSquare: {
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 180,
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#307A59',
    marginBottom: 15,
  },
  signupTextContainer: {
    marginTop: 10,
  },
  signupText: {
    color: '#307A59',
    textDecorationLine: 'underline',
    fontSize: 14,
    textAlign: 'center', 
  },
  loginButton: {
    width: 250,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3B33D',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
  },
});

export default LoginScreen;
