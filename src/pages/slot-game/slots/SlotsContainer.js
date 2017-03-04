import { connect } from 'react-redux';

import mapActionCreators from '../../../utils/redux-helpers/mapActionCreators';

import fetchConfig from '../../../actions/fetchConfig';
import resetSlotState from '../../../actions/resetSlotState';
import spinSlots from '../../../actions/spinSlots';

import Slots from './Slots';

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
    spinSlots,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Slots);