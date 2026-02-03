import type { DayPlan, RouteInterest, RouteStep } from '@/types/routes';

/**
 * Builds a mock itinerary for Amsterdam based on form inputs.
 * Replace with real AI integration later.
 */
export function buildMockRoute(
  days: number,
  interests: RouteInterest[],
  userNotes: string
): DayPlan[] {
  const plans: DayPlan[] = [];
  const hasFood = interests.includes('Food');
  const hasCulture = interests.includes('Culture');
  const hasSports = interests.includes('Sports');
  const hasArt = interests.includes('Art');
  const hasNature = interests.includes('Nature');
  const hasHistory = interests.includes('History');

  const visitPool: Omit<RouteStep, 'type'>[] = [
    ...(hasCulture || hasHistory
      ? [
          { title: 'Rijksmuseum', description: 'Dutch art and history museum' },
          { title: 'Anne Frank House', description: 'Historic house and museum' },
          { title: 'Van Gogh Museum', description: 'Works of Vincent van Gogh' },
        ]
      : []),
    ...(hasArt
      ? [
          {
            title: 'Stedelijk Museum',
            description: 'Modern and contemporary art',
          },
          { title: 'FOAM', description: 'Photography museum' },
        ]
      : []),
    ...(hasNature
      ? [
          { title: 'Vondelpark', description: 'Large urban park' },
          { title: 'Canal ring walk', description: 'Walk along the UNESCO canals' },
        ]
      : []),
    ...(hasSports
      ? [
          { title: 'Rent a bike', description: 'Cycle around Amsterdam' },
          { title: 'Canal cruise', description: 'Boat tour on the canals' },
        ]
      : []),
  ];

  const eatPool: Omit<RouteStep, 'type'>[] = hasFood
    ? [
        { title: 'Breakfast at Café de Jaren', description: 'By the canal' },
        { title: 'Lunch at Foodhallen', description: 'Indoor food market' },
        { title: 'Dinner at De Kas', description: 'Farm-to-table in a greenhouse' },
        { title: 'Coffee at Lot Sixty One', description: 'Specialty coffee roasters' },
        {
          title: 'The Pancake Bakery',
          description: 'Traditional Dutch pancakes',
        },
      ]
    : [];

  if (visitPool.length === 0) {
    visitPool.push(
      { title: 'Dam Square', description: 'Historic heart of Amsterdam' },
      { title: 'Canal ring walk', description: 'Walk along the UNESCO canals' }
    );
  }
  if (eatPool.length === 0) {
    eatPool.push({
      title: 'Lunch at a local café',
      description: 'Typical Dutch lunch',
    });
  }

  for (let d = 1; d <= days; d++) {
    const steps: RouteStep[] = [];
    const visitsPerDay = Math.min(3, Math.ceil(visitPool.length / days));
    const eatsPerDay = Math.min(2, Math.ceil(eatPool.length / days));

    const dayVisits = shuffle([...visitPool]).slice(0, visitsPerDay);
    const dayEats = shuffle([...eatPool]).slice(0, eatsPerDay);

    const maxSteps = dayVisits.length + dayEats.length;
    let vIdx = 0;
    let eIdx = 0;
    for (let i = 0; i < maxSteps; i++) {
      if (i % 2 === 0 && vIdx < dayVisits.length) {
        steps.push({ ...dayVisits[vIdx], type: 'visit' });
        vIdx++;
      } else if (eIdx < dayEats.length) {
        steps.push({ ...dayEats[eIdx], type: 'eat' });
        eIdx++;
      } else if (vIdx < dayVisits.length) {
        steps.push({ ...dayVisits[vIdx], type: 'visit' });
        vIdx++;
      }
    }

    plans.push({ day: d, steps });
  }

  if (userNotes.trim()) {
    plans[0].steps.unshift({
      title: 'Your notes',
      description: userNotes.trim(),
      type: 'visit',
    });
  }

  return plans;
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
