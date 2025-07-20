import { IncomingMessage, ServerResponse } from "http";

export const getListPodcasts = async(req : IncomingMessage, res : ServerResponse) => {
    res.writeHead(200, { "Content-Type" : "application-json" })
    res.end(JSON.stringify([
        {
            podcastName : "flow",
            episode : "CBUM - Flow #319",
            videoId : "pQSuQmUfS30",
            cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4StKVMSNz3eXH6WV2s3phlBT8kQ",
            link : "https://www.youtube.com/live/pQSuQmUfS30?si=OY9Su1L_3jqkbb9t",
            category : ["saude", "bodybuilder"]
        },
        {
            podcastName : "flow",
            episode : "CBUM - Flow #319",
            videoId : "pQSuQmUfS30",
            cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4StKVMSNz3eXH6WV2s3phlBT8kQ",
            link : "https://www.youtube.com/live/pQSuQmUfS30?si=OY9Su1L_3jqkbb9t",
            category : ["saude", "bodybuilder"]
        }

    ]
    ))
}