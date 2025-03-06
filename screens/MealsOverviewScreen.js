import { View, Text, StyleSheet } from "react-native";
//import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  //const route = useRoute() - этот зук хорошо использовать для незарегистрированных экранов
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview - {catId} </Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
