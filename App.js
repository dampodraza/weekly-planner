import React, {useCallback, useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import Checkbox from 'expo-checkbox'; // Import Checkbox from expo-checkbox
import {Text, View} from 'react-native-ui-lib';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import {StatusBar} from 'expo-status-bar';
import SingleDay from "./src/components/SingleDay";


export default function App() {


    const [fontsLoaded] = useFonts({
        'Chivo-Regular': require('./assets/fonts/Chivo-Regular.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={styles.container} onLayout={onLayoutRootView} paddingV-s8>
            <SingleDay/>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        marginHorizontal: 20,
    },
    inputContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    input: {
        width: '90%',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        paddingVertical: 5,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        marginRight: 10,
    },
};
