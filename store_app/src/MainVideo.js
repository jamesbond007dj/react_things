import React from 'react';


class MainVideo extends React.Component {
    
    constructor(props){
        super(props);

    

        this.state = {
            videoURL: "./Cassette_Tape.mp419377.webm"
    }
}

render () {
    return (
        <video id="background-video" loop autoPlay>
            <source src={this.state.videoURL} type="video/webm" />
            <source src={this.state.videoURL} type="video/ogg" />
        </video>
    )
}
}

export default MainVideo;