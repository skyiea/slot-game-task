import { connect } from 'react-redux';

import mapActionCreators from '../../../utils/redux-helpers/mapActionCreators';

import fetchConfig from '../../../actions/fetchConfig';
import resetSlotState from '../../../actions/resetSlotState';
import spinSlots from '../../../actions/spinSlots';

import ControlPanel from './ControlPanel';

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
)(ControlPanel);