import { connect } from 'react-redux';

import mapActionCreators from '../../../utils/redux-helpers/mapActionCreators';

import * as BetActions from '../../../actions/BetActions';

import ControlPanel from './ControlPanel';

const mapStateToProps = ({
    config,
    slotState,
    spinInProgress,
    lineBet,
    linesCount,
}) => ({
    config,
    slotState,
    spinInProgress,
    lineBet,
    linesCount,
});

const mapDispatchToProps = mapActionCreators({
    BetActions,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlPanel);