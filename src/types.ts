export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  durationMinutes: number;
  badge?: string;
  whatsAppText: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  haircutType: string;
  location: string;
  authorAge?: string;
}
