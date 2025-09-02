import { Colors, Typography } from '@/constants';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Type definition for highlight items
export interface HighlightItem {
  id: string;
  image: any; // For require() images or { uri: string } for remote images
  title: string;
  subtitle: string;
}

interface HighlightsCarouselProps {
  items: HighlightItem[];
  title?: string;
}

export default function HighlightsCarousel({
  items,
  title = 'Highlights',
}: HighlightsCarouselProps) {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 60) / 2; // 2 items per screen with padding

  const renderHighlightItem = ({ item }: { item: HighlightItem }) => (
    <View style={[styles.itemContainer, { width: itemWidth }]}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[styles.itemTitle, { color: Colors.text }]}
          numberOfLines={2}
        >
          {item.title}
        </Text>
        <Text
          style={[styles.itemSubtitle, { color: Colors.gray }]}
          numberOfLines={1}
        >
          {item.subtitle}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Section Title */}
      <View style={styles.headerContainer}>
        <Text style={[styles.sectionTitle, { color: Colors.text }]}>
          {title}
        </Text>
      </View>

      {/* Horizontal Carousel */}
      <FlatList
        data={items}
        renderItem={renderHighlightItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        snapToInterval={screenWidth - 40} // Snap to show 2 items at a time
        decelerationRate="fast"
        pagingEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: Typography.h2,
  carouselContainer: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  itemContainer: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    padding: 12,
  },
  itemTitle: {
    ...Typography.bodyMediumSemiBold,
    marginBottom: 4,
  },
  itemSubtitle: Typography.caption,
  itemSeparator: {
    width: 12,
  },
});
