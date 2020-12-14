export function detectClasses(total: number, active: number, list: number[]) {
  const classListDots = list.map(item => {
    if (item < active)  {
      return 'app-steps__circle active'
    } else  {
      return 'app-steps__circle'
    }
  })

  const classListLines = list.map(item => {
    if (item < active - 1)  {
      return "app-steps__line active"
    } else {
      if (item < total - 1) {
        return "app-steps__line"
      }
    }
  })

  classListLines.length = total - 1;

  return { classListDots, classListLines };
}