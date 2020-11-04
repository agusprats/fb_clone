import React from 'react';
import Story from './Story';
import './StoryReel.css';
import Zoom from 'react-reveal/Zoom';

function StoryReel() {
    return (
        <Zoom left cascade>
        <div className='storyReel'>

        <Story 
            image='https://scontent.faep5-1.fna.fbcdn.net/v/t31.0-8/s960x960/1965411_10152057242304702_1322323123_o.jpg?_nc_cat=101&_nc_sid=825194&_nc_ohc=crrzmarCTBsAX_6uPI8&_nc_ht=scontent.faep5-1.fna&tp=7&oh=8c5cc84d90ccebb32c7c56a0794bd10c&oe=5FA3F265'
            profileSrc='https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/12191428_1546285132328983_3515153993365865008_n.jpg?_nc_cat=110&_nc_sid=825194&_nc_ohc=yXUlKkpI0FwAX-MygOs&_nc_ht=scontent.faep5-1.fna&oh=4c2121e6974caa18d2a3d46fd99aab4e&oe=5FA2E56C'
            title='Cakes Tutorial'
            />
            <Story 
            image='https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/12509710_1117301754969558_7057295826403376724_n.jpg?_nc_cat=107&_nc_sid=825194&_nc_ohc=RLw_yES2EuoAX_xm0bl&_nc_ht=scontent.faep5-1.fna&oh=a79f2811480831f2be4fe615f5a62f15&oe=5FA3A140'
            profileSrc='https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/s960x960/93485343_10157651187094079_7151497487054798848_o.jpg?_nc_cat=101&_nc_sid=825194&_nc_ohc=KdVeGZgj9ncAX9_1YDa&_nc_ht=scontent.faep5-1.fna&tp=7&oh=c8ff3915920290c243084c53f5dd8ad7&oe=5FA47C2B'
            title='My Cupcakes'
            />
            <Story 
            image='https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/28685117_10156373736499286_3035782609398167860_n.jpg?_nc_cat=105&_nc_sid=825194&_nc_ohc=MztckO2M3xcAX_C9DwE&_nc_ht=scontent.faep5-1.fna&oh=5aa40f390e787c1ee9bb25b35d8b63f5&oe=5FA4B0A1'
            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNRgAhKYmH1alCt_IARhsV3je_-cRHv7VePw&usqp=CAU'
            title='Tasty'
            />
            <Story 
            image='https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/71177814_2416504101943832_5020266326015344640_n.jpg?_nc_cat=111&_nc_sid=825194&_nc_ohc=r4r_JX6obIcAX-rn7kk&_nc_ht=scontent.faep5-1.fna&oh=30992e1eed3bf2df9e763ef077dc4d8c&oe=5FA3E288'
            profileSrc='https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/82797844_1615459151928569_8241886110372855808_n.jpg?_nc_cat=107&_nc_sid=825194&_nc_ohc=-vdcbC2roYQAX_9o48C&_nc_ht=scontent.faep5-1.fna&oh=c2ee1392d25d434cb87116e0adf973de&oe=5FA445A0'
            title='Maria´s Cake'
            />

            <Story 
            image='https://scontent.faep5-1.fna.fbcdn.net/v/t31.0-8/s960x960/27503674_1860414724002971_5855575992740796885_o.jpg?_nc_cat=108&_nc_sid=825194&_nc_ohc=NgFC0kv_Z0wAX-gwokD&_nc_ht=scontent.faep5-1.fna&tp=7&oh=37e14393a8b167865b68043aba050421&oe=5FA3ABA1'
            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS15emvLk_yiuIoLlKkF_sAcgrpaOxWj6qYsA&usqp=CAU'
            title='MHMAT'
            />

 
        </div>
        </Zoom> 
        
    )
}

export default StoryReel
