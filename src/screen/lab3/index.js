import { useState } from 'react';
import {styles} from './style';
import {StyleSheet, View, Text, TextInput} from 'react-native';


const Lab3 = () => {
  const [name, setName] = useState('');
    return (
      <View style={styles.container}>
        <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhap ho ten"
        style={styles.tipStyle}
        />
        <Text style={styles.baseText}>
          Em vao doi bang{''}
          <Text style={[styles.boldText, colorText('red')]}>vang do</Text>
        </Text>
      </View>
    )
  };

export default Lab3;

const colorText = color => ({
  color,
});