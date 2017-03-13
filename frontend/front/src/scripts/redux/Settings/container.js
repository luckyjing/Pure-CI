import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './redux/action'
// 载入
import Settings from '../../containers/SettingsContainer';
import Commission from '../../containers/SettingsContainer/child/commission';
// 将actions绑定到props上
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

// 将state绑定到props上
const mapStateToProps = state => ({
  state: state.Settings
});

// 导出链接好的React Class
export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);
export const CommmissionContainer = connect(mapStateToProps, mapDispatchToProps)(Commission);
