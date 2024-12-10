import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ls, multiply, pwd } from '@zjkuang/react-native-dot-env';

export default function App() {
  const [result, setResult] = useState<number | undefined>();
  const [workingDirectory, setWorkingDirectory] = useState<string>();

  const [a, b] = [3, 7];

  useEffect(() => {
    multiply(a, b).then(setResult);
  }, [a, b]);

  useEffect(() => {
    pwd().then((dir: string) => {
      setWorkingDirectory(dir);
      ls(dir).then((items: any) => {
        console.log(JSON.stringify(items, null, 2));
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{`${a} x ${b} = ${result}`}</Text>
      <Text>{`Working directory: ${workingDirectory}`}</Text>
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
