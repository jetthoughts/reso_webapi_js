exports.products = [ 
  {
    ID: 0,
    Name: 'Bread',
    Description: 'Whole grain bread',
    ReleaseDate: '1992-01-01T00:00:00Z',
    DiscontinuedDate: null,
    Rating: 4,
    Price: 2.5 
  },
  {
    ID: 1,
    Name: 'Milk',
    Description: 'Low fat milk',
    ReleaseDate: '1995-10-01T00:00:00Z',
    DiscontinuedDate: null,
    Rating: 3,
    Price: 3.5
  },
  {
    ID: 2,
    Name: 'Vint soda',
    Description: 'Americana Variety - Mix of 6 flavors',
    ReleaseDate: '2000-10-01T00:00:00Z',
    DiscontinuedDate: null,
    Rating: 3,
    Price: 20.9
  }
]

exports.coffee = {
  '@odata.type': '#ODataDemo.FeaturedProduct',
  ID: 10,
  Name: 'Coffee',
  Description: 'Bulk size can of instant coffee',
  ReleaseDate: '1982-12-31T00:00:00Z',
  DiscontinuedDate: null,
  Rating: 1,
  Price: 6.99
}
