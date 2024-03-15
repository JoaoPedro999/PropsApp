import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5dc",
  },
  image: {
    width: 500,
    height: 500,
  },
  name: {
    fontSize: 30,
  },
  adress: {
    fontSize: 25,
    color: "#add8e6",
  },
  description: {
    fontSize: 20,
    color: "#a9a9a9",
  },
  card: {
    width: "80%",
    padding: 20,
    backgroundColor: "#ffffff33",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default styles;
