const products = [
  {
    id: '1',
    name: 'accent chair',
    image:
      'https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160',
  },
  {
    id: '2',
    name: 'albany sectional',

    image:
      'https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52',
  },
  {
    id: '3',
    name: 'albany table',

    image:
      'https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f',
  },
  {
    id: '4',
    name: 'armchair',

    image:
      'https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f',
  },
  {
    id: '6',
    name: 'Mobilephone',
    image:
     'data:image/jpeg;base64,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'
  },
  {
    id: '7',
    name: 'Camera',
    image:
     'https://www.bing.com/th?id=OIP.mWn3s1ilBQ97sBbECyeAWgHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
  },
  {
    id: '8',
    name: 'Laptop',
    image:
     'https://www.bing.com/th?id=OIP.d8Xow2XpRSLqyhJwyaE9tQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
  },

  
  
];

export default products;
