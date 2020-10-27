export function detectClasses(num: number) {
  let classes = [];
  
  switch (num) {
    case 1:
      classes = [
        "app-steps__circle active", 
        "app-steps__line", 
        "app-steps__circle", 
        "app-steps__line", 
        "app-steps__circle" 
      ]
      break;
    case 2:
      classes = [
        "app-steps__circle active", 
        "app-steps__line active", 
        "app-steps__circle active", 
        "app-steps__line", 
        "app-steps__circle" 
      ]
      break;
    case 3:
      classes = [
        "app-steps__circle active", 
        "app-steps__line active", 
        "app-steps__circle active", 
        "app-steps__line active", 
        "app-steps__circle active" 
      ]
      break;
    default:
      classes = [
        "app-steps__circle active", 
        "app-steps__line active", 
        "app-steps__circle active", 
        "app-steps__line active", 
        "app-steps__circle active" 
      ]
  }
  
  return classes;
}