import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import ControlMenu from "./components/ControlMenu";
import KilometerCounter from "./components/KilometerCounter";
import { Storage, STORAGE_KEYS } from "./services/store";

export default function App() {
  const [data, setData] = useState({
    totalKilometers: 0,
    currentKilometers: 0,
  });

  useEffect(() => {
    Storage.getData(STORAGE_KEYS.TOTAL_KILOMETERS).then(async (kilometers) =>
      setData({
        totalKilometers: kilometers ? kilometers : 0,
        currentKilometers: data.currentKilometers,
      })
    );

    Storage.getData(STORAGE_KEYS.CURRENT_KILOMETERS).then(async (kilometers) =>
      setData({
        totalKilometers: data.totalKilometers,
        currentKilometers: kilometers ? kilometers : 0,
      })
    );
  }, []);

  const add = (endKilometers: number | undefined) => {
    if (
      endKilometers === undefined ||
      endKilometers <= data.currentKilometers
    ) {
      return;
    }
    const totalKilometers =
      data.totalKilometers + Math.abs(data.currentKilometers - endKilometers);
    const currentKilometers = endKilometers;
    setData({
      totalKilometers: totalKilometers ? totalKilometers : 0,
      currentKilometers: currentKilometers ? currentKilometers : 0,
    });
    Storage.saveData(totalKilometers, STORAGE_KEYS.TOTAL_KILOMETERS);
  };

  const setupCurrent = (currentKilometers: number | undefined) => {
    if (currentKilometers === undefined) {
      return;
    }
    setData({
      totalKilometers: data.totalKilometers,
      currentKilometers: currentKilometers ? currentKilometers : 0,
    });
    Storage.saveData(currentKilometers, STORAGE_KEYS.TOTAL_KILOMETERS);
  };

  const reset = (): void => {
    setData({
      totalKilometers: 0,
      currentKilometers: data.currentKilometers,
    });
    Storage.saveData(0, STORAGE_KEYS.TOTAL_KILOMETERS);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.text}>Mikrometr App</Text>
      <KilometerCounter
        currentKilometers={data.currentKilometers}
        totalKilometers={data.totalKilometers}
      />
      <ControlMenu
        add={add}
        reset={reset}
        setupCurrent={setupCurrent}
        currentKilometers={data.currentKilometers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darksalmon",
    alignItems: "center",
    // justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
});
