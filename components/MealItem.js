import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDescription from "./MealDescription";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  //открытие нового экрана с детальной информацией о блюде
  const navigation = useNavigation();

  function selectMealItemHandler() {
    //это функция, которая будет вызываться при нажатии на элемент
    navigation.navigate("MealDetail", {
      mealId: id,
    }); //это окно прописано в App.js
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}> {title} </Text>
          </View>
          <MealDescription
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 5,
    //shadow for ios
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
