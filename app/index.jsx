import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold font-pblack">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to Profile</Link>
    </View>
  );
}
