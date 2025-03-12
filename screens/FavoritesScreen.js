import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux"; //хук для получения данных из store
//import { useContext } from "react";
//import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  //Context
  //const favMealsCtx = useContext(FavouritesContext);
  //const favoriteMeals = MEALS.filter((meal) =>
  //   favMealsCtx.ids.includes(meal.id)
  // );

  //Redux
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids); //получаем избранные блюда из store
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  //отображение страницы без избранных блюд
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContauner}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContauner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
