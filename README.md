# PodcastAPI

#### Features
 - Listar os eps por categorias
    - [saude, fitness, mentalidade, humor]
 - Filtrar eps por nome do podcast

### Implementacao
Retorna um podcast com nome do podcast, nome do ep, imagem de capa e link
```js
[
    {
        podcastName : "flow"
        episode : "CBUM - Flow #319",
        videoId : "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4StKVMSNz3eXH6WV2s3phlBT8kQ"
        link : "https://www.youtube.com/live/pQSuQmUfS30?si=OY9Su1L_3jqkbb9t"
        category : ["saude", "bodybuilder"]
    },
    {
        podcastName : "flow"
        episode : "CBUM - Flow #319",
        videoId : "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4StKVMSNz3eXH6WV2s3phlBT8kQ"
        link : "https://www.youtube.com/live/pQSuQmUfS30?si=OY9Su1L_3jqkbb9t"
        category : ["saude", "bodybuilder"]
    }

]
```

Retornar pesquisa por filtro
