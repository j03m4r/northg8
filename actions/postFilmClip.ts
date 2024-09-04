import { supabase } from "@/supabase";

export async function postFilmClip(fileList: FileList) {
    if (fileList && fileList.length > 0) {
        const file = fileList[0];
        const { data: uploadData, error } = await supabase.storage
            .from('videos')
            .upload(`${Date.now()}-${file.name}`, file);

        if (error) {
            console.error(`Error uploading film clip:`, error);
            return "/media/videos/warm sequence-.mp4";
        }

        const { data: urlData } = supabase.storage
            .from('videos')
            .getPublicUrl(uploadData.path);

        // public video url
        return urlData.publicUrl;
    }

    // no data: return null
    return "/media/videos/warm sequence-.mp4";
}
