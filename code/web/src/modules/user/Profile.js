// Imports
import React from "react";
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
import Button from "../../ui/button";
import { black, grey, grey2 } from "../../ui/common/colors";
import { level1 } from "../../ui/common/shadows";

// App Imports
import userRoutes from "../../setup/routes/user";
import { logout } from "./api/actions";
import { APP_URL } from "../../setup/config/env";

// Component
const Profile = (props) => (
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
            image={`${APP_URL}/images/profile_placeholder.jpg`}
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
              <p style={{ color: grey2, marginBottom: "2em" }}>
                {props.user.details.email}
              </p>
              <div
                style={{ color: grey2, marginBottom: "2em" }}
                aria-label="shipping-address"
              >
                <p>227 Elder Ave.</p>
                <p>Denver, CO 80205</p>
              </div>
            </div>
            <div>
              <p style={{ color: grey2, marginBottom: "2em" }}>
                This is a fun little paragraph about me and my personal style,
                etc.
              </p>
            </div>
          </div>
        </Card>
      </GridCell>
      {/* <Grid> */}
      <GridCell style={{ padding: "2em", textAlign: "left", flex: 2 }}>
        <H4 style={{ marginBottom: "0.5em" }}>Delivery History</H4>

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
      {/* </Grid> */}
    </Grid>
  </div>
);

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
