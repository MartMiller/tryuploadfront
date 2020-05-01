import React, { useState, useEffect } from 'react';
import SearchUser from '../searchUser/SearchUser';
import UserCard from '../userCard/UserCard';
import NotFound from '../notFound/NotFound';
import AddUser from '../addUser/AddUser';
// import Loading from '../loading/Loading';

import UserListStyle from './UserList.module.css';

import { connect } from 'react-redux';
import { axiosUsers } from '../../actions/userActions';


const UserList = (props) => {
  const { users, loading, token } = props;


  const [resSearch, setResSearch] = useState('');

  const filtredUsers = users.filter((user) => user.name.toLowerCase().includes(resSearch.toLowerCase().trim()));  //Фильтрация поиска

  return (
    <div>
      <SearchUser setResSearch={setResSearch} />
      <AddUser token={token} />
      <div className={UserListStyle.container}>
        {/* {users ? (
          filtredUsers.length ? (
            filtredUsers.map((user) => <UserCard key={user.id} user={user} />)
          ) : (<NotFound />)
        ) : (<p> Loading... </p>)} */}


        {filtredUsers.length ? (filtredUsers.map((user) => <UserCard key={user._id} user={user} token={token} />)) : (<NotFound />)}
      </div>
    </div>
  )
}



// export default UserList;

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  loading: state.userReducer.loading,
  token: state.userReducer.token,
})

const mapActions = { axiosUsers };

export default connect(mapStateToProps, mapActions)(UserList);
