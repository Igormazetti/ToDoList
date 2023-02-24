import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import Todo from "../../components/Todo";

export default function Home() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState(0);

  const handleAddTodo = () => {
    setTodoList((prevState) => [...prevState, todo]);
    setTodo("");
  };

  const handleCheckTodo = (isSelected: boolean) => {
    isSelected
      ? setCompleted((prevState) => prevState - 1)
      : setCompleted((prevState) => prevState + 1);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            handleAddTodo();
          }}
        >
          <Icon name="add-circle-outline" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.countContainer}>
        <View style={styles.taskTotals}>
          <Text style={styles.criadas}>Criadas</Text>
          <Text style={styles.count}>{todoList.length}</Text>
        </View>
        <View style={styles.taskTotals}>
          <Text style={styles.concluidas}>Concluídas</Text>
          <Text style={styles.count}>{completed}</Text>
        </View>
      </View>
      <View style={{ padding: 24 }}>
        <ScrollView style={styles.list}>
          {todoList.length > 0 ? (
            todoList.map((item, index) => (
              <Todo
                key={item + index}
                todo={item}
                checkFunction={handleCheckTodo}
              />
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Image
                style={{ marginTop: 48 }}
                source={require("../../../assets/Clipboard.png")}
              />
              <Text style={styles.text}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.subText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}