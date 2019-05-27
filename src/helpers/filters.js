import orderByField from './orderByField';
import filterLastDay from './filterLastDay';

const filters = [
    {
        label: 'Results',
        getData: data => ({
            ...data,
            posts: [
                ...data.posts,
            ],
        }),
    },
    {
        label: 'Sort by upvotes',
        getData: (data) => orderByField(data, 'upvotes'),
    },
    {
        label: 'Sort by comments count',
        getData: (data) => orderByField(data, 'num_comments'),
    },
    {
        label: 'Sort by score',
        getData: (data) => orderByField(data, 'score'),
    },
    {
        label: 'Sort by created date',
        getData: (data) => orderByField(data, 'created'),
    },
    {
        label: 'Filter by last 24H',
        getData: (data) => filterLastDay(data),
    },
];

export default filters;
