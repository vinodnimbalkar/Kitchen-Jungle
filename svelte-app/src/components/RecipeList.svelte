<script>
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition';
  import axios from "axios";
  import { link } from "svelte-spa-router";
  import { baseUrl } from "../model/BaseUrl.svelte";

  let recipeData = [];

  onMount(async () => {
    const response = await axios.get(`${baseUrl}/api/items`);
    recipeData = response.data;
  });

  const deleteRecipe = async id => {
    const response = await axios.delete(`${baseUrl}/api/items/${id}`);
    console.log(response);
  };
</script>

<div class="max-w-full flex flex-col">
  <div class="flex flex-row flex-wrap items-center justify-between">
    {#if recipeData && recipeData.length}
      {#each recipeData as recipe}
        <div class="max-w-full flex-1 rounded-lg overflow shadow-lg m-4" in:fade="{{ y: 200, duration: 2000 }}">
          <img
            class="w-full rounded-lg shadow-lg z-50"
            src="./{recipe.thumbnail.replace('public/', '')}"
            alt={recipe.title} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              <a href={recipe.redirection} target="_blank">{recipe.title}</a>
            </div>
            <p class="text-gray-700 text-base">{recipe.ingredients}</p>
          </div>
          <div class="flex flex-row justify-between px-6 py-4">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
              font-semibold text-gray-700 mr-5">
              <a href="/edit-recipe/{recipe._id}" use:link>EDIT</a>
            </span>
            <span
              class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm
              font-semibold text-red-700 mr-2"
              on:click={() => deleteRecipe(recipe._id)}>
              DELETE
            </span>
          </div>
        </div>
      {/each}
    {:else}
      <h2>Loading...</h2>
    {/if}
  </div>
</div>
