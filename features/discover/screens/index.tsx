import React, { ReactElement } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import TinderCard from "react-tinder-card";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const DiscoverScreen = (): ReactElement => {
  return (
    <TinderCard>
      <Image
        source={require("../../../assets/images/pets/charles.jpg")}
        style={{
          position: "absolute",
          width,
          height: height - 140,
        }}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          height: height - 140,
        }}
      >
        <View
          style={{
            height: 192,
            width,
            backgroundColor: "#00000080",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 32 }}>Meu Pet</Text>
        </View>
      </View>
    </TinderCard>
  );
};
