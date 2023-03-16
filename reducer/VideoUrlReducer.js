const videoReducer = (state, action) => {
  switch (action.type) {
    case "CURRENT_VIDEO":
      console.log("ADD_TO_CART", action.payload);
      return action.payload;
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};
export default videoReducer;
