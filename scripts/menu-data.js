// Chini Chulha - Official Menu Data
// Accurately transcribed from the original restaurant menu card

const MENU_CATEGORIES = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'pizza-lovers', name: 'Pizza Lovers', icon: '🍕' },
  { id: 'paneer-pizza', name: 'Paneer Pizza Lovers', icon: '🧀' },
  { id: 'special-pizza', name: 'Special Pizza Lovers', icon: '✨' },
  { id: 'new-pizza', name: 'New Pizza', icon: '🔥' },
  { id: 'non-veg-pizza', name: 'Non-Veg Pizza', icon: '🍗' },
  { id: 'indian-maggies', name: 'Indian Maggies', icon: '🍜' },
  { id: 'grilled-sandwich', name: 'Grilled Sandwich', icon: '🥪' },
  { id: 'coffee-lovers', name: 'Coffee Lovers', icon: '☕' },
  { id: 'lassi-cold-drink', name: 'Lassi & Cold Drinks', icon: '🥤' },
  { id: 'tea', name: 'Tea', icon: '🫖' },
  { id: 'combo-meals', name: 'Combo Meals', icon: '🍱' }
];

const MENU_ITEMS = [
  // 1. PIZZA LOVERS
  {
    id: 'pl-1',
    categoryId: 'pizza-lovers',
    name: 'Onion Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 75, m: 120, l: 200 },
    description: 'Crisp hand-stretched crust topped with freshly diced crunchy onions, savory herbs, and melted mozzarella cheese.',
    image: 'assets/images/pizza_classic.jpg',
    popular: true
  },
  {
    id: 'pl-2',
    categoryId: 'pizza-lovers',
    name: 'Capsicum Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 75, m: 120, l: 200 },
    description: 'Fresh green bell peppers with aromatic Italian herbs and creamy cheese blend baked to perfection.',
    image: 'assets/images/pizza_classic.jpg'
  },
  {
    id: 'pl-3',
    categoryId: 'pizza-lovers',
    name: 'Tomato Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 75, m: 120, l: 200 },
    description: 'Juicy ripe tomatoes layered over rich herb-infused tomato sauce and golden bubbling cheese.',
    image: 'assets/images/pizza_classic.jpg'
  },
  {
    id: 'pl-4',
    categoryId: 'pizza-lovers',
    name: 'Golden Corn Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 75, m: 120, l: 200 },
    description: 'Sweet American golden corn kernels generously loaded with melted mozzarella on a crisp golden crust.',
    image: 'assets/images/pizza_classic.jpg',
    popular: true
  },

  // 2. PANEER PIZZA LOVERS
  {
    id: 'pp-1',
    categoryId: 'paneer-pizza',
    name: 'Onion Paneer Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 100, m: 160, l: 270 },
    description: 'Succulent spiced soft cottage cheese cubes paired with crunchy sliced onions and melted mozzarella.',
    image: 'assets/images/pizza_paneer.jpg',
    extraNote: 'Cheese Burst Topping Available: S: ₹60 | M: ₹80 | L: ₹120'
  },
  {
    id: 'pp-2',
    categoryId: 'paneer-pizza',
    name: 'Capsicum Paneer Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 100, m: 160, l: 270 },
    description: 'Fresh green bell peppers and tender paneer cubes baked with signature herbs and stringy cheese.',
    image: 'assets/images/pizza_paneer.jpg',
    extraNote: 'Cheese Burst Topping Available: S: ₹60 | M: ₹80 | L: ₹120'
  },
  {
    id: 'pp-3',
    categoryId: 'paneer-pizza',
    name: 'Tomato Paneer Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 100, m: 160, l: 270 },
    description: 'Juicy farm-fresh tomatoes and soft paneer bites over rich sauce with golden crust.',
    image: 'assets/images/pizza_paneer.jpg',
    extraNote: 'Cheese Burst Topping Available: S: ₹60 | M: ₹80 | L: ₹120'
  },
  {
    id: 'pp-4',
    categoryId: 'paneer-pizza',
    name: 'Golden Corn Paneer Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 100, m: 160, l: 270 },
    description: 'Sweet juicy corn and seasoned paneer cubes covered in lavish mozzarella cheese.',
    image: 'assets/images/pizza_paneer.jpg',
    popular: true,
    extraNote: 'Cheese Burst Topping Available: S: ₹60 | M: ₹80 | L: ₹120'
  },

  // 3. SPECIAL PIZZA LOVERS
  {
    id: 'sp-1',
    categoryId: 'special-pizza',
    name: 'Spicy Tango Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 140, m: 190, l: 290 },
    description: 'Zesty red paprika, jalapenos, crunchy capsicum, and spicy seasoning for flavor enthusiasts.',
    image: 'assets/images/pizza_special.jpg',
    badge: 'Spicy'
  },
  {
    id: 'sp-2',
    categoryId: 'special-pizza',
    name: 'Tomato & Cheese Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 140, m: 190, l: 290 },
    description: 'Classic combination of ripe tomatoes and an extra indulgent layer of melted cheese.',
    image: 'assets/images/pizza_special.jpg'
  },
  {
    id: 'sp-3',
    categoryId: 'special-pizza',
    name: 'Margherita (Single Cheese)',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 110, m: 190, l: 290 },
    description: 'Traditional Italian simplicity with tangy tomato basil sauce and 100% real mozzarella cheese.',
    image: 'assets/images/pizza_special.jpg',
    popular: true
  },
  {
    id: 'sp-4',
    categoryId: 'special-pizza',
    name: 'Margherita (Double Cheese)',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 160, m: 190, l: 390 },
    description: 'Double portion of premium melted mozzarella cheese layered over artisanal tomato herb sauce.',
    image: 'assets/images/pizza_special.jpg',
    badge: 'Extra Cheesy'
  },
  {
    id: 'sp-5',
    categoryId: 'special-pizza',
    name: 'Farm Fresh Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 160, m: 290, l: 390 },
    description: 'Loaded with crisp onions, capsicum, fresh tomatoes, and garden herbs on a golden crust.',
    image: 'assets/images/pizza_special.jpg',
    popular: true
  },
  {
    id: 'sp-6',
    categoryId: 'special-pizza',
    name: 'Country Feast Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 160, m: 290, l: 390 },
    description: 'Rustic countryside combination of sweet corn, crunchy onions, and bell peppers with herbs.',
    image: 'assets/images/pizza_special.jpg'
  },
  {
    id: 'sp-7',
    categoryId: 'special-pizza',
    name: 'Mexican Green Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 160, m: 290, l: 390 },
    description: 'Spicy Mexican herbs, jalapenos, green capsicum, and golden corn on cheese blanket.',
    image: 'assets/images/pizza_special.jpg',
    badge: 'Zesty'
  },
  {
    id: 'sp-8',
    categoryId: 'special-pizza',
    name: 'Peppy Paneer Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 190, m: 290, l: 420 },
    description: 'Spicy paneer cubes, crisp capsicum, and red paprika for a bold, peppy bite in every slice.',
    image: 'assets/images/pizza_special.jpg',
    popular: true
  },
  {
    id: 'sp-9',
    categoryId: 'special-pizza',
    name: 'Deluxe Veggie Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 190, m: 290, l: 420 },
    description: 'Rich assortment of paneer, sweet corn, capsicum, onions, and black olives with double cheese.',
    image: 'assets/images/pizza_special.jpg'
  },
  {
    id: 'sp-10',
    categoryId: 'special-pizza',
    name: 'Paneer Makhni Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 220, m: 360, l: 520 },
    description: 'Rich Indian makhni sauce base topped with spiced paneer, onions, capsicum, and creamy mozzarella.',
    image: 'assets/images/pizza_special.jpg',
    badge: 'Chef Pick',
    popular: true
  },
  {
    id: 'sp-11',
    categoryId: 'special-pizza',
    name: 'Chef Veg. Special Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 220, m: 360, l: 520 },
    description: "Our head chef's ultimate creation with overloaded premium vegetables, spiced paneer, and triple cheese blend.",
    image: 'assets/images/pizza_special.jpg',
    badge: 'Signature'
  },

  // 4. NEW PIZZA
  {
    id: 'np-1',
    categoryId: 'new-pizza',
    name: 'Tandoori Paneer Pizza',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 189, m: 289, l: 389 },
    description: 'Toppings: Paneer, Onion, Capsicum, Corn & Black Olive with smoky tandoori sauce.',
    image: 'assets/images/pizza_paneer.jpg',
    badge: 'New Arrival',
    popular: true
  },
  {
    id: 'np-2',
    categoryId: 'new-pizza',
    name: 'Tandoori Margherita',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { s: 149, m: 169, l: 289 },
    description: 'Classic margherita reimagined with smoky tandoori herb notes and rich melted cheese.',
    image: 'assets/images/pizza_classic.jpg',
    badge: 'New Arrival'
  },

  // 5. NON-VEG PIZZA
  {
    id: 'nv-1',
    categoryId: 'non-veg-pizza',
    name: 'Chicken Kebab Pizza',
    isVeg: false,
    isNonVeg: true,
    pricingType: 'sizes',
    prices: { s: 150, m: 200, l: 250 },
    description: 'Succulent spiced chicken kebab pieces layered with onions, herbs, and melted mozzarella.',
    image: 'assets/images/pizza_nonveg.jpg',
    popular: true
  },
  {
    id: 'nv-2',
    categoryId: 'non-veg-pizza',
    name: 'Chicken Salami / Pepperoni Pizza',
    isVeg: false,
    isNonVeg: true,
    pricingType: 'sizes',
    prices: { s: 150, m: 200, l: 250 },
    description: 'Tender slices of seasoned chicken salami paired with rich herb sauce and golden bubbly cheese.',
    image: 'assets/images/pizza_nonveg.jpg'
  },
  {
    id: 'nv-3',
    categoryId: 'non-veg-pizza',
    name: 'Chicken Tikka Pizza',
    isVeg: false,
    isNonVeg: true,
    pricingType: 'sizes',
    prices: { s: 200, m: 250, l: 280 },
    description: 'Mouthwatering tandoori chicken tikka chunks with crunchy onions and aromatic Indian spices.',
    image: 'assets/images/pizza_nonveg.jpg',
    badge: 'Best Seller',
    popular: true
  },
  {
    id: 'nv-4',
    categoryId: 'non-veg-pizza',
    name: 'Chicken Mix Pizza',
    isVeg: false,
    isNonVeg: true,
    pricingType: 'sizes',
    prices: { s: 200, m: 250, l: 300 },
    description: 'The ultimate non-veg feast loaded with chicken tikka, salami, kebab bits, and rich mozzarella.',
    image: 'assets/images/pizza_nonveg.jpg',
    badge: 'Loaded Feast'
  },

  // 6. INDIAN MAGGIES
  {
    id: 'mg-1',
    categoryId: 'indian-maggies',
    name: 'Veg Maggi',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 70,
    description: 'Classic hot Maggi noodles tossed with fresh chopped carrots, peas, capsicum, and aromatic spices.',
    image: 'assets/images/maggi_noodles.jpg'
  },
  {
    id: 'mg-2',
    categoryId: 'indian-maggies',
    name: 'Masala Maggi',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 70,
    description: 'Steaming hot noodles cooked with an extra blend of roasted Indian spices and chili zest.',
    image: 'assets/images/maggi_noodles.jpg',
    popular: true
  },
  {
    id: 'mg-3',
    categoryId: 'indian-maggies',
    name: 'Fried Maggi',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 80,
    description: 'Wok-tossed noodles sautéed with crisp onions, tomatoes, and golden butter for a rich texture.',
    image: 'assets/images/maggi_noodles.jpg'
  },
  {
    id: 'mg-4',
    categoryId: 'indian-maggies',
    name: 'Cheese Maggi',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 100,
    description: 'Comforting hot masala Maggi crowned with a thick layer of melted, creamy cheese.',
    image: 'assets/images/maggi_noodles.jpg',
    badge: 'Crowd Favorite',
    popular: true
  },

  // 7. GRILLED SANDWICH
  {
    id: 'sw-1',
    categoryId: 'grilled-sandwich',
    name: 'Grilled Veggy Sandwich',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 80,
    description: 'Golden grill-pressed bread stuffed with crisp seasoned vegetables and signature herb spreads.',
    image: 'assets/images/grilled_sandwich.jpg'
  },
  {
    id: 'sw-2',
    categoryId: 'grilled-sandwich',
    name: 'Grilled Aloo Tikki Sandwich',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 95,
    description: 'Crispy spiced potato patty packed inside toasted bread with tangy sauces and crunchy onion rings.',
    image: 'assets/images/grilled_sandwich.jpg'
  },
  {
    id: 'sw-3',
    categoryId: 'grilled-sandwich',
    name: 'Grilled Cheese Sandwich',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 95,
    description: 'Oozing melted cheese encased in buttery, golden-toasted artisan bread with mild herbs.',
    image: 'assets/images/grilled_sandwich.jpg',
    popular: true
  },
  {
    id: 'sw-4',
    categoryId: 'grilled-sandwich',
    name: 'Grilled Paneer Sandwich',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 95,
    description: 'Marinated cottage cheese slices grilled with crunchy bell peppers and creamy mint spread.',
    image: 'assets/images/grilled_sandwich.jpg'
  },
  {
    id: 'sw-5',
    categoryId: 'grilled-sandwich',
    name: 'Paneer Makhni Sandwich',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 110,
    description: 'Tender paneer chunks tossed in royal makhni gravy, pressed in golden toasted bread.',
    image: 'assets/images/grilled_sandwich.jpg',
    badge: 'Specialty',
    popular: true
  },

  // 8. COFFEE LOVERS
  {
    id: 'cf-1',
    categoryId: 'coffee-lovers',
    name: 'Caramel Coffee',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 60,
    description: 'Aromatic brewed coffee infused with buttery sweet caramel syrup and velvety froth.',
    image: 'assets/images/hot_coffee.jpg'
  },
  {
    id: 'cf-2',
    categoryId: 'coffee-lovers',
    name: 'Hazelnut Coffee',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 60,
    description: 'Rich coffee brewed with nutty hazelnut essence and creamy steamed milk.',
    image: 'assets/images/hot_coffee.jpg',
    popular: true
  },
  {
    id: 'cf-3',
    categoryId: 'coffee-lovers',
    name: 'Hot Coffee',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 40,
    description: 'Classic piping hot Indian-style frothy coffee prepared with fresh milk and roasted beans.',
    image: 'assets/images/hot_coffee.jpg'
  },
  {
    id: 'cf-4',
    categoryId: 'coffee-lovers',
    name: 'Cold Coffee',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { regular: 50, large: 70 },
    description: 'Creamy chilled coffee blended with milk, crushed ice, and topped with rich coffee foam.',
    image: 'assets/images/cold_coffee.jpg',
    popular: true
  },
  {
    id: 'cf-5',
    categoryId: 'coffee-lovers',
    name: 'Chocolate Coffee',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'sizes',
    prices: { regular: 60, large: 80 },
    description: 'Indulgent chilled coffee enriched with dark chocolate fudge syrup and chocolate drizzle.',
    image: 'assets/images/cold_coffee.jpg',
    badge: 'Sweet Tooth'
  },

  // 9. LASSI & COLD DRINK
  {
    id: 'ls-1',
    categoryId: 'lassi-cold-drink',
    name: 'Lassi Sweet',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 40,
    description: 'Traditional thick churned sweet yogurt drink served chilled with creamy consistency.',
    image: 'assets/images/lassi_sweet.jpg',
    popular: true
  },
  {
    id: 'ls-2',
    categoryId: 'lassi-cold-drink',
    name: 'Cold Drink (Glass)',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 39,
    description: 'Refreshing carbonated soft drink served chilled in a glass over ice.',
    image: 'assets/images/cold_drink_glass.jpg'
  },

  // 10. TEA
  {
    id: 'te-1',
    categoryId: 'tea',
    name: 'Zinger Tea',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 15,
    description: 'Energizing fresh ginger root brewed with rich Assam tea leaves and boiled milk.',
    image: 'assets/images/kulhad_chai.jpg'
  },
  {
    id: 'te-2',
    categoryId: 'tea',
    name: 'Zinger Elaichi Tea',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 30,
    description: 'Fragrant blend of crushed cardamom pods and spicy fresh ginger in rich kadak chai.',
    image: 'assets/images/kulhad_chai.jpg',
    popular: true
  },
  {
    id: 'te-3',
    categoryId: 'tea',
    name: 'Masala Tea',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 30,
    description: 'Traditional Indian masala chai slow-simmered with cloves, cinnamon, cardamom, and black pepper.',
    image: 'assets/images/kulhad_chai.jpg'
  },
  {
    id: 'te-4',
    categoryId: 'tea',
    name: 'Kulhad Tea',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 40,
    description: 'Aromatic spicy chai served in an authentic earthen terracotta kulhad for an earthy flavor.',
    image: 'assets/images/kulhad_tea_real.jpg',
    badge: 'Desi Favorite',
    popular: true
  },

  // 11. COMBO MEALS
  {
    id: 'cb-1',
    categoryId: 'combo-meals',
    name: 'Burger + French Fries + Cold Drink',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 99,
    description: 'Value feast: Crisp golden veggie burger, salted crunchy french fries, and a chilled beverage.',
    image: 'assets/images/combo_meal.jpg',
    popular: true,
    badge: 'Super Value ₹99'
  },
  {
    id: 'cb-2',
    categoryId: 'combo-meals',
    name: 'Pizza + Burger + Cold Drink',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 129,
    description: 'Ultimate hunger buster: Freshly baked personal pizza, tasty burger, and a refreshing cold drink.',
    image: 'assets/images/combo_meal.jpg',
    popular: true,
    badge: 'Top Combo ₹129'
  },
  {
    id: 'cb-3',
    categoryId: 'combo-meals',
    name: 'Stuffed Garlic Bread + French Fries + Cold Drink',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 169,
    description: 'Cheesy herb-stuffed garlic breadsticks, crispy french fries, and chilled soft drink.',
    image: 'assets/images/garlic_bread.jpg',
    badge: 'Garlic Feast ₹169'
  },
  {
    id: 'cb-4',
    categoryId: 'combo-meals',
    name: 'Maggi + Chai',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 70,
    description: 'The timeless Indian comfort duo: Steaming hot vegetable masala Maggi with piping hot tea.',
    image: 'assets/images/maggi_noodles.jpg',
    popular: true,
    badge: 'Comfort Duo ₹70'
  },
  {
    id: 'cb-5',
    categoryId: 'combo-meals',
    name: 'French Fries + Cold Coffee',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 99,
    description: 'Golden crispy salted fries paired with chilled thick and frothy cold coffee.',
    image: 'assets/images/cold_coffee.jpg',
    badge: 'Chill Snack ₹99'
  },
  {
    id: 'cb-6',
    categoryId: 'combo-meals',
    name: 'Cold Coffee + French Fries',
    isVeg: true,
    isNonVeg: false,
    pricingType: 'single',
    price: 99,
    description: 'Delicious frothy blended cold coffee served with hot and crispy french fries.',
    image: 'assets/images/cold_coffee.jpg',
    badge: 'Combo ₹99'
  }
];

// Gallery Images configuration
const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'dine-in',
    title: 'Chini Chulha Restaurant Storefront & Dine-In',
    description: 'Our authentic welcoming entrance, modern wooden interior paneling, and cozy dining atmosphere.',
    src: 'assets/images/restaurant_front.jpg',
    isRealStore: true
  },
  {
    id: 'gal-2',
    category: 'pizza',
    title: 'Hand-Tossed Classic & Special Pizzas',
    description: 'Baked to golden perfection with rich mozzarella and vibrant toppings.',
    src: 'assets/images/pizza_classic.jpg'
  },
  {
    id: 'gal-3',
    category: 'pizza',
    title: 'Tandoori & Peppy Paneer Pizzas',
    description: 'Spiced soft paneer cubes on crispy crust with aromatic herbs.',
    src: 'assets/images/pizza_paneer.jpg'
  },
  {
    id: 'gal-4',
    category: 'maggie',
    title: 'Authentic Indian Masala Maggi',
    description: 'Steaming hot Maggi noodles tossed with special roasted spices, fresh chillies, and aromatic herbs.',
    src: 'assets/images/maggi_real.jpg',
    isRealDish: true
  },
  {
    id: 'gal-5',
    category: 'sandwich',
    title: 'Crispy Grilled Club Sandwiches',
    description: 'Buttery grill-pressed bread stuffed with savory fillings and gooey cheese.',
    src: 'assets/images/grilled_sandwich.jpg'
  },
  {
    id: 'gal-6',
    category: 'beverages',
    title: 'Chilled Frothy Cold Coffee & Sweet Lassi',
    description: 'Refreshing cold coffee with chocolate drizzle and traditional creamy sweet lassi.',
    src: 'assets/images/cold_coffee.jpg'
  },
  {
    id: 'gal-7',
    category: 'beverages',
    title: 'Desi Kulhad Chai & Herbal Teas',
    description: 'Authentic ginger and cardamom spiced cutting chai in traditional clay kulhad.',
    src: 'assets/images/kulhad_chai.jpg'
  },
  {
    id: 'gal-8',
    category: 'combos',
    title: 'Super Value Combo Meals',
    description: 'Satisfying burger, crispy golden french fries, and chilled beverage combos.',
    src: 'assets/images/combo_meal.jpg'
  },
  {
    id: 'gal-9',
    category: 'combos',
    title: 'Cheesy Stuffed Garlic Bread',
    description: 'Freshly baked garlic bread overflowing with cheese and Italian herbs.',
    src: 'assets/images/garlic_bread.jpg'
  }
];

if (typeof window !== 'undefined') {
  window.MENU_CATEGORIES = MENU_CATEGORIES;
  window.MENU_ITEMS = MENU_ITEMS;
  window.GALLERY_ITEMS = GALLERY_ITEMS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MENU_CATEGORIES, MENU_ITEMS, GALLERY_ITEMS };
}
