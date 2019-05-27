import bestPostTitle from '../bestPostTitle';

describe('bestPostTitle', () => {
    it('should return best post title', () => {
        const received = bestPostTitle({
            posts: [
                {
                    title: 'Sample title 1',
                    upvotes: 3,
                    downvotes: 1,
                    created: '01.05.2019 16:17',
                },
                {
                    title: 'Sample title 2',
                    upvotes: 12,
                    downvotes: 0,
                    created: '01.05.2019 16:49',
                },
                {
                    title: 'Sample title 3',
                    upvotes: 0,
                    downvotes: 0,
                    created: '01.05.2019 16:49',
                },
                {
                    title: 'Sample title 4',
                    upvotes: 1,
                    downvotes: 0,
                    created: '01.05.2019 19:49',
                },
                {
                    title: 'Sample title 5',
                    upvotes: 6,
                    downvotes: 2,
                    created: '01.04.2019 16:17',
                },
                {
                    title: 'Sample title 4',
                    upvotes: 20,
                    downvotes: 2,
                    created: '01.05.2019 17:07',
                },
            ],
            count: 3,
        });
        const expected = 'Sample title 4';
        expect(received).toBe(expected);
    });
});
