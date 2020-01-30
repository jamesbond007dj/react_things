import React from 'react';

class Footer extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
             <h3>&#174;Bond Store App</h3>
             <h3>&#169; James Bond 2020</h3>
             <video autoplay muted loop plays-inline id="video"/>
               <source src="./Cassette_Tape.mp419377.webm" type="video/webm"/> 
            </>
        )
    }
}

export default Footer;