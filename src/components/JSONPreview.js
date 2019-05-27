import React from 'react';
import PropTypes from 'prop-types';
import JSONTree from 'react-json-tree';

const JSONPreview = ({
    data,
}) => (
    <>
        <h3>
            JSON preview
        </h3>
        <div>
            <JSONTree data={data} />
        </div>
    </>
);

JSONPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default JSONPreview;
