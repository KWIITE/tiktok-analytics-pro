import NextAuth from "next-auth"
import { OAuthConfig } from "next-auth/providers"
import { handler as AuthHandler } from "next-auth/next"

const TikTokProvider = {
  id: "tiktok",
  name: "TikTok",
  type: "oauth",
  clientId: process.env.TIKTOK_CLIENT_ID!,
  clientSecret: process.env.TIKTOK_CLIENT_SECRET!,
  authorization: {
    url: "https://www.tiktok.com/v2/auth/authorize/",
    params: {
      scope: "user.info.basic,video.list,video.data",
      response_type: "code",
    },
  },
  token: "https://open.tiktokapis.com/v2/oauth/token/",
  userinfo: "https://open.tiktokapis.com/v2/user/info/",
  profile(profile: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return {
      id: profile.data.user.id,
      name: profile.data.user.display_name,
      image: profile.data.user.avatar_url,
    }
  },
} satisfies OAuthConfig<any>

const handler = NextAuth({
  providers: [TikTokProvider],
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
