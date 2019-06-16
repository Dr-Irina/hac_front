import React, { Component } from 'react'
import { Menu, Reveal, Image } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import '../../public/style.css'

// const Video = {
//     berpi: require('./video/Berpi.mp4')
// };

// const Gif = {
// fitnes: fit
// };

export default class MenuExampleInvertedVertical extends Component {
    state = { activeItem: 'fitness' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    onHor = (e, str) => {
        console.log(str);
        // document.getElementById('xyita').setAttribute('src', );
        // return (
        //     <video autoPlay>
        //         <source src={Video.berpi} />
        //     </video>);
        return(true);
    };


    render() {
        const { activeItem } = this.state;

        return (
            <Menu vertical inverted fluid color={'teal'} style={{height: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Menu.Item
                    onMouseEnter={(e) => {
                        let fit = this.onHor(e, 'fitness');
                    }
                    }
                    active={activeItem === 'fitness'}
                    onClick={this.handleItemClick}
                    style={{height: '20%', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', fontFamily: 'HelveticaBold', fontSize: '4vh'}}>
                    <Link to={'/fitnes'}>Фитнес</Link>
                </Menu.Item>

                <Menu.Item
                    onMouseEnter={(e) => {
                        this.onHor(e, 'box')}
                    }

                    active={activeItem === 'box'}
                    onClick={this.handleItemClick}
                    style={{height: '20%', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', fontFamily: 'HelveticaBold', fontSize: '4vh'}}
                ><Link to={'/box'}>Бокс</Link></Menu.Item>
                <Menu.Item
                    onMouseEnter={(e) => {
                        this.onHor(e, 'tennis')}
                    }
                    active={activeItem === 'tennis'}
                    onClick={this.handleItemClick}
                    style={{height: '20%', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', fontFamily: 'HelveticaBold', fontSize: '4vh'}}
                ><Link to={'/tennis'}>Теннис</Link>
                </Menu.Item>
                <Menu.Item
                    onMouseEnter={(e) => {
                        this.onHor(e, 'dance')}
                    }
                    active={activeItem === 'dance'}
                    onClick={this.handleItemClick}
                    style={{height: '20%', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', fontFamily: 'HelveticaBold', fontSize: '4vh'}}
                ><Link to={'/dance'}>Танцы</Link>
                </Menu.Item>
                <Menu.Item
                    onMouseEnter={(e) => {
                        this.onHor(e, 'volleyball')}
                    }
                    active={activeItem === 'volleyball'}
                    onClick={this.handleItemClick}
                    style={{height: '20%', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', fontFamily: 'HelveticaBold', fontSize: '4vh'}}
                ><Link to={'/volleyball'}>Волейбол</Link></Menu.Item>
            </Menu>

        )
    }
};
