import GeneratePasswordScreen from "./src";
import MyProvider from "./src/context/MyProvider";

export default function App() {
  return (
    <MyProvider>
      <GeneratePasswordScreen />
    </MyProvider>
  );
}
