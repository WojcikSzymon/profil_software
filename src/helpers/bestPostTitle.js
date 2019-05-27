import orderByField from './orderByField';

const bestPostTitle = data => {
    const {
        posts = [],
    } = orderByField(data, 'rank');
    return (posts[0] || {}).title;
};

export default bestPostTitle;
