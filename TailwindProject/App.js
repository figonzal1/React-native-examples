import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";

export default function App() {
  useDeviceContext(tw, { withDeviceColorScheme: false });

  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);

  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);

  return (
    <View
      style={tw`flex h-full items-center justify-center bg-cyan-50 dark:bg-gray-900`}
    >
      <Text style={tw`text-lg font-bold dark:text-white`}>New App</Text>
      <Text style={tw`text-6xl p-3`}>
        { colorScheme === 'dark' ? 'LUNA' : 'SOL'}
      </Text>

      <TouchableOpacity
        onPress={toggleColorScheme}
        style={tw`bg-cyan-600 py-3 px-6 rounded mt-10`}
      >
        <Text style={tw`text-white font-bold`}>My button</Text>
      </TouchableOpacity>
    </View>
  );
}
