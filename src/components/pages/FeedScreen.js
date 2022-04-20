import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import UserCard from '../atoms/UserCard'
import axios from 'axios'

function FeedScreen () {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        .then((response) => {
            console.log('get data from feed',response.data);
            setData(response.data)
        })
        .catch((error) => {
            alert(error.message);
        })
    }, [])

    const renderItem = ({ item }) => (
        <UserCard name={item.name} city={item.city} />
      );

    return (
        <SafeAreaView style={styles.container}>
            {data.length !== 0 ? 
                <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.name} />
                :
                <Text>Loading...</Text>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
})


export default FeedScreen