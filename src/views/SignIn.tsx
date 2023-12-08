import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Input from "../components/ui/Input";
import Typography from "../components/ui/Typography";
import { TextInput } from "react-native-paper";
import { EyeClose, EyeOpen, Lock, Mail } from "../icons";
import Button from "../components/ui/Button";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<any>(false);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: 113, height: 67 }}
        resizeMode="contain"
      />
      <Typography style={styles.title} type="title">
        Login to Your Account
      </Typography>
      <Input
        styleInput={{ marginTop: 13 }}
        label="Mail"
        left={<TextInput.Icon disabled icon={() => <Mail style={{}} />} />}
      />
      <Input
        styleInput={{ marginTop: 13 }}
        label="Password"
        left={<TextInput.Icon disabled icon={() => <Lock style={{}} />} />}
        right={
          <TextInput.Icon
            icon={() => (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOpen /> : <EyeClose />}
              </TouchableOpacity>
            )}
          />
        }
        secureTextEntry={showPassword ? false : true}
      />
      <Button title="Sign In" style={styles.button} />
      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Typography type="button" gradient={true} style={styles.forgotPass}>
          Forgot the password?
        </Typography>
      </TouchableOpacity>
      <View style={styles.signContainer}>
        <Typography type="sub" style={styles.haveAcc}>
          Don’t have an account?
        </Typography>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Typography type="button" gradient={true} style={styles.signUp}>
            Sign Up
          </Typography>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 38.4,
    marginTop: 81,
  },
  button: {
    marginTop: 34,
  },
  forgotPass: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22.4,
    letterSpacing: 0.2,
    marginTop: 15,
  },
  haveAcc: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19.6,
    letterSpacing: 0.2,
    opacity: 0.5,
    marginRight: 8,
  },
  signUp: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19.6,
    letterSpacing: 0.2,
  },
  signContainer: {
    display: "flex",
    flexDirection: "row",
  },
});