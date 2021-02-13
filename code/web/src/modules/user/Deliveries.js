import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// UI Imports

import { H4 } from "../../ui/typography";
// import { black, grey, grey2 } from "../../ui/common/colors";
// import Icon from "../../ui/icon";
import ModalForm from "../../ui/modal/ModalForm";
// import { Input, Textarea, Select } from "../../ui/input";

// App Imports
import { getListByUser } from "../subscription/api/actions";
// import Loading from "../common/Loading";
// import EmptyMessage from "../common/EmptyMessage";

// Component
class Deliveries extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      deliveryDate: "",
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

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = () => {
    console.log("modal submit");
  };

  render() {
    const subscriptions = this.props.subscriptionsByUser.list;
    // const deliveryDateForm = (
    //   <form id={subscription.id}>
    //     <Input
    //       type="text"
    //       fullWidth={true}
    //       placeholder="change delivery date"
    //       name="deliveryDate"
    //       autoComplete="off"
    //       value={subscription.createdAt}
    //       onChange={this.onChange}
    //     />
    //   </form>
    // );
    const subscriptionRows = subscriptions.map((subscription) => (
      <tr key={subscription.id}>
        <td>{subscription.crate.name}</td>
        {/* <td>{subscription.crate.description}</td> */}
        <td
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "spaceBetween",
          }}
        >
          {new Date(parseInt(subscription.createdAt)).toDateString()}
          {/* <td style={{ textAlign: "center" }}> */}
          {/* <Link to={admin.crateEdit.path(id)}> */}
          <ModalForm onChange={this.onChage} onSubmit={this.onSubmit} />
          {/* <button onClick={this.open}>
            <Icon size={2} style={{ color: black }}>
              mode_edit
            </Icon>
          </button> */}
          {/* </Link> */}
        </td>
        <td>{subscription.createdAt}</td>
      </tr>
    ));

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
              <th>Delivery Date</th>
              <th>Order Number</th>
            </tr>
          </thead>

          <tbody>{subscriptionRows}</tbody>
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
