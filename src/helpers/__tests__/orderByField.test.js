import orderByField from '../orderByField';

const data = {
    posts: [
        {
            title: 'ba',
            upvotes: 352,
            downvotes: 13,
            score: 17,
            num_comments: 12,
            created: '01.05.2019 16:17',
        },
        {
            title: 'A',
            upvotes: 434,
            downvotes: 0,
            score: 443,
            num_comments: 0,
            created: '01.05.2019 17:07',
        },
        {
            title: 'BB',
            upvotes: 113,
            downvotes: 223,
            score: 17,
            num_comments: 0,
            created: '01.05.2019 16:49',
        },
    ],
    count: 3,
};

describe('orderByField', () => {
    it('should return array sorted by title', () => {
        const received = orderByField(data, 'title');
        const expected = {
            posts: [
                {
                    title: 'A',
                    upvotes: 434,
                    downvotes: 0,
                    score: 443,
                    num_comments: 0,
                    created: '01.05.2019 17:07',
                },
                {
                    title: 'ba',
                    upvotes: 352,
                    downvotes: 13,
                    score: 17,
                    num_comments: 12,
                    created: '01.05.2019 16:17',
                },
                {
                    title: 'BB',
                    upvotes: 113,
                    downvotes: 223,
                    score: 17,
                    num_comments: 0,
                    created: '01.05.2019 16:49',
                },
            ],
            count: 3,
        };
        expect(received).toEqual(expected);
    });

    it('should return array sorted by upvotes', () => {
        const received = orderByField(data, 'upvotes');
        const expected = {
            posts: [
                {
                    title: 'BB',
                    upvotes: 113,
                    downvotes: 223,
                    score: 17,
                    num_comments: 0,
                    created: '01.05.2019 16:49',
                },
                {
                    title: 'ba',
                    upvotes: 352,
                    downvotes: 13,
                    score: 17,
                    num_comments: 12,
                    created: '01.05.2019 16:17',
                },
                {
                    title: 'A',
                    upvotes: 434,
                    downvotes: 0,
                    score: 443,
                    num_comments: 0,
                    created: '01.05.2019 17:07',
                },
            ],
            count: 3,
        };
        expect(received).toEqual(expected);
    });

    it('should return array sorted by created date', () => {
        const received = orderByField(data, 'created');
        const expected = {
            posts: [
                {
                    title: 'ba',
                    upvotes: 352,
                    downvotes: 13,
                    score: 17,
                    num_comments: 12,
                    created: '01.05.2019 16:17',
                },
                {
                    title: 'BB',
                    upvotes: 113,
                    downvotes: 223,
                    score: 17,
                    num_comments: 0,
                    created: '01.05.2019 16:49',
                },
                {
                    title: 'A',
                    upvotes: 434,
                    downvotes: 0,
                    score: 443,
                    num_comments: 0,
                    created: '01.05.2019 17:07',
                },
            ],
            count: 3,
        };
        expect(received).toEqual(expected);
    });

    it('should return array sorted by rank', () => {
        const received = orderByField({
            posts: [
                {
                    upvotes: 3,
                    downvotes: 1,
                    created: '01.05.2019 16:17',
                },
                {
                    upvotes: 12,
                    downvotes: 0,
                    created: '01.05.2019 16:49',
                },
                {
                    upvotes: 0,
                    downvotes: 0,
                    created: '01.05.2019 16:49',
                },
                {
                    upvotes: 1,
                    downvotes: 0,
                    created: '01.05.2019 19:49',
                },
                {
                    upvotes: 6,
                    downvotes: 2,
                    created: '01.04.2019 16:17',
                },
                {
                    upvotes: 20,
                    downvotes: 2,
                    created: '01.05.2019 17:07',
                },
            ],
            count: 3,
        }, 'rank');
        const expected = {
            posts: [
                {
                    upvotes: 1,
                    downvotes: 0,
                    created: '01.05.2019 19:49',
                },
                {
                    upvotes: 12,
                    downvotes: 0,
                    created: '01.05.2019 16:49',
                },
                {
                    upvotes: 20,
                    downvotes: 2,
                    created: '01.05.2019 17:07',
                },
                {
                    upvotes: 3,
                    downvotes: 1,
                    created: '01.05.2019 16:17',
                },
                {
                    upvotes: 6,
                    downvotes: 2,
                    created: '01.04.2019 16:17',
                },
                {
                    upvotes: 0,
                    downvotes: 0,
                    created: '01.05.2019 16:49',
                },
            ],
            count: 3,
        };
        expect(received).toEqual(expected);
    });
});
