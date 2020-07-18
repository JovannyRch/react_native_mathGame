import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

interface Video {
    title: string,
    key: number
}

export const SuggestionList = () => {
    const list: Video[] = [
        {
            title: "Jovas",
            key: 1
        },
        {
            title: "Mrg",
            key: 2
        }
        , {
            title: "asdasd",
            key: 3
        }
    ];

    const renderListItem = (props: Video) => {
        const { title, key } = props;
        return <Text>{title}</Text>
    };

    return (
        <>
            <FlatList data={list} renderItem={({ item }) => renderListItem(item)}>

            </FlatList>
        </>
    )
}


const styles = StyleSheet.create({});