import React from 'react';
import PropTypes from 'prop-types';

const ListHeader = ({
    count,
    label,
}) => (
    <>
        <h3>
            {label}
        </h3>
        <div className="info">
            count: {count}
        </div>
    </>
);

ListHeader.propTypes = {
    count: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

export default ListHeader;
