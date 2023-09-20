
import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {
    const { name, features, price } = option;
    // console.log(option)
    return (
        <div className='shadow-xl bg-blue-700 p-8 rounded-lg flex flex-col'>
            <h1 className='text-orange-100 text-3xl font-bold'>{name}</h1>
            <div className='flex-grow my-2'>
                {
                    features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                }
            </div>
            <p className='text-4xl font-semibold my-2 text-white'>{price}</p>
            <button className='bg-sky-600 p-4 rounded-xl text-white text-lg font-semibold mt-4 w-full'>Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
};

export default PriceOption;