// APIから取得したstringの日時を日付に変換するメソッド
export const getDateStr = (date: string) => {
  return new Date(date).toLocaleDateString();
};

