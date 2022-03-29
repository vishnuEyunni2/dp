# Cookies

Cookies are data strings that are stored in a browser. They are usally set by a `web-server` using the response `Set-Cookie` HTTP-header.
Then the browser adds up to (almost) every request to the same domain using the `Cookie` HTTP header.

one of the mostly used scenarios is authentication:
1. The server response has `Set-Cookie` in the http header, which sets a unique "session identifier" at the client.
2. This cookie is included in every request from client.

## Uses

Cookies are mainly used for three purposes:

1. Session management - Logins, shopping cart, game scores etc.,
2. Personalization - Themes, user settings etc.,
3. Tracking - Recording and analyzing the behavior.

## document.cookie

The cookie set by the server can be accessed from client via `document.cookie`.

The value of `document.cookie` consists of `name=value` pairs, delimeted by `;`. Each one is a separate cookie.

## Parsing cookies

```js
/** 
  The cookie parser returns the cookies array and each index as an array, 
  with the first value as cookie name, and second is cookie value.
*/

const cookieParser = (cookie) => {
  return cookie.split(';').map(x => x.split('=')).map(([k, ...vs]) => [k, vs.join('=')]);
}

```
## Setting to document.cookie

`document.cookie` is not a data property, its an accessor like (getter / setter). So, setting a value doesn't override all cookies.

`encodeURIComponent` is used to handle the special characters in the cookie names and values.

```js
  let name = 'my name';
  let value = 'John doe';
  document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
```

```js
// This instructs the server sending headers

HTTP/2.0 200 OK

Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

// 

GET /sample_page.html HTTP/2.0

Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry

```

## Options

There are several options for cookies.

- path
- domain
- expires, max-age
- secure
- samesite
- XSRF attack
- httpOnly




