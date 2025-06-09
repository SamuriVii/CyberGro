export default defineEventHandler(() => {
  const products = [
    // products_1
    {
      image: '/images/products/product_1_1.jpg',
      name: 'GhostRunner Hoverbike X9',
      slug: 'ghostrunner-hoverbike-x9',
      price: '28499.00',
      delivery: 'in 48h',
      description: 'Ultra-lightweight hoverbike with magnetic traction and cloaking tech. Ideal for quick escapes through the neon jungle.',
      category: 'vehicles'      
    },
    {
      image: '/images/products/product_1_2.jpg',
      name: 'Neon Drift Cruiser GT',
      slug: 'neon-drift-cruiser-gt',
      price: '31750.00',
      delivery: 'ready tomorrow',
      description: 'Cruising power meets retro aesthetics. Packed with synthwave lights, turbo drift AI, and zero-emission core.',
      category: 'vehicles'
    },
    {
      image: '/images/products/product_1_3.jpg',
      name: 'Militech Armored Van C-Class',
      slug: 'militech-armored-van-c-class',
      price: '44890.00',
      delivery: 'in 3 days',
      description: 'Corporate-grade van with adaptive armor plating, surveillance jammers, and EMP shielding system.',
      category: 'vehicles'
    },
    {
      image: '/images/products/product_1_4.jpg',
      name: 'Quadra Nightblade XT',
      slug: 'quadra-nightblade-xt',
      price: '39999.00',
      delivery: 'available now',
      description: 'Stealth muscle car equipped with nanofiber chassis, reactive LED grid and ballistic-resistant glass.',
      category: 'vehicles'
    },
    {
      image: '/images/products/product_1_5.jpg',
      name: 'UrbanCrawler Patrol Bike',
      slug: 'urbancrawler-patrol-bike',
      price: '15490.00',
      delivery: 'in 24h',
      description: 'Tactical patrol unit built for city scouts. Off-road ready, AI-enhanced balance, with silent motor tech.',
      category: 'vehicles'
    },
    // products_2
    {
      image: '/images/products/product_2_1.jpg',
      name: 'Recon Stealth Drone V4',
      slug: 'recon-stealth-drone-v4',
      price: '8420.00',
      delivery: 'in 2 days',
      description: 'Zero-noise recon drone with thermal vision, 3D mapping, and uplink to any netrunner rig.',
      category: 'software licenses'
    },
    {
      image: '/images/products/product_2_2.jpg',
      name: 'Combat Bot SENTRY MkIII',
      slug: 'combat-bot-sentry-mkiii',
      price: '12999.00',
      delivery: 'tomorrow',
      description: 'Heavy-duty autonomous combat unit. Equipped with dual turrets and threat-detection AI.',
      category: 'armor & gear'
    },
    {
      image: '/images/products/product_2_3.jpg',
      name: 'EMP Pulse Grenade x3 Pack',
      slug: 'emp-pulse-grenade-x3-pack',
      price: '760.00',
      delivery: 'in 24h',
      description: 'Perfect for tech-heavy combat. Disables enemy cyberware and electronics in a 5m radius.',
      category: 'cybertech'
    },
    {
      image: '/images/products/product_2_4.jpg',
      name: 'Signal Jammer – CorpWave TX',
      slug: 'signal-jammer-corpwave-tx',
      price: '2699.00',
      delivery: 'in 2 days',
      description: 'Portable jammer that blocks surveillance, drones, and smart-devices up to 150m.',
      category: 'software licenses'
    },
    // products_3
    {
      image: '/images/products/product_3_1.jpg',
      name: 'Kevlar-Lined Hoodie X-Tek',
      slug: 'kevlar-lined-hoodie-x-tek',
      price: '289.00',
      delivery: 'ready tomorrow',
      description: 'Blend in with edge-runner style. Kevlar-lined, EMP-resistant and heat-regulating fibers.',
      category: 'armor & gear'
    },
    {
      image: '/images/products/product_3_2.jpg',
      name: 'Neon Visor Glasses 2077',
      slug: 'neon-visor-glasses-2077',
      price: '159.90',
      delivery: 'in 2 days',
      description: 'HUD-enabled visor with ambient night glow, gesture control, and encrypted AR feeds.',
      category: 'armor & gear'
    },
    {
      image: '/images/products/product_3_3.jpg',
      name: 'AR Reactive Jacket – GhostBlack',
      slug: 'ar-reactive-jacket-ghostblack',
      price: '469.00',
      delivery: 'in 2 days',
      description: 'Jacket changes visuals based on environment. LED-threaded with active camouflage support.',
      category: 'armor & gear'
    },
    {
      image: '/images/products/product_3_4.jpg',
      name: 'CyberSneaks Pulse Vibe',
      slug: 'cybersneaks-pulse-vibe',
      price: '329.00',
      delivery: 'tomorrow',
      description: 'Smart sneakers with gyro-stabilization, noise suppression soles and neon heel trails.',
      category: 'armor & gear'
    },
    {
      image: '/images/products/product_3_5.jpg',
      name: 'DigitalCam Urban Mask',
      slug: 'digitalcam-urban-mask',
      price: '122.00',
      delivery: 'in 3 days',
      description: 'Techwear essential – rebreather-ready, fitted with facial distortion filters for low-profile ops.',
      category: 'armor & gear'
    },
    // products_4
    {
      image: '/images/products/product_4_1.jpg',
      name: 'Neural Boost Chip (Gen-5)',
      slug: 'neural-boost-chip-gen-5',
      price: '899.00',
      delivery: 'ready now',
      description: 'Enhances cognitive functions and reflex timing. FDA-questionable, street-tested.',
      category: 'augmentations'
    },
    {
      image: '/images/products/product_4_2.jpg',
      name: 'OcuScan Smart Optics',
      slug: 'ocuscan-smart-optics',
      price: '1120.00',
      delivery: 'in 48h',
      description: 'Replace your eyes with AR overlays, zoom modes, and low-light precision scanning.',
      category: 'augmentations'
    },
    {
      image: '/images/products/product_4_3.jpg',
      name: 'Kinetic Arm Servo – Titan-X',
      slug: 'kinetic-arm-servo-titan-x',
      price: '2390.00',
      delivery: 'in 2 days',
      description: 'Hydraulic-grade servo for extra lifting, punching, and grappling. Comes with warranty (limited).',
      category: 'augmentations'
    },
    {
      image: '/images/products/product_4_4.jpg',
      name: 'Subdermal Armor Grid (Lv2)',
      slug: 'subdermal-armor-grid-lv2',
      price: '1780.00',
      delivery: 'tomorrow',
      description: 'Second-skin defensive implant. Absorbs ballistic impact and reduces heat signatures.',
      category: 'augmentations'
    },
    {
      image: '/images/products/product_4_5.jpg',
      name: 'Memory Expander 128Tb XR',
      slug: 'memory-expander-128tb-xr',
      price: '655.00',
      delivery: 'in 3 days',
      description: 'Boost your storage with XR-certified expansion chip. Cyberdeck-compatible.',
      category: 'augmentations'
    }
  ];

  return {
    products
  };
});