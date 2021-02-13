// Imports
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import Icon from "../../ui/icon";
// import Tile from "../../ui/image/Tile";
// import { Input, Textarea, Select } from "../../ui/input";
import Card from "../../ui/card/Card";
import ImageTile from "../../ui/image/Tile";
import { H3, H4 } from "../../ui/typography";
import Avatar from "../../ui/Avatar/Avatar";
import Modal from "../../ui/modal";
import Button from "../../ui/button";
import { black, grey, grey2 } from "../../ui/common/colors";
import { level1 } from "../../ui/common/shadows";

// App Imports
import userRoutes from "../../setup/routes/user";
import { logout } from "./api/actions";
import { APP_URL } from "../../setup/config/env";
import Deliveries from "./Deliveries";
import { routeImage } from "../../setup/routes/index";
import { getListByUser } from "../subscription/api/actions";

// Component
const Profile = (props) => {
  console.log(props.user);
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>My Profile - Crate</title>
      </Helmet>

      {/* Top title bar */}

      <Grid style={{ textAlign: "center", backgroundColor: grey }}>
        <GridCell style={{ padding: "2em" }}>
          <H3 font="secondary">My profile</H3>
        </GridCell>
      </Grid>

      {/* User Information Grid: image, name, email, shipping address, descrip  */}

      <Grid>
        <GridCell style={{ padding: "2em" }} justifyCenter={true}>
          <Card style={{ width: "18em" }}>
            <ImageTile
              width={288}
              height={200}
              shadow={level1}
              image={
                props.user.details.profileImage !== undefined
                  ? routeImage + props.user.details.profileImage
                  : `${APP_URL}/images/profile_placeholder.jpg`
              }
            />
            <div style={{ padding: "2em", marginBottom: "0.5em" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "-20px",
                  paddingBottom: "1em",
                }}
              >
                <Avatar name={props.user.details.name} />

                <Link to={userRoutes.profileEdit.path}>
                  <Icon size={2} style={{ color: "#5f5dbe" }}>
                    mode_edit
                  </Icon>
                </Link>
              </div>
              <div style={{ textAlign: "center" }}>
                <H4 style={{ marginBottom: "0.5em" }}>
                  {props.user.details.name}
                </H4>
                <p style={{ marginBottom: "2em" }}>
                  {props.user.details.email}
                </p>
                <div
                  style={{ marginBottom: "2em" }}
                  aria-label="shipping-address"
                >
                  <p>
                    {props.user.details.streetAddress !== undefined
                      ? props.user.details.streetAddress
                      : "Update your shipping address to receive your crates!"}
                  </p>
                  <p>
                    {props.user.details.city !== undefined
                      ? props.user.details.city
                      : "City"}
                  </p>
                  <p>
                    {props.user.details.state !== undefined
                      ? props.user.details.state
                      : "State"}
                  </p>
                  <p>
                    {props.user.details.zip !== undefined
                      ? props.user.details.zip
                      : "Zip"}
                  </p>
                </div>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    marginBottom: "2em",
                  }}
                >
                  {props.user.details.description !== undefined
                    ? props.user.details.description
                    : "Express a bit about yourself and your style"}
                </p>
              </div>
            </div>
          </Card>
        </GridCell>
        {/* <Grid> */}
        <GridCell style={{ paddingTop: "4em", textAlign: "left", flex: 2 }}>
          <Deliveries />

          {/* </GridCell> */}
          {/* </Grid> */}
          <Link to={userRoutes.subscriptions.path}>
            <Button theme="primary">Subscriptions</Button>
          </Link>

          <Button
            theme="secondary"
            onClick={props.logout}
            style={{ marginLeft: "1em" }}
          >
            Logout
          </Button>
        </GridCell>
      </Grid>
      {/* </Grid> */}
    </div>
  );
};

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

// Component State
function profileState(state) {
  return {
    user: state.user,
  };
}

export default connect(profileState, { logout })(Profile);
