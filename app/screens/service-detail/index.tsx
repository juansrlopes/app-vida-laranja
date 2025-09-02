import DetailScreen from '@/components/DetailScreen';
import { Colors, Typography } from '@/constants';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import { getServiceById } from '../../../assets/data';

interface ServiceDetailScreenProps {
  serviceId: string;
}

// Service detail screen wrapper
// Uses the reusable DetailScreen component with service-specific configuration
export default function ServiceDetailScreen({
  serviceId,
}: ServiceDetailScreenProps) {
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <DetailScreen
        item={null}
        notFoundMessage="Service not found"
        aboutTitle="About This Service"
        infoCards={[]}
        actionButtons={[]}
      />
    );
  }

  // Configure info cards for services
  const infoCards = [
    {
      icon: '📍',
      label: 'Location',
      value: service.location,
    },
    {
      icon: '🕒',
      label: 'Hours',
      value: service.hours,
    },
    {
      icon: '💰',
      label: 'Price Range',
      value: service.price,
    },
  ];

  // Configure additional sections for services
  const additionalSections = [
    {
      title: 'Services Offered',
      content: (
        <View style={{ gap: 8 }}>
          {service.services.map((serviceItem, index) => (
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
                {serviceItem}
              </Text>
            </View>
          ))}
        </View>
      ),
    },
  ];

  // Configure contact info for services
  const contactInfo = {
    phone: service.contact,
    website: service.website,
  };

  // Configure action buttons for services
  const actionButtons = [
    {
      label: 'Call Now',
      isPrimary: true,
      onPress: () => {
        Linking.openURL(`tel:${service.contact}`);
      },
    },
    ...(service.website
      ? [
          {
            label: 'Visit Website',
            isPrimary: false,
            onPress: () => {
              const url = service.website!.startsWith('http')
                ? service.website!
                : `https://${service.website}`;
              Linking.openURL(url);
            },
          },
        ]
      : []),
  ];

  // Configure rating for services
  const rating = {
    value: service.rating,
    reviews: service.reviews,
  };

  return (
    <DetailScreen
      item={service}
      notFoundMessage="Service not found"
      aboutTitle="About This Service"
      infoCards={infoCards}
      additionalSections={additionalSections}
      contactInfo={contactInfo}
      actionButtons={actionButtons}
      rating={rating}
    />
  );
}
