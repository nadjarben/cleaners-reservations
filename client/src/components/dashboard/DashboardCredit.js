import React from 'react'
import { connect } from 'react-redux'

class DashboardCredit extends React.Component {

    render() {
        const user  = this.props.auth.user;
        return(
            <div>
                <p>{user.name} {user.surname}</p>
                <p>Credit remaining : {user.credit} ₪</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps)(DashboardCredit);