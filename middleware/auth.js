import axios from 'axios'

export default (context) => {
  var token = context.app.context.app.$cookies.get('_token');
  var email = context.app.context.app.$cookies.get('_email');
  var email = context.app.context.app.$cookies.get('_role');


  if (!token) {
    if (email) {
      context.app.context.app.$cookies.remove('_email');
    }
    return context.redirect('/login')
}
//else {
  //   return axios.get('https://127.0.0.1:8000/api/users', {
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   }).then(response => {
  //     if (response.status && response.status == 401 || response.data.findIndex( x => x.email != email)) {
  //       context.app.context.app.$cookies.remove('_role');
  //       context.app.context.app.$cookies.set('_role','salarié',{
  //         path: '/',
  //       });
  //
  //       return context.redirect('/home')
  //     }
  //   }).catch(error => {
  //     context.app.context.app.$cookies.remove('_role');
  //     context.app.context.app.$cookies.set('_role','salarié',{
  //       path: '/',
  //     });
  //     return context.redirect('/home')
  //   })
  // }
}
