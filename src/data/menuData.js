export const MENU_CATEGORIES = [
  {
    id: 'cat-starters',
    name: 'Starters',
    note: 'To share',
    image: '/images/menu-starters.png',
    items: [
      { id: 's1', name: 'Smoked Wings', tags: ['Spicy'], desc: 'Hickory-smoked chicken wings, tossed in house hot sauce, served with ranch.', price: '₹ 349' },
      { id: 's2', name: 'Loaded Nachos', tags: [], desc: 'House-fried chips, five-cheese queso, pulled pork, pico de gallo, jalapeños.', price: '₹ 399' },
      { id: 's3', name: 'Smoked Corn Ribs', tags: ['Veg'], desc: 'Charred corn cut into ribs, smoked butter, chilli-lime dust.', price: '₹ 249' },
      { id: 's4', name: 'Pit Sampler Board', tags: [], desc: 'A little of everything from the smoker — brisket, pork, ribs, house pickles.', price: '₹ 699' },
    ],
  },
  {
    id: 'cat-smoker',
    name: 'From The Smoker',
    note: 'Priced per portion',
    image: '/images/menu-smoker.png',
    items: [
      { id: 'sm1', name: 'Signature Brisket', tags: [], desc: '14-hour hickory smoke, dry rub, rested and hand-sliced against the grain.', price: '₹ 549' },
      { id: 'sm2', name: 'Baby Back Ribs', tags: [], desc: 'Full rack, glazed with house barbecue sauce, fall-off-the-bone tender.', price: '₹ 649' },
      { id: 'sm3', name: 'Pulled Pork', tags: [], desc: 'Shredded pork shoulder, smoked low and slow, sauce served on the side.', price: '₹ 449' },
      { id: 'sm4', name: 'Smoked Half Chicken', tags: [], desc: 'Brined, smoked whole and split, finished over open flame.', price: '₹ 399' },
      { id: 'sm5', name: 'Burnt Ends', tags: [], desc: 'Double-smoked brisket point, caramelised in its own drippings.', price: '₹ 599' },
      { id: 'sm6', name: 'House Smoked Sausage', tags: [], desc: 'Coarse-ground link, smoked in-house, served with mustard.', price: '₹ 349' },
    ],
  },
  {
    id: 'cat-sandwiches',
    name: 'Sandwiches & Burgers',
    note: 'Served with a side',
    image: '/images/menu-sandwiches.png',
    items: [
      { id: 'sb1', name: 'Brisket Melt', tags: [], desc: 'Sliced brisket, smoked cheddar, pickled onion on toasted bun.', price: '₹ 449' },
      { id: 'sb2', name: 'Pulled Pork Sandwich', tags: [], desc: 'Piled high on a brioche bun with house slaw and pickles.', price: '₹ 379' },
      { id: 'sb3', name: 'Smoke Haus Burger', tags: [], desc: 'Smash-style patty, smoked bacon, cheddar, burger sauce.', price: '₹ 429' },
      { id: 'sb4', name: 'Grilled Veg & Halloumi Burger', tags: ['Veg'], desc: 'Charred vegetables, halloumi, chipotle mayo, brioche bun.', price: '₹ 369' },
    ],
  },
  {
    id: 'cat-sides',
    name: 'Sides',
    note: 'Small / large',
    image: '/images/menu-sides.png',
    items: [
      { id: 'si1', name: 'Mac & Cheese', tags: [], desc: 'Three-cheese blend, baked golden.', price: '₹ 199' },
      { id: 'si2', name: 'House Baked Beans', tags: [], desc: 'Slow-cooked with smoked ham trimmings.', price: '₹ 149' },
      { id: 'si3', name: 'Cornbread', tags: [], desc: 'Warm, buttered, honey drizzle.', price: '₹ 129' },
      { id: 'si4', name: 'Smoked Coleslaw', tags: [], desc: 'Crisp cabbage, tangy house dressing.', price: '₹ 99' },
      { id: 'si5', name: 'Loaded Fries', tags: [], desc: 'Cheese, bacon bits, spring onion.', price: '₹ 229' },
    ],
  },
  {
    id: 'cat-drinks',
    name: 'Beverages',
    note: 'Full bar list on request',
    image: '/images/menu-beverages.png',
    items: [
      { id: 'b1', name: 'House Lemonade', tags: [], desc: 'Fresh-pressed, lightly sweetened.', price: '₹ 129' },
      { id: 'b2', name: 'Smoked Iced Tea', tags: [], desc: 'Black tea, hint of applewood smoke.', price: '₹ 149' },
      { id: 'b3', name: 'Craft Sodas', tags: [], desc: 'Rotating selection, ask your server.', price: '₹ 119' },
      { id: 'b4', name: 'Buttermilk / Fresh Juice', tags: [], desc: 'Seasonal, made to order.', price: '₹ 99' },
    ],
  },
  {
    id: 'cat-sweets',
    name: 'Sweet Endings',
    note: 'Made in-house daily',
    image: '/images/menu-sweets.png',
    items: [
      { id: 'sw1', name: 'Banana Pudding', tags: [], desc: 'Classic layered pudding, vanilla wafers.', price: '₹ 199' },
      { id: 'sw2', name: 'Smoked Chocolate Brownie', tags: [], desc: 'Fudgy centre, vanilla ice cream.', price: '₹ 229' },
      { id: 'sw3', name: 'Seasonal Pie Slice', tags: [], desc: "Ask your server what's fresh today.", price: '₹ 179' },
    ],
  },
];

export const MENU_TAB_OPTIONS = [
  { label: 'All', target: 'all' },
  { label: 'Starters', target: 'cat-starters' },
  { label: 'From The Smoker', target: 'cat-smoker' },
  { label: 'Sandwiches & Burgers', target: 'cat-sandwiches' },
  { label: 'Sides', target: 'cat-sides' },
  { label: 'Beverages', target: 'cat-drinks' },
  { label: 'Sweet Endings', target: 'cat-sweets' },
];
