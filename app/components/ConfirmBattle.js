var React = require('react');
var PropTypes = require('react').PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <Loading />
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper>
            <UserDetails info={props.playerInfo[0]} />
          </UserDetailsWrapper>                       
          <UserDetailsWrapper>
            <UserDetails info={props.playerInfo[1]} />
          </UserDetailsWrapper>        
        </div>        
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playerInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;