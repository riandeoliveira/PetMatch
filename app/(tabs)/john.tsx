import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { ReactElement } from "react";
import { colors } from "../../styles/colors";

interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}

const TabBarIcon = (props: TabBarIconProps): ReactElement => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
};

export default function TabLayout(): ReactElement {
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
            marginTop: 0,
          },
        }}
      />
      <Tabs.Screen
        name="john"
        options={{
          title: "asdasd",
          tabBarIcon: () => (
            <TabBarIcon name="paw" color={colors.light_salmon} />
          ),
          tabBarLabelStyle: {
            marginVertical: 4,
            color: colors.light_salmon,
            marginTop: 0,
          },
        }}
      />
    </Tabs>
  );
}
