import * as React from 'react';
import { connect } from 'react-redux';
import { postsLoadingAction } from "../store/actions";

// Provider -> 
// connect -> indivisual
class Home extends React.Component{
    state = {
        localLoading: false,
    }

    changeLocalLoading = () => {
        this.setState({
            localLoading: !this.state.localLoading
        })
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>{this.props.title}</h2>
                {this.props.users.join(" - ")}
                <br />
                {this.props.loading ? "YES" : "NO" }
            <br />
                <button onClick={this.props.changeLoading}>Change Loading</button>

                <div>
                    <p>Local Loading</p>
                    {this.state.localLoading ? "YES": "NO"}<br />
                    <button onClick={this.changeLocalLoading}>Local Loading</button>
                </div>
            </div>
        );
    }
}


/**
 * It connects indivisual state from redux to props of component.
 * @param state 
 */
const mapStateToProps = (state) => {
    return {
        title: state.Home.title,
        users: state.Home.users,
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLoading: () => dispatch(postsLoadingAction())
    }
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(Home);