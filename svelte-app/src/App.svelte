<script>
  import axios from "axios";

  let title;
  let ingredients;
  let imageLink;
  let redirectionLink;

  const onFileUpload = e => {
    imageLink = e.target.files[0];
  };

  const handleSubmit = () => {
    let postRecipe = new FormData();
    postRecipe.set("title", title);
    postRecipe.set("ingredients", ingredients);
    postRecipe.set("redirection", redirectionLink);
    postRecipe.append("thumbnail", imageLink);
    console.log(postRecipe);
    axios({
      method: "post",
      url: "http://localhost:3000/api/items",
      data: postRecipe,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      });
  };
</script>

<h2>Add Recipie Form</h2>
<form on:submit|preventDefault={handleSubmit} enctype="multipart/form-data">
  <label>Recipie Title</label>
  <input type="text" placeholder="Add recipie title" bind:value={title} />
  <label>Recipie Ingredients</label>
  <input
    type="text"
    placeholder="Add recipie ingredients"
    bind:value={ingredients} />
  <label>Image Link</label>
  <input type="file" placeholder="Add Image Link" on:change={onFileUpload} />
  <label>Redirection Link To Recipie</label>
  <input
    type="text"
    placeholder="Add Redirection Link"
    bind:value={redirectionLink} />
  <button type="submit">Submit</button>
</form>
