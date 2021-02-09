// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import Button from "../../ui/button";
import Icon from "../../ui/icon";
import H4 from "../../ui/typography/H4";
import { Input, Textarea } from "../../ui/input";
import { white } from "../../ui/common/colors";

// App Imports
import userRoutes from "../../setup/routes/user";
import { routeImage } from "../../setup/routes";
import { renderIf } from "../../setup/helpers";
import { createOrUpdate as userUpdateDetails } from "./api/actions";
import { upload, messageShow, messageHide } from "../common/api/actions";
import { APP_URL } from "../../setup/config/env";

// import AdminMenu from "../common/Menu";

// Component

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      user: {
        // id: 0,
        name: "",
        email: "",
        shippingAddress: "",
        description: "",
        image: "",
      },
    };
  }
  componentDidMount() {
    console.log(this.state.user, this.props);
  }

  onChange = (event) => {
    let user = this.state.user;
    user[event.target.name] = event.target.value;

    if (event.target.name === "name") {
      user.name = event.target.value;
    }

    this.setState({
      user,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.user);
    console.log(this.props.user.details);
    let userEmail = this.props.user.details.email;
    let newEmail = this.state.user.email;
    userEmail = newEmail;
    this.setState({
      isLoading: true,
    });

    // this.props.messageShow("Saving changes, please wait...");

    // Save changes
    // this.props
    //   .register(this.state.user)
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

          let user = this.state.user;
          user.image = `/images/uploads/${response.data.file}`;

          this.setState({
            user,
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
          <title>Profile / Update - User - Crate</title>
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
                    placeholder="email"
                    required="required"
                    name="email"
                    autoComplete="off"
                    value={this.state.user.email}
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
                    value={this.state.user.shippingAddress}
                    onChange={this.onChange}
                  />

                  {/* Description */}
                  <Textarea
                    fullWidth={true}
                    placeholder="Description"
                    required="required"
                    name="description"
                    value={this.state.user.description}
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
                  {renderIf(this.state.user.image !== "", () => (
                    <img
                      src={routeImage + this.state.user.image}
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
  user: PropTypes.object.isRequired,
  upload: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired,
};

function profileEditState(state) {
  return {
    user: state.user,
  };
}

export default connect(profileEditState, {
  // userUpdateDetails,
  upload,
  messageShow,
  messageHide,
})(ProfileEdit);

// export default connect(profileEditState, {})(ProfileEdit);
