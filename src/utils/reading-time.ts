export function calculateReadingTime(content: string): number {
  const chineseChars = (content.match(/[一-鿿]/g) || []).length;
  const englishWords = content.replace(/[一-鿿]/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  const chineseMinutes = chineseChars / 400;
  const englishMinutes = englishWords / 200;
  return Math.max(1, Math.ceil(chineseMinutes + englishMinutes));
}
