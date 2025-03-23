import {FlatList,StyleSheet,Text,View,TouchableOpacity} from "react-native";
import React, { useState } from "react";
import COLOR_SCHEME from "../../colors/MainStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import RecentJobCard from "../../components/RecentJobCard";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Complaint = () => {
  const navigate = useRouter()
  const filters = ["All","Under Repair","RE-Repair","Estimate","Part Waiting","Lift","Technical Enquiry","Replacement", "Completed"];
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc"); 
  const recentJobs = [
    {
      id: "1",
      title: "AC Repair",
      location: "Downtown Office",
      time: "2h ago",
      status: "Completed",
      region: "North Region",
    },
    {
      id: "2",
      title: "Server Maintenance",
      location: "Data Center",
      time: "5h ago",
      status: "In Progress",
      region: "South Region",
    },
    {
      id: "3",
      title: "Network Setup",
      location: "New Office",
      time: "1d ago",
      status: "Pending",
      region: "East Region",
    },
    {
      id: "4",
      title: "Printer Repair",
      location: "Marketing Dept",
      time: "3h ago",
      status: "Part Waiting",
      region: "West Region",
    },
    {
      id: "5",
      title: "Lift Maintenance",
      location: "Main Building",
      time: "6h ago",
      status: "Under Repair",
      region: "Central Region",
    },
  ];

  const filteredJobs = recentJobs
    .filter((job) => {
      return selectedFilter === "All" || job.status === selectedFilter;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.region.localeCompare(b.region);
      }
      return b.region.localeCompare(a.region);
    });

  return (
    <SafeAreaView style={styles.container}>
    <View style={{alignItems:"center",flexDirection:"row",gap:90}}>
      <Ionicons name="arrow-back-sharp" size={24} color="white" onPress={() => navigate.back()} />
      <Text style={styles.header}>All Complaints</Text>
    </View>

      {/* Status Filter Section */}
      <View style={styles.filterContainer}>
        <FlatList
          data={filters}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedFilter === item && styles.selectedFilter,
              ]}
              onPress={() => setSelectedFilter(item)}
            >
              <Text style={styles.filterText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Sort Toggle Button */}
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
      >
        <Text style={styles.filterText}>
          Sort {sortOrder === "asc" ? "A-Z ▲" : "Z-A ▼"}
        </Text>
      </TouchableOpacity>

      {/* Complaints List */}
      <View style={styles.cardContainer}>
        <FlatList
          data={filteredJobs}
          renderItem={RecentJobCard}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Complaint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_SCHEME.background,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: COLOR_SCHEME.text,
  },
  filterContainer: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#555",
  },
  selectedFilter: {
    backgroundColor: "#1a1a1a",
    borderColor: "#777",
  },
  filterText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  cardContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  sortButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#555",
    marginVertical: 10,
    alignSelf: "flex-end",
    marginRight: 10,
  },
});