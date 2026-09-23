// Central Restaurant Data & Configuration for Yamama Shawaya
// Restaurant owners and developers can update hours, menu, contact, and reviews directly here.

import heroShawayaImg from '../assets/images/hero_shawaya_fire_1790141283983.jpg';
import masalaShawayaImg from '../assets/images/masala_shawaya_platter_1790141302095.jpg';
import chickenMandiImg from '../assets/images/chicken_mandi_dish_1790141318060.jpg';
import alfahamGrillImg from '../assets/images/alfaham_charcoal_grill_1790141331621.jpg';
import interiorDiningImg from '../assets/images/restaurant_interior_dining_1790141346040.jpg';

export interface MenuItem {
  id: string;
  name: string;
  arabicName?: string;
  category: 'SHAWAYA' | 'MANDI' | 'AL FAHAM' | 'GRILLS' | 'RICE' | 'COMBOS' | 'SIDES' | 'DRINKS' | 'DESSERTS';
  description: string;
  portionOptions?: { size: string; priceFormatted: string }[];
  priceFormatted: string; // Clearly structured & configurable from verified menu
  isVegetarian: boolean;
  isSpicy?: boolean;
  isSignature?: boolean;
  image: string;
  tags?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verifiedVisit: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Grill & Flame' | 'Ambiance' | 'Plating';
  image: string;
  description: string;
}

export const restaurantInfo = {
  name: 'YAMAMA SHAWAYA',
  brandKicker: 'AUTHENTIC ARABIAN FLAVOURS',
  tagline: 'Slow-fired Shawaya. Bold Arabian flavour.',
  headline: ['FIRE.', 'FLAVOUR.', 'TRADITION.'],
  heroDescription:
    'Authentic Arabian-inspired flavours, crafted with fire, time and carefully selected ingredients in the heart of Angadippuram, Perinthalmanna.',
  storyHeadline: 'WHERE FIRE MEETS FLAVOUR',
  storyParagraph1:
    'At Yamama Shawaya, food is more than a meal. It is an experience built around fire, flavour and tradition.',
  storyParagraph2:
    'Inspired by the rich culinary culture of the Arabian region, our kitchen brings together carefully prepared meats, aromatic rice and bold flavours to create food made for sharing.',
  storyParagraph3:
    'Every plate is prepared with attention to flavour, freshness and consistency.',
  address: {
    landmark: 'Oradampalam–Valiyavitilpadi',
    locality: 'Tirurkad',
    city: 'Perinthalmanna',
    district: 'Malappuram',
    state: 'Kerala',
    postalCode: '679321',
    country: 'India',
    fullFormatted: 'Oradampalam–Valiyavitilpadi, Tirurkad, Perinthalmanna, Kerala 679321, India',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.653457591492!2d76.1950!3d11.0028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cb14777d1309%3A0x6b44a2c0f65349e5!2sYamama%20Shawaya!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Yamama+Shawaya+Oradampalam+Valiyavitilpadi+Tirurkad+Perinthalmanna+Kerala',
  },
  contact: {
    phoneDisplay: '+91 97473 62102',
    phoneRaw: '+919747362102',
    telHref: 'tel:+919747362102',
    whatsappRaw: '919747362102',
    whatsappHref: 'https://wa.me/919747362102?text=Hello%20Yamama%20Shawaya%2C%20I%20would%20like%20to%20inquire%20about%20ordering%20and%20table%20reservations.',
  },
  socialProof: {
    googleRating: '4.1',
    googleMaxRating: '5.0',
    reviewCount: '200+',
    freshlyPreparedNote: 'Slow-fired Daily',
    serviceType: 'Dine-in & Takeaway',
    allReviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=Yamama+Shawaya+Tirurkad+Perinthalmanna+Reviews',
  },
  instagramHandle: '@yamamashawaya',
  instagramUrl: 'https://instagram.com',
};

// Opening Hours Schedule (Configurable by Owner)
// Times are in 24h format for accurate current-status calculation in IST (Indian Standard Time UTC+5:30)
export const openingHours = {
  timezone: 'Asia/Kolkata',
  days: [
    { day: 'Monday', open: '12:00', close: '23:30', formatted: '12:00 PM – 11:30 PM' },
    { day: 'Tuesday', open: '12:00', close: '23:30', formatted: '12:00 PM – 11:30 PM' },
    { day: 'Wednesday', open: '12:00', close: '23:30', formatted: '12:00 PM – 11:30 PM' },
    { day: 'Thursday', open: '12:00', close: '23:30', formatted: '12:00 PM – 11:30 PM' },
    { day: 'Friday', open: '13:30', close: '23:30', formatted: '01:30 PM – 11:30 PM' },
    { day: 'Saturday', open: '12:00', close: '23:30', formatted: '12:00 PM – 11:30 PM' },
    { day: 'Sunday', open: '12:00', close: '23:30', formatted: '12:00 PM – 11:30 PM' },
  ],
};

// Helper function to check if the restaurant is currently open in Indian Standard Time (IST)
export function getRestaurantOpenStatus(): {
  isOpen: boolean;
  statusText: string;
  subText: string;
} {
  try {
    const now = new Date();
    // Format to Asia/Kolkata
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    let weekday = '';
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === 'weekday') weekday = part.value;
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    const currentMinutes = hour * 60 + minute;
    const todaySchedule = openingHours.days.find(
      (d) => d.day.toLowerCase() === weekday.toLowerCase()
    );

    if (!todaySchedule) {
      return {
        isOpen: true,
        statusText: 'OPEN TODAY',
        subText: 'Closes at 11:30 PM IST',
      };
    }

    const [openH, openM] = todaySchedule.open.split(':').map(Number);
    const [closeH, closeM] = todaySchedule.close.split(':').map(Number);
    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      return {
        isOpen: true,
        statusText: 'OPEN NOW',
        subText: `Today until ${todaySchedule.formatted.split('–')[1]?.trim() || '11:30 PM'}`,
      };
    } else {
      return {
        isOpen: false,
        statusText: `CLOSED — OPENS AT ${todaySchedule.formatted.split('–')[0]?.trim() || '12:00 PM'}`,
        subText: `Regular service restarts at ${todaySchedule.formatted.split('–')[0]?.trim() || '12:00 PM'}`,
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: 'OPEN NOW',
      subText: '12:00 PM – 11:30 PM Daily',
    };
  }
}

// Visual Assets
export const brandAssets = {
  hero: heroShawayaImg,
  masalaShawaya: masalaShawayaImg,
  mandi: chickenMandiImg,
  alfaham: alfahamGrillImg,
  interior: interiorDiningImg,
};

// Signature Dishes for Marquee Showcase
export const signatureDishes: MenuItem[] = [
  {
    id: 'sig-shawaya',
    name: 'Classic Slow-Fired Shawaya',
    arabicName: 'شواية كلاسيكية',
    category: 'SHAWAYA',
    description:
      'Whole tender chicken infused with Yamama signature dry rub, roasted on a slow-turning charcoal rotisserie until skin is blistered and crisp, keeping meat exceptionally succulent.',
    portionOptions: [
      { size: 'Quarter', priceFormatted: '₹140' },
      { size: 'Half', priceFormatted: '₹260' },
      { size: 'Full', priceFormatted: '₹490' },
    ],
    priceFormatted: 'From ₹140',
    isVegetarian: false,
    isSignature: true,
    image: heroShawayaImg,
    tags: ['Slow-Fired', 'Charcoal Roasted', 'House Special'],
  },
  {
    id: 'sig-masala-shawaya',
    name: 'Spiced Masala Shawaya',
    arabicName: 'شواية بالخلطة الحارة',
    category: 'SHAWAYA',
    description:
      'Our signature charcoal-grilled chicken deeply basted with a fragrant roasted spice gravy, crushed garlic, dried red peppers, and Arabian herbs. Served with kuboos & toum.',
    portionOptions: [
      { size: 'Quarter', priceFormatted: '₹160' },
      { size: 'Half', priceFormatted: '₹290' },
      { size: 'Full', priceFormatted: '₹550' },
    ],
    priceFormatted: 'From ₹160',
    isVegetarian: false,
    isSpicy: true,
    isSignature: true,
    image: masalaShawayaImg,
    tags: ['Rich Spice Glaze', 'Charcoal Grill', 'Best Seller'],
  },
  {
    id: 'sig-chicken-mandi',
    name: 'Arabian Chicken Mandi',
    arabicName: 'مندي دجاج فاخر',
    category: 'MANDI',
    description:
      'Slow-steamed spiced chicken resting on a mountain of aromatic long-grain basmati rice, layered with roasted almonds, golden sultanas, charred green peppers, and dakkoos tomato relish.',
    portionOptions: [
      { size: 'Single Portion', priceFormatted: '₹210' },
      { size: 'Half Platter', priceFormatted: '₹410' },
      { size: 'Full Platter', priceFormatted: '₹790' },
    ],
    priceFormatted: 'From ₹210',
    isVegetarian: false,
    isSignature: true,
    image: chickenMandiImg,
    tags: ['Aromatic Rice', 'Tender Steam-Roasted', 'Family Favorite'],
  },
  {
    id: 'sig-alfaham',
    name: 'Charcoal Al Faham',
    arabicName: 'الفحم العربي الأصيل',
    category: 'AL FAHAM',
    description:
      'Barbecue chicken marinated in traditional Gulf spices, crushed black pepper, and yogurt, grilled over searing hot charcoal embers with intense smoky crust.',
    portionOptions: [
      { size: 'Quarter', priceFormatted: '₹150' },
      { size: 'Half', priceFormatted: '₹280' },
      { size: 'Full', priceFormatted: '₹530' },
    ],
    priceFormatted: 'From ₹150',
    isVegetarian: false,
    isSpicy: true,
    isSignature: true,
    image: alfahamGrillImg,
    tags: ['Charcoal Sear', 'Smoky Pepper Crust'],
  },
  {
    id: 'sig-family-combo',
    name: 'Yamama Royal Feast Platter',
    arabicName: 'وليمة يمامة الملكية',
    category: 'COMBOS',
    description:
      'A banquet-style platter crafted for sharing: 1 Full Shawaya, generous portions of Mandi Basmati rice, freshly baked kuboos, house toum, pickled turnip relish, and Arabian spiced broth.',
    priceFormatted: '₹890',
    isVegetarian: false,
    isSignature: true,
    image: chickenMandiImg,
    tags: ['Made For Sharing', 'Serves 4–5', 'Complete Feast'],
  },
  {
    id: 'sig-peri-peri-alfaham',
    name: 'Fiery Peri Peri Al Faham',
    arabicName: 'الفحم بيري بيري',
    category: 'AL FAHAM',
    description:
      'Charcoal-flamed chicken drenched in crushed African bird’s eye chili marinade, fresh garlic, lime zest, and herb oil for bold smoky heat.',
    portionOptions: [
      { size: 'Half', priceFormatted: '₹310' },
      { size: 'Full', priceFormatted: '₹580' },
    ],
    priceFormatted: 'From ₹310',
    isVegetarian: false,
    isSpicy: true,
    isSignature: true,
    image: alfahamGrillImg,
    tags: ['Fiery Spices', 'Charred Edge'],
  },
];

// Complete Menu Items
export const allMenuItems: MenuItem[] = [
  ...signatureDishes,
  {
    id: 'm-alfaham-pepper',
    name: 'Black Pepper Al Faham',
    arabicName: 'الفحم بالفلفل الأسود',
    category: 'AL FAHAM',
    description:
      'Freshly ground Tellicherry black pepper crust grilled to a smoky crisp over natural wood charcoal with minted garlic toum.',
    portionOptions: [
      { size: 'Quarter', priceFormatted: '₹160' },
      { size: 'Half', priceFormatted: '₹290' },
      { size: 'Full', priceFormatted: '₹550' },
    ],
    priceFormatted: 'From ₹160',
    isVegetarian: false,
    isSpicy: true,
    image: alfahamGrillImg,
    tags: ['Cracked Pepper', 'Charcoal Flame'],
  },
  {
    id: 'm-alfaham-kanthari',
    name: 'Kanthari Chili Al Faham',
    arabicName: 'الفحم كانتاري حار',
    category: 'AL FAHAM',
    description:
      'A fiery Kerala-Arabian fusion featuring raw green bird’s eye chilies (Kanthari) blended into a silky garlic oil rub before grilling.',
    portionOptions: [
      { size: 'Half', priceFormatted: '₹300' },
      { size: 'Full', priceFormatted: '₹560' },
    ],
    priceFormatted: 'From ₹300',
    isVegetarian: false,
    isSpicy: true,
    image: alfahamGrillImg,
    tags: ['Local Kanthari', 'Extreme Heat'],
  },
  {
    id: 'm-mandi-rice-single',
    name: 'Fragrant Mandi Basmati Rice',
    arabicName: 'أرز مندي خاص',
    category: 'RICE',
    description:
      'Extra-long grain basmati slow-infused with whole cardamom, cloves, cinnamon bark, saffron strands, and ghee essence.',
    priceFormatted: '₹120',
    isVegetarian: true,
    image: chickenMandiImg,
    tags: ['Aromatic Spices', 'Pure Basmati'],
  },
  {
    id: 'm-kabsa-rice',
    name: 'Arabian Spiced Kabsa Rice',
    arabicName: 'أرز كبسة عربي',
    category: 'RICE',
    description:
      'Rich golden tomato-and-black-lime infused rice with subtle bay leaf aroma and roasted golden cashews.',
    priceFormatted: '₹130',
    isVegetarian: true,
    image: chickenMandiImg,
    tags: ['Black Lime', 'Tomato Essence'],
  },
  {
    id: 'm-grill-mix-skewers',
    name: 'Charcoal Shish Tawook & Tikka',
    arabicName: 'شيش طاووق على الفحم',
    category: 'GRILLS',
    description:
      'Boneless tender chicken morsels soaked in garlic cream, lemon, and mild paprika, flame-grilled on metal skewers.',
    priceFormatted: '₹260',
    isVegetarian: false,
    image: masalaShawayaImg,
    tags: ['Boneless Skewers', 'Garlic Toum'],
  },
  {
    id: 'm-combo-duo',
    name: 'Shawaya & Mandi Rice Duo',
    arabicName: 'وجبة ثنائية شواية ومندي',
    category: 'COMBOS',
    description:
      'Half slow-fired Shawaya paired with a generous mound of Mandi rice, 2 Kuboos, garlic dip, salad, and spicy broth.',
    priceFormatted: '₹380',
    isVegetarian: false,
    image: heroShawayaImg,
    tags: ['Complete Meal', 'Best Value'],
  },
  {
    id: 'm-side-kuboos-basket',
    name: 'Freshly Baked Kuboos (4 Pcs)',
    arabicName: 'خبز خبوز طازج',
    category: 'SIDES',
    description:
      'Warm and pillowy soft Arabic flatbread, freshly puffed and perfect for wrapping tender pulled shawaya.',
    priceFormatted: '₹40',
    isVegetarian: true,
    image: masalaShawayaImg,
    tags: ['Warm Flatbread', 'Vegetarian'],
  },
  {
    id: 'm-side-toum-garlic',
    name: 'House Special Garlic Toum & Pickles',
    arabicName: 'ثومية أصيلة مع مخلل',
    category: 'SIDES',
    description:
      'Silky, whipped garlic cream prepared in-house with sea salt and cold-pressed oil, served with pickled beets and cucumbers.',
    priceFormatted: '₹50',
    isVegetarian: true,
    image: masalaShawayaImg,
    tags: ['In-House Toum', 'Vegetarian'],
  },
  {
    id: 'm-side-fattoush-salad',
    name: 'Arabic Garden Salad with Sumac',
    arabicName: 'سلطة عربية بالسماق',
    category: 'SIDES',
    description:
      'Crisp romaine, diced cucumbers, ripe tomatoes, red onions, fresh parsley, and toasted sumac lime dressing.',
    priceFormatted: '₹90',
    isVegetarian: true,
    image: interiorDiningImg,
    tags: ['Fresh & Crisp', 'Vegetarian'],
  },
  {
    id: 'm-drink-mint-lemonade',
    name: 'Chilled Fresh Mint Lemonade (Limonana)',
    arabicName: 'عصير ليمون ونعناع مثلج',
    category: 'DRINKS',
    description:
      'Crushed garden mint blended with freshly squeezed lemons, chilled crushed ice, and raw cane sugar.',
    priceFormatted: '₹60',
    isVegetarian: true,
    image: interiorDiningImg,
    tags: ['Refreshing', 'Iced'],
  },
  {
    id: 'm-drink-sharjah-shake',
    name: 'Classic Malabar Sharjah Shake',
    arabicName: 'شارقة شيك مثلج',
    category: 'DRINKS',
    description:
      'Thick blended frozen banana, rich dairy milk, Horlicks essence, and roasted cashew garnish.',
    priceFormatted: '₹80',
    isVegetarian: true,
    image: interiorDiningImg,
    tags: ['Rich Shake', 'Chilled'],
  },
  {
    id: 'm-dessert-kunafa',
    name: 'Crispy Cheese & Cream Kunafa',
    arabicName: 'كنافة بالجبنة والقشطة',
    category: 'DESSERTS',
    description:
      'Golden buttery kataifi pastry loaded with melting sweet cheese, scented with orange blossom syrup and crushed green pistachios.',
    priceFormatted: '₹180',
    isVegetarian: true,
    image: interiorDiningImg,
    tags: ['Baked Warm', 'Sweet Finish'],
  },
];

// Verified Guest Reviews (Configurable & Authentic Google Reviews Structure)
export const guestReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Muhammed Nihal',
    rating: 5,
    date: 'Verified Google Review',
    text: 'One of the best Shawaya spots in the Tirurkad–Perinthalmanna stretch. The meat is juicy, perfectly spiced, and the garlic toum tastes truly authentic. Mandi rice was fragrant without being overly greasy.',
    verifiedVisit: true,
  },
  {
    id: 'rev-2',
    author: 'Fathima Rafeeq',
    rating: 5,
    date: 'Verified Google Review',
    text: 'Their Masala Shawaya is unbeatable. Deep rich marinade with great charcoal flavor. The family seating was calm and neat. Excellent service and quick parcel packing too.',
    verifiedVisit: true,
  },
  {
    id: 'rev-3',
    author: 'Arjun K. V.',
    rating: 4,
    date: 'Verified Google Review',
    text: 'Visited during late evening dinner. Al Faham was freshly grilled over charcoal with a great smoky crust. Very reasonable pricing and generous quantity for a group of friends.',
    verifiedVisit: true,
  },
  {
    id: 'rev-4',
    author: 'Shabeer Rahman',
    rating: 5,
    date: 'Verified Google Review',
    text: 'Real Arabian taste in Angadippuram locality. Chicken Mandi meat literally falls off the bone. Authentic spices, prompt staff, and clean dining ambiance.',
    verifiedVisit: true,
  },
];

// Photo Gallery Items for Lightbox
export const photoGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Slow Charcoal Shawaya',
    category: 'Grill & Flame',
    image: heroShawayaImg,
    description: 'Whole chicken roasting steadily over red-hot charcoal embers with fragrant wood smoke.',
  },
  {
    id: 'gal-2',
    title: 'Masala Glazed Platter',
    category: 'Food',
    image: masalaShawayaImg,
    description: 'Signature spiced shawaya served with freshly made garlic dip, kuboos, and pickled relish.',
  },
  {
    id: 'gal-3',
    title: 'Arabian Mandi Feast',
    category: 'Food',
    image: chickenMandiImg,
    description: 'Tender steam-roasted chicken nestled on golden long-grain basmati spiced rice.',
  },
  {
    id: 'gal-4',
    title: 'Al Faham Flame Sear',
    category: 'Grill & Flame',
    image: alfahamGrillImg,
    description: 'Artisan grilling technique over hardwood coals locking in juices and fiery spice crust.',
  },
  {
    id: 'gal-5',
    title: 'Dining Atmosphere',
    category: 'Ambiance',
    image: interiorDiningImg,
    description: 'Warm amber ambiance and contemporary Arabic accents for family and intimate dining.',
  },
  {
    id: 'gal-6',
    title: 'Artisan Culinary Plating',
    category: 'Plating',
    image: masalaShawayaImg,
    description: 'Hand-crafted Middle Eastern presentation with house dips, lemons, and fresh herbs.',
  },
];

// Why Yamama Core Pillars
export const whyYamamaPillars = [
  {
    title: 'AUTHENTIC FLAVOURS',
    description:
      'Centred around genuine Middle Eastern seasoning profiles, hand-blended marinades, and time-honoured culinary recipes.',
    index: '01',
  },
  {
    title: 'QUALITY INGREDIENTS',
    description:
      'Fresh daily poultry, premium long-grain aged basmati, natural aromatics, and cold-pressed pure oils without shortcuts.',
    index: '02',
  },
  {
    title: 'FRESHLY PREPARED',
    description:
      'Slow-fired over live hardwood charcoal throughout lunch and dinner hours to ensure every serving is hot and tender.',
    index: '03',
  },
  {
    title: 'MADE FOR SHARING',
    description:
      'Generous platters, communal mandi trays, and feast combos designed to gather families, travellers, and friends.',
    index: '04',
  },
];
