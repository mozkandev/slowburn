// 30 distinct small-batch candles. Each product is a single SKU by default
// with optional size variants. Image filenames resolve from /public/products/.
//
// Field schema is intentionally close to a Shopify product payload so it can
// be swapped for a real Shopify Storefront API call later.

export type ProductSize = {
  id: string;
  label: string; // e.g. "8oz / 50hr"
  oz: number;
  price: number;
};

export type Product = {
  id: string; // slug
  name: string;
  shortName?: string;
  collection: "signature" | "seasonal" | "apothecary" | "new";
  category: "woody" | "floral" | "fresh" | "spiced" | "smoky" | "citrus" | "gourmand";
  price: number; // base price (smallest size)
  image: string; // /products/<file>.jpg
  imageAlt: string;
  tagline: string;
  description: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  ingredients: string;
  burnTime: string; // human readable
  weight: string; // human readable
  sizes: ProductSize[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  color: string; // wax color (hex), for fallback rendering
  index: number; // 1..30 for stable display
};

export const PRODUCTS: Product[] = [
  {
    id: "smoked-fig",
    name: "Smoked Fig",
    collection: "signature",
    category: "woody",
    price: 38,
    image: "/products/smoked-fig.jpg",
    imageAlt: "Amber glass jar candle with a fig-and-cedar scent",
    tagline: "Sweet fig, dry cedar, a curl of smoke",
    description:
      "Our quietest bestseller. Late-summer figs, dried slowly on a cedar plank, with just enough smoke to keep them honest. Pour one, light it after dinner, and let the room do the rest.",
    notes: { top: ["Black fig", "Bergamot"], heart: ["Cedarwood", "Bay leaf"], base: ["Smoked vanilla", "Sandalwood"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "4oz", label: "4oz · 25hr", oz: 4, price: 24 },
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
      { id: "16oz", label: "16oz · 90hr", oz: 16, price: 64 },
    ],
    inStock: true,
    isBestseller: true,
    color: "#7a4a2b",
    index: 1,
  },
  {
    id: "salt-and-sage",
    name: "Salt & Sage",
    collection: "signature",
    category: "fresh",
    price: 36,
    image: "/products/salt-and-sage.jpg",
    imageAlt: "Sage green candle in apothecary jar",
    tagline: "Coastal air, white sage, a clean window open",
    description:
      "A bright, herbaceous blend built for the kitchen window. Cool sage over warm salt and a thread of eucalyptus — it doesn't try to smell like a spa, it smells like outside.",
    notes: { top: ["Sea salt", "Eucalyptus"], heart: ["White sage", "Lavender"], base: ["Driftwood", "Amber"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "4oz", label: "4oz · 25hr", oz: 4, price: 24 },
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 36 },
    ],
    inStock: true,
    isBestseller: true,
    color: "#7e8c6f",
    index: 2,
  },
  {
    id: "tobacco-honey",
    name: "Tobacco & Honey",
    collection: "signature",
    category: "woody",
    price: 42,
    image: "/products/tobacco-honey.jpg",
    imageAlt: "Amber candle with rich tobacco and honey",
    tagline: "Pipe tobacco, raw honey, dark leather",
    description:
      "A library candle. Pipe tobacco, raw honey, a leather armchair that has had ten good years. We pour it once a quarter because the blend is hard to keep consistent, and we like it that way.",
    notes: { top: ["Bergamot", "Black pepper"], heart: ["Pipe tobacco", "Honey"], base: ["Leather", "Tonka"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 42 },
      { id: "16oz", label: "16oz · 90hr", oz: 16, price: 68 },
    ],
    inStock: true,
    isBestseller: true,
    color: "#5a3a1f",
    index: 3,
  },
  {
    id: "wild-rose",
    name: "Wild Rose",
    collection: "signature",
    category: "floral",
    price: 38,
    image: "/products/wild-rose.jpg",
    imageAlt: "Pink rose candle in glass jar",
    tagline: "Wild rose, pink pepper, crushed geranium",
    description:
      "Not a powdery rose. A wild one — found in a hedgerow, slightly wet, with pepper and geranium leaning in. The kind of rose a real person would pick.",
    notes: { top: ["Pink pepper", "Mandarin"], heart: ["Wild rose", "Geranium"], base: ["White musk", "Iris"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "4oz", label: "4oz · 25hr", oz: 4, price: 24 },
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    color: "#c98a82",
    index: 4,
  },
  {
    id: "rain-on-concrete",
    name: "Rain on Concrete",
    collection: "apothecary",
    category: "fresh",
    price: 40,
    image: "/products/rain-on-concrete.jpg",
    imageAlt: "Concrete grey candle in a minimalist jar",
    tagline: "Petrichor, wet stone, city air",
    description:
      "Petrichor without the cliché. The smell right after a long rain in a city — wet stone, distant asphalt, and ozone still hanging in the air.",
    notes: { top: ["Ozone", "Bergamot"], heart: ["Petrichor", "Wet stone"], base: ["Vetiver", "Cedar"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    isNew: true,
    color: "#5c6068",
    index: 5,
  },
  {
    id: "ember-and-oak",
    name: "Ember & Oak",
    collection: "signature",
    category: "smoky",
    price: 42,
    image: "/products/ember-and-oak.jpg",
    imageAlt: "Dark amber candle with smoke and oak scent",
    tagline: "Burning oak, smoldering ember, charred birch",
    description:
      "The one we light when the heat is off and we're pretending the radiator is a fireplace. Warm, smoky oak that doesn't tip into barbecue territory.",
    notes: { top: ["Smoked birch"], heart: ["Burning oak", "Birch tar"], base: ["Ember", "Black amber"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 42 },
      { id: "16oz", label: "16oz · 90hr", oz: 16, price: 68 },
    ],
    inStock: true,
    isBestseller: true,
    color: "#3a2a1a",
    index: 6,
  },
  {
    id: "yuzu-and-cedar",
    name: "Yuzu & Cedar",
    collection: "signature",
    category: "citrus",
    price: 38,
    image: "/products/yuzu-and-cedar.jpg",
    imageAlt: "Citrus and cedar candle in clear glass",
    tagline: "Yuzu, pink grapefruit, dry cedar",
    description:
      "Sharp yuzu over dry cedar — clean without being cold. We make this one in summer for the people who want citrus that doesn't smell like a cleaning product.",
    notes: { top: ["Yuzu", "Pink grapefruit"], heart: ["Cedar", "Neroli"], base: ["Vetiver", "Musk"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "4oz", label: "4oz · 25hr", oz: 4, price: 24 },
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    color: "#d6c468",
    index: 7,
  },
  {
    id: "midnight-cardamom",
    name: "Midnight Cardamom",
    collection: "apothecary",
    category: "spiced",
    price: 40,
    image: "/products/midnight-cardamom.jpg",
    imageAlt: "Dark spiced candle with cardamom notes",
    tagline: "Black cardamom, leather, dark cocoa",
    description:
      "A spiced candle that doesn't smell like pumpkin. Black cardamom and leather over a thin layer of dark cocoa — closer to a glass of port than a slice of pie.",
    notes: { top: ["Cardamom", "Black pepper"], heart: ["Cocoa absolute", "Saffron"], base: ["Leather", "Oud"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    isNew: true,
    color: "#2e1f1a",
    index: 8,
  },
  {
    id: "linen-and-freesia",
    name: "Linen & Freesia",
    collection: "signature",
    category: "floral",
    price: 36,
    image: "/products/linen-and-freesia.jpg",
    imageAlt: "White candle in a soft cream jar",
    tagline: "Fresh linen, white freesia, cotton flower",
    description:
      "The laundry-fresh candle for people who hate laundry-fresh candles. Built around white freesia and cotton flower, with a quiet musk underneath.",
    notes: { top: ["Aldehydes", "Bergamot"], heart: ["Freesia", "Cotton flower"], base: ["White musk", "Cedar"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 36 },
    ],
    inStock: true,
    color: "#efe7d8",
    index: 9,
  },
  {
    id: "burnt-orange",
    name: "Burnt Orange",
    collection: "seasonal",
    category: "citrus",
    price: 38,
    image: "/products/burnt-orange.jpg",
    imageAlt: "Orange candle with warm citrus notes",
    tagline: "Burnt orange peel, clove, brown sugar",
    description:
      "Caramelized orange peel, brown sugar, and a thread of clove. We pour this one in October and quietly keep making it through February.",
    notes: { top: ["Burnt orange", "Clove bud"], heart: ["Cinnamon", "Brown sugar"], base: ["Tonka", "Vanilla"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "4oz", label: "4oz · 25hr", oz: 4, price: 24 },
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    color: "#c4642a",
    index: 10,
  },
  {
    id: "pine-and-smoke",
    name: "Pine & Smoke",
    collection: "seasonal",
    category: "smoky",
    price: 40,
    image: "/products/pine-and-smoke.jpg",
    imageAlt: "Forest green candle with pine notes",
    tagline: "Snow pine, balsam fir, distant smoke",
    description:
      "Snow pine and balsam fir with a thin ribbon of woodsmoke. Built for the week between Thanksgiving and New Year's when the apartment smells like a winter it isn't.",
    notes: { top: ["Snow pine", "Juniper"], heart: ["Balsam fir", "Cypress"], base: ["Woodsmoke", "Vetiver"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    color: "#3d5a3a",
    index: 11,
  },
  {
    id: "brown-butter-fig",
    name: "Brown Butter Fig",
    collection: "signature",
    category: "gourmand",
    price: 40,
    image: "/products/brown-butter-fig.jpg",
    imageAlt: "Warm brown candle with butter and fig",
    tagline: "Brown butter, dried fig, raw vanilla",
    description:
      "The gourmand for people who don't like gourmands. Brown butter and dried fig with a thin ribbon of raw vanilla — closer to a tart than a cupcake.",
    notes: { top: ["Brown butter"], heart: ["Dried fig", "Maple"], base: ["Raw vanilla", "Tonka"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    isNew: true,
    color: "#9a6a3a",
    index: 12,
  },
  {
    id: "jasmine-rice",
    name: "Jasmine Rice",
    collection: "apothecary",
    category: "floral",
    price: 38,
    image: "/products/jasmine-rice.jpg",
    imageAlt: "Soft white candle with jasmine notes",
    tagline: "Jasmine sambac, steamed rice, milky oolong",
    description:
      "A floral that doesn't behave like a floral. Jasmine sambac and milky oolong over a base of warm rice. People either get it immediately or never do.",
    notes: { top: ["Jasmine sambac"], heart: ["Oolong", "Steamed rice"], base: ["Sandalwood", "Vanilla"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    color: "#e8e2d2",
    index: 13,
  },
  {
    id: "campfire-marshmallow",
    name: "Campfire Marshmallow",
    collection: "signature",
    category: "gourmand",
    price: 38,
    image: "/products/campfire-marshmallow.jpg",
    imageAlt: "Cream candle with toasted marshmallow scent",
    tagline: "Toasted marshmallow, vanilla, charred wood",
    description:
      "Toasted marshmallow, vanilla bean, a little charred wood. Unapologetic. Made for the person who lights a candle in lieu of going outside.",
    notes: { top: ["Toasted sugar"], heart: ["Vanilla bean", "Marshmallow"], base: ["Charred wood", "Tonka"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    color: "#d8c2a0",
    index: 14,
  },
  {
    id: "moss-and-stone",
    name: "Moss & Stone",
    collection: "apothecary",
    category: "woody",
    price: 40,
    image: "/products/moss-and-stone.jpg",
    imageAlt: "Olive green candle with moss and stone notes",
    tagline: "Wet moss, river stone, fern",
    description:
      "Cold, green, and a little wet. Wet moss over river stone with a curl of fern. We pour this one in spring and it disappears by April.",
    notes: { top: ["Fern", "Galbanum"], heart: ["Wet moss", "Green fig"], base: ["River stone", "Patchouli"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    color: "#5e6a3d",
    index: 15,
  },
  {
    id: "black-tea-and-pear",
    name: "Black Tea & Pear",
    collection: "signature",
    category: "fresh",
    price: 36,
    image: "/products/black-tea-and-pear.jpg",
    imageAlt: "Pale candle with tea and pear notes",
    tagline: "Black tea, ripe pear, sandalwood",
    description:
      "A kitchen candle. Black tea steeping next to a ripe pear. Quiet, slightly tannic, and surprisingly long-lasting in a small room.",
    notes: { top: ["Ripe pear", "Lemon zest"], heart: ["Black tea", "Clove"], base: ["Sandalwood", "Musk"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 36 },
    ],
    inStock: true,
    color: "#d8c590",
    index: 16,
  },
  {
    id: "chai-and-birch",
    name: "Chai & Birch",
    collection: "seasonal",
    category: "spiced",
    price: 40,
    image: "/products/chai-and-birch.jpg",
    imageAlt: "Spiced chai candle with birch notes",
    tagline: "Masala chai, birch, brown sugar",
    description:
      "Masala chai over a base of birch and brown sugar. A winter candle for people who already have too many winter candles.",
    notes: { top: ["Cardamom", "Cinnamon"], heart: ["Masala chai", "Clove"], base: ["Birch", "Brown sugar"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    color: "#7a4a2a",
    index: 17,
  },
  {
    id: "olive-and-verbena",
    name: "Olive & Verbena",
    collection: "apothecary",
    category: "fresh",
    price: 38,
    image: "/products/olive-and-verbena.jpg",
    imageAlt: "Soft green olive and verbena candle",
    tagline: "Olive leaf, lemon verbena, sea air",
    description:
      "A summer candle poured in small batches. Olive leaf and lemon verbena with a thread of sea air. Almost herbal-tea adjacent.",
    notes: { top: ["Lemon verbena", "Bergamot"], heart: ["Olive leaf", "Sage"], base: ["Fig", "Amber"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    isNew: true,
    color: "#9eab6e",
    index: 18,
  },
  {
    id: "smoked-vanilla",
    name: "Smoked Vanilla",
    collection: "signature",
    category: "gourmand",
    price: 38,
    image: "/products/smoked-vanilla.jpg",
    imageAlt: "Vanilla candle with a smoke note",
    tagline: "Smoked vanilla, tonka, charred sugar",
    description:
      "Vanilla, but make it smoked. Tonka and charred sugar underneath a thin curl of woodsmoke. The candle equivalent of a bourbon neat.",
    notes: { top: ["Smoked vanilla"], heart: ["Tonka", "Bourbon"], base: ["Charred sugar", "Sandalwood"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    isBestseller: true,
    color: "#a06a3a",
    index: 19,
  },
  {
    id: "tomato-leaf",
    name: "Tomato Leaf",
    collection: "apothecary",
    category: "fresh",
    price: 38,
    image: "/products/tomato-leaf.jpg",
    imageAlt: "Green candle with tomato leaf notes",
    tagline: "Tomato leaf, basil, summer soil",
    description:
      "For the person who gardens. Tomato leaf and basil with a base of warm summer soil. We don't recommend it for dinner parties; we highly recommend it for after dinner parties.",
    notes: { top: ["Tomato leaf", "Basil"], heart: ["Green fig", "Mint"], base: ["Soil", "Patchouli"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    color: "#5e7a3d",
    index: 20,
  },
  {
    id: "bergamot-and-ink",
    name: "Bergamot & Ink",
    collection: "apothecary",
    category: "fresh",
    price: 40,
    image: "/products/bergamot-and-ink.jpg",
    imageAlt: "Inky black candle with bergamot notes",
    tagline: "Bergamot, ink, old paper",
    description:
      "A study candle. Bergamot over a base of ink and old paper. We blend this one with a real perfumer who works out of a converted print shop.",
    notes: { top: ["Bergamot", "Aldehydes"], heart: ["Ink", "Violet leaf"], base: ["Old paper", "Oakmoss"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    color: "#1c2030",
    index: 21,
  },
  {
    id: "pumpkin-and-amber",
    name: "Pumpkin & Amber",
    collection: "seasonal",
    category: "spiced",
    price: 40,
    image: "/products/pumpkin-and-amber.jpg",
    imageAlt: "Orange pumpkin candle with amber",
    tagline: "Roasted pumpkin, amber, brown sugar",
    description:
      "A pumpkin candle for people who normally hate pumpkin candles. Roasted pumpkin (not pie), amber, and brown sugar. Even the skeptics come back for this one.",
    notes: { top: ["Roasted pumpkin"], heart: ["Clove", "Nutmeg"], base: ["Amber", "Brown sugar"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    color: "#b86a2a",
    index: 22,
  },
  {
    id: "magnolia-and-rain",
    name: "Magnolia & Rain",
    collection: "signature",
    category: "floral",
    price: 40,
    image: "/products/magnolia-and-rain.jpg",
    imageAlt: "Soft white magnolia candle",
    tagline: "Magnolia, spring rain, wet petal",
    description:
      "Magnolia blooming in a rainstorm. White petals, wet concrete, and a thread of green stem. Built for April apartments and the people who live in them.",
    notes: { top: ["Magnolia", "Aldehydes"], heart: ["White tea", "Lily of the valley"], base: ["Wet petal", "Musk"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    isNew: true,
    color: "#e6dcd0",
    index: 23,
  },
  {
    id: "irish-coffee",
    name: "Irish Coffee",
    collection: "signature",
    category: "gourmand",
    price: 40,
    image: "/products/irish-coffee.jpg",
    imageAlt: "Coffee-toned candle with whisky notes",
    tagline: "Coffee, cream, dark whisky",
    description:
      "Cold-brew coffee over heavy cream with a generous pour of dark whisky. The candle for the bar at home you don't have yet.",
    notes: { top: ["Coffee", "Cream"], heart: ["Whisky", "Vanilla"], base: ["Oak", "Brown sugar"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    color: "#3a221a",
    index: 24,
  },
  {
    id: "ginger-and-suede",
    name: "Ginger & Suede",
    collection: "apothecary",
    category: "spiced",
    price: 40,
    image: "/products/ginger-and-suede.jpg",
    imageAlt: "Tan suede-toned candle with ginger notes",
    tagline: "Fresh ginger, suede, amber",
    description:
      "Fresh ginger root, sliced thin, over warm suede and amber. A candle for the colder months that doesn't lean sweet or smoky.",
    notes: { top: ["Fresh ginger", "Lemon"], heart: ["Suede", "Black tea"], base: ["Amber", "Cedar"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    color: "#9a7858",
    index: 25,
  },
  {
    id: "frosted-citrus",
    name: "Frosted Citrus",
    collection: "seasonal",
    category: "citrus",
    price: 38,
    image: "/products/frosted-citrus.jpg",
    imageAlt: "Pale citrus candle in clear glass",
    tagline: "Frozen lemon, mint, white tea",
    description:
      "A bright, cold citrus for the deep months. Frozen lemon and mint over a quiet base of white tea. We pour this in November and it lasts until the daffodils.",
    notes: { top: ["Frozen lemon", "Mint"], heart: ["White tea", "Neroli"], base: ["Cedar", "Musk"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    color: "#c8d4b0",
    index: 26,
  },
  {
    id: "old-book",
    name: "Old Book",
    collection: "apothecary",
    category: "woody",
    price: 42,
    image: "/products/old-book.jpg",
    imageAlt: "Deep brown candle with old book scent",
    tagline: "Old paper, leather, faint vanilla",
    description:
      "Aged paper, leather binding, and a faint thread of vanilla. We blend this with a used bookshop owner who tests every batch by candle and by stack.",
    notes: { top: ["Aldehydes", "Lemon"], heart: ["Old paper", "Leather"], base: ["Vanilla", "Tobacco"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 42 },
    ],
    inStock: true,
    color: "#5a3a22",
    index: 27,
  },
  {
    id: "sea-grass",
    name: "Sea Grass",
    collection: "apothecary",
    category: "fresh",
    price: 38,
    image: "/products/sea-grass.jpg",
    imageAlt: "Sage green sea grass candle",
    tagline: "Sea grass, salt air, driftwood",
    description:
      "A clean, coastal candle that doesn't try to smell like a beach house. Sea grass, salt air, and a piece of driftwood. Real subtle.",
    notes: { top: ["Sea grass", "Bergamot"], heart: ["Salt air", "Lavender"], base: ["Driftwood", "Amber"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    color: "#7a8a6a",
    index: 28,
  },
  {
    id: "rye-bread-and-honey",
    name: "Rye Bread & Honey",
    collection: "signature",
    category: "gourmand",
    price: 40,
    image: "/products/rye-bread-and-honey.jpg",
    imageAlt: "Tan rye and honey candle",
    tagline: "Rye bread, raw honey, brown butter",
    description:
      "Sourdough rye fresh out of the oven with a heavy spoon of raw honey. Brown butter underneath. Comforting without being obvious.",
    notes: { top: ["Rye bread", "Honey"], heart: ["Brown butter", "Maple"], base: ["Tonka", "Vanilla"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 40 },
    ],
    inStock: true,
    isNew: true,
    color: "#a07a4a",
    index: 29,
  },
  {
    id: "lilac-and-fog",
    name: "Lilac & Fog",
    collection: "apothecary",
    category: "floral",
    price: 38,
    image: "/products/lilac-and-fog.jpg",
    imageAlt: "Soft lilac candle with fog notes",
    tagline: "Lilac, morning fog, wet grass",
    description:
      "Lilac in a foggy field at 6am. Soft, cool, and not too sweet. We pour this one only in May and we sell out within a week.",
    notes: { top: ["Lilac", "Aldehydes"], heart: ["Morning fog", "Wet grass"], base: ["White musk", "Iris"] },
    ingredients: "Soy-coconut wax blend, cotton wick, phthalate-free fragrance.",
    burnTime: "50 hours",
    weight: "8 oz / 227 g",
    sizes: [
      { id: "8oz", label: "8oz · 50hr", oz: 8, price: 38 },
    ],
    inStock: true,
    color: "#bca3c4",
    index: 30,
  },
];

// Helpers
export const COLLECTIONS: { id: Product["collection"]; label: string; description: string }[] = [
  {
    id: "signature",
    label: "Signature",
    description: "The 12 candles we pour year-round. If you only ever try one, try one of these.",
  },
  {
    id: "seasonal",
    label: "Seasonal",
    description: "Made in small batches for the months they're meant for. They leave when the season does.",
  },
  {
    id: "apothecary",
    label: "Apothecary",
    description: "Single-batch experiments with friends who actually know what they're doing.",
  },
  {
    id: "new",
    label: "New",
    description: "Newest pours. Limited runs.",
  },
];

export const CATEGORIES: { id: Product["category"]; label: string }[] = [
  { id: "woody", label: "Woody" },
  { id: "floral", label: "Floral" },
  { id: "fresh", label: "Fresh" },
  { id: "spiced", label: "Spiced" },
  { id: "smoky", label: "Smoky" },
  { id: "citrus", label: "Citrus" },
  { id: "gourmand", label: "Gourmand" },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCollection(coll: Product["collection"]): Product[] {
  return PRODUCTS.filter((p) => p.collection === coll);
}

export function getProductsByCategory(cat: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}

export function getRelatedProducts(id: string, limit = 4): Product[] {
  const p = getProductById(id);
  if (!p) return [];
  return PRODUCTS.filter(
    (x) => x.id !== id && (x.category === p.category || x.collection === p.collection)
  ).slice(0, limit);
}
