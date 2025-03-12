import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer
  }, //передаем редьюсеры, чтобы использовать их в store, они содержат в себе состояние и логику
})
