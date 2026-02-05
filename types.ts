export interface NavItem {
  label: string;
  path: string;
}

export interface HardwareProduct {
  name: string;
  description?: string;
  link: string; // Affiliate link
  priceText?: string; // e.g., "Set til 149,-"
  badge?: string; // e.g., "Best Value"
}

export interface Guide {
  id: string;
  title: string;
  category: 'Home Assistant' | 'Elektronik' | 'Netværk' | 'Hardware';
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  recommendedHardware?: HardwareProduct[]; // New affiliate field
}

export interface TechItem {
  category: string;
  items: {
    name: string;
    description: string;
    specs?: string[];
  }[];
}

export interface SEOMeta {
  title: string;
  description: string;
  type?: 'article' | 'website';
  publishedTime?: string;
  tags?: string[];
}