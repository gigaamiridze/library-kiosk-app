/**
* Returns the appropriate font family based on the weight.
* @param {string} baseFont - The desired font in case you're using something
  different in your later projects
* @param {string} weight - The desired font weight(e.g., 'normal', 'bold', '600')
* @returns {string} - The appropriate font family for the platform.
*/

import { FontFamilyType, FontWeightType } from '../interfaces';
import { Fonts } from '../constants';

export const getFontFamily = (baseFont: FontFamilyType = Fonts.PRIMARY, weight: FontWeightType) => {
  switch (weight) {
    case 'thin':
    case '100':
      return `${baseFont}-Thin`;
    case 'extraLight':
    case '200':
      return `${baseFont}-ExtraLight`;
    case 'light':
    case '300':
      return `${baseFont}-Light`;
    case 'normal':
    case '400':
      return `${baseFont}-Regular`;
    case 'medium':
    case '500':
      return `${baseFont}-Medium`;
    case 'semiBold':
    case '600':
      return `${baseFont}-SemiBold`;
    case 'bold':
    case '700':
      return `${baseFont}-Bold`;
    case 'extraBold':
    case '800':
      return `${baseFont}-ExtraBold`;
    case 'black':
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
}
