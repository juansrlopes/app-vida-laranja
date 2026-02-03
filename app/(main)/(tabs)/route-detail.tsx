import ScreenContainer from '@/components/layout/ScreenContainer';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import { Typography } from '@/constants/Typography';
import { deleteRoute, getRouteById } from '@/lib/routesStorage';
import type { DayPlan, RouteStep } from '@/types/routes';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function StepRow({ step }: { step: RouteStep }) {
  const isEat = step.type === 'eat';
  return (
    <View style={styles.stepRow}>
      <View
        style={[
          styles.stepBullet,
          isEat ? styles.stepBulletEat : styles.stepBulletVisit,
        ]}
      />
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{step.title}</Text>
        {step.description ? (
          <Text style={styles.stepDescription}>{step.description}</Text>
        ) : null}
      </View>
    </View>
  );
}

function DaySection({ plan }: { plan: DayPlan }) {
  return (
    <View style={styles.daySection}>
      <Text style={styles.dayTitle}>Day {plan.day}</Text>
      {plan.steps.map((step, idx) => (
        <StepRow key={idx} step={step} />
      ))}
    </View>
  );
}

export default function RouteDetailScreen() {
  const { routeId } = useLocalSearchParams<{ routeId: string }>();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const loadRoute = useCallback(async () => {
    if (!routeId) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    const route = await getRouteById(routeId);
    if (!route) {
      setNotFound(true);
    }
    setLoading(false);
    return route;
  }, [routeId]);

  const [route, setRoute] = useState<Awaited<ReturnType<typeof loadRoute>>>(null);

  useEffect(() => {
    loadRoute().then(setRoute);
  }, [loadRoute]);

  const handleDelete = () => {
    if (!routeId) return;
    Alert.alert(
      'Delete route',
      'Are you sure you want to delete this route?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await deleteRoute(routeId);
            router.replace('/(main)/(tabs)/build-route');
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <ScreenContainer>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={Colors.tint} />
          <Text style={styles.loadingText}>Loading route...</Text>
        </View>
      </ScreenContainer>
    );
  }

  if (notFound || !route) {
    return (
      <ScreenContainer>
        <View style={styles.centered}>
          <Text style={styles.emptyTitle}>Route not found</Text>
          <Text style={styles.emptyText}>
            It may have been deleted or the link is invalid.
          </Text>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer
      scrollable
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={1}>
            {route.name?.trim()
              ? route.name
              : `${route.days === 1 ? '1 day' : `${route.days} days`} in Amsterdam`}
          </Text>
          <Pressable
            onPress={handleDelete}
            style={({ pressed }) => [
              styles.deleteButton,
              pressed && styles.deleteButtonPressed,
            ]}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </Pressable>
        </View>
        <Text style={styles.subtitle}>
          {route.interests.length > 0
            ? route.interests.join(' · ')
            : 'General visit'}
        </Text>
      </View>
      {route.stepsByDay.map((plan) => (
        <DaySection key={plan.day} plan={plan} />
      ))}
      <View style={styles.bottomSpacer} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: Spacing.sectionHorizontal,
    paddingBottom: Spacing.xxl * 2,
  },
  header: {
    marginBottom: Spacing.xxl,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.md,
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  title: {
    ...Typography.h2,
    color: Colors.text,
    flex: 1,
  },
  deleteButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    backgroundColor: '#c00',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonPressed: {
    opacity: 0.85,
  },
  deleteButtonText: {
    ...Typography.bodyMedium,
    color: '#fff',
    fontWeight: '600',
  },
  subtitle: {
    ...Typography.bodyMedium,
    color: Colors.gray,
  },
  daySection: {
    marginBottom: Spacing.xxl,
  },
  dayTitle: {
    ...Typography.h3,
    color: Colors.tint,
    marginBottom: Spacing.md,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  stepBullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 6,
    marginRight: Spacing.md,
  },
  stepBulletVisit: {
    backgroundColor: Colors.tint,
  },
  stepBulletEat: {
    backgroundColor: Colors.gray,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    ...Typography.bodyMedium,
    fontWeight: '600',
    color: Colors.text,
  },
  stepDescription: {
    ...Typography.bodyMedium,
    color: Colors.gray,
    marginTop: 2,
    fontSize: 14,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xxl,
  },
  loadingText: {
    ...Typography.bodyMedium,
    color: Colors.gray,
    marginTop: Spacing.md,
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
  bottomSpacer: {
    height: Spacing.xxl,
  },
});
