export default defineEventHandler(() => {
  const inspirations = [
      { image: '/images/inspirations/inspiration_1.jpg', title: 'Neural Enhancements' },
      { image: '/images/inspirations/inspiration_2.jpg', title: 'Reactive Armor Wear' },
      { image: '/images/inspirations/inspiration_3.jpg', title: 'Cyber Streetwear' },
      { image: '/images/inspirations/inspiration_4.jpg', title: 'Military Grade Implants' },
      { image: '/images/inspirations/inspiration_5.jpg', title: 'Combat Drones' },
      { image: '/images/inspirations/inspiration_6.jpg', title: 'Neon Cruisers' },
    ];

  return {
    inspirations
  };
});