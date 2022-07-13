import { spreadIngredient } from './scrap'

const foodItems = [
  { actual: '1 orange', expected: ['Orange', 1] },
  { actual: '4 carottes', expected: ['Carotte', 4] },
  { actual: 'poivre', expected: ['Poivre', 1] },
  { actual: 'sel', expected: ['Sel', 1] },
  { actual: '1 kg de potiron', expected: ['Potiron', 1, 'kg'] },
  { actual: '4 genièvre', expected: ['Genièvre', 4] },
  { actual: '1 pincée de sel', expected: ['Sel', 1, 'pincée'] },
  { actual: '4 oeufs (2 oeufs par personnes)', expected: ['Oeuf', 4] },
  { actual: '35 g de figues séchées (environs 4 fruits)', expected: ['Figue séchée', 35, 'g'] },
  { actual: '1 poignée de gruyère râpé (facultatif)', expected: ['Gruyère râpé', 1, 'poignée'] },
  { actual: '8 feuilles de basilic', expected: ['Basilic', 8, 'feuilles'] },
  { actual: '2 ail', expected: ['Ail', 2] },
  { actual: '4 échalotes', expected: ['Échalote', 4] },
  { actual: '1 pincée de poivre blanc', expected: ['Poivre blanc', 1, 'pincée'] },
  { actual: "1 filet d'huile d'olive", expected: ["Huile d'olive", 1, 'filet'] },
  { actual: 'poivre en grains', expected: ['Poivre en grains', 1] },
  {
    actual: '600 g de tomate en conserve (ou coulis de tomates)',
    expected: ['Tomate en conserve', 600, 'g'],
  },
  { actual: '125 g de parmesan râpé', expected: ['Parmesan râpé', 125, 'g'] },
  { actual: '15 g de beurre', expected: ['Beurre', 15, 'g'] },
  { actual: "huile d'olive", expected: ["Huile d'olive", 1] },
  { actual: '1 botte de carde (appelées aussi blettes)', expected: ['Carde', 1, 'botte'] },
  { actual: '1 pincée de fleur de sel', expected: ['Fleur de sel', 1, 'pincée'] },
  { actual: '300 g de mozzarella', expected: ['Mozzarella', 300, 'g'] },
  { actual: '1 pot de yaourt (bio de préférence)', expected: ['Yaourt', 1, 'pot'] },
  {
    actual: '15 cl de crème liquide très froide',
    expected: ['Crème liquide très froide', 15, 'cl'],
  },
  { actual: '1 oignon rouge', expected: ['Oignon rouge', 1] },
  { actual: "1/2 c.à.c d'anis", expected: ['Anis', 0.5, 'cuillère à café'] },
  { actual: '1 c.à.c de sucre', expected: ['Sucre', 1, 'cuillère à café'] },
  {
    actual: '3 c.à.s de chapelure de pain',
    expected: ['Chapelure de pain', 3, 'cuillère à soupe'],
  },
  {
    actual: '5 c.à.s de ketchup (bio de préférence)',
    expected: ['Ketchup', 5, 'cuillère à soupe'],
  },
]

describe('Scrapped food items', () => {
  test.each(foodItems)('Food item is correctly identified', async ({ actual, expected }) => {
    expect(spreadIngredient(actual)).toStrictEqual(expected)
  })
})
