import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
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
        <View style={styles.CardMain}>
          <AntDesign name="file1" color="red" size={14} />
          <Text style={styles.complaintNo}>
            Complaint No :{" "}
            <Text style={{ fontWeight: "100" }}>{item.complaintNo}</Text>
          </Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(item.status) },
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.CardMain}>
        <AntDesign name="calendar" color="red" size={14} />
        <Text style={styles.complaintNo}>
          Visit Date :{" "}
          <Text style={{ fontWeight: "100" }}>{item.visitDate}</Text>
        </Text>
      </View>
      <View style={styles.CardMain}>
        <Text style={styles.complaintNo}>
          Day Since Complaint Filed :{" "}
          <Text style={{ fontWeight: "100" }}>{item.complainedFiledDay}</Text>
        </Text>
      </View>
      <View style={styles.CardMain}>
        <Text style={styles.complaintNo}>
          {item.product} |{" "}
          <Text style={{ fontWeight: "100" }}>{item.productCode}</Text>
        </Text>
      </View>
      {item.status === "Completed" ? (
        <View style={styles.jobHeader}>
          <Text style={{ fontWeight: 400, color: "white" }}>{item.region}</Text>
        </View>
      ) : (
        <View style={styles.jobHeader}>
          <Text style={{ fontWeight: 400, color: "white" }}>{item.region}</Text>
          <TouchableOpacity onPress={() => console.log("i am arrived")}
            style={[
              styles.statusBadge,
              { backgroundColor: getStatusColor(item.status) },
            ]}
          >
            <Text style={styles.statusText}>Arrived</Text>
          </TouchableOpacity>
        </View>
      )}
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
  complaintNo: {
    color: COLOR_SCHEME.text,
    fontSize: 14,
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
  CardMain: {
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
