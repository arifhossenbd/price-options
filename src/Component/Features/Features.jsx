import { AiFillCheckCircle } from 'react-icons/ai';

import PropTypes from 'prop-types';

const Features = ({feature}) => {
    return (
        <div className='my-2'>
            <p className='flex items-center text-white'><span className='mr-2'><AiFillCheckCircle></AiFillCheckCircle></span>{feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature:PropTypes.string.isRequired
};

export default Features;