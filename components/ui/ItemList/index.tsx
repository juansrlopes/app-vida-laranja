import { Colors, Typography } from '@/constants';
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface ListItem {
  id: string;
  image: any;
  title: string;
  subtitle: string;
}

interface ItemListProps<T extends ListItem> {
  data: T[];
  onItemPress?: (item: T) => void;
}

// Generic item list component
// Can be used for events, services, or any other list-based content
export default function ItemList<T extends ListItem>({
  data,
  onItemPress,
}: ItemListProps<T>) {
  const renderItem = ({ item }: { item: T }) => (
    <Pressable
      style={styles.itemCard}
      onPress={() => onItemPress?.(item)}
      android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
    >
      <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
      <View style={styles.itemContent}>
        <Text style={[styles.itemTitle, { color: Colors.text }]}>
          {item.title}
        </Text>
        <Text style={[styles.itemSubtitle, { color: Colors.text }]}>
          {item.subtitle}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  itemCard: {
    marginBottom: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
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
  itemImage: {
    width: '100%',
    height: 200,
  },
  itemContent: {
    padding: 16,
  },
  itemTitle: {
    ...Typography.h3,
    marginBottom: 8,
  },
  itemSubtitle: {
    ...Typography.subtitle,
    lineHeight: 22,
  },
});
