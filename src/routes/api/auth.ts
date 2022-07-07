import { google } from 'googleapis';
import * as photos from 'googlephotos';

export const oauth2Client = new google.auth.OAuth2({
	clientId: '103264069496-begljqm3njhft0eviaofltc3qobodsin.apps.googleusercontent.com',
	clientSecret: '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',
	redirectUri: 'http://localhost:3000/success'
});

const scopes = [photos.Scopes.READ_ONLY];
const url = oauth2Client.generateAuthUrl({
	access_type: 'offline',
	scope: scopes
});

export async function get() { 
    return {
        headers: {
            Location: url,
        },
        status: 302,
    }
}


