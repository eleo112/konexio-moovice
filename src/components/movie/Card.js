import React from 'react';
// import placeholder from '../../placeholder.png';

class Card extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         src: "placeholder"
    //     };
    // }

    render() {
        const src = `https://image.tmdb.org/t/p/w300/${this.props.poster_path}`;
        return(
            <div>
                <img src={src} alt={`Movie ${this.props.title}`} />
                {this.props.title}
            </div>
        );
    }
}

export default Card;