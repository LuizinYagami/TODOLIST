import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default TaskInputField = (props) => {
  const [task, setTask] = useState();

  const handleAddTask = (value) => {
    props.addTask(value);
    setTask(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder={'escreva uma tarefa'}
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity onPress={() => handleAddTask(task)}>
        <View style={styles.button}>
          <MaterialIcons name="keyboard-arrow-up" size={25} color="black" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    backgroundColor: '#3E3364',
    borderWidth: 2,
    marginHorizontal: '30',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'left',
    botton: 20,
  },
  inputField: {
    color: '#fff',
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
