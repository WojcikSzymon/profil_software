import React from 'react';
import PropTypes from 'prop-types';
import filters from '../helpers/filters';

const Actions = ({
    setFilter,
}) => (
    <div>
        {
            filters.map((item, index) => (
                <button
                    key={String(index)}
                    type="button"
                    onClick={() => setFilter(item)}
                >
                    {item.label}
                </button>
            ))
        }
    </div>
);

Actions.propTypes = {
    setFilter: PropTypes.func.isRequired,
};

export default Actions;
