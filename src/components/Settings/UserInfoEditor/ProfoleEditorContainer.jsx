import ProfileEditor from './ProfileEditor';
import { connect } from 'react-redux';
import { getUserNickname, getUserPhotos, getUserPhone, getUserEmail, getUserStatus, getProfile } from '../../../redux/selectors/settingsSelectors';
import { setUserInfoSettings, updateUserNicknameSetting, updateUserEmailSetting, updateUserStatusSetting, updateUserPhotoSetting, updateUserPhoneNumberSetting } from '../../../redux/reduser/settingsReduser';
import { Navigate } from 'react-router';

const ProfoleEditorContainer = (props) => {
    if (!props.profile) { return <Navigate to='/profile' /> }
    return <ProfileEditor nickname={props.nickname}
        status={props.status}
        email={props.email}
        phone={props.phone}
        photos={props.photos}
        setUserInfoSettings={props.setUserInfoSettings}
        updateUserNicknameSetting={props.updateUserNicknameSetting}
        updateUserEmailSetting={props.updateUserEmailSetting}
        updateUserStatusSetting={props.updateUserStatusSetting}
        updateUserPhotoSetting={props.updateUserPhotoSetting}
        updateUserPhone={props.updateUserPhoneNumberSetting}
    />
}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    nickname: getUserNickname(state),
    status: getUserStatus(state),
    email: getUserEmail(state),
    phone: getUserPhone(state),
    photos: getUserPhotos(state),
})

export default connect(mapStateToProps, { setUserInfoSettings, updateUserNicknameSetting, updateUserEmailSetting, updateUserStatusSetting, updateUserPhotoSetting, updateUserPhoneNumberSetting })(ProfoleEditorContainer);
