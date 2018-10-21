const initState = {
  posts: [
    {id: '1', title: 'olar 1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa, doloremque omnis vel dolorem ullam alias, dolorum facilis distinctio enim esse. Velit omnis, doloribus eveniet veritatis cupiditate optio nemo officiis.'},
    {id: '2', title: 'olar 2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa, doloremque omnis vel dolorem ullam alias, dolorum facilis distinctio enim esse. Velit omnis, doloribus eveniet veritatis cupiditate optio nemo officiis.'},
    {id: '3', title: 'olar 3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa, doloremque omnis vel dolorem ullam alias, dolorum facilis distinctio enim esse. Velit omnis, doloribus eveniet veritatis cupiditate optio nemo officiis.'}
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => action.id !== post.id);
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;