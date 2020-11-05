import React from 'react';
import Story from './Story';
import './StoryReel.css';
import Zoom from 'react-reveal/Zoom';

function StoryReel() {
    return (
        <Zoom left cascade>
        <div className='storyReel'>
            
        <Story 
            image='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN'
            profileSrc='https://images.immediate.co.uk/production/volatile/sites/2/2015/05/6522.jpg?quality=90&resize=600%2C400'
            title='Cakes Tutorial'
            />
        
            <Story 
            image='https://elgourmet.s3.amazonaws.com/recetas/cover/cupca_sTqQFIAgcplGtkyjL1nhBb5dNMeKPW.png'
            profileSrc='https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/s960x960/93485343_10157651187094079_7151497487054798848_o.jpg?_nc_cat=101&_nc_sid=825194&_nc_ohc=KdVeGZgj9ncAX9_1YDa&_nc_ht=scontent.faep5-1.fna&tp=7&oh=c8ff3915920290c243084c53f5dd8ad7&oe=5FA47C2B'
            title='My Cupcakes'
            />
            <Story 
            image='https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/28685117_10156373736499286_3035782609398167860_n.jpg?_nc_cat=105&_nc_sid=825194&_nc_ohc=MztckO2M3xcAX_C9DwE&_nc_ht=scontent.faep5-1.fna&oh=5aa40f390e787c1ee9bb25b35d8b63f5&oe=5FA4B0A1'
            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNRgAhKYmH1alCt_IARhsV3je_-cRHv7VePw&usqp=CAU'
            title='Tasty'
            />
            <Story 
            image='https://images.immediate.co.uk/production/volatile/sites/2/2015/05/6522.jpg?quality=90&resize=600%2C400'
            profileSrc='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN'
            title='Maria´s Cake'
            />

            <Story 
            image='https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb.jpg'
            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS15emvLk_yiuIoLlKkF_sAcgrpaOxWj6qYsA&usqp=CAU'
            title='MHMAT'
            />

 
        </div>
        </Zoom> 
        
    )
}

export default StoryReel
