const travelJSON = 
[
    {"youtubeVideo": "https://www.youtube.com/watch?v=CBwKJfrm5-U",
      "title": "Bali Travel Guide - How to travel Bali",
      "author": "Allan Su",
      "rating": 4
    },
    {"youtubeVideo": "https://www.youtube.com/watch?v=oSexfR0Ubzw",
      "title": "Rome in 4k",
      "author": "Around The World 4k",
      "rating": 5
    },
    {"youtubeVideo": "https://www.youtube.com/watch?v=k7ZqiSKIB9g",
      "title": "Glasgow Vacation Travel Guid",
      "author": "Expedia",
      "rating": 3
    },
    {"youtubeVideo": "https://www.youtube.com/watch?v=xl3QM22kWV0",
      "title": "Around Malaysia",
      "author": "Drone Around The world",
      "rating": 2
    }
]

console.log(travelJSON)

const body = document.getElementsByTagName('body')[0]


let title = travelJSON.map(video => { 
    const titleDiv = document.createElement('div')
    titleDiv.innerText = `${video.title} by ${video.author}`
    body.appendChild(titleDiv)


    const link = document.createElement('embed');
    link.width = "350px";
    link.height = "280px";
    link.src = video.youtubeVideo
    // link.media = "screen and (device-width = 350px)";
    // link.media = "screen and (device-height = 280 px)";
    titleDiv.appendChild(link)
})


// console.log(title)