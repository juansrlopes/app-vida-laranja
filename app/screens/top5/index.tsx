import { Colors, Typography } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Top5Item, top5Items } from '../../../assets/data';

// Top 5 screen UI component
// Displays a grid of top 5 categories with image backgrounds and titles
export default function Top5Screen() {
  const renderTop5Item = ({ item }: { item: Top5Item }) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => handleItemPress(item)}
    >
      <ImageBackground
        source={item.image}
        style={styles.imageBackground}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );

  const handleItemPress = (item: Top5Item) => {
    // Navigate to top5 detail page using the slug (within tabs to keep navigation visible)
    router.push(`/(main)/(tabs)/top5-detail?categoryId=${item.slug}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <FlatList
        data={top5Items}
        renderItem={renderTop5Item}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  itemContainer: {
    width: '48%',
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    borderRadius: 12,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 12,
    alignItems: 'center',
  },
  itemTitle: {
    ...Typography.bodyMediumSemiBold,
    color: '#fff',
    textAlign: 'center',
  },
});
