import { Link } from "expo-router";
import React, { ReactElement } from "react";
import { Dimensions, View } from "react-native";
import { Icon, Text, Title } from "react-native-paper";
import { colors } from "../styles/colors";

const width: number = Dimensions.get("window").width;
const height: number = Dimensions.get("window").height;

export const LoginScreen = (): ReactElement => {
  return (
    <View
      style={{
        width,
        height,
        padding: 36,
        justifyContent: "center",
        backgroundColor: colors.white,
        gap: 256,
      }}
    >
      <Title
        style={{
          color: colors.light_salmon,
          fontWeight: "800",
          fontSize: 32,
          textAlign: "center",
        }}
      >
        PetMatch
      </Title>
      <View
        style={{
          gap: 8,
          flexDirection: "column",
        }}
      >
        <Link
          href="/match"
          style={{
            backgroundColor: colors.light_salmon,
            borderRadius: 100,
            padding: 12,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Icon source="paw" color="#fff" size={21} />
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
              Sou Adotante
            </Text>
          </View>
        </Link>
        <Link
          href="/match"
          style={{
            backgroundColor: colors.light_salmon,
            borderRadius: 100,
            padding: 12,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Icon source="hand-heart" color="#fff" size={21} />
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
              Sou uma ONG
            </Text>
          </View>
        </Link>
        <Link
          href="/match"
          style={{
            backgroundColor: colors.light_salmon,
            borderRadius: 100,
            padding: 12,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Icon source="domain" color="#fff" size={21} />
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
              Sou uma Empresa
            </Text>
          </View>
        </Link>
      </View>
    </View>
  );
};
