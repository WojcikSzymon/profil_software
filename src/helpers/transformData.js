const addLeadingZearo = number => (
    (number < 10)
        ? `0${number}`
        : number
);

const formatDate = (created_utc) => {
    const date = new Date(created_utc * 1000);
    const day = addLeadingZearo(date.getDate());
    const month = addLeadingZearo(date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = addLeadingZearo(date.getHours());
    const min = addLeadingZearo(date.getMinutes());
    return `${day}.${month}.${year} ${hour}:${min}`;
};

const transformData = (items) => ({
    posts: items.map(({
        data: {
            title,
            ups: upvotes,
            downs: downvotes,
            score,
            num_comments,
            created_utc,
        },
    }) => {
        return {
            title,
            upvotes,
            downvotes,
            score,
            num_comments,
            created: formatDate(created_utc),
        }
    }),
    count: items.length,
});

export default transformData;
