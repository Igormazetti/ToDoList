import { useState } from "react";
import { View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

type Props = {
  todo: string;
  checkFunction: (isSelected: boolean) => void;
};

export default function Todo({ todo, checkFunction }: Props) {
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
    </View>
  );
}
