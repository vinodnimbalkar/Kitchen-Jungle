<script>
  import axios from "axios";
  import { baseUrl } from "../model/BaseUrl.svelte";

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
    axios({
      method: "post",
      url: `${baseUrl}/api/items`,
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

<div class="flex justify-center m-5">
  <form
    class="w-full max-w-lg"
    on:submit|preventDefault={handleSubmit}
    enctype="multipart/form-data">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold
          mb-2">
          Recipe Title
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border
          border-gray-200 rounded py-3 px-4 mb-3 leading-tight
          focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Add recipie title"
          bind:value={title} />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold
          mb-2">
          Recipie Ingredients
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border
          border-gray-200 rounded py-3 px-4 mb-3 leading-tight
          focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Add recipie ingredients"
          bind:value={ingredients} />
        <p class="text-gray-600 text-xs italic">
          Make it as long and as crazy as you'd like
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold
          mb-2">
          Image Link
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border
          border-gray-200 rounded py-3 px-4 mb-3 leading-tight
          focus:outline-none focus:bg-white focus:border-gray-500"
          type="file"
          placeholder="Add Image Link"
          on:change={onFileUpload} />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold
          mb-2">
          Redirection Link To Recipe
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border
          border-gray-200 rounded py-3 px-4 mb-3 leading-tight
          focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Add recipie ingredients"
          bind:value={redirectionLink} />
      </div>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
        rounded focus:outline-none focus:shadow-outline"
        type="submit">
        Submit
      </button>
      <button
        class="inline-block align-baseline font-bold text-sm text-red-500
        hover:text-red-800"
        type="reset">
        Clear All
      </button>
    </div>
  </form>
</div>
