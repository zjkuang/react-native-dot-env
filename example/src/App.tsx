import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { multiply } from '@zjkuang/react-native-dot-env';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  const [a, b] = [3, 7];

  useEffect(() => {
    multiply(a, b).then(setResult);
  }, [a, b]);

  return (
    <View style={styles.container}>
      <Text>{`${a} x ${b} = ${result}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
