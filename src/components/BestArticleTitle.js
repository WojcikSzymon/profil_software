import React from 'react';
import PropTypes from 'prop-types';
import bestPostTitle from '../helpers/bestPostTitle';

const BestArticleTitle = ({
    data,
}) => (
    <>
        <h3>
            Top rank article title:
        </h3>
        <div>
            {bestPostTitle(data)}
        </div>
    </>
);

BestArticleTitle.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BestArticleTitle;
