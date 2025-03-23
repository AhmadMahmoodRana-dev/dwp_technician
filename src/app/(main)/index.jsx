import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,TouchableOpacity,FlatList,Dimensions,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import COLOR_SCHEME from "../../colors/MainStyle";
import { useRouter } from "expo-router";
import RecentJobCard from "../../components/RecentJobCard";

const { width } = Dimensions.get("window");

const quickActions = [
  { id: "1", icon: "work", title: "Complaints", route: "/Complaint" },
  { id: "2", icon: "summarize", title: "Summary" },
  { id: "3", icon: "inventory", title: "Inventory" },
  { id: "4", icon: "open-with", title: "OH Stock" },
];

const recentJobs = [
  {
    id: "1",
    title: "AC Repair",
    location: "Downtown Office",
    time: "2h ago",
    status: "Completed",
  },
  {
    id: "2",
    title: "Server Maintenance",
    location: "Data Center",
    time: "5h ago",
    status: "In Progress",
  },
  {
    id: "3",
    title: "Network Setup",
    location: "New Office",
    time: "1d ago",
    status: "Pending",
  },
  {
    id: "4",
    title: "Network Setup",
    location: "New Office",
    time: "1d ago",
    status: "Pending",
  },
  {
    id: "5",
    title: "Network Setup",
    location: "New Office",
    time: "1d ago",
    status: "Pending",
  },
];

export default function Index() {
  const navigate = useRouter();
  const renderQuickAction = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigate.push(item?.route)}
      style={styles.quickActionItem}
    >
      <MaterialIcons name={item.icon} size={32} color={COLOR_SCHEME.accent} />
      <Text style={styles.quickActionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning,</Text>
            <Text style={styles.userName}>John Doe</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.notificationBadge}>
              <MaterialIcons
                name="notifications"
                size={24}
                color={COLOR_SCHEME.text}
              />
              <View style={styles.badge} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
              <Ionicons name="person" size={24} color={COLOR_SCHEME.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <FlatList
          data={quickActions}
          renderItem={renderQuickAction}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.quickActionsContainer}
          scrollEnabled={false}
        />

        {/* Recent Jobs */}
        <Text style={styles.sectionTitle}>Recent Jobs</Text>
        <FlatList
          data={recentJobs}
          renderItem={RecentJobCard}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity>
          <MaterialIcons name="home" size={28} color={COLOR_SCHEME.accent} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate.push("/CalenderPage")}>
          <Feather name="calendar" size={28} color={COLOR_SCHEME.grayText} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="message-square"
            size={28}
            color={COLOR_SCHEME.grayText}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="settings" size={28} color={COLOR_SCHEME.grayText} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_SCHEME.background,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  greeting: {
    color: COLOR_SCHEME.grayText,
    fontSize: 16,
  },
  userName: {
    color: COLOR_SCHEME.text,
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  notificationBadge: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: -4,
    top: -2,
    backgroundColor: COLOR_SCHEME.accent,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  profileButton: {
    backgroundColor: COLOR_SCHEME.secondary,
    padding: 8,
    borderRadius: 12,
  },
  sectionTitle: {
    color: COLOR_SCHEME.text,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },

  quickActionsContainer: {
    justifyContent: "space-between",
  },
  quickActionItem: {
    backgroundColor: COLOR_SCHEME.secondary,
    width: width / 2.3 - 24,
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    margin: 8,
  },
  quickActionText: {
    color: COLOR_SCHEME.text,
    marginTop: 8,
    fontSize: 16,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLOR_SCHEME.primary,
    paddingVertical: 16,
    borderRadius: 24,
    marginTop: 10,
    marginBottom: 10,
  },
});
