import  { OAuth2Client, TokenPayload } from 'google-auth-library'


export const verifyIdGoogleToken  = async (token: string): Promise<TokenPayload | undefined> => {
    const client_id = '987123219909-tlbchc36o51ahjr96bkbc6rpfekhh4vk.apps.googleusercontent.com'
  
    const client = new OAuth2Client(client_id)
  
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: client_id
    })
  
    const payload = ticket.getPayload()
  
    return payload
}