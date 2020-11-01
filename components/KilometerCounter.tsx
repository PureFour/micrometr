import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCountUp } from "use-count-up";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

type KilometerCounterProps = {
  currentKilometers: number;
  totalKilometers: number;
};

function KilometerCounter({
  totalKilometers,
  currentKilometers,
}: KilometerCounterProps) {
  const renderNumber = (count: number) => {
    const { value } = useCountUp({
      isCounting: true,
      end: count,
      autoResetKey: count,
    });
    return value;
  };

  return (
    <View>
      <View style={styles.kilometersCounter}>
        <AntDesign name="car" size={35} color="black" />
        <Text style={styles.text}>
          {renderNumber(currentKilometers)} KM
        </Text>
      </View>
      <View style={styles.kilometersCounter}>
        <SimpleLineIcons name="speedometer" size={35} color="black" />
        <Text style={styles.text}>
          {renderNumber(totalKilometers)} KM
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kilometersCounter: {
    alignContent: "center",
    flexDirection: "row",
    paddingTop: 20,
  },
  text: {
    fontSize: 30,
    alignSelf: "flex-start",
    paddingLeft: 10,
  },
});

export default KilometerCounter;
