import DetailScreen from '@/components/DetailScreen';
import { Colors, Typography } from '@/constants';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import { getHighlightBySlug } from '../../../assets/data';

interface HighlightDetailScreenProps {
  highlightSlug: string;
}

// Highlight detail screen wrapper
// Uses the reusable DetailScreen component with highlight-specific configuration
export default function HighlightDetailScreen({
  highlightSlug,
}: HighlightDetailScreenProps) {
  const highlight = getHighlightBySlug(highlightSlug);

  if (!highlight) {
    return (
      <DetailScreen
        item={null}
        notFoundMessage="Highlight not found"
        aboutTitle="About This Highlight"
        infoCards={[]}
        actionButtons={[]}
      />
    );
  }

  // Configure info cards based on highlight type
  const getInfoCards = () => {
    const baseCards = [
      {
        icon: '📍',
        label: 'Location',
        value: highlight.location,
      },
    ];

    if (highlight.type === 'event') {
      return [
        {
          icon: '📅',
          label: 'Date & Time',
          value: [highlight.date || 'TBA', highlight.time || 'TBA'].filter(
            Boolean
          ),
        },
        ...baseCards,
        ...(highlight.price
          ? [
              {
                icon: '💰',
                label: 'Price',
                value: highlight.price,
              },
            ]
          : []),
      ];
    } else {
      // Service type
      return [
        ...baseCards,
        ...(highlight.hours
          ? [
              {
                icon: '🕒',
                label: 'Hours',
                value: highlight.hours,
              },
            ]
          : []),
        ...(highlight.price
          ? [
              {
                icon: '💰',
                label: 'Price',
                value: highlight.price,
              },
            ]
          : []),
      ];
    }
  };

  // Configure detail rows based on highlight type
  const getDetailRows = () => {
    const rows = [];

    if (highlight.organizer) {
      rows.push({ label: 'Organizer', value: highlight.organizer });
    }

    if (highlight.duration) {
      rows.push({ label: 'Duration', value: highlight.duration });
    }

    if (highlight.capacity) {
      rows.push({ label: 'Capacity', value: highlight.capacity });
    }

    return rows;
  };

  // Configure additional sections
  const getAdditionalSections = () => {
    const sections = [];

    if (highlight.services && highlight.services.length > 0) {
      sections.push({
        title: "What's Included",
        content: (
          <View style={{ gap: 8 }}>
            {highlight.services.map((service, index) => (
              <View
                key={index}
                style={{ flexDirection: 'row', alignItems: 'flex-start' }}
              >
                <Text
                  style={[
                    Typography.bodyMedium,
                    { color: Colors.tint, marginRight: 8, marginTop: 2 },
                  ]}
                >
                  •
                </Text>
                <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
                  {service}
                </Text>
              </View>
            ))}
          </View>
        ),
      });
    }

    return sections;
  };

  // Configure contact info
  const contactInfo = {
    ...(highlight.contact ? { phone: highlight.contact } : {}),
    ...(highlight.website ? { website: highlight.website } : {}),
  };

  // Configure action buttons based on highlight type
  const getActionButtons = () => {
    const buttons = [];

    if (highlight.type === 'event') {
      buttons.push({
        label: 'Get Tickets',
        isPrimary: true,
        onPress: () => {
          console.log('Get tickets for:', highlight.title);
        },
      });

      buttons.push({
        label: 'Share Event',
        isPrimary: false,
        onPress: () => {
          console.log('Share event:', highlight.title);
        },
      });
    } else {
      // Service type
      if (highlight.contact) {
        buttons.push({
          label: 'Book Now',
          isPrimary: true,
          onPress: () => {
            Linking.openURL(`tel:${highlight.contact}`);
          },
        });
      }

      if (highlight.website) {
        buttons.push({
          label: 'Visit Website',
          isPrimary: false,
          onPress: () => {
            const url = highlight.website!.startsWith('http')
              ? highlight.website!
              : `https://${highlight.website}`;
            Linking.openURL(url);
          },
        });
      }

      if (!highlight.contact && !highlight.website) {
        buttons.push({
          label: 'Learn More',
          isPrimary: true,
          onPress: () => {
            console.log('Learn more about:', highlight.title);
          },
        });
      }
    }

    return buttons;
  };

  // Configure rating (if available)
  const rating =
    highlight.rating && highlight.reviews
      ? {
          value: highlight.rating,
          reviews: highlight.reviews,
        }
      : undefined;

  return (
    <DetailScreen
      item={highlight}
      notFoundMessage="Highlight not found"
      aboutTitle={`About This ${highlight.type === 'event' ? 'Event' : 'Experience'}`}
      infoCards={getInfoCards()}
      detailRows={getDetailRows()}
      additionalSections={getAdditionalSections()}
      contactInfo={
        Object.keys(contactInfo).length > 0 ? contactInfo : undefined
      }
      actionButtons={getActionButtons()}
      rating={rating}
    />
  );
}
