import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ToDoForm from './ToDoForm'; 

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (taskText) => {
    if (taskText.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    setTasks([...tasks, { id: Date.now().toString(), text: taskText }]); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>

      {/* Pass addTask as a prop to ToDoForm */}
      <ToDoForm addTask={addTask} />

      {/* Display the list of tasks */}
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.taskItem}>{item.text}</Text>}
        keyExtractor={(item) => item.id}
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
  taskItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
