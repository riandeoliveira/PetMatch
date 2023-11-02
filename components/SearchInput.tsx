import { View, TextInput, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface SearchInputProps {
  placeholder: string;
}

const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Feather name="search" size={32} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888888"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#373737",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 12,
    flexDirection: "row",
    marginRight: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#888888",
    fontSize: 16,
  },
});
