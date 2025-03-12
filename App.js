import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native"; //получаем компонент для навигации
import { createDrawerNavigator } from "@react-navigation/drawer"; //получаем функцию для создания Drawer
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //получаем функцию для создания Stack
//import FavouritesContextProvider from "./store/context/favourites-context"; //подключаем контекст
import { Provider } from "react-redux"; //подключаем провайдер redux
import { store } from "./store/redux/store"; //подключаем store redux


import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetail from "./screens/MealDetail";
import FavoritesScreen from "./screens/FavoritesScreen";



const Stack = createNativeStackNavigator(); //для регистрации экранов
const Drawer = createDrawerNavigator(); //для регистрации навигационных элементов


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
        sceneContainerStyle: {
          //стили для экрана, где есть Drawer
          backgroundColor: "aliceblue",
        },
        drawerContentStyle: { backgroundColor: "aliceblue" },
        drawerInactiveTintColor: "grey",
        drawerActiveTintColor: "#f4511e",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/*<FavouritesContextProvider>*/}
      <Provider store={store} >
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
              name="All Categories"
              component={DrawerNavigator}
              options={{
                //title: "All Categories",
                headerShown: false, //не показываем хедер главной страницы
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
        </Provider>
      {/*</FavouritesContextProvider>*/}
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
