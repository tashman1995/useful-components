import React, { useEffect, useMemo, useState } from "react";
import Modal from "../Modal";
import Form from "../Form";
import Container from "../Container";
import Typography from "../Typography";
import axios from "axios";
import Loading from "../Loading";

const AddNewModal = ({ modalProps, refresh }) => {
  let defaultValues = useMemo(() => {
    return { title: "", body: "" };
  }, []);

  const [values, setValues] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);

  // Resets values when modal is closed
  useEffect(() => {
    setValues(defaultValues);
  }, [modalProps.visible, defaultValues]);

  const inputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      label: "Title",
      placeholder: "The title of your post",
      required: true,
      errorMessage: "Post must have a title",
    },
    {
      id: 2,
      name: "body",
      type: "textarea",
      rows: 6,
      placeholder: "Post content goes here",
      label: "Post Body",
      required: true,
      errorMessage: "Post must have a body",
    },
  ];

  const onSubmit = (values) => {
    setLoading(true);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", values)
      .then((res) => {
        modalProps.setVisible(false);
        refresh();
        setLoading(false);
      });
  };

  return (
    <Modal {...modalProps}>
      <Container>
        <Loading loading={loading}>
          <Typography
            style={{ marginBottom: "2rem" }}
            variant="heading-primary"
            component="h1">
            Add New Post
          </Typography>
          <Form
            inputs={inputs}
            values={values}
            setValues={setValues}
            onSubmit={onSubmit}>
          </Form>
        </Loading>
      </Container>
    </Modal>
  );
};

export default AddNewModal;
