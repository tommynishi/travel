import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  console.log(req);
  console.log(process.env.ENABLE_BASIC_AUTH);

  if (process.env.ENABLE_BASIC_AUTH !== 'true') {
    return NextResponse.next()
  }
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, password] = Buffer.from(auth, 'base64').toString().split(':')
    // const [user, password] = auth.toString().split(':');
    console.log("aaaaa")
    console.log(basicAuth);
    console.log(auth);
    console.log(user);

    if (
      user === process.env.BASIC_AUTH_USER &&
      password === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next()
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}