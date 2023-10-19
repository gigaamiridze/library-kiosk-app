import { FontFamilyType, FontWeightType } from './Font';

export interface IHeadingProps {
  title: string;
  type: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  fontFamily?: FontFamilyType;
  fontWeight?: FontWeightType;
  numberOfLines?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'auto';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
}
