import React, { useState } from "react";
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Platform, Linking} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLOR_SCHEME from "../../colors/MainStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import Dropdown from "../../components/Dropdown";

const ComplaintInformation = () => {
  const params = useLocalSearchParams();
  const [phone, setPhone] = useState("3008878690");
  const [landline, setLandline] = useState("02135678900");
  const [address, setAddress] = useState("Test Address, City");
  const [phoneStatus, setPhoneStatus] = useState("working");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const router = useRouter();
  const statusOptions = ["working", "not reachable", "wrong number"];
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
  const handleCall = () => {
    const phoneNumber = `tel:+92${phone}"`; // Replace with actual number
    Linking.openURL(phoneNumber).catch((err) =>
      Alert.alert("Error", "Could not make a call")
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={COLOR_SCHEME.text} />
        <Text style={styles.header}>Complaint Information</Text>
      </TouchableOpacity>

      {/* Complaint Details Card */}
      <View style={styles.card}>
        <View style={styles.complaintHeader}>
          <Text style={styles.complaintNumber}>{params.complaintNo}</Text>
          <Text style={styles.visitDate}>{params.visitDate}</Text>
        </View>
        <Text style={styles.productName}>
          {params.product} | {params.productCode}
        </Text>
      </View>

      {/* Arrival Button */}
      <TouchableOpacity style={[styles.arrivalButton,{backgroundColor:getStatusColor(params.status)}]}>
        <Ionicons
          name="navigate"
          size={20}
          color="white"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Complaint is {params.status}</Text>
      </TouchableOpacity>

      {/* Editable Form Section */}
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
            value="Test Entry"
            editable={false}
          />
        </View>

        {/* Phone Number */}
        <View style={styles.inputGroup}>
          <Ionicons
          onPress={() =>{handleCall()}}
            name="call"
            size={18}
            color={COLOR_SCHEME.grayText}
            style={styles.inputIcon}
          />
          <Text style={{color:"white",fontSize:16}}>+92</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Landline Number */}
        <View style={styles.inputGroup}>
          <Ionicons
            name="phone-portrait"
            size={18}
            color={COLOR_SCHEME.grayText}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Landline"
            value={landline}
            onChangeText={setLandline}
            keyboardType="phone-pad"
          />
        </View>

        {/* Phone Status Dropdown */}
        <TouchableOpacity
          style={styles.inputGroup}
          onPress={() => setShowStatusDropdown(true)}
        >
          <Ionicons
            name="information-circle"
            size={18}
            color={COLOR_SCHEME.grayText}
            style={styles.inputIcon}
          />
          <Text style={[styles.input, { paddingVertical: 12 }]}>
            {phoneStatus}
          </Text>
          <Ionicons
            name="chevron-down"
            size={16}
            color={COLOR_SCHEME.grayText}
          />
        </TouchableOpacity>

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
            value={address}
            onChangeText={setAddress}
            multiline
          />
        </View>
      </View>

      {/* Custom Dropdown Modal */}
      <Dropdown
        showStatusDropdown={showStatusDropdown}
        setPhoneStatus={setPhoneStatus}
        setShowStatusDropdown={setShowStatusDropdown}
        statusOptions={statusOptions}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... keep all previous styles from earlier version ...
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
      android: {
        elevation: 3,
      },
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
  arrivalButton: {
    backgroundColor: COLOR_SCHEME.accent,
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    ...Platform.select({
      ios: {
        shadowColor: COLOR_SCHEME.accent,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonIcon: {
    marginRight: 10,
  },
  formCard: {
    backgroundColor: COLOR_SCHEME.secondary,
    borderRadius: 12,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
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
  picker: {
    flex: 1,
    color: COLOR_SCHEME.text,
  },
});

export default ComplaintInformation;
