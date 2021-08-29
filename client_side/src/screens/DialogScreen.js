import { Component } from "react";
import { connect } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import getDialog from "../store/actions/DialogActions";
import "../index.css";

class DialogScreen extends Component {
  componentDidMount() {
    this.props.my_fun();
  }
  render() {
    const { loading, data } = this.props.response;

    return (
      <>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : (
          <>
            <h2>List of Intents In An Agent</h2>
            {data.map((elem, index) => (
              <div key={index} className="indent">
                <h1>Loading------</h1>
                {elem.displayName}
              </div>
            ))}
          </>
        )}
      </>
    );
  }
}
// subscription

const recive = (state) => {
  console.log("This is State ", state);
  return {
    response: state.dialog,
  };
};

// dispatch
const send = (dispatch) => {
  console.log("This is dispatch", dispatch);
  return {
    my_fun: () => {
      dispatch(getDialog());
    },
  };
};

export default connect(recive, send)(DialogScreen);
