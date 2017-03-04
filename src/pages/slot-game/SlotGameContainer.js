import { connect } from 'react-redux';

import mapActionCreators from '../../utils/redux-helpers/mapActionCreators';

import fetchConfig from '../../actions/fetchConfig';
import resetSlotState from '../../actions/resetSlotState';
import fetchSlotState from '../../actions/fetchSlotState';
import spinSlots from '../../actions/spinSlots';

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
    fetchSlotState,
    resetSlotState,
    spinSlots,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SlotGame);