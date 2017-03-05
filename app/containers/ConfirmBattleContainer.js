var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playerInfo: [],
    }
  },
  componentWillMount: function () {
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playerInfo: [players[0], players[1]]
        })
      }.bind(this))
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playerInfo
      }
    })
  },
  componentWillReceiveProps: function () {
      console.log('componentWillReceiveProps')
  },
  componentWillUnmount: function() {
      console.log('componentWillUnmount')
  },
  render: function () {
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
        onInitiateBattle={this.handleInitiateBattle} />
    )
  }
});

module.exports = ConfirmBattleContainer;