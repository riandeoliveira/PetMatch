import { FontAwesome } from "@expo/vector-icons";
import { ReactElement } from "react";

interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}

export const TabBarIcon = (props: TabBarIconProps): ReactElement => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
};
