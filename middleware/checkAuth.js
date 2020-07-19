import axios from 'axios'

export default (context) => {
  var token = context.app.context.app.$cookies.get('_token');
  var email = context.app.context.app.$cookies.get('_email');

  if (token) {
    return axios.get('https://127.0.0.1:8000/api/users', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(response => {
      if (response.data.user &&  response.data.findIndex( x => x.email === email)) {
        return context.redirect('/home');
      } else{
        context.app.context.app.$cookies.remove('_token');
        context.app.context.app.$cookies.remove('_email');
      }
    }).catch(error => {
      context.app.context.app.$cookies.remove('_token');
      context.app.context.app.$cookies.remove('_email');
    })
  }
}
