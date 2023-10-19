export interface IServiceCardProps {
  image: any;
  buttonTitle: string;
  headingTitle: string;
  onPress: () => void;
}

export interface IBookCardProps {
  title: string;
  image: any;
  rating: number;
  authors: string[];
  isSelected: boolean;
  onPress: () => void;
}
