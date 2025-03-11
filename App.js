import { StyleSheet, View, Text, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetail from "./screens/MealDetail";

//для регистрации экранов
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            contentStyle: {
              backgroundColor: "aliceblue",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //способ динамического изменения заголовка
            //options={({route, navigation}) => {
            //  const catId = route.params.categoryId;
            //  return {
            //    title: catId,
            //  }
            //}}
            //второй способ динамического изменения заголовка - в самом компоненте
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetail}
            //способ добавления кнопки в хедер
            //но он не подходит, если нам надо коммуницировать с компонентом, который находится внутри стека
            //для того, чтобы получить вариант коммуникации, надо идти в MealDetail.js
            //options={{
            //  headerRight: () => {
            //    return <Button title="tap me!"  />;
            //  },
            //}}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
