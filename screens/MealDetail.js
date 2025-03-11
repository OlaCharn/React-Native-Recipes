import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDescription from "../components/MealDescription";
import SubTitle from "../components/MealDescription/SubTitle";
import List from "../components/MealDescription/List";
import IconButton from "../components/IconButton";

function MealDetail({ route, navigation, icon, color }) {
  const mealId = route.params.mealId; //получаем id блюда, route - это объект, который передается в компоненты, которые мы регистрируем в App.js

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //находим блюдо по id

  function headerButtonPressHandler() {
    console.log("Header button pressed");
  }

  //используем useLayoutEffect, чтобы изменить заголовок в хедере
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            icon="heart"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, selectedMeal]);

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
