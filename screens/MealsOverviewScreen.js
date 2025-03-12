import {  useLayoutEffect } from "react";
//import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList items={displayedMeals} />;

}

export default MealsOverviewScreen;

