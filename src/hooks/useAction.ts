import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import ActionCreators from '@app/store/reducers/action-creators';

export const useAction = () => (bindActionCreators(ActionCreators, useDispatch()));
