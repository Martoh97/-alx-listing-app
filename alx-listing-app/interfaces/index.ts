export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export interface PropertyProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
}