import React from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions';
import ListHeader from './ListHeader';

const List = ({
    filteredResults,
    label,
    setFilter,
}) => (
    <div>
        <Actions setFilter={setFilter} />
        <ListHeader
            label={label}
            count={filteredResults.count}
        />
        <ul>
            {
                filteredResults.posts.map((item, index) => (
                    <li key={String(index)}>
                        <div>
                            {item.title}
                        </div>
                        <div className="info">
                            created: {item.created},
                            upvotes: {item.upvotes},
                            downvotes: {item.downvotes},
                            score: {item.score},
                            comments: {item.num_comments}
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
);

List.propTypes = {
    filteredResults: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default List;
