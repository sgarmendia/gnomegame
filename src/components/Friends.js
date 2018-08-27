import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nofriends from '../css/Assets/nofriends.png';

class Friends extends Component {
  render() {
    return (this.props.friends && this.props.friends.length > 0
      ? <div className='friends' style={{ float: 'right', marginRight: '20px' }}>
          <div className='overlayTitle'>Friends:</div>
            {this.props.friends && this.props.friends.map((friend,i) => {
              const friendData = this.props.data.find(g => friend === g.name)
              return (
                <div key={i} className='friend' style={{ margin: '5px'}}>
                  <img src={friendData.thumbnail} alt={friendData.name}
                  style={{ width: '90px', height: '90px', borderRadius: '50%' }} />
                  <div className='overlayTitle' style={{ }}>{friendData.name}</div>
                </div>
              )
            })}
        </div>
      : <div className='friends' style={{ float: 'right', marginRight: '10px' }}>
          <div className='overlayTitle' style={{ textAlign: 'center' }}>No Friends</div>
          <img src={nofriends} alt='no friends :-('
                  style={{ width: '120px', height: '120px', borderRadius: '50%' }} />
        </div>
    );
  }
}

Friends.propTypes = {
  friends: PropTypes.array,
  data: PropTypes.array,
};

export default Friends;