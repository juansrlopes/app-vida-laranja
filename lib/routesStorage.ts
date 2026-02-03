import AsyncStorage from '@react-native-async-storage/async-storage';
import type { SavedRoute } from '@/types/routes';

const ROUTES_IDS_KEY = '@vida_laranja/route_ids';
const ROUTE_KEY_PREFIX = '@vida_laranja/route_';
const LEGACY_ROUTES_KEY = '@vida_laranja/routes';

function routeKey(id: string): string {
  return `${ROUTE_KEY_PREFIX}${id}`;
}

/**
 * Migrate from legacy single-key format to per-route keys (one-time).
 */
async function migrateFromLegacyIfNeeded(): Promise<void> {
  const legacyRaw = await AsyncStorage.getItem(LEGACY_ROUTES_KEY);
  if (!legacyRaw) return;
  try {
    const routes = JSON.parse(legacyRaw) as SavedRoute[];
    if (!Array.isArray(routes) || routes.length === 0) {
      await AsyncStorage.removeItem(LEGACY_ROUTES_KEY);
      return;
    }
    const ids: string[] = [];
    for (const route of routes) {
      if (route?.id) {
        await AsyncStorage.setItem(routeKey(route.id), JSON.stringify(route));
        ids.push(route.id);
      }
    }
    if (ids.length > 0) {
      await AsyncStorage.setItem(ROUTES_IDS_KEY, JSON.stringify(ids));
    }
    await AsyncStorage.removeItem(LEGACY_ROUTES_KEY);
  } catch {
    await AsyncStorage.removeItem(LEGACY_ROUTES_KEY);
  }
}

export async function getSavedRoutes(): Promise<SavedRoute[]> {
  try {
    await migrateFromLegacyIfNeeded();
    const idsRaw = await AsyncStorage.getItem(ROUTES_IDS_KEY);
    if (!idsRaw) return [];
    const ids = JSON.parse(idsRaw) as string[];
    if (!Array.isArray(ids)) return [];
    const routes: SavedRoute[] = [];
    for (const id of ids) {
      try {
        const raw = await AsyncStorage.getItem(routeKey(id));
        if (!raw) continue;
        const route = JSON.parse(raw) as SavedRoute;
        if (route?.id) routes.push(route);
      } catch {
        // Skip corrupted or missing route
      }
    }
    return routes;
  } catch {
    return [];
  }
}

export async function saveRoute(route: SavedRoute): Promise<void> {
  try {
    await AsyncStorage.setItem(routeKey(route.id), JSON.stringify(route));
    const idsRaw = await AsyncStorage.getItem(ROUTES_IDS_KEY);
    const ids: string[] = idsRaw ? (JSON.parse(idsRaw) as string[]) : [];
    if (!Array.isArray(ids)) {
      await AsyncStorage.setItem(ROUTES_IDS_KEY, JSON.stringify([route.id]));
      return;
    }
    const updated = [route.id, ...ids.filter((id) => id !== route.id)];
    await AsyncStorage.setItem(ROUTES_IDS_KEY, JSON.stringify(updated));
  } catch {
    throw new Error('Failed to save route. Try again.');
  }
}

export async function getRouteById(id: string): Promise<SavedRoute | null> {
  try {
    const raw = await AsyncStorage.getItem(routeKey(id));
    if (!raw) return null;
    const route = JSON.parse(raw) as SavedRoute;
    return route?.id ? route : null;
  } catch {
    return null;
  }
}

export async function deleteRoute(id: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(routeKey(id));
    const idsRaw = await AsyncStorage.getItem(ROUTES_IDS_KEY);
    if (!idsRaw) return;
    const ids = JSON.parse(idsRaw) as string[];
    if (!Array.isArray(ids)) return;
    const updated = ids.filter((i) => i !== id);
    await AsyncStorage.setItem(ROUTES_IDS_KEY, JSON.stringify(updated));
  } catch {
    // Best effort; route key might already be missing
  }
}
