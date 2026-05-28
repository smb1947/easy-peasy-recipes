const STORAGE_KEY = "easy-peasy-recipes-state-v1";

const icons = {
  home: '<svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path></svg>',
  inventory:
    '<svg viewBox="0 0 24 24"><path d="M4 7h16"></path><path d="M6 7l1 14h10l1-14"></path><path d="M9 7V4h6v3"></path><path d="M9 12h6"></path></svg>',
  friends:
    '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="9.5" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  saved:
    '<svg viewBox="0 0 24 24"><path d="M19 21 12 17 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>',
  profile:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
  chef: '<svg viewBox="0 0 24 24"><path d="M6 14.5A4.5 4.5 0 1 1 9.2 7a5 5 0 0 1 9.3 2.5A3.5 3.5 0 0 1 18 16H6z"></path><path d="M7 16v5h10v-5"></path><path d="M9 19h6"></path></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M13.7 21a2 2 0 0 1-3.4 0"></path></svg>',
  search:
    '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
  filter: '<svg viewBox="0 0 24 24"><path d="M4 6h16"></path><path d="M7 12h10"></path><path d="M10 18h4"></path></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="m8 5 12 7-12 7z"></path></svg>',
  text: '<svg viewBox="0 0 24 24"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h10"></path></svg>',
  audio:
    '<svg viewBox="0 0 24 24"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M16 9.5a4 4 0 0 1 0 5"></path><path d="M19 7a8 8 0 0 1 0 10"></path></svg>',
  video:
    '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="15" height="14" rx="2"></rect><path d="m18 9 4-2v10l-4-2"></path></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>',
  more: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>',
  cart: '<svg viewBox="0 0 24 24"><circle cx="9" cy="20" r="1"></circle><circle cx="17" cy="20" r="1"></circle><path d="M3 4h2l2.2 11h10.5l2-7H7"></path></svg>',
  utensils:
    '<svg viewBox="0 0 24 24"><path d="M6 2v20"></path><path d="M4 2v5a2 2 0 0 0 4 0V2"></path><path d="M14 2v20"></path><path d="M14 2c4 2 4 7 0 10"></path></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M20 4c-7 0-12 4-12 11a5 5 0 0 0 9 3c3-4 3-14 3-14z"></path><path d="M8 19c2-5 6-8 11-10"></path></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"></path></svg>',
  timer:
    '<svg viewBox="0 0 24 24"><path d="M10 2h4"></path><path d="M12 14l3-3"></path><circle cx="12" cy="14" r="8"></circle></svg>',
};

const image = (id, w = 720, h = 560) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=82`;

const seed = {
  user: {
    id: "user_shankar",
    name: "Shankar",
    homeName: "Shankar's home",
    photo: image("photo-1500648767791-00dcc994a43e", 300, 300),
    defaultTimePreferenceMinutes: 20,
    defaultFoodPreference: "All",
    preferences: ["Vegetarian", "No egg", "Comfort food", "Easy recipes"],
  },
  inventory: [
    { id: "i_cucumber", name: "Cucumber", quantity: 2, unit: "pieces", location: "fridge", icon: "Cu", low: false },
    { id: "i_carrot", name: "Carrot", quantity: 4, unit: "pieces", location: "fridge", icon: "Ca", low: false },
    { id: "i_tomato", name: "Tomato", quantity: 3, unit: "pieces", location: "fridge", icon: "To", low: true },
    { id: "i_onion", name: "Onion", quantity: 5, unit: "pieces", location: "fridge", icon: "On", low: false },
    { id: "i_curd", name: "Curd", quantity: 1, unit: "cup", location: "fridge", icon: "Cu", low: false },
    { id: "i_lemon", name: "Lemon", quantity: 3, unit: "pieces", location: "fridge", icon: "Le", low: false },
    { id: "i_chili", name: "Green chili", quantity: 6, unit: "pieces", location: "fridge", icon: "Gc", low: false },
    { id: "i_coriander", name: "Coriander", quantity: 1, unit: "bunch", location: "fridge", icon: "Co", low: false },
    { id: "i_ginger", name: "Ginger", quantity: 80, unit: "grams", location: "fridge", icon: "Gi", low: false },
    { id: "i_capsicum", name: "Capsicum", quantity: 2, unit: "pieces", location: "fridge", icon: "Cp", low: false },
    { id: "i_cumin", name: "Cumin seeds", quantity: 1, unit: "jar", location: "shelf", icon: "Cs", low: false },
    { id: "i_mustard", name: "Mustard seeds", quantity: 1, unit: "jar", location: "shelf", icon: "Ms", low: false },
    { id: "i_soy", name: "Soy sauce", quantity: 1, unit: "bottle", location: "shelf", icon: "So", low: false },
    { id: "i_hot", name: "Hot sauce", quantity: 1, unit: "bottle", location: "shelf", icon: "Hs", low: false },
    { id: "i_rice", name: "Rice", quantity: 1, unit: "bag", location: "shelf", icon: "Ri", low: false },
    { id: "i_salt", name: "Salt", quantity: 1, unit: "jar", location: "shelf", icon: "Sa", low: false },
    { id: "i_pepper", name: "Black pepper", quantity: 1, unit: "jar", location: "shelf", icon: "Bp", low: false },
    { id: "i_turmeric", name: "Turmeric powder", quantity: 1, unit: "jar", location: "shelf", icon: "Tu", low: false },
    { id: "i_chilipowder", name: "Red chili powder", quantity: 1, unit: "jar", location: "shelf", icon: "Rc", low: false },
    { id: "i_besan", name: "Besan", quantity: 1, unit: "packet", location: "shelf", icon: "Be", low: false },
    { id: "i_oats", name: "Oats", quantity: 1, unit: "packet", location: "shelf", icon: "Oa", low: false },
    { id: "i_peanuts", name: "Peanuts", quantity: 1, unit: "cup", location: "shelf", icon: "Pe", low: false },
  ],
  utensils: [
    { id: "u_microwave", name: "Microwave", category: "Heating", available: true },
    { id: "u_grater", name: "Grater", category: "Prep", available: true },
    { id: "u_board", name: "Chopping board", category: "Prep", available: true },
    { id: "u_ricepot", name: "Rice pot", category: "Cooking", available: true },
    { id: "u_pan", name: "Pan", category: "Cooking", available: true },
    { id: "u_kadai", name: "Kadai", category: "Cooking", available: true },
    { id: "u_fryingpan", name: "Frying pan", category: "Cooking", available: true },
    { id: "u_saucepan", name: "Sauce pan", category: "Cooking", available: true },
    { id: "u_pressure", name: "Pressure cooker", category: "Cooking", available: true },
    { id: "u_tawa", name: "Tawa", category: "Cooking", available: true },
    { id: "u_bowl", name: "Bowl", category: "Serving", available: true },
    { id: "u_knife", name: "Knife", category: "Prep", available: true },
  ],
  friends: [
    {
      id: "user_anjali",
      name: "Anjali",
      photo: image("photo-1494790108377-be9c29b29330", 300, 300),
      bio: "Quick vegetarian Indian dinners and snack bowls.",
      favorites: ["Indian", "Mediterranean"],
      following: true,
    },
    {
      id: "user_varun",
      name: "Varun",
      photo: image("photo-1506794778202-cad84cf45f1d", 300, 300),
      bio: "Comfort food, rice bowls, and spicy weeknight shortcuts.",
      favorites: ["Indian", "Chinese", "Thai"],
      following: true,
    },
    {
      id: "user_chandan",
      name: "Chandan",
      photo: image("photo-1507003211169-0a1dd7228f2d", 300, 300),
      bio: "Protein-heavy vegetarian breakfasts and tawa recipes.",
      favorites: ["Indian", "American snacks"],
      following: true,
    },
  ],
  recipes: [
    {
      id: "r_chaat",
      name: "Cucumber Tomato Chaat",
      description: "A crisp Indian snack with cucumber, tomato, lemon, chili, and roasted cumin.",
      foodType: "Indian",
      timeMinutes: 15,
      servings: 2,
      difficulty: "Easy",
      image: image("photo-1546069901-ba9599a7e63c"),
      ingredients: [
        ["Cucumber", 1, "piece"],
        ["Tomato", 1, "piece"],
        ["Onion", 0.5, "piece"],
        ["Lemon", 0.5, "piece"],
        ["Cumin seeds", 1, "tsp"],
        ["Salt", 1, "pinch"],
        ["Green chili", 1, "piece"],
        ["Coriander", 1, "tbsp"],
      ],
      utensils: ["Chopping board", "Knife", "Bowl"],
      recommendedBy: "user_anjali",
      cookedAgo: "2h ago",
      formats: ["text", "audio", "video"],
      steps: {
        short: [
          "Chop cucumber, tomato, onion, green chili, and coriander.",
          "Toast cumin seeds in a dry pan for 60 seconds, then crush lightly.",
          "Mix vegetables with lemon, salt, and cumin.",
          "Rest for 2 minutes and serve cold.",
        ],
        long: [
          "Wash cucumber, tomato, coriander, and chili. Pat them dry so the chaat stays crisp.",
          "Finely chop cucumber, tomato, onion, green chili, and coriander into similar-sized pieces.",
          "Toast cumin seeds in a dry pan for about 60 seconds until fragrant, then crush lightly with the back of a spoon.",
          "Add vegetables to a bowl with lemon juice, salt, and roasted cumin. Toss gently.",
          "Taste once before serving. Add more lemon for brightness or chili for heat.",
        ],
      },
      tips: ["Add curd for a creamier version.", "Skip onion if you want a cleaner, fresher taste."],
    },
    {
      id: "r_tomato_rice",
      name: "Tomato Onion Rice",
      description: "A fast one-pot rice with tomato, onion, mustard seeds, and warm spices.",
      foodType: "Indian",
      timeMinutes: 20,
      servings: 2,
      difficulty: "Easy",
      image: image("photo-1512058564366-18510be2db19"),
      ingredients: [
        ["Rice", 1, "cup"],
        ["Tomato", 2, "pieces"],
        ["Onion", 1, "piece"],
        ["Mustard seeds", 1, "tsp"],
        ["Turmeric powder", 0.5, "tsp"],
        ["Red chili powder", 0.5, "tsp"],
        ["Salt", 1, "tsp"],
      ],
      utensils: ["Rice pot", "Chopping board", "Knife"],
      recommendedBy: "user_varun",
      cookedAgo: "5h ago",
      formats: ["text", "audio", "video"],
      steps: {
        short: [
          "Wash rice and chop tomato and onion.",
          "Temper mustard seeds, then cook onion until soft.",
          "Add tomato, turmeric, chili powder, salt, rice, and water.",
          "Cook until rice is tender and rest for 5 minutes.",
        ],
        long: [
          "Rinse rice until the water runs mostly clear. Soak for 10 minutes if you have time.",
          "Finely chop onion and tomato. Smaller pieces cook faster and make the rice more even.",
          "Heat the rice pot, add oil if available, and crackle mustard seeds for 20 seconds.",
          "Add onion and cook until translucent. Add tomato, turmeric, chili powder, and salt.",
          "Add rice and water. Cook covered until tender, then rest for 5 minutes before fluffing.",
        ],
      },
      tips: ["If tomatoes are running low, use hot sauce for acidity.", "A spoon of curd on the side cools the spice."],
    },
    {
      id: "r_aloo_gobi",
      name: "Capsicum Aloo Gobi Fry",
      description: "A dry Indian-style vegetable fry with capsicum and spices.",
      foodType: "Indian",
      timeMinutes: 24,
      servings: 3,
      difficulty: "Easy",
      image: image("photo-1565557623262-b51c2513a641a"),
      ingredients: [
        ["Capsicum", 1, "piece"],
        ["Onion", 1, "piece"],
        ["Cumin seeds", 1, "tsp"],
        ["Turmeric powder", 0.5, "tsp"],
        ["Red chili powder", 0.5, "tsp"],
        ["Salt", 1, "tsp"],
      ],
      utensils: ["Kadai", "Chopping board", "Knife"],
      recommendedBy: "user_chandan",
      cookedAgo: "1d ago",
      formats: ["text", "audio", "video"],
      steps: {
        short: [
          "Chop capsicum and onion.",
          "Toast cumin in a kadai, then add onion.",
          "Add capsicum, spices, and salt.",
          "Cook uncovered until the edges char slightly.",
        ],
        long: [
          "Cut capsicum and onion into bite-sized pieces so they cook evenly.",
          "Heat the kadai and toast cumin seeds until aromatic.",
          "Add onion and cook until the edges soften. Add capsicum, turmeric, chili powder, and salt.",
          "Cook uncovered, stirring every minute, until capsicum is tender but still bright.",
          "Finish with lemon if you want more brightness.",
        ],
      },
      tips: ["Works well as a rice side.", "Use a frying pan if the kadai is unavailable."],
    },
    {
      id: "r_thai_salad",
      name: "Thai Cucumber Peanut Salad",
      description: "A crunchy cucumber salad with soy, peanuts, chili, and lemon.",
      foodType: "Thai",
      timeMinutes: 12,
      servings: 2,
      difficulty: "Easy",
      image: image("photo-1512621776951-a57141f2eefd"),
      ingredients: [
        ["Cucumber", 1, "piece"],
        ["Peanuts", 0.25, "cup"],
        ["Soy sauce", 1, "tbsp"],
        ["Lemon", 0.5, "piece"],
        ["Green chili", 1, "piece"],
      ],
      utensils: ["Chopping board", "Knife", "Bowl"],
      recommendedBy: "user_anjali",
      cookedAgo: "3d ago",
      formats: ["text", "audio"],
      steps: {
        short: [
          "Slice cucumber and green chili.",
          "Crush peanuts.",
          "Whisk soy sauce and lemon.",
          "Toss everything and serve immediately.",
        ],
        long: [
          "Slice cucumber thinly for a light salad or chunk it for crunch.",
          "Crush peanuts with the back of a spoon. Keep some larger pieces for texture.",
          "Mix soy sauce, lemon juice, and chopped chili in a bowl.",
          "Add cucumber and peanuts. Toss just before eating so it does not get watery.",
        ],
      },
      tips: ["Add grated carrot for sweetness.", "Use hot sauce if you want a sharper dressing."],
    },
    {
      id: "r_mediterranean_bowl",
      name: "Mediterranean Cucumber Bowl",
      description: "Curd, cucumber, onion, lemon, and herbs over rice for a cooling bowl.",
      foodType: "Mediterranean",
      timeMinutes: 18,
      servings: 2,
      difficulty: "Easy",
      image: image("photo-1543362906-acfc16c67564"),
      ingredients: [
        ["Rice", 1, "cup"],
        ["Cucumber", 1, "piece"],
        ["Curd", 0.5, "cup"],
        ["Onion", 0.25, "piece"],
        ["Lemon", 0.5, "piece"],
        ["Black pepper", 1, "pinch"],
        ["Salt", 1, "pinch"],
      ],
      utensils: ["Rice pot", "Chopping board", "Knife", "Bowl"],
      recommendedBy: null,
      cookedAgo: null,
      formats: ["text", "video"],
      steps: {
        short: [
          "Cook rice and let it steam.",
          "Mix curd, cucumber, onion, lemon, salt, and pepper.",
          "Spoon the cucumber mix over rice.",
          "Serve cool or room temperature.",
        ],
        long: [
          "Cook rice in the rice pot and let it rest covered for 5 minutes.",
          "Dice cucumber and onion finely. Mix with curd, lemon, salt, and black pepper.",
          "Taste the curd mixture. It should be tangy, cool, and lightly salty.",
          "Spoon rice into bowls and top with the cucumber curd mixture.",
        ],
      },
      tips: ["Add coriander if you want it greener.", "Best when the rice is warm and topping is cool."],
    },
    {
      id: "r_fried_rice",
      name: "Quick Veg Fried Rice",
      description: "A fast Chinese-inspired rice stir fry with carrot, capsicum, soy, and pepper.",
      foodType: "Chinese",
      timeMinutes: 22,
      servings: 2,
      difficulty: "Easy",
      image: image("photo-1603133872878-684f208fb84b"),
      ingredients: [
        ["Rice", 1, "cup"],
        ["Carrot", 1, "piece"],
        ["Capsicum", 1, "piece"],
        ["Onion", 0.5, "piece"],
        ["Soy sauce", 1, "tbsp"],
        ["Black pepper", 1, "pinch"],
      ],
      utensils: ["Pan", "Chopping board", "Knife"],
      recommendedBy: "user_varun",
      cookedAgo: "4d ago",
      formats: ["text", "audio", "video"],
      steps: {
        short: [
          "Cook rice or use leftover rice.",
          "Chop carrot, capsicum, and onion small.",
          "Stir fry vegetables, then add rice, soy sauce, and pepper.",
          "Toss on high heat for 2 minutes.",
        ],
        long: [
          "Cook rice and spread it out for a few minutes so it is not too wet.",
          "Finely chop carrot, capsicum, and onion. Small pieces help the dish cook fast.",
          "Heat a pan. Stir fry onion first, then carrot and capsicum.",
          "Add rice, soy sauce, and black pepper. Toss on high heat so the rice dries slightly.",
          "Taste before serving. Add hot sauce if you want more heat.",
        ],
      },
      tips: ["Cold rice works best.", "Keep vegetables slightly crunchy."],
    },
    {
      id: "r_besan_cheela",
      name: "Besan Cheela",
      description: "A savory Indian chickpea flour pancake with onion, chili, and spices.",
      foodType: "Indian",
      timeMinutes: 18,
      servings: 2,
      difficulty: "Easy",
      image: image("photo-1601050690597-df0568f70950"),
      ingredients: [
        ["Besan", 1, "cup"],
        ["Onion", 0.5, "piece"],
        ["Green chili", 1, "piece"],
        ["Turmeric powder", 0.25, "tsp"],
        ["Salt", 1, "tsp"],
      ],
      utensils: ["Tawa", "Bowl", "Chopping board", "Knife"],
      recommendedBy: "user_chandan",
      cookedAgo: "1d ago",
      formats: ["text", "audio"],
      steps: {
        short: [
          "Mix besan, water, onion, chili, turmeric, and salt into a pourable batter.",
          "Heat tawa and spread a ladle of batter.",
          "Cook both sides until golden.",
          "Serve with curd or hot sauce.",
        ],
        long: [
          "Whisk besan with water slowly to avoid lumps. Aim for a pancake-like batter.",
          "Add chopped onion, green chili, turmeric, and salt. Rest for 3 minutes.",
          "Heat tawa and spread the batter thinly with a ladle.",
          "Cook until the edges release, flip, and cook the other side until golden.",
          "Serve hot with curd or hot sauce.",
        ],
      },
      tips: ["Add grated carrot for sweetness.", "Use medium heat so the inside cooks."],
    },
    {
      id: "r_snack_plate",
      name: "American Veggie Snack Plate",
      description: "A quick crunchy snack plate with cucumber, carrot, hot sauce, and curd dip.",
      foodType: "American snacks",
      timeMinutes: 10,
      servings: 1,
      difficulty: "Easy",
      image: image("photo-1520072959219-c595dc870360"),
      ingredients: [
        ["Cucumber", 1, "piece"],
        ["Carrot", 1, "piece"],
        ["Curd", 0.25, "cup"],
        ["Hot sauce", 1, "tsp"],
        ["Salt", 1, "pinch"],
        ["Black pepper", 1, "pinch"],
      ],
      utensils: ["Chopping board", "Knife", "Bowl"],
      recommendedBy: null,
      cookedAgo: null,
      formats: ["text", "video"],
      steps: {
        short: [
          "Cut cucumber and carrot into sticks.",
          "Mix curd, hot sauce, salt, and pepper.",
          "Plate vegetables with the dip.",
        ],
        long: [
          "Wash and peel carrot if needed. Cut carrot and cucumber into thick sticks.",
          "Mix curd, hot sauce, salt, and black pepper in a small bowl.",
          "Taste the dip and add more hot sauce if you want heat.",
          "Arrange vegetables around the dip and eat immediately.",
        ],
      },
      tips: ["Add peanuts for crunch.", "This is best cold."],
    },
  ],
  filters: {
    expanded: false,
    time: 20,
    cuisine: "All",
    onlyReady: false,
    selectedIngredients: [],
    selectedUtensils: [],
  },
  ui: {
    view: "home",
    selectedRecipeId: null,
    recipeFormat: "text",
    recipeLength: "short",
    cookingStep: 0,
    audioPlaying: false,
    inventorySearch: "",
  },
  savedRecipeIds: ["r_chaat"],
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (error) {
    console.warn("Unable to load local state", error);
  }
  const fresh = structuredClone(seed);
  fresh.filters.selectedIngredients = seed.inventory.map((item) => item.name);
  fresh.filters.selectedUtensils = seed.utensils.map((item) => item.name);
  return fresh;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  render();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}

function byId(list, id) {
  return list.find((item) => item.id === id);
}

function inventoryNames() {
  return new Set(state.inventory.filter((item) => item.quantity > 0).map((item) => normalize(item.name)));
}

function utensilNames() {
  return new Set(state.utensils.filter((item) => item.available).map((item) => normalize(item.name)));
}

function analyzeRecipe(recipe) {
  const haveInventory = inventoryNames();
  const haveUtensils = utensilNames();
  const missingIngredients = recipe.ingredients
    .filter(([name]) => !haveInventory.has(normalize(name)))
    .map(([name]) => name);
  const missingUtensils = recipe.utensils.filter((name) => !haveUtensils.has(normalize(name)));
  const ingredientScore =
    missingIngredients.length === 0 ? 40 : missingIngredients.length === 1 ? 30 : missingIngredients.length === 2 ? 20 : 5;
  const utensilScore = missingUtensils.length === 0 ? 20 : missingUtensils.length === 1 ? 10 : 0;
  const timeScore = recipe.timeMinutes <= state.filters.time ? 15 : recipe.timeMinutes <= state.filters.time + 10 ? 7 : 0;
  const cuisineScore = state.filters.cuisine === "All" || state.filters.cuisine === recipe.foodType ? 15 : 0;
  const friend = recipe.recommendedBy ? byId(state.friends, recipe.recommendedBy) : null;
  const friendScore = friend?.following ? 10 : recipe.recommendedBy ? 4 : 0;
  const selectedIngredientPenalty = recipe.ingredients.some(([name]) => !state.filters.selectedIngredients.includes(name)) ? -12 : 0;
  const selectedUtensilPenalty = recipe.utensils.some((name) => !state.filters.selectedUtensils.includes(name)) ? -10 : 0;
  const score = Math.max(0, ingredientScore + utensilScore + timeScore + cuisineScore + friendScore + selectedIngredientPenalty + selectedUtensilPenalty);

  return {
    score,
    friend,
    missingIngredients,
    missingUtensils,
    matchLabel:
      missingIngredients.length === 0 && missingUtensils.length === 0
        ? "You have everything"
        : missingIngredients.length <= 1
          ? `Missing only ${missingIngredients[0] || missingUtensils[0]}`
          : `Missing ${missingIngredients.length + missingUtensils.length} items`,
  };
}

function recommendedRecipes() {
  return state.recipes
    .map((recipe) => ({ recipe, analysis: analyzeRecipe(recipe) }))
    .filter(({ recipe, analysis }) => {
      if (state.filters.cuisine !== "All" && recipe.foodType !== state.filters.cuisine) return false;
      if (state.filters.onlyReady && (analysis.missingIngredients.length || analysis.missingUtensils.length)) return false;
      return analysis.score > 0;
    })
    .sort((a, b) => b.analysis.score - a.analysis.score || a.recipe.timeMinutes - b.recipe.timeMinutes);
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <main class="app-shell">
      <section class="phone" aria-label="Easy Peasy Recipes app">
        ${renderHeader()}
        <div class="view">${renderView()}</div>
        ${renderTabs()}
      </section>
      ${renderSidePanel()}
    </main>
  `;
}

function renderHeader() {
  const selectedRecipe = byId(state.recipes, state.ui.selectedRecipeId);
  if (state.ui.view === "detail" || state.ui.view === "cooking") {
    return `
      <header class="app-header">
        <button class="icon-button" data-action="go-view" data-view="home" aria-label="Back to home">${icons.back}</button>
        <strong>${escapeHtml(state.ui.view === "cooking" ? "Cooking Mode" : selectedRecipe?.name || "Recipe")}</strong>
        <div class="header-actions">
          <button class="icon-button" data-action="toggle-save" data-id="${selectedRecipe?.id || ""}" aria-label="Save recipe">${icons.saved}</button>
          <button class="icon-button" aria-label="More">${icons.more}</button>
        </div>
      </header>
    `;
  }

  return `
    <header class="app-header">
      <div class="brand">
        <div class="chef-mark" aria-hidden="true">${icons.chef}</div>
        <h1 class="brand-title">Easy Peasy<br />Recipes</h1>
      </div>
      <div class="header-actions">
        <button class="icon-button" data-action="go-view" data-view="inventory" aria-label="Search">${icons.search}</button>
        <button class="icon-button" aria-label="Notifications">${icons.bell}</button>
      </div>
    </header>
  `;
}

function renderTabs() {
  const tabs = [
    ["home", "Home", icons.home],
    ["inventory", "Inventory", icons.inventory],
    ["friends", "Friends", icons.friends],
    ["saved", "Saved", icons.saved],
    ["profile", "Profile", icons.profile],
  ];
  return `
    <nav class="tab-bar" aria-label="Primary navigation">
      ${tabs
        .map(
          ([view, label, icon]) => `
            <button class="tab ${state.ui.view === view ? "is-active" : ""}" data-action="go-view" data-view="${view}">
              ${icon}<span>${label}</span>
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function renderView() {
  if (state.ui.view === "inventory") return renderInventory();
  if (state.ui.view === "friends") return renderFriends();
  if (state.ui.view === "saved") return renderSaved();
  if (state.ui.view === "profile") return renderProfile();
  if (state.ui.view === "detail") return renderRecipeDetail();
  if (state.ui.view === "cooking") return renderCookingMode();
  return renderHome();
}

function renderHome() {
  const results = recommendedRecipes();
  return `
    <div class="control-bar">
      <h2 class="screen-title">What can I cook now?</h2>
      ${renderControls()}
    </div>
    <section class="feed">
      ${results.length ? results.map(({ recipe, analysis }) => renderRecipeCard(recipe, analysis)).join("") : renderEmpty("No recipes match those filters yet. Try widening the time or turning off ready-only mode.")}
    </section>
  `;
}

function renderControls() {
  const cuisines = ["All", ...new Set(state.recipes.map((recipe) => recipe.foodType))];
  const fridgeShelf = state.inventory.filter((item) => ["fridge", "shelf"].includes(item.location));
  return `
    <div class="control-row">
      <label class="select-chip">${icons.clock}
        <select data-action="set-time" aria-label="Time preference">
          ${[10, 15, 20, 25, 30, 45].map((time) => `<option value="${time}" ${state.filters.time === time ? "selected" : ""}>${time} mins</option>`).join("")}
        </select>
      </label>
      <label class="select-chip">${icons.utensils}
        <select data-action="set-cuisine" aria-label="Food preference">
          ${cuisines.map((cuisine) => `<option value="${escapeHtml(cuisine)}" ${state.filters.cuisine === cuisine ? "selected" : ""}>${escapeHtml(cuisine === "All" ? "All food" : cuisine)}</option>`).join("")}
        </select>
      </label>
      <button class="chip" data-action="toggle-filters">${icons.cart}<span>Groceries</span></button>
      <button class="chip" data-action="toggle-filters">${icons.utensils}<span>Utensils</span></button>
      <button class="icon-button" data-action="toggle-filters" aria-label="Expand filters">${icons.filter}</button>
    </div>
    <div class="filters-panel ${state.filters.expanded ? "is-open" : ""}">
      <div class="filter-group">
        <span class="filter-label">Groceries in play</span>
        <div class="check-grid">
          ${fridgeShelf
            .map(
              (item) => `
                <label class="toggle-pill">
                  <input type="checkbox" data-action="toggle-ingredient-filter" value="${escapeHtml(item.name)}" ${state.filters.selectedIngredients.includes(item.name) ? "checked" : ""} />
                  ${escapeHtml(item.name)}
                </label>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="filter-group">
        <span class="filter-label">Utensils available</span>
        <div class="check-grid">
          ${state.utensils
            .slice(0, 10)
            .map(
              (item) => `
                <label class="toggle-pill">
                  <input type="checkbox" data-action="toggle-utensil-filter" value="${escapeHtml(item.name)}" ${state.filters.selectedUtensils.includes(item.name) ? "checked" : ""} />
                  ${escapeHtml(item.name)}
                </label>
              `,
            )
            .join("")}
        </div>
      </div>
      <label class="toggle-pill">
        <input type="checkbox" data-action="toggle-ready-only" ${state.filters.onlyReady ? "checked" : ""} />
        Only show recipes where I have everything
      </label>
    </div>
  `;
}

function renderRecipeCard(recipe, analysis) {
  const warning = analysis.missingIngredients.length || analysis.missingUtensils.length;
  return `
    <article class="recipe-card">
      <button class="recipe-media" data-action="open-recipe" data-id="${recipe.id}" aria-label="Open ${escapeHtml(recipe.name)}">
        <img src="${recipe.image}" alt="${escapeHtml(recipe.name)}" loading="lazy" />
      </button>
      <div class="recipe-body">
        <div class="match-line ${warning ? "warning" : ""}">
          <span>${escapeHtml(analysis.matchLabel)}</span>
          <button class="icon-button" data-action="toggle-save" data-id="${recipe.id}" aria-label="Save ${escapeHtml(recipe.name)}">${icons.saved}</button>
        </div>
        <h3 class="recipe-title">${escapeHtml(recipe.name)}</h3>
        <div class="meta-row">
          <span>${icons.clock} ${recipe.timeMinutes} mins</span>
          <span>${icons.star} ${recipe.difficulty}</span>
          <span>${escapeHtml(recipe.foodType)}</span>
        </div>
        <div class="friend-signal">
          ${analysis.friend ? `<img class="mini-avatar" src="${analysis.friend.photo}" alt="" /> Recommended by <strong>${escapeHtml(analysis.friend.name)}</strong>` : `${icons.leaf} Uses Shankar's inventory`}
        </div>
        <div class="card-actions">
          <button class="secondary-button" data-action="start-cooking" data-id="${recipe.id}">${icons.play} Start</button>
          <button class="ghost-button" data-action="open-recipe" data-id="${recipe.id}">View</button>
        </div>
      </div>
    </article>
  `;
}

function renderInventory() {
  const locations = [
    ["fridge", "Fridge", "Fresh items"],
    ["shelf", "Shelf", "Pantry and sauces"],
  ];
  const query = normalize(state.ui.inventorySearch);
  const utensilQuery = query;
  return `
    <section class="section">
      <div class="section-heading">
        <h2>Inventory</h2>
        <button class="secondary-button" data-action="focus-add">${icons.plus} Add</button>
      </div>
      <form class="quick-form" data-action="add-inventory">
        <input class="field" name="name" id="new-item-name" placeholder="Add item or utensil" required />
        <input class="field" name="quantity" type="number" min="1" value="1" required />
        <select class="field" name="location">
          <option value="fridge">Fridge</option>
          <option value="shelf">Shelf</option>
          <option value="utensil">Utensil</option>
        </select>
        <button class="primary-button" type="submit">${icons.plus} Add</button>
      </form>
      <input class="field" placeholder="Search Shankar's home" value="${escapeHtml(state.ui.inventorySearch)}" data-action="search-inventory" />
    </section>
    <section class="inventory-list">
      ${locations
        .map(([location, label, sub]) => {
          const items = state.inventory.filter((item) => item.location === location && normalize(item.name).includes(query));
          return renderInventorySection(label, sub, location, items);
        })
        .join("")}
      ${renderUtensilsSection(state.utensils.filter((item) => normalize(item.name).includes(utensilQuery)))}
    </section>
  `;
}

function renderInventorySection(label, sub, location, items) {
  return `
    <details class="inventory-card" open>
      <summary>
        <span class="summary-title">${location === "fridge" ? icons.inventory : icons.cart} ${label}<small class="muted">${sub}</small></span>
        <span class="summary-count">${items.length} items</span>
      </summary>
      <div class="inventory-grid">
        ${items.map(renderInventoryItem).join("") || renderEmpty("Nothing here yet.")}
      </div>
    </details>
  `;
}

function renderInventoryItem(item) {
  return `
    <article class="item-tile">
      <div class="item-emoji" aria-hidden="true">${escapeHtml(item.icon || item.name.slice(0, 2))}</div>
      <p class="item-name">${escapeHtml(item.name)}</p>
      <div class="small-row">${item.low ? '<strong style="color: var(--tomato)">Running low</strong>' : escapeHtml(item.location)}</div>
      <div class="quantity-controls">
        <button data-action="change-quantity" data-id="${item.id}" data-delta="-1" aria-label="Decrease ${escapeHtml(item.name)}">-</button>
        <span>${escapeHtml(item.quantity)} ${escapeHtml(item.unit)}</span>
        <button data-action="change-quantity" data-id="${item.id}" data-delta="1" aria-label="Increase ${escapeHtml(item.name)}">+</button>
      </div>
    </article>
  `;
}

function renderUtensilsSection(utensils) {
  return `
    <details class="inventory-card" open>
      <summary>
        <span class="summary-title">${icons.utensils} Kitchen Utensils<small class="muted">Tools Shankar can cook with</small></span>
        <span class="summary-count">${utensils.length} items</span>
      </summary>
      <div class="inventory-grid">
        ${utensils
          .map(
            (item) => `
              <article class="item-tile">
                <div class="item-emoji" aria-hidden="true">${escapeHtml(item.name.slice(0, 2))}</div>
                <p class="item-name">${escapeHtml(item.name)}</p>
                <div class="small-row">${escapeHtml(item.category)}</div>
                <button class="${item.available ? "secondary-button" : "ghost-button"}" data-action="toggle-utensil" data-id="${item.id}">
                  ${item.available ? "Available" : "Unavailable"}
                </button>
              </article>
            `,
          )
          .join("")}
      </div>
    </details>
  `;
}

function renderFriends() {
  const friends = state.friends;
  const friendRecipes = state.recipes.filter((recipe) => recipe.recommendedBy);
  return `
    <section class="section">
      <div class="section-heading">
        <h2>Friends</h2>
        <button class="secondary-button">${icons.plus} Add Friend</button>
      </div>
      <div class="friend-strip">
        ${friends
          .map(
            (friend) => `
              <button class="friend-avatar" data-action="toggle-follow" data-id="${friend.id}">
                <img src="${friend.photo}" alt="${escapeHtml(friend.name)}" />
                <span>${escapeHtml(friend.name)}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="section">
      <h2>What friends cooked</h2>
      <div class="friend-feed">
        ${friendRecipes
          .map((recipe) => {
            const friend = byId(state.friends, recipe.recommendedBy);
            return `
              <article class="friend-card">
                <img src="${recipe.image}" alt="${escapeHtml(recipe.name)}" />
                <div>
                  <div class="small-row">
                    <img class="mini-avatar" src="${friend.photo}" alt="" />
                    <strong>${escapeHtml(friend.name)} cooked</strong>
                    <span>${escapeHtml(recipe.cookedAgo)}</span>
                  </div>
                  <h3>${escapeHtml(recipe.name)}</h3>
                  <p class="muted">${escapeHtml(friend.bio)}</p>
                  <div class="card-actions">
                    <button class="${friend.following ? "secondary-button" : "ghost-button"}" data-action="toggle-follow" data-id="${friend.id}">
                      ${friend.following ? "Following" : "Follow"}
                    </button>
                    <button class="ghost-button" data-action="open-recipe" data-id="${recipe.id}">Recipe</button>
                  </div>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderSaved() {
  const saved = state.recipes.filter((recipe) => state.savedRecipeIds.includes(recipe.id));
  return `
    <section class="section">
      <h2>Saved Recipes</h2>
      <p class="muted">Your short list for easy repeat cooking.</p>
    </section>
    <section class="saved-list">
      ${saved.length ? saved.map((recipe) => renderRecipeCard(recipe, analyzeRecipe(recipe))).join("") : renderEmpty("No saved recipes yet. Save something tasty from Home.")}
    </section>
  `;
}

function renderProfile() {
  const readyCount = recommendedRecipes().filter(({ analysis }) => !analysis.missingIngredients.length && !analysis.missingUtensils.length).length;
  return `
    <section class="profile-grid">
      <div class="profile-card profile-hero">
        <img src="${state.user.photo}" alt="${escapeHtml(state.user.name)}" />
        <div>
          <h2>${escapeHtml(state.user.name)}</h2>
          <p class="muted">${escapeHtml(state.user.homeName)}</p>
          <div class="small-row">${icons.clock} ${state.user.defaultTimePreferenceMinutes} mins or less ${icons.leaf} Vegetarian comfort food</div>
        </div>
      </div>
      <div class="profile-card">
        <h2>Test Profile Snapshot</h2>
        <div class="preference-grid">
          <div class="preference"><strong>${state.inventory.length}</strong><span>Inventory items</span></div>
          <div class="preference"><strong>${state.utensils.filter((item) => item.available).length}</strong><span>Available utensils</span></div>
          <div class="preference"><strong>${readyCount}</strong><span>Ready-to-cook recipes</span></div>
          <div class="preference"><strong>${state.friends.filter((friend) => friend.following).length}</strong><span>Friends followed</span></div>
        </div>
      </div>
      <div class="profile-card">
        <h2>Preferences</h2>
        <div class="check-grid">
          ${state.user.preferences.map((pref) => `<span class="toggle-pill">${escapeHtml(pref)}</span>`).join("")}
        </div>
      </div>
      <div class="profile-card">
        <h2>Demo Controls</h2>
        <p class="muted">Reset Shankar's seeded inventory, saved recipes, friends, and filters.</p>
        <button class="ghost-button" data-action="reset-demo">Reset demo data</button>
      </div>
    </section>
  `;
}

function renderRecipeDetail() {
  const recipe = byId(state.recipes, state.ui.selectedRecipeId) || state.recipes[0];
  const analysis = analyzeRecipe(recipe);
  const steps = recipe.steps[state.ui.recipeLength];
  const unavailableFormat = !recipe.formats.includes(state.ui.recipeFormat);
  return `
    <article class="detail-view">
      <div class="detail-hero"><img src="${recipe.image}" alt="${escapeHtml(recipe.name)}" /></div>
      <div class="detail-content">
        <h2 class="detail-title">${escapeHtml(recipe.name)}</h2>
        <div class="meta-row">
          <span>${icons.clock} ${recipe.timeMinutes} mins</span>
          <span>${icons.star} ${recipe.difficulty}</span>
          <span>${icons.leaf} ${recipe.foodType}</span>
          <span>${recipe.servings} servings</span>
        </div>
        <div class="alert">
          <span>${escapeHtml(analysis.matchLabel)}</span>
          <span>${analysis.score}/100 match</span>
        </div>
        <div class="segmented two" aria-label="Recipe length">
          ${["short", "long"].map((length) => `<button class="segment ${state.ui.recipeLength === length ? "is-active" : ""}" data-action="set-length" data-length="${length}">${length === "short" ? "Short Steps" : "Detailed Steps"}</button>`).join("")}
        </div>
        <div class="content-panel">
          <h3>${state.ui.recipeFormat === "audio" ? "Audio Guide" : state.ui.recipeFormat === "video" ? "Video Walkthrough" : "Text Recipe"}</h3>
          ${unavailableFormat ? `<p class="muted">This recipe does not have ${state.ui.recipeFormat} yet. Text instructions are available.</p>` : renderFormatContent(recipe, steps)}
        </div>
        <div class="split-list">
          <div class="content-panel">
            <h3>Ingredients</h3>
            <ul class="mini-list">${recipe.ingredients.map(([name, qty, unit]) => `<li><span>${escapeHtml(name)}</span><strong>${qty} ${escapeHtml(unit)}</strong></li>`).join("")}</ul>
          </div>
          <div class="content-panel">
            <h3>Utensils</h3>
            <ul class="mini-list">${recipe.utensils.map((name) => `<li><span>${escapeHtml(name)}</span><strong>${analysis.missingUtensils.includes(name) ? "Missing" : "Ready"}</strong></li>`).join("")}</ul>
          </div>
        </div>
        <div class="segmented" aria-label="Recipe format">
          ${["text", "audio", "video"].map((format) => `<button class="segment ${state.ui.recipeFormat === format ? "is-active" : ""}" data-action="set-format" data-format="${format}">${icons[format]} ${format[0].toUpperCase() + format.slice(1)}</button>`).join("")}
        </div>
        <button class="primary-button" data-action="start-cooking" data-id="${recipe.id}">${icons.play} Start cooking</button>
      </div>
    </article>
  `;
}

function renderFormatContent(recipe, steps) {
  if (state.ui.recipeFormat === "audio") {
    return `
      <p class="muted">Simulated hands-free playback for ${escapeHtml(recipe.name)}.</p>
      <button class="secondary-button" data-action="toggle-audio">${state.ui.audioPlaying ? "Pause audio" : "Play audio"}</button>
      <ol class="step-list">${steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
    `;
  }
  if (state.ui.recipeFormat === "video") {
    return `
      <div class="recipe-media" style="height: 190px; border-radius: var(--radius); overflow: hidden; margin-bottom: 12px;">
        <img src="${recipe.image}" alt="${escapeHtml(recipe.name)} preview frame" />
      </div>
      <p class="muted">Short visual walkthrough preview. Captions and full walkthrough would load here.</p>
      <ol class="step-list">${steps.slice(0, 3).map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
    `;
  }
  return `<ol class="step-list">${steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`;
}

function renderCookingMode() {
  const recipe = byId(state.recipes, state.ui.selectedRecipeId) || state.recipes[0];
  const steps = recipe.steps[state.ui.recipeLength];
  const index = Math.min(state.ui.cookingStep, steps.length - 1);
  const percent = ((index + 1) / steps.length) * 100;
  return `
    <section class="cooking-mode">
      <div>
        <div class="section-heading">
          <h2>${escapeHtml(recipe.name)}</h2>
          <span class="summary-count">Step ${index + 1} of ${steps.length}</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width: ${percent}%"></div></div>
      </div>
      <div class="step-card">
        <h2>${icons.timer} ${index === 0 ? "Prep" : index === steps.length - 1 ? "Finish" : "Cook"}</h2>
        <p>${escapeHtml(steps[index])}</p>
        <div class="small-row">Current ingredients: ${recipe.ingredients.slice(0, 3).map(([name]) => escapeHtml(name)).join(", ")}</div>
      </div>
      <div class="cooking-controls">
        <button class="ghost-button" data-action="previous-step">Previous</button>
        <button class="primary-button" data-action="next-step">${index === steps.length - 1 ? "Done" : "Next"}</button>
        <button class="secondary-button" data-action="toggle-audio">${state.ui.audioPlaying ? "Pause audio" : "Play audio"}</button>
        <button class="ghost-button" data-action="go-view" data-view="detail">Recipe</button>
      </div>
    </section>
  `;
}

function renderSidePanel() {
  const recipes = recommendedRecipes();
  const ready = recipes.filter(({ analysis }) => !analysis.missingIngredients.length && !analysis.missingUtensils.length).length;
  return `
    <aside class="side-panel" aria-label="Demo summary">
      <img src="assets/product-concept.png" alt="Easy Peasy Recipes visual concept" />
      <h2>About Shankar's home</h2>
      <div class="stat-grid">
        <div class="stat"><strong>${ready}</strong><span>Ready recipes</span></div>
        <div class="stat"><strong>${state.filters.time}</strong><span>Minute default</span></div>
        <div class="stat"><strong>${state.inventory.length}</strong><span>Groceries</span></div>
        <div class="stat"><strong>${state.utensils.length}</strong><span>Utensils</span></div>
      </div>
      <p class="muted">Seeded with realistic fridge, shelf, utensil, friend, and recipe data so the product can be tested immediately.</p>
      <button class="primary-button" data-action="go-view" data-view="home">${icons.play} Try the feed</button>
    </aside>
  `;
}

function renderEmpty(message) {
  return `<div class="empty"><p>${escapeHtml(message)}</p></div>`;
}

function setView(view) {
  state.ui.view = view;
  if (!["detail", "cooking"].includes(view)) {
    state.ui.selectedRecipeId = null;
    state.ui.cookingStep = 0;
  }
  saveState();
  render();
}

function openRecipe(id) {
  state.ui.selectedRecipeId = id;
  state.ui.view = "detail";
  state.ui.cookingStep = 0;
  saveState();
  render();
}

function startCooking(id) {
  state.ui.selectedRecipeId = id;
  state.ui.view = "cooking";
  state.ui.cookingStep = 0;
  saveState();
  render();
}

function toggleListValue(list, value) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "go-view") setView(target.dataset.view);
  if (action === "toggle-filters") {
    state.filters.expanded = !state.filters.expanded;
    saveState();
    render();
  }
  if (action === "open-recipe") openRecipe(target.dataset.id);
  if (action === "start-cooking") startCooking(target.dataset.id);
  if (action === "toggle-save") {
    state.savedRecipeIds = toggleListValue(state.savedRecipeIds, target.dataset.id);
    saveState();
    render();
  }
  if (action === "change-quantity") {
    const item = byId(state.inventory, target.dataset.id);
    if (item) item.quantity = Math.max(0, item.quantity + Number(target.dataset.delta));
    saveState();
    render();
  }
  if (action === "toggle-utensil") {
    const item = byId(state.utensils, target.dataset.id);
    if (item) item.available = !item.available;
    saveState();
    render();
  }
  if (action === "toggle-follow") {
    const friend = byId(state.friends, target.dataset.id);
    if (friend) friend.following = !friend.following;
    saveState();
    render();
  }
  if (action === "set-format") {
    state.ui.recipeFormat = target.dataset.format;
    saveState();
    render();
  }
  if (action === "set-length") {
    state.ui.recipeLength = target.dataset.length;
    state.ui.cookingStep = 0;
    saveState();
    render();
  }
  if (action === "toggle-audio") {
    state.ui.audioPlaying = !state.ui.audioPlaying;
    saveState();
    render();
  }
  if (action === "previous-step") {
    state.ui.cookingStep = Math.max(0, state.ui.cookingStep - 1);
    saveState();
    render();
  }
  if (action === "next-step") {
    const recipe = byId(state.recipes, state.ui.selectedRecipeId);
    const max = recipe.steps[state.ui.recipeLength].length - 1;
    if (state.ui.cookingStep >= max) {
      state.savedRecipeIds = [...new Set([...state.savedRecipeIds, recipe.id])];
      state.ui.view = "home";
      state.ui.cookingStep = 0;
    } else {
      state.ui.cookingStep += 1;
    }
    saveState();
    render();
  }
  if (action === "focus-add") {
    document.querySelector("#new-item-name")?.focus();
  }
  if (action === "reset-demo") resetState();
});

document.addEventListener("change", (event) => {
  const target = event.target;
  const action = target.dataset.action;
  if (!action) return;
  if (action === "set-time") state.filters.time = Number(target.value);
  if (action === "set-cuisine") state.filters.cuisine = target.value;
  if (action === "toggle-ready-only") state.filters.onlyReady = target.checked;
  if (action === "toggle-ingredient-filter") state.filters.selectedIngredients = toggleListValue(state.filters.selectedIngredients, target.value);
  if (action === "toggle-utensil-filter") state.filters.selectedUtensils = toggleListValue(state.filters.selectedUtensils, target.value);
  saveState();
  render();
});

document.addEventListener("input", (event) => {
  const action = event.target.dataset.action;
  if (action === "search-inventory") {
    state.ui.inventorySearch = event.target.value;
    saveState();
    render();
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-action='add-inventory']");
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const quantity = Number(data.get("quantity") || 1);
  const location = String(data.get("location"));
  if (!name) return;
  if (location === "utensil") {
    state.utensils.push({
      id: `u_${Date.now()}`,
      name,
      category: "Custom",
      available: true,
    });
    state.filters.selectedUtensils.push(name);
  } else {
    state.inventory.push({
      id: `i_${Date.now()}`,
      name,
      quantity,
      unit: quantity === 1 ? "piece" : "pieces",
      location,
      icon: name.slice(0, 2),
      low: false,
    });
    state.filters.selectedIngredients.push(name);
  }
  state.ui.inventorySearch = "";
  saveState();
  render();
  requestAnimationFrame(() => document.querySelector("#new-item-name")?.focus());
});

render();
