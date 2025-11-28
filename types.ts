import { ReactNode } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  imagePrompt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  addressLink: string;
  email: string;
  instagram: string;
}
