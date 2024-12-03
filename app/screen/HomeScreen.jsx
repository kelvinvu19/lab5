import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = (task) => {
    if (task.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    setTaskInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>

      {/* Input field for tasks */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={taskInput}
          onChangeText={setTaskInput}
        />
        <Button title="Add Task" onPress={() => addTask(taskInput)} />
      </View>

      {/* Display the list of tasks */}
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.taskItem}>{item.text}</Text>}
        keyExtractor={(item) => item.id}
      />

      {/* Navigate to About Screen */}
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  taskItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

const HomeScreen = () => {
  return (
    <MainLayout>
      {/* Your screen content */}
    </MainLayout>
  );
};

const MainLayout = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
			<Footer />
		</View>
	);
};
