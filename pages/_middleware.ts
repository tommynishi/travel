import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  if (process.env.ENABLE_BASIC_AUTH !== 'true') {
    return NextResponse.next()
  }
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, password] = Buffer.from(auth, 'base64').toString().split(':')

    console.log(user + "  " + password)
    console.log(process.env.BASIC_AUTH_USER + " aaaa " + process.env.BASIC_AUTH_PASSWORD)
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