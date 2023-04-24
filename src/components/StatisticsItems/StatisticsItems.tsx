import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

import { StatisticsItemsProps } from '../../@tipagens/interfaces';
import { StyleSheet } from 'react-native';

export default function StatisticsItems({ list }: StatisticsItemsProps) {
    return (
        <FlatList
            horizontal={true}
            decelerationRate='normal'
            style={styles.statisticsContainer}
            showsHorizontalScrollIndicator={false}
            keyExtractor={({ label }, index) => `${label}-${index}`}
            renderItem={({ item, index }) =>
            (
                <View key={`${index}-${item.label}`} style={styles.statisticsItem}>
                    <Text style={styles.value}>
                        {item.value}
                    </Text>
                    <Text style={styles.label} numberOfLines={2}>
                        {item.label}
                    </Text>
                </View>
            )}
            data={list}
        />
    )
}

const styles = StyleSheet.create({
    statisticsContainer: {
        display: 'flex',
        marginVertical: 10,
    },
    statisticsItem: {
        height: 100,
        width: 100,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        marginHorizontal: 5
    },
    value: {
        height: '50%',
        padding: 10,
        fontSize: 25,
        color: '#375A64',
        fontWeight: '800',

    },
    label: {
        height: '50%',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 15,
        textAlign: 'right',
        color: '#375A64',
        fontWeight: '400',
        fontSize: 15
    }
})