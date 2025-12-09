export const API_URL = 
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8000/api';

  export const CATEGORY_LABEL: Record<string, string> = {
    SPORTS_BACKPACK: "Plecaki sportowe",
    OFFICE_BACKPACK: "Plecaki do biura",
    MOUNTAIN_BACKPACK: "Plecaki górskie",
    TRAVEL_BACKPACK: "Plecaki podróżne"
  }