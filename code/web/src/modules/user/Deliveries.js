import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3, H4 } from "../../ui/typography";
import { black, grey, grey2 } from "../../ui/common/colors";
import Icon from "../../ui/icon";

// App Imports
import { getListByUser } from "../subscription/api/actions";
import Loading from "../common/Loading";
import EmptyMessage from "../common/EmptyMessage";
import SubscriptionItem from "../subscription/Item";

// Component
class Deliveries extends PureComponent {
  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getListByUser());
  }

  // Runs on client only
  componentDidMount() {
    this.getUserSubscriptions();
    // this.props.getListByUser();
  }

  getUserSubscriptions = async () => {
    await this.props.getListByUser();
    console.log(this.props.subscriptionsByUser.list);
  };

  // mapDeliveries = () => {
  //   const subscriptions = this.props.subscriptionsByUser.list;
  //   console.log(subscriptions);
  //   return subscriptions.map((subscription) => (
  //     <tr key={subscription.id}>
  //       <td>{subscription.crate.name}</td>
  //       <td>{subscription.crate.description}</td>
  //       <td>
  //         {" "}
  //         <p
  //           style={{
  //             color: grey2,
  //             marginTop: "1em",
  //             fontSize: "0.8em",
  //             textAlign: "center",
  //           }}
  //         >
  //           {new Date(parseInt(subscription.createdAt)).toDateString()}
  //         </p>
  //       </td>
  //       <td style={{ textAlign: "center" }}>
  //         {/* <Link to={admin.crateEdit.path(id)}> */}
  //         <Icon size={2} style={{ color: black }}>
  //           mode_edit
  //         </Icon>
  //         {/* </Link> */}
  //       </td>
  //       <td>{subscription.createdAt}</td>
  //     </tr>
  //   ));
  // };

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
