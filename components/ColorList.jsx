import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

const ColorList = ({ color }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {[1, 0.8, 0.5].map((opacity) => (
        <View
          key={opacity}
          style={[styles.color, { backgroundColor: color, opacity }]}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  color: {
    width: '100%',
    height: 150,
    borderRadius: 25,
    marginBottom: 15,
  },
  container: {
    paddingHorizontal: 20,
  },
});

export default ColorList;
