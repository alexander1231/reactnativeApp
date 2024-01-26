import {ActivityIndicator, Button, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCliente} from '../hooks/useCliente.tsx';
import {styles} from '../themes/style.tsx';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const {clientes, isLoading} = useCliente();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View>
      <Text>
        {clientes.map(cliente => (
          <Text>{cliente.Email}</Text>
        ))}
      </Text>

      <TextInput
        style={styles.inputNombre}
        placeholder="Nombres"
        keyboardType="default"
      />

      <TextInput
        style={styles.inputNombre}
        placeholder="Apellidos"
        keyboardType="default"
      />

      <TextInput
        style={styles.inputNombre}
        placeholder="Correo"
        keyboardType="default"
      />

      <TextInput
        style={styles.inputNombre}
        placeholder="Telefono"
        keyboardType="default"
      />

      <TextInput
        style={styles.inputNombre}
        placeholder="Edad"
        keyboardType="default"
      />

      <TextInput
        style={styles.inputNombre}
        placeholder="DNI"
        keyboardType="default"
      />

      <View style={styles.buttonTop}>
        <Button
          title="ir detalle"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
    </View>
  );
};
