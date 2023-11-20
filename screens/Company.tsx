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
import { companies } from "../data/companies";
import { colors } from "../styles/colors";

const width: number = Dimensions.get("window").width;
const height: number = Dimensions.get("window").height;

export const CompanyScreen = (): ReactElement => {
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
            label="Nome da Empresa"
            activeUnderlineColor={colors.light_salmon}
            style={{
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
            textColor="#000"
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
            <Menu.Item
              onPress={() => {}}
              title="Ordem Alfabética"
              titleStyle={{ color: "#000" }}
            />
            <Menu.Item
              onPress={() => {}}
              title="Proximidade"
              titleStyle={{ color: "#000" }}
            />
          </Menu>
        </View>
        <View style={{ marginTop: 24 }}>
          <FlatList
            data={companies}
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
                  <Title style={{ color: "#000" }}>{item.name}</Title>
                  <Text style={{ color: "#000" }}>{item.address}</Text>
                  <Text style={{ color: "#000" }}>{item.cep}</Text>
                  <Text style={{ color: "#000" }}>{item.neighborhood}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </PaperProvider>
  );
};
