import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import COLOR_SCHEME from "../colors/MainStyle";

const RecentJobCard = ({ item }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#4ECCA3";
      case "In Progress":
        return "#FFD700";
      case "Pending":
        return "#FF6B6B";
      default:
        return COLOR_SCHEME.grayText;
    }
  };
  return (
    <TouchableOpacity style={styles.jobCard}>
      <View style={styles.jobHeader}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(item.status) },
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.jobDetails}>
        <Feather name="map-pin" size={16} color={COLOR_SCHEME.grayText} />
        <Text style={styles.jobLocation}>{item.location}</Text>
      </View>
      <Text style={styles.jobTime}>{item.region}</Text>
    </TouchableOpacity>
  );
};
export default RecentJobCard;

const styles = StyleSheet.create({
  jobCard: {
    backgroundColor: COLOR_SCHEME.secondary,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  jobTitle: {
    color: COLOR_SCHEME.text,
    fontSize: 16,
    fontWeight: "600",
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  statusText: {
    color: COLOR_SCHEME.text,
    fontSize: 12,
    fontWeight: "500",
  },
  jobDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  jobLocation: {
    color: COLOR_SCHEME.grayText,
    fontSize: 14,
  },
  jobTime: {
    color: COLOR_SCHEME.grayText,
    fontSize: 12,
  },
});
