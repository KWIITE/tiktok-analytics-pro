import NextAuth from "next-auth"
import OAuthProvider from "next-auth/providers/oauth"

const handler = NextAuth({
  providers: [
    OAuthProvider({
      id: "tiktok",
      name: "TikTok",
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
        return {
          id: profile.data.user.id,
          name: profile.data.user.display_name,
          image: profile.data.user.avatar_url,
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
