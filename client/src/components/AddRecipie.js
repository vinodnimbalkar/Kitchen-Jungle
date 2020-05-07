import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { RecipieAdd } from "../store/actions";
import { useDispatch } from "react-redux";
import axios from "axios";

const AddRecipie = () => {
  const [title, setTitle] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [imageLink, setImageLink] = useState(null);
  const [redirectionLink, setRedirectionLink] = useState(null);
  const dispatch = useDispatch();

  const onChangeHandle = e =>{
    setImageLink(e.target.files[0]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let postRecipe = new FormData();
    postRecipe.set("title", title);
    postRecipe.set("ingredients", ingredients);
    postRecipe.set("redirection", redirectionLink);
    postRecipe.append("thumbnail", imageLink);
    dispatch(RecipieAdd(postRecipe));
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/items',
      data: postRecipe,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(function (response) {
      //handle success
      console.log(response);
    })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <div>
      <Container>
        <h2 className="my-4">Add Recipie Form</h2>
        <Form
          className="add-recipie-form"
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <FormGroup>
            <Label>Recipie Title</Label>
            <Input
              type="text"
              placeholder="Add recipie title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Recipie Ingredients</Label>
            <Input
              type="text"
              placeholder="Add recipie ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Image Link</Label>
            <Input
              type="file"
              placeholder="Add Image Link"
              value={imageLink}
              onChange={onChangeHandle}
            />
          </FormGroup>
          <FormGroup>
            <Label>Redirection Link To Recipie</Label>
            <Input
              type="text"
              placeholder="Add Redirection Link"
              value={redirectionLink}
              onChange={(e) => setRedirectionLink(e.target.value)}
            />
          </FormGroup>

          <Button type="submit" className="btn-info">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddRecipie;
