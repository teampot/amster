import cookie from 'cookie';

export default (ctx) => {
  if (!ctx.req.headers || !ctx.req.headers.cookie) return {};
  return cookie.parse(ctx.req.headers.cookie, {secure: true});
}