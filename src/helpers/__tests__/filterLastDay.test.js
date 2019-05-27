import filterLastDay from '../filterLastDay';

/*eslint no-native-reassign:off*/
const constantDate = new Date('2019-05-11T16:30:00.000Z');

Date = class extends Date {
    constructor() {
        return constantDate;
    }
};


const data = {
    posts: [
        {
            title: 'Sample title 2',
            upvotes: 434,
            downvotes: 0,
            score: 443,
            num_comments: 0,
            created: '10.05.2019 17:07',
        },
        {
            title: 'Sample title',
            upvotes: 352,
            downvotes: 13,
            score: 17,
            num_comments: 12,
            created: '10.05.2019 16:17',
        },
        {
            title: 'Sample title 3',
            upvotes: 113,
            downvotes: 223,
            score: 17,
            num_comments: 0,
            created: '10.05.2019 16:49',
        },
    ],
    count: 3,
};

const expected = {
    posts: [
        {
            title: 'Sample title 2',
            upvotes: 434,
            downvotes: 0,
            score: 443,
            num_comments: 0,
            created: '10.05.2019 17:07',
        },
        {
            title: 'Sample title 3',
            upvotes: 113,
            downvotes: 223,
            score: 17,
            num_comments: 0,
            created: '10.05.2019 16:49',
        },
    ],
    count: 2,
};

describe('filterLastDay', () => {
    it('should return proper object', () => {
        const received = filterLastDay(data);
        expect(received).toEqual(expected);
    });
});
