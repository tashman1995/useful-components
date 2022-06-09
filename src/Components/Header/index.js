import React, { useState } from "react";
import classes from "./style.module.scss";
import SingleLineGrid from "../SingleLineGrid";
import Button from "../Button";
import Typography from "../Typography";
import AddNewModal from "../AddNewModal";

const Header = ({ refresh }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className={classes.header}>
      <Typography variant="heading-primary" component="h1">
        Posts
      </Typography>

      <Button
        onClick={() => setModalVisible(true)}
        color
        className={classes["header__add"]}>
        Add Post
      </Button>
      <AddNewModal
        refresh={refresh}
        modalProps={{ visible: modalVisible, setVisible: setModalVisible }}
      />
    </div>
  );
};

export default Header;
