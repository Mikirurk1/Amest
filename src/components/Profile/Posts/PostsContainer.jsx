
import Posts from './Posts'
import { addPost, updateLike } from '../../../redux/reduser/profileReduser';
import { connect } from 'react-redux';


let mapStateToProps = (state) => ({
    posts: state.profilePage.postData,
    isAuth: state.auth.isAuth
})


const PostsContainer = connect(mapStateToProps, { addPost ,updateLike})(Posts);

export default PostsContainer;