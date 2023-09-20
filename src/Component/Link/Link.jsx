
import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {name, path} = route;
    return (
        <div className='mr-5 text-xl font-semibold hover:bg-emerald-200 px-2 hover:rounded-lg'>
            <a href={path}>{name}</a>
        </div>
    );
};

Link.propTypes = {
    route:PropTypes.object,
    name:PropTypes.string
};

export default Link;