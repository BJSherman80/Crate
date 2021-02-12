import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3, H4 } from "../../ui/typography";
import { black, grey, grey2 } from "../../ui/common/colors";
import Icon from "../../ui/icon";
import Modal from "../../ui/modal";

// App Imports
import { getListByUser } from "../subscription/api/actions";
import Loading from "../common/Loading";
import EmptyMessage from "../common/EmptyMessage";
import SubscriptionItem from "../subscription/Item";

// Component
class Deliveries extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }
  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getListByUser());
  }

  // Runs on client only
  componentDidMount() {
    this.getUserSubscriptions();
  }

  getUserSubscriptions = async () => {
    await this.props.getListByUser();
    console.log(this.props.subscriptionsByUser.list);
  };

  toggleVisible = (visible) => {
    this.setState({
      visible,
    });
  };

  close = () => {
    this.toggleVisible(false);
  };

  onSubmit = () => {
    console.log("modal submit");
    this.close();
  };

  render() {
    const subscriptions = this.props.subscriptionsByUser.list;

    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>My Deliveries - Crate</title>
        </Helmet>
        <H4 style={{ marginBottom: "0.5em" }}>Delivery History</H4>
        <table className="striped">
          <thead>
            <tr>
              <th>Crate</th>
              {/* <th>Description</th> */}
              <th>Delivery Date</th>
              <th>Edit</th>
              <th>Order Number</th>
            </tr>
          </thead>

          <tbody>
            {subscriptions.map((subscription) => (
              <tr key={subscription.id}>
                <td>{subscription.crate.name}</td>
                {/* <td>{subscription.crate.description}</td> */}
                <td>
                  {new Date(parseInt(subscription.createdAt)).toDateString()}
                </td>
                <td style={{ textAlign: "center" }}>
                  {/* <Link to={admin.crateEdit.path(id)}> */}

                  <Icon size={2} style={{ color: black }}>
                    mode_edit
                  </Icon>

                  {/* </Link> */}
                </td>
                <td>{subscription.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Modal visible={this.state.visible}>Hi!</Modal> */}
      </div>
    );
  }
}

// Component Properties
Deliveries.propTypes = {
  subscriptionsByUser: PropTypes.object.isRequired,
  getListByUser: PropTypes.func.isRequired,
};

// Component State
function deliveriesState(state) {
  return {
    subscriptionsByUser: state.subscriptionsByUser,
  };
}

export default connect(deliveriesState, { getListByUser })(Deliveries);
