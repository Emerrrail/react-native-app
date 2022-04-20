import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../theme/colors'
import { fontSizes, fontWeight } from '../../theme/fonts'

function BottomTabs ({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.center, 
            {paddingVertical: 12}]}
          >
            <Text style={ 
                [styles.tabTexts,
                {color: isFocused ? colors.primary : colors.textPrimary}]
                }>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabTexts: {
        fontSize: fontSizes.font3,
        fontWeight: fontWeight.bold
    }
})

export default BottomTabs