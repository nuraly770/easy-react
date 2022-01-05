import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';

export default function App() {
  
//  const [todos, setTodos] = useState([])
//
//  const addTodo = (title) => {
//    const newTodo = {
//      id : Date.now().toString(),
//      title: title
//    }
//
//    setTodos(todos.concat([newTodo]))
//    setTodos((prevTodos) => {
//      return [
//        ...prevTodos,
//        newTodo
//      ]
//    })
//  }

//  setTodos(prev => [
//    ...prev,
//    {
//      id: Date.now().toString(),
//      title
//    }
//  ])
  
  return (
    <View>
      <Navbar />
    </View>
  );
}




const styles = StyleSheet.create({
    container:{
      paddingHorizontal: 30,
      paddingVertical: 20
    }
});
