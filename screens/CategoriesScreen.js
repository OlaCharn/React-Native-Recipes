import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

//helper function
function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
