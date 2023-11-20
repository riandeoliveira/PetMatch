import { Link } from "expo-router";
import React, { ReactElement } from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { Icon, Text, Title } from "react-native-paper";
import { colors } from "../styles/colors";

const width: number = Dimensions.get("window").width;
const height: number = Dimensions.get("window").height;

export const LoginScreen = (): ReactElement => {
  return (
    <ImageBackground
      source={require("../assets/images/login-screen.jpg")}
      imageStyle={{ opacity: 0.5 }}
      style={{
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          width,
          height,
          padding: 36,
          justifyContent: "center",
          gap: 256,
        }}
      >
        <Title
          style={{
            color: colors.white,
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
              backgroundColor: colors.white,
              borderRadius: 100,
              padding: 12,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Icon source="paw" color={colors.light_salmon} size={21} />
              <Text
                style={{
                  color: colors.light_salmon,
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                Sou Adotante
              </Text>
            </View>
          </Link>
          <Link
            href="/match"
            style={{
              backgroundColor: colors.white,
              borderRadius: 100,
              padding: 12,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Icon source="hand-heart" color={colors.light_salmon} size={21} />
              <Text
                style={{
                  color: colors.light_salmon,
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                Sou uma ONG
              </Text>
            </View>
          </Link>
          <Link
            href="/match"
            style={{
              backgroundColor: colors.white,
              borderRadius: 100,
              padding: 12,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Icon source="domain" color={colors.light_salmon} size={21} />
              <Text
                style={{
                  color: colors.light_salmon,
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                Sou uma Empresa
              </Text>
            </View>
          </Link>
          <Link
            href="/ongs"
            style={{
              color: colors.white,
              textDecorationLine: "underline",
              textAlign: "center",
              fontSize: 16,
              marginTop: 32,
            }}
          >
            Encontrei um animal precisando de ajuda
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
};
