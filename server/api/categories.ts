export default defineEventHandler(() => {
  const categories = [
    { image: 'images/circle_red_1.png', label: 'Augmentations' },
    { image: 'images/circle_red_2.png', label: 'Armor & Gear' },
    { image: 'images/circle_red_3.png', label: 'Vehicles' },
    { image: 'images/circle_red_4.png', label: 'Software Licenses' }
  ];

  return {
    categories
  };
});