import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useLayoutEffect } from "react";
//import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  //const route = useRoute() - этот зук хорошо использовать для незарегистрированных экранов
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //помещаем все в useEffect, чтобы не было ошибки
  //но заменяем его на useLayoutEffect потому что у нас есть анимация заголовка
  useLayoutEffect(() => {
    //получаем заголовок категории
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    //динамиское изменение заголовка
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  //как выглдядит объект itemData
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
