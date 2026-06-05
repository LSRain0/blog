export function formatDate(date: Date): string {
  if (isNaN(date.getTime())) return '日期无效';
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateISO(date: Date): string {
  if (isNaN(date.getTime())) return '';
  return date.toISOString().split('T')[0];
}
