import { CameraView } from "expo-camera";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Camera() {
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Expo Camera</Text>
        </View>
      </CameraView>
    </View>
  );
}