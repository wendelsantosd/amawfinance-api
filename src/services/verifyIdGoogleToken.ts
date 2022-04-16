import  { OAuth2Client, TokenPayload } from 'google-auth-library'


export const verifyIdGoogleToken  = async (token: string, isMobile: any): Promise<TokenPayload | undefined> => {
    console.log(isMobile)
    const client_id = isMobile ? 
        '360939615636-9r1cjfm7cktmhchd95gfg65n1bgn2rsu.apps.googleusercontent.com'
        :
        '987123219909-tlbchc36o51ahjr96bkbc6rpfekhh4vk.apps.googleusercontent.com'
    
    console.log(client_id)
  
    const client = new OAuth2Client(client_id)
  
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: client_id
    })
  
    const payload = ticket.getPayload()
  
    return payload
}