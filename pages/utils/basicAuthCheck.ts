import initializeBasicAuth from 'nextjs-basic-auth';
const users = [
  {user: 'ank1988', password: 'aniki1988'},
]
export default initializeBasicAuth({users});