import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    followProcess,
    requestUsers
} from '../../redux/reduser/usersReduser';
import { compose } from "redux";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getDisabledArr, getIsAuth } from '../../redux/selectors/usersSelector';

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChange = (numberPage) => {
        this.props.requestUsers(numberPage, this.props.pageSize)
    }
    render() {
        return <>
            {
                this.props.isFetching ? <Preloader /> : null
            }
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                disabledArr={this.props.disabledArr}
                followProcess={this.props.followProcess}
                isAuth={this.props.isAuth} />



        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        disabledArr: getDisabledArr(state),
        isAuth: getIsAuth(state)
    }
};

export default compose(
    connect(mapStateToProps, { follow, unfollow, setUsers, toggleIsFetching, setTotalUsersCount, setCurrentPage, followProcess, requestUsers }),
)(UsersComponent)