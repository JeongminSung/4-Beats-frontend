import React from 'react';
import Modal_SignIn from './Component-SignIn/Modal_SignIn'
import Modal_SignUp from './Component-SignUp/Modal_SignUp'
import ReactTransitionGroup from 'react-addons-css-transition-group';
import './SignForm.scss';

class SignForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          IsSignIn : false,
        }
      }

       
      HandleSignInClick = () => {
        this.setState({ IsSignIn: true });
      }
      
    render(){
        return(
            <React.Fragment>
        {
          this.props.isOpen ?
          <ReactTransitionGroup
            transitionName={'Modal-anim'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className ="SignIn">
                <div className="Modal-signIn-overlay" onClick={this.props.close} />
                <div className="loginForm">
                    <Modal_SignIn />
                    {/* <Modal_SignUp /> */}
                </div>
            </div>
          </ReactTransitionGroup>
          :
          <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200} transitionLeaveTimeout={200} />
        }  
          </React.Fragment>
        )
    }
}

export default SignForm;