import React, {useState} from 'react'



export default function VideoOnMain(props) {
    const [video, setVideo] = useState({src: 'boxing'});

    if(props.src === 'boxing') {
        setVideo({src: boxing})
    } else if (props.src === 'dancing')
    {
        setVideo({src: 'dancing'})
    } else if (props.src === 'tennis') {
        setVideo({src: 'tennis'})
    } else if (props.src === 'volleyball') {
        setVideo({src: 'volleyball'})
    }
    return (
        <div>
            <video width={'100%'} height={'100%'}>
                <source src={require('../../videos/BoxTrimmed.mp4')} type={'video/mp4'}/>
            </video>


        </div>
    )

}