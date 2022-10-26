module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'stockage/2021-04-23-miracles-queries-postgres', // document ID
      label: 'Getting started', // sidebar label
    },
    {
      type: 'category',
      label: 'BIG DATA',
      collapsed: false,
      items: [
	    'stockage/2021-03-10-dolt-db',
        'stockage/2021-03-12-apache-parquet'
      ],
    }
  ],
};
