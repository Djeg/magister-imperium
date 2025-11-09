import { createColorCollection } from './create-color-collection'

describe('createColorCollection', () => {
  it('should create a color collection', () => {
    const colorCollection = createColorCollection('gold', {
      extraLight: '#f9eeb6',
      light: '#F5E6A7',
      normal: '#FFD700',
      dark: '#B8860B',
      extraDark: '#8B6914',
    })

    expect(colorCollection).toMatchInlineSnapshot(`
{
  "gold": "#FFD700",
  "goldDark": "#B8860B",
  "goldExtraDark": "#8B6914",
  "goldExtraLight": "#f9eeb6",
  "goldLight": "#F5E6A7",
  "goldNormal": "#FFD700",
}
`)
  })
})
