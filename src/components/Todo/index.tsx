import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
  todo: string;
  checkFunction: (isSelected: boolean) => void;
  deleteFunction: (todo: string) => void;
};

export default function Todo({ todo, checkFunction, deleteFunction }: Props) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.todoContainer}>
      <BouncyCheckbox
        textStyle={{ color: !isSelected ? "#F2F2F2" : "#808080" }}
        fillColor="#5E60CE"
        text={todo}
        isChecked={isSelected}
        onPress={() => {
          checkFunction(isSelected);
          setSelection(!isSelected);
        }}
      />
      <TouchableOpacity onPress={() => deleteFunction(todo)}>
        <Icon name="delete" size={21} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
