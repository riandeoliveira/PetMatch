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
          title: "Discover",
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
        name="john"
        options={{
          title: "Discover",
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
        name="doe"
        options={{
          title: "Discover",
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
    </Tabs>
  );
};

export default TabLayout;
