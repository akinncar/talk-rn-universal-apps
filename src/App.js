import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ADD8E6",
      }}
    >
      <Text style={{ color: "gray", fontSize: 24 }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
