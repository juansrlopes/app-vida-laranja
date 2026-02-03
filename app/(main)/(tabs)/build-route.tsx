import ScreenContainer from '@/components/layout/ScreenContainer';
import { Colors } from '@/constants/Colors';
import { Spacing, BorderRadius } from '@/constants/Spacing';
import { Typography } from '@/constants/Typography';
import { buildMockRoute } from '@/lib/mockRouteBuilder';
import { saveRoute } from '@/lib/routesStorage';
import type { RouteInterest } from '@/types/routes';
import { ROUTE_INTERESTS } from '@/types/routes';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const MIN_DAYS = 1;
const MAX_DAYS = 30;

export default function BuildRouteScreen() {
  const [routeName, setRouteName] = useState('');
  const [daysInput, setDaysInput] = useState('1');
  const [interests, setInterests] = useState<RouteInterest[]>([]);
  const [userNotes, setUserNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const daysNum = parseInt(daysInput, 10);
  const daysValid =
    daysInput.trim() !== '' &&
    !Number.isNaN(daysNum) &&
    daysNum >= MIN_DAYS &&
    daysNum <= MAX_DAYS;
  const hasInterests = interests.length >= 1;
  const canSubmit = daysValid && hasInterests;

  const toggleInterest = (interest: RouteInterest) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      const days = Math.max(
        MIN_DAYS,
        Math.min(MAX_DAYS, parseInt(daysInput, 10) || MIN_DAYS)
      );
      const stepsByDay = buildMockRoute(days, interests, userNotes);
      const route = {
        id: `route_${Date.now()}`,
        createdAt: Date.now(),
        name: routeName.trim() || undefined,
        days,
        interests: [...interests],
        userNotes: userNotes.trim(),
        stepsByDay,
      };
      await saveRoute(route);
      setRouteName('');
      setDaysInput('1');
      setInterests([]);
      setUserNotes('');
      router.push({
        pathname: '/(main)/(tabs)/route-detail',
        params: { routeId: route.id },
      });
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer scrollable showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Build your route</Text>
          <Text style={styles.subtitle}>
            Tell us how many days and what you like — we’ll plan your Amsterdam
            itinerary.
          </Text>

          <View style={styles.section}>
            <Text style={styles.label}>Name your route (optional)</Text>
            <TextInput
              value={routeName}
              onChangeText={setRouteName}
              placeholder="e.g. Weekend trip, Museum tour"
              placeholderTextColor={Colors.gray}
              style={styles.textInput}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>How many days? *</Text>
            <TextInput
              value={daysInput}
              onChangeText={setDaysInput}
              placeholder="e.g. 1"
              placeholderTextColor={Colors.gray}
              keyboardType="number-pad"
              style={styles.textInput}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>What are your interests? * (at least one)</Text>
            <View style={styles.interestsWrap}>
              {ROUTE_INTERESTS.map((interest) => {
                const isSelected = interests.includes(interest);
                return (
                  <Pressable
                    key={interest}
                    onPress={() => toggleInterest(interest)}
                    style={[
                      styles.interestChip,
                      isSelected && styles.interestChipSelected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.interestChipText,
                        isSelected && styles.interestChipTextSelected,
                      ]}
                    >
                      {interest}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>
              Anything else? (e.g. pace, style, must-sees)
            </Text>
            <TextInput
              value={userNotes}
              onChangeText={setUserNotes}
              placeholder="Describe what you want from your visit..."
              placeholderTextColor={Colors.gray}
              multiline
              numberOfLines={4}
              style={styles.textArea}
            />
          </View>

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}

          <Pressable
            onPress={handleSubmit}
            disabled={loading || !canSubmit}
            style={({ pressed }) => [
              styles.submitButton,
              pressed && styles.submitButtonPressed,
              (loading || !canSubmit) && styles.submitButtonDisabled,
            ]}
          >
            {loading ? (
              <ActivityIndicator color={Colors.background} />
            ) : (
              <Text style={styles.submitButtonText}>Build my route</Text>
            )}
          </Pressable>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.sectionHorizontal,
    paddingBottom: Spacing.xxl * 2,
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
    marginBottom: Spacing.xxl,
  },
  section: {
    marginBottom: Spacing.xxl,
  },
  label: {
    ...Typography.h3,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  textInput: {
    ...Typography.bodyMedium,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: BorderRadius.medium,
    padding: Spacing.md,
  },
  interestsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  interestChip: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.pill,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  interestChipSelected: {
    backgroundColor: Colors.tint,
    borderColor: Colors.tint,
  },
  interestChipText: {
    ...Typography.bodyMedium,
    color: Colors.text,
  },
  interestChipTextSelected: {
    color: Colors.background,
    fontWeight: '600',
  },
  textArea: {
    ...Typography.bodyMedium,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: BorderRadius.medium,
    padding: Spacing.md,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    ...Typography.bodyMedium,
    color: '#c00',
    marginBottom: Spacing.md,
  },
  submitButton: {
    backgroundColor: Colors.tint,
    paddingVertical: Spacing.lg,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
  },
  submitButtonPressed: {
    opacity: 0.9,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitButtonText: {
    ...Typography.h3,
    color: Colors.background,
  },
  bottomSpacer: {
    height: Spacing.xxl,
  },
});
