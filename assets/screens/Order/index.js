import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import theme, {COLORS, SIZES, FONTS} from '../../constant';

const Order = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Order</Text>
      </View>
      <Content />
    </View>
  );
};

const Content = () => {
  return <ScrollView></ScrollView>;
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
  },
});
