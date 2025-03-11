import { View, Text , StyleSheet} from 'react-native'

function SubTitle({children}) {
  return (
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}> {children} </Text>
      </View>

  )
}

export default SubTitle

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    padding: 8,
    margin: 4,
    marginHorizontal: 16,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
