import transformData from '../transformData';

const data = [
    {
        kind: 't3',
        data: {
            title: 'Sample title',
            ups: 352,
            downs: 13,
            score: 17,
            num_comments: 12,
            created_utc: 1556720253.0,
        },
    },
    {
        kind: 't3',
        data: {
            title: 'Sample title 2',
            ups: 434,
            downs: 0,
            score: 443,
            num_comments: 0,
            created_utc: 1556723253.0,
        },
    },
    {
        kind: 't3',
        data: {
            title: 'Sample title 3',
            ups: 113,
            downs: 223,
            score: 17,
            num_comments: 0,
            created_utc: 1556722153.0,
        },
    },
];

const expected = {
    posts: [
        {
            title: 'Sample title',
            upvotes: 352,
            downvotes: 13,
            score: 17,
            num_comments: 12,
            created: '01.05.2019 16:17',
        },
        {
            title: 'Sample title 2',
            upvotes: 434,
            downvotes: 0,
            score: 443,
            num_comments: 0,
            created: '01.05.2019 17:07',
        },
        {
            title: 'Sample title 3',
            upvotes: 113,
            downvotes: 223,
            score: 17,
            num_comments: 0,
            created: '01.05.2019 16:49',
        },
    ],
    count: 3,
};

describe('transformData', () => {
    it('should return proper object', () => {
        const received = transformData(data);
        expect(received).toEqual(expected);
    });
});
