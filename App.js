import React from "react";
import { Text, View } from "react-native";
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/services/AuthLogIn"

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>)


};

export default App;