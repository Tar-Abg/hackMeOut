export default interface RegisterData {
  firstname: string,
  lastname: string,
  email: string,
  username: string,
  password: string,
  confirmpassword: string,
  country: string
}

export default interface User {
  id: number,
  username: string,
  email: string,
}

export default interface LoginForm {
  email: string,
  password: string,
}


