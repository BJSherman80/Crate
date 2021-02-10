// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import states from "./states";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import Button from "../../ui/button";
import Icon from "../../ui/icon";
import H4 from "../../ui/typography/H4";
import { Input, Textarea, Select } from "../../ui/input";
import { white } from "../../ui/common/colors";

// App Imports
import userRoutes from "../../setup/routes/user";
import { routeImage } from "../../setup/routes";
import { renderIf } from "../../setup/helpers";
// import { createOrUpdate as userUpdateDetails } from "./api/actions";
import { upload, messageShow, messageHide } from "../common/api/actions";
import { update } from "./api/actions";
import { APP_URL } from "../../setup/config/env";

// import AdminMenu from "../common/Menu";

// Component

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      userDetails: {
        // id: 0,
        name: this.props.userDetails.name,
        email: this.props.userDetails.email,
        shippingAddress: "",
        addressState: "",
        description: "",
        image: "",
      },
    };
  }
  // componentDidMount() {
  // console.log(this.props);
  // }

  onChange = (event) => {
    let userDetails = this.state.userDetails;
    userDetails[event.target.name] = event.target.value;

    this.setState({
      userDetails,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const userDetails = this.state.userDetails;
    this.props.update(userDetails);
    this.setState({
      isLoading: true,
    });

    // this.props.messageShow("Saving changes, please wait...");
    this.props.messageShow("Details updated successfully.");

    this.props.history.push(userRoutes.profile.path);
    // Save changes
    // this.props
    //   .update(this.state.user)
    //   .then((response) => {
    //     this.setState({
    //       isLoading: false,
    //     });

    //     if (response.data.errors && response.data.errors.length > 0) {
    //       this.props.messageShow(response.data.errors[0].message);
    //     } else {
    //       this.props.messageShow("Details updated successfully.");

    //       this.props.history.push(user.profile.path);
    //     }
    //   })
    //   .catch((error) => {
    //     this.props.messageShow("There was some error. Please try again.");

    //     this.setState({
    //       isLoading: false,
    //     });
    //   })
    //   .then(() => {
    //     window.setTimeout(() => {
    //       this.props.messageHide();
    //     }, 5000);
    //   });
  };

  onUpload = (event) => {
    this.props.messageShow("Uploading file, please wait...");

    this.setState({
      isLoading: true,
    });

    let data = new FormData();
    data.append("file", event.target.files[0]);

    // Upload image
    this.props
      .upload(data)
      .then((response) => {
        if (response.status === 200) {
          this.props.messageShow("File uploaded successfully.");

          let userDetails = this.state.userDetails;
          userDetails.image = `/images/uploads/${response.data.file}`;

          this.setState({
            userDetails,
          });
        } else {
          this.props.messageShow("Please try again.");
        }
      })
      .catch((error) => {
        this.props.messageShow("There was some error. Please try again.");
      })
      .then(() => {
        this.setState({
          isLoading: false,
        });

        window.setTimeout(() => {
          this.props.messageHide();
        }, 5000);
      });
  };

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Profile / Update - User Details - Crate</title>
        </Helmet>

        {/* Page Content */}
        <div>
          {/* Top actions bar */}
          <Grid alignCenter={true} style={{ padding: "1em" }}>
            <GridCell style={{ textAlign: "left" }}>
              <Link to={userRoutes.profile.path}>
                <Button>
                  <Icon size={1.2}>arrow_back</Icon> Back
                </Button>
              </Link>
            </GridCell>
          </Grid>

          <Grid alignCenter={true} style={{ padding: "1em" }}>
            <GridCell>
              <H4
                font="secondary"
                style={{ marginBottom: "1em", textAlign: "center" }}
              >
                Edit Profile
              </H4>

              {/* Form */}

              <form onSubmit={this.onSubmit}>
                <div style={{ width: "25em", margin: "0 auto" }}>
                  {/* email */}
                  <Input
                    type="text"
                    fullWidth={true}
                    placeholder={this.props.userDetails.email}
                    required="required"
                    name="email"
                    autoComplete="on"
                    value={this.state.userDetails.email}
                    onChange={this.onChange}
                  />
                  {/* shipping address */}
                  <Input
                    type="text"
                    fullWidth={true}
                    placeholder="shipping address"
                    required="required"
                    name="shippingAddress"
                    autoComplete="off"
                    value={this.state.userDetails.shippingAddress}
                    onChange={this.onChange}
                  />

                  {/* State */}
                  <Select
                    fullWidth={true}
                    required="required"
                    name="state"
                    value={this.state.userDetails.state}
                    onChange={this.onChange}
                    style={{ marginTop: "1em" }}
                  >
                    <option>Select a State</option>
                    {states.map((singleState) => (
                        <option value={singleState} key={singleState}>
                          {singleState}
                        </option>
                      ))
                    }
                  </Select>

                  {/* Description */}
                  <Textarea
                    fullWidth={true}
                    placeholder="Description"
                    required="required"
                    name="description"
                    value={this.state.userDetails.description}
                    onChange={this.onChange}
                    style={{ marginTop: "1em" }}
                  />

                  {/* Upload File */}
                  <div style={{ marginTop: "1em" }}>
                    <input
                      type="file"
                      onChange={this.onUpload}
                      // required={this.state.user.id === 0}
                    />
                  </div>

                  {/* Uploaded image */}
                  {renderIf(this.state.userDetails.image !== "", () => (
                    <img
                      src={routeImage + this.state.userDetails.image}
                      alt="User Image"
                      style={{ width: 200, marginTop: "1em" }}
                    />
                  ))}
                </div>

                {/* Form submit */}
                <div style={{ marginTop: "2em", textAlign: "center" }}>
                  <Button
                    type="submit"
                    theme="secondary"
                    disabled={this.state.isLoading}
                  >
                    <Icon size={1.2} style={{ color: white }}>
                      check
                    </Icon>{" "}
                    Save
                  </Button>
                </div>
              </form>
            </GridCell>
          </Grid>
        </div>
      </div>
    );
  }
}

// Component Properties
ProfileEdit.propTypes = {
  update: PropTypes.func.isRequired,
  userDetails: PropTypes.object.isRequired,
  upload: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired,
};

function profileEditState(state) {
  return {
    userDetails: state.user.details,
  };
}

export default withRouter(
  connect(profileEditState, {
    update,
    upload,
    messageShow,
    messageHide,
  })(ProfileEdit)
);

// export default connect(profileEditState, {})(ProfileEdit);
