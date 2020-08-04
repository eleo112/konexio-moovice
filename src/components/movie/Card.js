import React from 'react';
import Button from '../core/Button';
// import placeholder from '../../placeholder.png';

class Card extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         src: "placeholder"
    //     };
    // }

    render() {
        const {
            poster_path,
            title,
            onClick
        } = this.props;
        const src = `https://image.tmdb.org/t/p/w300/${poster_path}`;
        return (
            <div>
                <Button
                    onClick={() => {
                        // onClick(id)
                    }}>
                        <img src={src} alt={`Movie ${title}`} />
                        {title}
                </Button>
            </div>
        );
    }
}

export default Card;