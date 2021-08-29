import React from 'react';
import ContentCard from '../../../../components/ContentCard';
import HorizontalSlider from '../../../../components/HorizontalSlider';

const Slider = ({title, content}) =>{
    return (
        <div className='slider'>
            <h3 className='sub-heading local-heading'>
                {title}
            </h3>
            <HorizontalSlider
                perMove={1}
                perPage={5}
                slideWidth='185px'
            >
                {
                    content.map((record) => {
                        return (
                            <ContentCard
                                key={record.id}
                                details={record}
                            />
                        );
                    })
                }
            </HorizontalSlider>
        </div>   
    )
};

export default Slider;
