import {SafeAreaView, Text} from 'react-native';
import StyleSheet from 'styled-components/dist/sheet/Sheet';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  color: #f80000;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Testando</Text>
      <TextNew>NOVO TESTE</TextNew>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

export default App;
