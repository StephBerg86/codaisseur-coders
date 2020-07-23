export function selectPostAndComments(state) {
  return state.postPage.loading
    ? null
    : {
        post: state.postPage.post,
        comments: state.postPage.comments,
      };
}

// returns an object of the shape { post, comments }
// if the post is done loading, returns null if the post is still loading
// display a "Loading..." message when the post is still loading,
// or a "DONE!" message when the post has been fetched.
