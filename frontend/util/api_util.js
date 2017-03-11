export const newUser = userInfo => (
  $.ajax({
    method: 'POST',
    url: '/api/users/',
    data: { userInfo }
  })
);

export const logIn = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user}
  })
);

export const logOut = () => (
    $.ajax({
  method: 'DELETE', url: '/api/session'})
);


const podcast = (searchTerm) => ($.ajax({
  method: 'GET', url: `https://itunes.apple.com/search?term=${searchTerm}&entity=podcast`
}));
