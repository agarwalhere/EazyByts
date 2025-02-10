import { createClient } from "next-sanity";

export const client = createClient({
    projectId:"98rry409",
    dataset:"production",
    useCdn:true,
})