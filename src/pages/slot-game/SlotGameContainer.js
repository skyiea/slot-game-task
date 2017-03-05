import { connect } from 'react-redux';

import mapActionCreators from '../../utils/redux-helpers/mapActionCreators';

import fetchConfig from '../../actions/fetchConfig';
import resetSlotState from '../../actions/resetSlotState';

import SlotGame from './SlotGame';

const mapStateToProps = ({
    config,
    slotState,
}) => ({
    config,
    slotState,
});

const mapDispatchToProps = mapActionCreators({
    fetchConfig,
    resetSlotState,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SlotGame);