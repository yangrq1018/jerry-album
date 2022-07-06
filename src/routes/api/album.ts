
import type { RequestEvent } from "@sveltejs/kit";
import Photos from 'googlephotos';

export async function post(e: RequestEvent) {
    const { code } = await e.request.json();
    const photos = new Photos(code);
    console.log("requesting albums")
    const response = await photos.albums.list(50);
    return {
        status: 200,
        data: response,
    }
}