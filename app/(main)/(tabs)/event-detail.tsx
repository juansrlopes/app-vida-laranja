import DetailScreen from '@/components/ui/DetailScreen';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { getEventBySlug } from '../../../assets/data';

// Event detail screen
// Uses the reusable DetailScreen component with event-specific configuration
// Keeps tab navigation visible while showing event details
export default function EventDetailRoute() {
  const { eventSlug } = useLocalSearchParams<{ eventSlug: string }>();

  if (!eventSlug) {
    return null;
  }

  const event = getEventBySlug(eventSlug);

  if (!event) {
    return (
      <DetailScreen
        item={null}
        notFoundMessage="Event not found"
        aboutTitle="About This Event"
        infoCards={[]}
        actionButtons={[]}
      />
    );
  }

  // Configure info cards for events
  const infoCards = [
    {
      icon: '📅',
      label: 'Date & Time',
      value: [event.date, event.time],
    },
    {
      icon: '📍',
      label: 'Location',
      value: event.location,
    },
    {
      icon: '💰',
      label: 'Price',
      value: event.price,
    },
  ];

  // Configure detail rows for events
  const detailRows = [
    { label: 'Organizer', value: event.organizer },
    { label: 'Duration', value: event.duration },
    ...(event.capacity ? [{ label: 'Capacity', value: event.capacity }] : []),
  ];

  // Configure action buttons for events
  const actionButtons = [
    {
      label: 'Book Now',
      isPrimary: true,
      onPress: () => {
        // In a real app, this would handle booking/registration
        console.log('Book event:', event.title);
      },
    },
    {
      label: 'Share Event',
      isPrimary: false,
      onPress: () => {
        // In a real app, this would share the event
        console.log('Share event:', event.title);
      },
    },
  ];

  return (
    <DetailScreen
      item={event}
      notFoundMessage="Event not found"
      aboutTitle="About This Event"
      infoCards={infoCards}
      detailRows={detailRows}
      actionButtons={actionButtons}
    />
  );
}
