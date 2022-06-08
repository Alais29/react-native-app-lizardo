import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  imgContainer: {
    paddingVertical: 15,
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("screen").height < 650 ? 220 : 300,
    width: Dimensions.get("screen").height < 650 ? 180 : 245,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 8,
    borderWidth: 2,
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  chipContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  sectionContainer: {
    marginVertical: 10,
  },
  platFFormSelect: {
    alignItems: "center",
  },
  description: {
    fontSize: 16,
  },
  platformsContainer: {
    paddingVertical: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 20,
  },
  dropdownBtnStyle: {
    borderRadius: 50,
    height: 35,
    marginTop: 10,
  },
  dropdownTextStyle: {
    fontSize: 16,
  },
});
