
export function convertToBengaliNumber(input) {
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  
    const convertCharacter = char => {
      const index = englishNumbers.indexOf(char);
      return index !== -1 ? bengaliNumbers[index] : char;
    };
  
    const output = String(input).split('').map(convertCharacter).join('');
  
    return output;
  }