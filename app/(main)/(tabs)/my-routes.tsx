import { IconSymbol } from '@/components/ui/IconSymbol';
import ScreenContainer from '@/components/layout/ScreenContainer';
import { Colors } from '@/constants/Colors';
import { Spacing, BorderRadius } from '@/constants/Spacing';
import { Typography } from '@/constants/Typography';
import { deleteRoute, getSavedRoutes } from '@/lib/routesStorage';
import type { SavedRoute } from '@/types/routes';
import { router } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

function formatRouteTitle(route: SavedRoute): string {
  const date = new Date(route.createdAt);
  const dateStr = date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const dayLabel = route.days === 1 ? '1 day' : `${route.days} days`;
  return `${dayLabel} · ${dateStr}`;
}

function getRouteCardTitle(route: SavedRoute): string {
  return route.name?.trim() ? route.name : formatRouteTitle(route);
}

function formatRouteSummary(route: SavedRoute): string {
  if (route.interests.length === 0) return 'General visit';
  return route.interests.slice(0, 3).join(', ');
}

export default function MyRoutesScreen() {
  const [routes, setRoutes] = useState<SavedRoute[]>([]);
  const [loading, setLoading] = useState(true);
  const loadRoutes = useCallback(async () => {
    const list = await getSavedRoutes();
    setRoutes(list);
  }, []);

  useEffect(() => {
    loadRoutes().finally(() => setLoading(false));
  }, [loadRoutes]);

  const onPressRoute = (routeId: string) => {
    router.push({
      pathname: '/(main)/(tabs)/route-detail',
      params: { routeId },
    });
  };

  const onPressDelete = (route: SavedRoute) => {
    Alert.alert(
      'Delete route',
      'Are you sure you want to delete this route?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await deleteRoute(route.id);
            await loadRoutes();
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <ScreenContainer>
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Loading your routes...</Text>
        </View>
      </ScreenContainer>
    );
  }

  if (routes.length === 0) {
    return (
      <ScreenContainer>
        <View style={styles.centered}>
          <Text style={styles.emptyTitle}>No routes yet</Text>
          <Text style={styles.emptyText}>
            Build your first route from the drawer menu → Route.
          </Text>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer
      scrollable
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    >
      <View style={styles.header}>
        <Text style={styles.title}>My routes</Text>
        <Text style={styles.subtitle}>
          Tap a route to see the full day-by-day plan.
        </Text>
      </View>
      {routes.map((route) => (
        <View key={route.id} style={styles.card}>
          <Pressable
            onPress={() => onPressRoute(route.id)}
            style={({ pressed }) => [
              styles.cardContent,
              pressed && styles.cardPressed,
            ]}
          >
            <Text style={styles.cardTitle}>{getRouteCardTitle(route)}</Text>
            <Text style={styles.cardSummary} numberOfLines={1}>
              {formatRouteSummary(route)}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => onPressDelete(route)}
            style={({ pressed }) => [
              styles.deleteButton,
              pressed && styles.deleteButtonPressed,
            ]}
          >
            <IconSymbol name="trash" size={24} color="#c00" />
          </Pressable>
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: Spacing.sectionHorizontal,
    paddingBottom: Spacing.xxl * 2,
  },
  header: {
    marginBottom: Spacing.xxl,
  },
  title: {
    ...Typography.h2,
    color: Colors.text,
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    ...Typography.bodyMedium,
    color: Colors.gray,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.lightOrange,
    borderRadius: BorderRadius.medium,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    gap: Spacing.md,
  },
  cardContent: {
    flex: 1,
  },
  cardPressed: {
    opacity: 0.9,
  },
  deleteButton: {
    padding: Spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonPressed: {
    opacity: 0.7,
  },
  cardTitle: {
    ...Typography.h3,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  cardSummary: {
    ...Typography.bodyMedium,
    color: Colors.gray,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xxl,
  },
  emptyTitle: {
    ...Typography.h2,
    color: Colors.text,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  emptyText: {
    ...Typography.bodyMedium,
    color: Colors.gray,
    textAlign: 'center',
  },
});
