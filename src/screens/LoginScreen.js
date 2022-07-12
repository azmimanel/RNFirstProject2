import React, { useContext } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from "react-native";
import { useState } from "react";
import RegisterScreen from "./RegisterScreen";
import Navigation from "../components/Navigation";
//import { AuthContext, login } from "../context/AuthContext";
import { TextInput } from "react-native-paper";
import { AuthContext, login } from "../services/AuthLogIn";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const val = useContext(AuthContext)
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Image style={styles.image} source={require('../utils/images/Logo.png')} />
            <View style={styles.container}>
                <Text style={styles.textTitle}>Welcome Back</Text>
                <Text style={styles.textBody}>Login to your account</Text>
                <View style={{ marginTop: 20 }}></View>
                <View style={styles.wrapper}>
                    <TextInput
                        left={<TextInput.Icon name="email" />}
                        activeUnderlineColor="green"
                        underlineColor="red"
                        style={styles.Input}
                        value={email}
                        placeholder="Enter email"
                        onChangeText={text => setEmail(text)}
                    />

                    <TextInput
                        left={<TextInput.Icon name="lock" />}
                        style={styles.Input}
                        activeUnderlineColor="green"
                        underlineColor="red"
                        value={password}
                        placeholder="Enter password"
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />

                    <TouchableOpacity onPress={() => {
                        login(email, password)
                    }}
                        style={styles.ButtonContainer}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.ButtonText}>Login</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={styles.textBody}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.link}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    ButtonContainer: {
        elevation: 8,
        backgroundColor: "#213b77",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,

    },

    ButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },


    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
        color: "#213b77"
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16,
        color: "#213b77",
        alignItems: 'center'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        margin: 20,

    },
    wrapper: {
        width: '80%'
    },
    Input: {
        margin: 15,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        paddingHorizontal: 14,
        backgroundColor: 'white'
    },
    link: {
        color: 'grey',
        fontSize: 16
    }
}

);

export default LoginScreen;