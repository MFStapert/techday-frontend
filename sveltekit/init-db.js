db = db.getSiblingDB('test');

db.createCollection('Post');

db.Post.insertMany([
    {
        title: 'Blogpost 1',
        date: '01-01-2023',
    },
    {
        title: 'Blogpost 2',
        date: '01-01-2023',
    },
    {
        title: 'Blogpost 3',
        date: '01-01-2023',
    },
]);
