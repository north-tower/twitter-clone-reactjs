import './Widget.css';
import {TwitterTimelineEmbed, TwitterShareButton} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search'
function Widgets(){
    return(
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type="text" />
            </div>

        <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>
            
            <TwitterTimelineEmbed sourceType='profile' screenName='north_tower_' options={{height:400}} />
            <TwitterShareButton />
        </div>
        </div>
    )
}

export default Widgets;