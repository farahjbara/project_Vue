import axios from 'axios'

export default (context) => {
  var token = context.app.context.app.$cookies.get('_token');
  var email = context.app.context.app.$cookies.get('_email');

  if (token) {
    return  this.$axios.get('/users', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(response => {
      if (response.data.user &&  (response.data.indexOf(email)!=-1)) {
        return context.redirect('/');
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
