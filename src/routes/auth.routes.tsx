import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import ConfigNotificationsScreen from "@screens/ConfigNotificationsScreen";
import GenderScreen from "@screens/GenderSceen";
import TabOneScreen from "@screens/HelloScreen";
import ImproveAreaLifeScreen from "@screens/ImproveAreaLifeScreen";
import SubscriptionScreen from "@screens/SubscriptionScreen";

type AuthRoutes = {
  hello: undefined;
  configNotifications: undefined;
  gender: undefined;
  improveAreaLife: undefined;
  subscription: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="hello" component={TabOneScreen} />
      <Screen
        name="configNotifications"
        component={ConfigNotificationsScreen}
      />
      <Screen
        name="gender"
        component={GenderScreen}
      />
      <Screen
        name="improveAreaLife"
        component={ImproveAreaLifeScreen}
      />
      <Screen
        name="subscription"
        component={SubscriptionScreen}
      />
    </Navigator>
  );
}
