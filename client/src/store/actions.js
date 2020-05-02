export const RecipieAdd = (payload) => ({
  type: "ADDRECIPIE",
  payload: payload,
});

export const RecipieGet = (payload) => ({
  type: "GETRECIPIE",
  payload: payload,
});

export const DeleteRecipie = (payload, id) => ({
  type: "DELETERECIPIE",
  payload: payload,
  id: id,
});
