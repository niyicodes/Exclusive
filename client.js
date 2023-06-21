import { createClient } from "next-sanity";

const clientConfig = {
 projectId: "vzcw8bsk",
 dataset: "production",
 apiVersion: "2023-06-07",
 useCdn: false,
};

export const client = createClient(clientConfig);

