/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    console.log(name, email, password, passwordConfirm)
    const res = await axios({
      method: 'POST',
      // url: '/api/v1/users/signup',
      url: `${window.location.origin}/api/v1/admin/user/signup`,
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    // let U =`${window.location.origin}/api/v1/admin/user/${valueSearch}`

    if (res.data.status === 'success') {
      showAlert('success', 'signed up in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    // console.log({name, email, password, passwordConfirm})
    showAlert('error', err.response.data.message);
  }
};
