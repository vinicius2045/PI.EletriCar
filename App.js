import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastro from './cadastro';
import LoginScreen from './login';
import Catalogo from './catalogo';
import ChamadaCarro1 from './carro1';
import ChamadaCarro2 from './carro2';
import ChamadaCarro3 from './carro3';
import ChamadaCarro4 from './carro4';
import ChamadaCarro5 from './carro5';
import ChamadaCarro6 from './carro6';
import ChamadaCarro7 from './carro7';
import RetiradaScreen from './retirada';
import DevolucaoScreen from './devolucao';
import PagamentoScreen from './pagamento';
import ConfirmacaoScreen from './confirmacao';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cadastro" 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Catalogo" component={Catalogo}/>
      <Stack.Screen name="Carro1" component={ChamadaCarro1} />
      <Stack.Screen name="Carro2" component={ChamadaCarro2} />
      <Stack.Screen name="Carro3" component={ChamadaCarro3} />
      <Stack.Screen name="Carro4" component={ChamadaCarro4} />
      <Stack.Screen name="Carro5" component={ChamadaCarro5} />
      <Stack.Screen name="Carro6" component={ChamadaCarro6} />
      <Stack.Screen name="Carro7" component={ChamadaCarro7} />
      <Stack.Screen name="retirada" component={RetiradaScreen} />
      <Stack.Screen name="devolucao" component={DevolucaoScreen} />
      <Stack.Screen name="pagamento" component={PagamentoScreen} />
      <Stack.Screen name="confirmacao" component={ConfirmacaoScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
