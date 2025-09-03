import { Colors, Typography } from '@/constants';
import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CategoryItem, getCategoryBySlug } from '../../../assets/data/top5';

interface Top5DetailScreenProps {
  categoryId: string;
}

// Top 5 detail screen UI component
// Displays the top 5 items for a specific category
export default function Top5DetailScreen({
  categoryId,
}: Top5DetailScreenProps) {
  const category = getCategoryBySlug(categoryId);

  if (!category) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={[Typography.h3, { color: Colors.text }]}>
          Category not found
        </Text>
      </View>
    );
  }

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: CategoryItem;
    index: number;
  }) => (
    <Pressable style={styles.itemCard} onPress={() => handleItemPress(item)}>
      {/* Ranking Badge */}
      <View style={[styles.rankingBadge, { backgroundColor: Colors.tint }]}>
        <Text style={styles.rankingText}>#{index + 1}</Text>
      </View>

      <View style={styles.itemContent}>
        {/* Item Image */}
        <Image
          source={item.image}
          style={styles.itemImage}
          resizeMode="cover"
        />

        {/* Item Details */}
        <View style={styles.itemDetails}>
          <View style={styles.itemHeader}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
              numberOfLines={1}
            >
              {item.name}
            </Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>⭐ {item.rating}</Text>
              <Text style={[styles.priceRange, { color: Colors.tint }]}>
                {item.priceRange}
              </Text>
            </View>
          </View>

          <Text
            style={[Typography.caption, { color: Colors.text }]}
            numberOfLines={2}
          >
            {item.description}
          </Text>

          <Text
            style={[Typography.caption, { color: Colors.text, marginTop: 4 }]}
            numberOfLines={1}
          >
            📍 {item.address}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  const handleItemPress = (item: CategoryItem) => {
    // In a real app, this would navigate to item details screen
    // For now, we'll show an alert with item information
    Alert.alert(
      item.name,
      `${item.description}\n\nRating: ${item.rating}⭐\nPrice: ${item.priceRange}\nAddress: ${item.address}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      {/* Category Header */}
      <View style={styles.headerContainer}>
        <Text style={[Typography.h2, { color: Colors.text }]}>
          Top 5 {category.name}
        </Text>
        <Text style={[Typography.subtitle, { color: Colors.text }]}>
          {category.description}
        </Text>
      </View>

      {/* Top 5 List */}
      <FlatList
        data={category.items}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    padding: 20,
    paddingBottom: 16,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  rankingBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: 3,
  },
  rankingText: {
    ...Typography.caption,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemContent: {
    flexDirection: 'row',
    padding: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  ratingText: {
    ...Typography.caption,
    fontSize: 12,
    marginBottom: 2,
  },
  priceRange: {
    ...Typography.caption,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
