import { connect } from 'react-redux';

import mapActionCreators from '../../../utils/redux-helpers/mapActionCreators';

import fetchConfig from '../../../actions/fetchConfig';
import resetSlotState from '../../../actions/resetSlotState';
import spinSlots from '../../../actions/spinSlots';

import InfoPanel from './InfoPanel';

const mapStateToProps = ({
    config,
    slotState,
    spinInProgress,
}) => ({
    config,
    slotState,
    spinInProgress,
});

const mapDispatchToProps = mapActionCreators({
    fetchConfig,
    resetSlotState,
    spinSlots,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoPanel);