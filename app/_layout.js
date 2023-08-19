import React, {useCallback, useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import {StatusBar} from 'expo-status-bar';
import { Stack, NavigationContainer } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [loaded, error] = useFonts({
        'Chivo-Regular': require('../assets/fonts/Chivo-Regular.otf'),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }


    return (
        <Stack>

        </Stack>
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
