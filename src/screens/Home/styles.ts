import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#333333",
  },
  header: {
    backgroundColor: "#0D0D0D",
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    height: 173,
  },
  searchContainer: {
    marginTop: -24,
    paddingLeft: 24,
    paddingRight: 12,
    height: 60,
    flexDirection: "row",
  },
  searchInput: {
    backgroundColor: "#262626",
    height: 60,
    width: "77%",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
  },
  addBtn: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
  taskTotals: {
    flexDirection: "row",
  },
  criadas: {
    color: "#4EA8DE",
    fontSize: 16,
    fontWeight: "bold",
  },
  concluidas: {
    color: "#8284FA",
    fontSize: 16,
    fontWeight: "bold",
  },
  count: {
    backgroundColor: "#454545",
    color: "#FFF",
    width: 25,
    borderRadius: 50,
    textAlign: "center",
    marginLeft: 10,
  },
  list: {
    marginTop: -20,
    gap: 10,
  },
  emptyContainer: {
    borderTopWidth: 1,
    borderTopColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    color: "#808080",
    fontWeight: "700",
  },
  subText: {
    color: "#808080",
  },
});
