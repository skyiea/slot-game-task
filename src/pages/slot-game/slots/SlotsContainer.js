import { connect } from 'react-redux';

import mapActionCreators from '../../../utils/redux-helpers/mapActionCreators';

import Slots from './Slots';

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

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Slots);