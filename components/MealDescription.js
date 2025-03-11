import { View, Text, StyleSheet } from "react-native";

function MealDescription({
  duration,
  complexity,
  affordability,
  style, //для стилизации компонента, в тех компонентах, где он используется
  textStyle, //для стилизации текста; в тех компонентах, где он используется
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}> {duration}m </Text>
      <Text style={[styles.detailItem, textStyle]}> {complexity.toUpperCase()} </Text>
      <Text style={[styles.detailItem, textStyle]}> {affordability.toUpperCase()} </Text>
    </View>
  );
}

export default MealDescription;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 16,
  },
});
