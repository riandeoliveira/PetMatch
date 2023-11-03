import { LinearGradient } from "expo-linear-gradient";
import React, { ReactElement } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import TinderCard from "react-tinder-card";
import { pets } from "../../../data/pets";

const width: number = Dimensions.get("window").width;
const height: number = Dimensions.get("window").height;

export const DiscoverScreen = (): ReactElement => {
  return (
    <View>
      {pets.map((pet) => (
        <View style={{ position: "absolute" }} key={pet.id}>
          <TinderCard>
            <Image
              source={pet.image}
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
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.5 }}
                colors={["transparent", "#000000bb", "#000000"]}
                style={{
                  height: 256,
                  width,
                  padding: 24,
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 32, fontWeight: "500" }}
                >
                  {pet.name}
                </Text>
                <View style={{ flexDirection: "column" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "60%",
                      flexWrap: "wrap",
                      gap: 6,
                      paddingTop: 24,
                    }}
                  >
                    {pet.info.map((info, index) => (
                      <View
                        style={{
                          borderWidth: 1,
                          borderRadius: 10,
                          borderColor: "white",
                          paddingHorizontal: 10,
                          paddingVertical: 2,
                        }}
                        key={index}
                      >
                        <Text style={{ color: "#fff" }}>{info}</Text>
                      </View>
                    ))}
                  </View>
                  <View
                    style={{
                      paddingTop: 24,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: "#fec21e",
                        borderRadius: 100,
                        padding: 8,
                      }}
                    >
                      <AntDesignIcon name="back" color="#fec21e" size={32} />
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: "#fd4168",
                        borderRadius: 100,
                        padding: 8,
                      }}
                    >
                      <FeatherIcon name="x" color="#fd4168" size={32} />
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: "#25b7fe",
                        borderRadius: 100,
                        padding: 8,
                      }}
                    >
                      <FontAwesomeIcon name="star" color="#25b7fe" size={32} />
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: "#44eac4",
                        borderRadius: 100,
                        padding: 8,
                      }}
                    >
                      <AntDesignIcon name="heart" color="#44eac4" size={32} />
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: "#c174f0",
                        borderRadius: 100,
                        padding: 8,
                      }}
                    >
                      <MaterialCommunityIcon
                        name="lightning-bolt"
                        color="#c174f0"
                        size={32}
                      />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </TinderCard>
        </View>
      ))}
    </View>
  );
};
