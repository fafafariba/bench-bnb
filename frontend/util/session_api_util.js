export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users/',
    data: { user }
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
    $.ajax({
  method: 'DELETE', url: '/api/session'})
);


const podcast = (searchTerm) => ($.ajax({
  method: 'GET', url: `https://itunes.apple.com/search?term=${searchTerm}&entity=podcast`
}));
