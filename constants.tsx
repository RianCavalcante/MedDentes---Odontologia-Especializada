import React from 'react';
import { NavItem, ServiceItem, TestimonialItem, ContactInfo } from './types';
import { Sparkles, Smile, ShieldCheck, Gem } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export const CONTACT_INFO: ContactInfo = {
  phone: '(85) 98836-4611',
  whatsapp: '5585988364611',
  address: 'Fortaleza e Eusébio, Ceará',
  addressLink: 'https://share.google/XJOBD8RiVwkjl2EhV',
  email: 'contato@meddentes.com.br',
  instagram: '@meddentes'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'lentes',
    title: 'Lentes de Contato',
    description: 'Transforme seu sorriso com lâminas ultrafinas de porcelana, garantindo estética natural e durabilidade.',
    icon: <Sparkles className="w-6 h-6" />,
    imagePrompt: "Close up artistic dental photography of a perfect white smile with ceramic veneers, soft lighting, high resolution, dental clinic advertisement style"
  },
  {
    id: 'resinas',
    title: 'Resinas Compostas',
    description: 'Restaurações estéticas que devolvem a forma e a cor natural dos seus dentes com precisão.',
    icon: <Gem className="w-6 h-6" />,
    imagePrompt: "Macro photography of dental composite resin sculpting tool working on a tooth, professional dental aesthetic procedure, blue tones"
  },
  {
    id: 'protese',
    title: 'Prótese Dentária',
    description: 'Reabilitação oral completa para recuperar a função mastigatória e a beleza do seu sorriso.',
    icon: <ShieldCheck className="w-6 h-6" />,
    imagePrompt: "Senior happy woman smiling confidently showing perfect dental prosthetics, warm natural lighting, lifestyle photography"
  },
  {
    id: 'clareamento',
    title: 'Clareamento',
    description: 'Tecnologia avançada para um sorriso mais branco e radiante, com segurança e conforto.',
    icon: <Smile className="w-6 h-6" />,
    imagePrompt: "Bright white teeth smile close up, holding a whitening shade guide, clean clinical aesthetic background"
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Mariana Costa',
    text: 'A equipe da MedDentes é incrível! Meu sorriso ficou perfeito. O atendimento em Fortaleza foi impecável.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ricardo Alves',
    text: 'Profissionalismo do Dr. Alan e equipe. Fiz meu tratamento com convênio e foi tudo muito ágil.',
    rating: 5
  },
  {
    id: '3',
    name: 'Fernanda Oliveira',
    text: 'A melhor clínica do Eusébio. Ambiente acolhedor e profissionais especialistas que transmitem muita confiança.',
    rating: 5
  }
];