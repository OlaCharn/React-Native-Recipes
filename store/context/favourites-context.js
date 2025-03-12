import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  //логика добавления и удаления избранного
  const [favouriteMealId, setFavoriteMealId] = useState([]);

  function addFavorite(id) {
    setFavoriteMealId((currentFavId) => [...currentFavId, id]);
  }

  function removeFavourite(id) {
    setFavoriteMealId((currentFavId) =>
      currentFavId.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealId,
    addFavorite: addFavorite,
    removeFavorite: removeFavourite,    
  }

  //обязательный компонент для работы с контекстом, value - передаваемые данные из const value
  return <FavouritesContext.Provider value={value} >{children}</FavouritesContext.Provider>;
}
export default FavouritesContextProvider;
