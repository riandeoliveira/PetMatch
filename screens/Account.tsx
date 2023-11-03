import { router } from "expo-router";
import { ReactElement } from "react";
import { Dimensions, Image, View } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { colors } from "../styles/colors";

const width: number = Dimensions.get("window").width;
const height: number = Dimensions.get("window").height;

export const AccountScreen = (): ReactElement => {
  return (
    <View
      style={{
        width,
        height,
        padding: 16,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Image
          source={require("../assets/images/profile/laura.jpg")}
          style={{ width: 150, height: 150, borderRadius: 1000 }}
        />
        <Title style={{ fontSize: 28, fontWeight: "600" }}>Laura Almeida</Title>
      </View>
      <View style={{ marginTop: 36, gap: 12 }}>
        <TextInput
          label="E-mail"
          activeUnderlineColor={colors.light_salmon}
          style={{
            backgroundColor: "#fff",
          }}
          value="laura.almeida@email.com.br"
          disabled
        />
        <TextInput
          secureTextEntry
          label="Senha"
          activeUnderlineColor={colors.light_salmon}
          style={{
            backgroundColor: "#fff",
          }}
          value="estaeumasenhasegura12345"
          disabled
        />
        <TextInput
          label="Telefone"
          activeUnderlineColor={colors.light_salmon}
          style={{
            backgroundColor: "#fff",
          }}
          value="+55 51 12345-6789"
          disabled
        />
        <TextInput
          label="CPF"
          activeUnderlineColor={colors.light_salmon}
          style={{
            backgroundColor: "#fff",
          }}
          value="123.456.789-00"
          disabled
        />
        <Button
          icon="pencil"
          buttonColor={colors.light_salmon}
          textColor="#fff"
        >
          Editar
        </Button>
      </View>
      <View style={{ flexDirection: "row", gap: 12, marginTop: 16 }}>
        <Button
          icon="alert"
          buttonColor={colors.white}
          textColor={colors.light_salmon}
          style={{ flex: 1, borderWidth: 1, borderColor: colors.light_salmon }}
        >
          Apagar conta
        </Button>
        <Button
          icon="arrow-right"
          buttonColor={colors.white}
          textColor={colors.light_salmon}
          style={{ flex: 1, borderWidth: 1, borderColor: colors.light_salmon }}
          onPress={() => router.replace("/")}
        >
          Sair
        </Button>
      </View>
    </View>
  );
};
