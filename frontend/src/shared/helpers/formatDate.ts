export const formatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return formattedDate
}
