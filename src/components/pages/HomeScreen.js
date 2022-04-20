import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

function HomeScreen ({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Details Screen"
                onPress={() => navigation.navigate("Details")} // We added an onPress event which would navigate to the About screen
            />
        </View>
    );
}

export default HomeScreen