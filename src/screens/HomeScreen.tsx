
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { HeaderComponent } from './../components/HeaderComponent';
import { SuggestionList } from './../components/SuggestionList';

export const HomeScreen = (props: any) => {

    return <>
        <SafeAreaView>
            <View>
                <HeaderComponent title="Hola a todos!" />
                <SuggestionList />

            </View>

        </SafeAreaView>
    </>;
};
