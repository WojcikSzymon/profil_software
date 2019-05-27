const NUMBER = 'NUMBER';
const NAN = 'NAN';
const POSITIVE_INFINITY = 'POSITIVE_INFINITY';

const SORT_TYPES = {
    title: 'string',
    upvotes: 'number',
    downvotes: 'number',
    score: 'number',
    num_comments: 'number',
    created: 'string',
    rank: 'rank',
};

const numberType = (val) => {
    if (isFinite(val)) {
        return NUMBER;
    } else if (isNaN(val)) {
        return NAN;
    } else {
        return POSITIVE_INFINITY;
    }
};

const getCompareFunc = field => sortConfig[SORT_TYPES[field]](field);

const getRank = item => (item.upvotes / item.downvotes);

const compareWithNonFinite = (first, second) => {
    const compareType = `${numberType(first)}/${numberType(second)}`;
    switch (compareType) {
        case `${POSITIVE_INFINITY}/${NAN}`:
        case `${POSITIVE_INFINITY}/${NUMBER}`:
        case `${NUMBER}/${NAN}`:
            return 1;

        case `${NAN}/${NAN}`:
        case `${POSITIVE_INFINITY}/${POSITIVE_INFINITY}`:
            return 0;

        case `${NAN}/${POSITIVE_INFINITY}`:
        case `${NAN}/${NUMBER}`:
        case `${NUMBER}/${POSITIVE_INFINITY}`:
            return -1;

        default:
            return first - second;
    };
};

const sortConfig = {
    string: field => (a, b) => (a[field]).localeCompare(b[field]),
    number: field => (a, b) => a[field] - b[field],
    rank: () => (a, b) => (
        compareWithNonFinite(getRank(b), getRank(a))
            || (b.created).localeCompare(a.created)
    ),
};

const orderByField = (data, field) => {
    const compareFunc = getCompareFunc(field);
    return {
        ...data,
        posts: [
            ...data.posts,
        ].sort((a, b) => compareFunc(a, b)),
    };
};

export default orderByField;
