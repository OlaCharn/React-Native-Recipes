import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; //хук для получения данных из store
import { addFavorite, removeFavorite } from "../store/redux/favorites"; //импортируем action creators

import { MEALS } from "../data/dummy-data";
import MealDescription from "../components/MealDescription";
import SubTitle from "../components/MealDescription/SubTitle";
import List from "../components/MealDescription/List";
import IconButton from "../components/IconButton";
//import { FavouritesContext } from "../store/context/favourites-context";

function MealDetail({ route, navigation, icon, color }) {
  //react Context
  //const favouriteMealContext = useContext(FavouritesContext);

  //Redux
  const favoriteMealIds = useSelector((state)=> state.favoriteMeals.ids) //получаем избранные блюда из store
  const dispatch = useDispatch(); //хук для отправки данных в store


  const mealId = route.params.mealId; //получаем id блюда, route - это объект, который передается в компоненты, которые мы регистрируем в App.js

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //находим блюдо по id

  //const mealIsFavorite = favouriteMealContext.ids.includes(mealId); //проверяем, есть ли блюдо в избранном
  const mealIsFavorite = favoriteMealIds.includes(mealId); // проверяем, есть ли блюдо в избранном

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      //favouriteMealContext.removeFavorite(mealId); - для Context
      dispatch(removeFavorite({ id: mealId })); //для Redux
    } else {
      //favouriteMealContext.addFavorite(mealId); - для Context
      dispatch(addFavorite({ id: mealId })); //для Redux
    }
  }
  //console.log("Избранные блюда:", favouriteMealContext.ids);
  //используем useLayoutEffect, чтобы изменить заголовок в хедере
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <View style={{ marginRight: 10 , padding: 10   }}>
            <IconButton
              icon={mealIsFavorite ? "heart" : "heart-outline"}
              color="white"
              onPress={changeFavoriteStatusHandler}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}  
            />
          </View>
        );
      },
    });
  }, [navigation, selectedMeal, mealIsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}> {selectedMeal.title} </Text>
      <View style={styles.details}>
        <MealDescription
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <SubTitle> Ingredients </SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle> Steps </SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetail;

//FlatList Ingredients не используют, так как элементов мало

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  detailText: {
    color: "orange",
  },
  listOuter: {
    alignItems: "center",
  },
  listContainer: {
    width: "90%",
  },
});
