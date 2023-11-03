import { Tabs } from "expo-router";
import { ReactElement } from "react";
import { TabBarIcon } from "../../components/TabBarIcon";
import { colors } from "../../styles/colors";

const TabLayout = (): ReactElement => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 64,
          backgroundColor: colors.white,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Busca",
          tabBarIcon: () => (
            <TabBarIcon name="search" color={colors.light_salmon} />
          ),
          headerTitleStyle: {
            color: colors.light_salmon,
          },
          tabBarLabelStyle: {
            marginVertical: 4,
            color: colors.light_salmon,
            fontSize: 12,
            marginTop: 0,
          },
        }}
      />
      <Tabs.Screen
        name="organization"
        options={{
          title: "ONGs",
          headerTitleStyle: {
            color: colors.light_salmon,
          },
          tabBarIcon: () => (
            <TabBarIcon name="handshake-o" color={colors.light_salmon} />
          ),
          tabBarLabelStyle: {
            marginVertical: 4,
            color: colors.light_salmon,
            fontSize: 12,
            marginTop: 0,
          },
        }}
      />
      <Tabs.Screen
        name="match"
        options={{
          title: "Match",
          headerTitleStyle: {
            color: colors.light_salmon,
          },
          tabBarIcon: () => (
            <TabBarIcon name="paw" color={colors.light_salmon} />
          ),
          tabBarLabelStyle: {
            marginVertical: 4,
            color: colors.light_salmon,
            fontSize: 12,
            marginTop: 0,
          },
        }}
      />
      <Tabs.Screen
        name="company"
        options={{
          title: "Empresas",
          headerTitleStyle: {
            color: colors.light_salmon,
          },
          tabBarIcon: () => (
            <TabBarIcon name="building" color={colors.light_salmon} />
          ),
          tabBarLabelStyle: {
            marginVertical: 4,
            color: colors.light_salmon,
            fontSize: 12,
            marginTop: 0,
          },
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Conta",
          headerTitleStyle: {
            color: colors.light_salmon,
          },
          tabBarIcon: () => (
            <TabBarIcon name="user-circle" color={colors.light_salmon} />
          ),
          tabBarLabelStyle: {
            marginVertical: 4,
            color: colors.light_salmon,
            fontSize: 12,
            marginTop: 0,
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
