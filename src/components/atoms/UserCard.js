import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../theme/colors'

function UserCard ({ name, city }) {
    return (
        <View style={styles.card}>
            <Text>Name: {name}</Text>
            <Text>City: {city}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.secondary,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
})

export default UserCard