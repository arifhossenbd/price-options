
import { useEffect, useState } from 'react';
import PriceOption from '../priceOption/priceOption';

function PriceOptions(){
    const [options, setOptions] = useState([])
    useEffect(() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setOptions(data))
    },[])
    return (
        <div className='text-center mt-44 md:mt-4'>
            <h2 className='text-5xl my-10'>Best prices option in the term</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10'>
            {
                options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
}


export default PriceOptions;