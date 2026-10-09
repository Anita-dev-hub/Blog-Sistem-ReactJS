
const url = "https://lpusbykdwwemckawyfli.supabase.co/rest/v1/blogs";
const apiKey = "sb_publishable_95dbRti3pImzfl5QbDwC6g_iP_Z7GdM";

export default async function request(path = "/", method = "GET", data = null) {
    const options = {
        headers: {
            apiKey,
        }
    };

    if(method !== "GET") {
        options.method = method;
    }

    if(data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${url}${path}`, options);

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
 
}    