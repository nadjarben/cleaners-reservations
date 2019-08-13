import React from 'react'
import { connect } from 'react-redux'

class DashboardCredit extends React.Component {

    render() {
        const credit  = this.props.auth.user.credit;
        console.log(credit)
        return(
            <div style={{marginTop:'-12vh'}}>
                Credit Remaning : 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps)(DashboardCredit);