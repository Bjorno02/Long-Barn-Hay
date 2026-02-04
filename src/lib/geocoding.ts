import type { Coordinates, GeocodingResult, DeliveryCheckResult } from '@/types';
import { siteConfig } from './siteConfig';

const EARTH_RADIUS_MILES = 3958.8;

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function calculateHaversineDistance(
  point1: Coordinates,
  point2: Coordinates
): number {
  const lat1 = toRadians(point1.lat);
  const lat2 = toRadians(point2.lat);
  const deltaLat = toRadians(point2.lat - point1.lat);
  const deltaLng = toRadians(point2.lng - point1.lng);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_MILES * c;
}

// TODO: Replace with real geocoding API (Google Maps, Mapbox, etc.)
export async function geocodeAddress(address: string): Promise<GeocodingResult> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!address || address.trim().length < 10) {
    return {
      success: false,
      error: 'Please enter a complete address including street, city, and state.',
    };
  }

  const normalizedAddress = address.toLowerCase();

  if (normalizedAddress.includes('nh') || normalizedAddress.includes('new hampshire')) {
    return {
      success: true,
      coordinates: {
        lat: 42.95 + (Math.random() * 0.2 - 0.1),
        lng: -71.25 + (Math.random() * 0.2 - 0.1),
      },
      formattedAddress: address,
    };
  }

  if (normalizedAddress.includes('ma') || normalizedAddress.includes('massachusetts')) {
    return {
      success: true,
      coordinates: {
        lat: 42.5 + (Math.random() * 0.3 - 0.15),
        lng: -71.1 + (Math.random() * 0.3 - 0.15),
      },
      formattedAddress: address,
    };
  }

  if (normalizedAddress.includes('me') || normalizedAddress.includes('maine')) {
    return {
      success: true,
      coordinates: {
        lat: 43.5 + (Math.random() * 0.5 - 0.25),
        lng: -70.5 + (Math.random() * 0.5 - 0.25),
      },
      formattedAddress: address,
    };
  }

  const isNearby = Math.random() > 0.3;
  
  if (isNearby) {
    return {
      success: true,
      coordinates: {
        lat: 42.9 + (Math.random() * 0.4 - 0.2),
        lng: -71.3 + (Math.random() * 0.4 - 0.2),
      },
      formattedAddress: address,
    };
  }

  return {
    success: true,
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
    formattedAddress: address,
  };
}

export async function checkDeliveryRadius(address: string): Promise<DeliveryCheckResult> {
  const geocodeResult = await geocodeAddress(address);

  if (!geocodeResult.success || !geocodeResult.coordinates) {
    return {
      isInRange: false,
      distanceMiles: 0,
      message: geocodeResult.error ?? 'Unable to determine location. Please verify your address and try again.',
    };
  }

  const distanceMiles = calculateHaversineDistance(
    siteConfig.coordinates,
    geocodeResult.coordinates
  );

  const roundedDistance = Math.round(distanceMiles * 10) / 10;
  const isInRange = distanceMiles <= siteConfig.radiusMiles;

  if (isInRange) {
    return {
      isInRange: true,
      distanceMiles: roundedDistance,
      message: `Your location is approximately ${roundedDistance} miles from our facility and is within our standard delivery area.`,
    };
  }

  return {
    isInRange: false,
    distanceMiles: roundedDistance,
    message: `Your location is approximately ${roundedDistance} miles from our facility, which is outside our standard ${siteConfig.radiusMiles}-mile delivery radius. Please contact us to discuss delivery options for your area.`,
  };
}
