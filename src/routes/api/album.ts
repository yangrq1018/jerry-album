import type { RequestEvent } from "@sveltejs/kit";
import Photos from 'googlephotos';
import {oauth2Client} from './auth'

export async function post(e: RequestEvent) {
    const { code } = await e.request.json();
    const {tokens} = await oauth2Client.getToken(code)
    const photos = new Photos(tokens);
    const response = await photos.albums.list(50);
    return {
        status: 200,
        data: response,
    }
}