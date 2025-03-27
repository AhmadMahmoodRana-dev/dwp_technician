import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="CalendarPage" />
      <Stack.Screen name="Complaint" />
      <Stack.Screen name="ComplaintInformation" />
    </Stack>
  );
}
