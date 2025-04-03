import React, { useState } from "react";
import {View,Text,TouchableOpacity,TextInput,ScrollView,StyleSheet,Platform} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLOR_SCHEME from "../../colors/MainStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

const ComplaintActivityForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    complaintNo: "2232100026",
    dueDate: "0000-00-00",
    appliance: "Refrigerator Gree GR-E8768G-C1",
    customerName: "ABDUL REHMAN",
    phone: "03015988221",
    address: "45-B, FEROZPUR ROAD LAHORE",
    problem: "Gas Leakage",
    visitDate: "0000-00-00",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    handleChange("visitDate", currentDate.toLocaleDateString());
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={COLOR_SCHEME.text} />
        <Text style={styles.header}>Complaint Activity</Text>
      </TouchableOpacity>

      {/* Complaint Details Card */}
      <View style={styles.card}>
        <View style={styles.complaintHeader}>
          <Text style={styles.complaintNumber}>{formData.complaintNo}</Text>
          <Text style={styles.visitDate}>{formData.visitDate}</Text>
        </View>
        <Text style={styles.productName}>{formData.appliance}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Editable Form Fields */}
        <View style={styles.formCard}>
          {/* Customer Name */}
          <View style={styles.inputGroup}>
            <Ionicons
              name="person"
              size={18}
              color={COLOR_SCHEME.grayText}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Customer Name"
              value={formData.customerName}
              editable={false}
            />
          </View>

          {/* Phone Number */}
          <View style={styles.inputGroup}>
            <Ionicons
              name="call"
              size={18}
              color={COLOR_SCHEME.grayText}
              style={styles.inputIcon}
            />
            <Text style={{ color: "white", fontSize: 16 }}>+92</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={formData.phone}
              keyboardType="phone-pad"
              onChangeText={(text) => handleChange("phone", text)}
            />
          </View>

          {/* Address */}
          <View style={styles.inputGroup}>
            <Ionicons
              name="location"
              size={18}
              color={COLOR_SCHEME.grayText}
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.input, styles.addressInput]}
              placeholder="Address"
              value={formData.address}
              onChangeText={(text) => handleChange("address", text)}
              multiline
            />
          </View>

          {/* Problem */}
          <View style={styles.inputGroup}>
            <Ionicons
              name="alert-circle"
              size={18}
              color={COLOR_SCHEME.grayText}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Problem"
              value={formData.problem}
              onChangeText={(text) => handleChange("problem", text)}
            />
          </View>

          {/* Visit Date */}
          <View style={styles.inputGroup}>
            <Ionicons
              name="calendar"
              size={18}
              color={COLOR_SCHEME.grayText}
              style={styles.inputIcon}
            />
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={{ flex: 1 }}
            >
              <TextInput
                style={styles.input}
                placeholder="Visit Date"
                value={formData.visitDate}
                editable={false}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Show DateTimePicker */}
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}

        {/* Action Buttons */}
        {["Visits", "Technical Findings", "Store", "Advance"].map(
          (item, index) => (
            <View key={index} style={styles.rowBox}>
              <Text style={styles.label}>{item}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.buttonText}>+ Add New</Text>
              </TouchableOpacity>
            </View>
          )
        )}

        {/* Warranty Document */}
        <View style={styles.rowBox}>
          <Text style={styles.label}>Warranty Document</Text>
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="pencil" size={24} color={COLOR_SCHEME.accent} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="camera" size={24} color={COLOR_SCHEME.accent} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_SCHEME.background,
    padding: 15,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  header: {
    color: COLOR_SCHEME.text,
    fontSize: 26,
    fontWeight: "800",
  },
  card: {
    backgroundColor: COLOR_SCHEME.secondary,
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: { elevation: 3 },
    }),
  },
  complaintHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  complaintNumber: {
    color: COLOR_SCHEME.text,
    fontWeight: "600",
  },
  visitDate: {
    color: COLOR_SCHEME.grayText,
  },
  productName: {
    color: COLOR_SCHEME.accent,
    fontWeight: "700",
    fontSize: 16,
  },
  formCard: {
    backgroundColor: COLOR_SCHEME.secondary,
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: { elevation: 3 },
    }),
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: COLOR_SCHEME.background,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: COLOR_SCHEME.text,
    fontSize: 16,
    paddingVertical: 12,
  },
  addressInput: {
    height: 80,
    textAlignVertical: "center",
  },
  rowBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLOR_SCHEME.secondary,
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: COLOR_SCHEME.accent,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 10,
  },
  label:{
    fontSize: 16,
    color: COLOR_SCHEME.text,
    fontWeight: "600",
    marginBottom: 5,
    paddingHorizontal: 10,
  }
});

export default ComplaintActivityForm;
