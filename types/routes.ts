/**
 * Types for the Route builder feature (1-day or multi-day itineraries in Amsterdam).
 */

export type RouteStepType = 'visit' | 'eat';

export interface RouteStep {
  title: string;
  description?: string;
  type: RouteStepType;
}

export interface DayPlan {
  day: number;
  steps: RouteStep[];
}

export interface SavedRoute {
  id: string;
  createdAt: number;
  name?: string;
  days: number;
  interests: string[];
  userNotes: string;
  stepsByDay: DayPlan[];
}

export const ROUTE_INTERESTS = [
  'Sports',
  'Food',
  'Culture',
  'Art',
  'Nightlife',
  'Nature',
  'History',
  'Shopping',
] as const;

export type RouteInterest = (typeof ROUTE_INTERESTS)[number];
