const DAY_INTERVAL = 24 * 60 * 60 * 1000;

const parseDateToTimestamp = (str) => {
    const baseArr = str.split(' ');
    const dateArr = baseArr[0].split('.');
    const timeArr = baseArr[1].split(':');
    return Date.UTC(dateArr[2], dateArr[1] - 1, dateArr[0], timeArr[0], timeArr[1]);
};

const filterLastDay = (data) => {
    const nowTimestamp = new Date().getTime();
    const filteredPosts = data.posts.filter(elem => (
        (nowTimestamp - parseDateToTimestamp(elem.created)) < DAY_INTERVAL)
    );
    return {
        posts: filteredPosts,
        count: filteredPosts.length,
    };
};

export default filterLastDay;
