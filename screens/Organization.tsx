import { ReactElement, useState } from "react";
import { Dimensions, FlatList, Image, View } from "react-native";
import {
  Button,
  Menu,
  PaperProvider,
  Text,
  TextInput,
  Title,
} from "react-native-paper";
import { organizations } from "../data/organizations";
import { colors } from "../styles/colors";

const width: number = Dimensions.get("window").width;
const height: number = Dimensions.get("window").height;

export const OrganizationScreen = (): ReactElement => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          width,
          height,
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            label="Nome da ONG"
            activeUnderlineColor={colors.light_salmon}
            style={{ flex: 1, backgroundColor: "#fff", borderRadius: 10 }}
          />
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Button
                icon="menu"
                textColor={colors.light_salmon}
                onPress={openMenu}
              >
                Ordenar por:
              </Button>
            }
            contentStyle={{
              backgroundColor: "#fff",
            }}
          >
            <Menu.Item onPress={() => {}} title="Ordem Alfabética" />
            <Menu.Item onPress={() => {}} title="Proximidade" />
          </Menu>
        </View>
        <View style={{ marginTop: 24 }}>
          <FlatList
            data={organizations}
            renderItem={({ item }) => (
              <View
                key={item.id}
                style={{
                  backgroundColor: "#fff",
                  padding: 12,
                  borderRadius: 10,
                  marginBottom: 12,
                  flexDirection: "row",
                  gap: 12,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    height: 128,
                    width: 128,
                    borderRadius: 10,
                  }}
                />
                <View>
                  <Title>{item.name}</Title>
                  <Text>{item.address}</Text>
                  <Text>{item.cep}</Text>
                  <Text>{item.neighborhood}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </PaperProvider>
  );
};
