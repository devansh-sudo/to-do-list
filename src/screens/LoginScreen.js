import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Button, withTheme } from "react-native-paper";
import { StackActions } from "@react-navigation/native";

import { AuthContext } from "../contex/AuthContext";

const LoginScreen = ({ navigation, theme }) => {
    const { colors } = theme;

    const { loggedIn } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn) {
            navigation.dispatch(StackActions.replace("Account"));
        }
    }, [loggedIn]);

    const { login } = useContext(AuthContext);

    return (

        <View style={[styles.container, { backgroundColor: '#b2dfdb' }]}>
            <StatusBar backgroundColor={"#b2dfdb"} />
            <Button mode="contained" onPress={() => login()}>
                Login with Auth0 To create a To-Do-List
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 30,
        paddingLeft: 30,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default withTheme(LoginScreen);