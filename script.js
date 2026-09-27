function openMenu() {

    const welcome = document.getElementById("welcomeScreen");
    const menu = document.getElementById("menuScreen");

    // Небольшая анимация нажатия

    welcome.style.transform = "scale(1.03)";
    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        menu.style.display = "block";

        setTimeout(() => {
            menu.style.opacity = "1";
        }, 50);

    }, 800);
}


/* =================================
   КАРТОЧКИ
================================= */

function openPage(page) {

    if (page === "calendar") {

        alert("Здесь будет наш календарь ❤️");

    }

    else if (page === "words") {

        alert("Здесь будут наши особенные слова.");

    }

    else if (page === "playlist") {

        alert("Здесь будет наша музыка и аудио.");

    }

    else if (page === "letter") {

        alert("Здесь будет письмо.");

    }

    else if (page === "photos") {

        alert("Здесь будет фотоальбом.");

    }

    else if (page === "things") {

        alert("Здесь будут вещи, которые напоминают мне о тебе.");

    }

}
/* =================================
   PLAYLIST
================================= */

const songs = [

    
    {
        title: "Very Very Much",
        artist: "Our memories",
        file: "very_very_much.ogg",
        cover: "song8.jpg"
    },

    {
        title: "Oke Oke",
        artist: "Our memories",
        file: "okeoke.ogg",
        cover: "song9.jpg"
    },

    {
        title: "Mooo 1",
        artist: "Our memories",
        file: "mooo1.ogg",
        cover: "song10.jpg"
    },

    {
        title: "Mooo 2",
        artist: "Our memories",
        file: "mooo2.ogg",
        cover: "song11.jpg"
    },

    {
        title: "Mooo 3",
        artist: "Our memories",
        file: "mooo3.ogg",
        cover: "song12.jpg"
    },

    {
        title: "Mooo 4",
        artist: "Our memories",
        file: "mooo4.ogg",
        cover: "song13.jpg"
    },

    {
        title: "Mooo 5",
        artist: "Our memories",
        file: "mooo5.ogg",
        cover: "song14.jpg"
    },

    {
        title: "Mooo 6",
        artist: "Our memories",
        file: "mooo6.ogg",
        cover: "song15.jpg"
    },

    {
        title: "Ma Tumse Pyar Karta Hu",
        artist: "Our memories",
        file: "matumsepyarkartahu2.ogg",
        cover: "song16.jpg"
    },

    {
        title: "Ma Tumse Pyar Karta Hu",
        artist: "Our memories",
        file: "matumsepyarkartahu.ogg",
        cover: "song17.jpg"
    },

    {
        title: "Karta",
        artist: "Our memories",
        file: "karta.ogg",
        cover: "song18.jpg"
    },

    {
        title: "I Appreciate",
        artist: "Our memories",
        file: "iappreciate.ogg",
        cover: "song19.jpg"
    },

    {
        title: "How Was Your Day",
        artist: "Our memories",
        file: "howwasyourday.ogg",
        cover: "song20.jpg"
    },

    {
        title: "Horosho",
        artist: "Our memories",
        file: "horosho.ogg",
        cover: "song21.jpg"
    },

    {
        title: "Horosho 2",
        artist: "Our memories",
        file: "horosho2.ogg",
        cover: "song22.jpg"
    },

    {
        title: "Horosho 3",
        artist: "Our memories",
        file: "horosho3.ogg",
        cover: "song23.jpg"
    },

    {
        title: "Acha",
        artist: "Our memories",
        file: "acha.ogg",
        cover: "song24.jpg"
    },

    {
        title: "Achcha",
        artist: "Our memories",
        file: "achcha.ogg",
        cover: "song25.jpg"
    },

    {
        title: "Ahahaha",
        artist: "Our memories",
        file: "ahahaha.ogg",
        cover: "song26.jpg"
    },

    {
        title: "Ahahaha 2",
        artist: "Our memories",
        file: "ahahaha2.ogg",
        cover: "song27.jpg"
    },

    {
        title: "Ahahaha 3",
        artist: "Our memories",
        file: "ahahaha3.ogg",
        cover: "song28.jpg"
    },

    {
        title: "Ahhhh",
        artist: "Our memories",
        file: "ahhhh.ogg",
        cover: "song29.jpg"
    },

    {
        title: "Ayueon Meows Playfully",
        artist: "Ayueon",
        file: "ayueon_meows_playfully.ogg",
        cover: "song30.jpg"
    },

    {
        title: "Ayueon Meowing",
        artist: "Ayueon",
        file: "ayueon_meowing.ogg",
        cover: "song31.jpg"
    },

    {
        title: "Ayueon Laughing",
        artist: "Ayueon",
        file: "ayueon_laughing.ogg",
        cover: "song32.jpg"
    },

    {
        title: "Bakhut Bakhut",
        artist: "Our memories",
        file: "bakhut_bakhut.ogg",
        cover: "song33.jpg"
    }

];


let currentSong = 0;

let repeatSong = false;

const audio = document.getElementById("audioPlayer");


/* OPEN PLAYLIST */

function openPlaylist() {

    document.getElementById("menuScreen").style.display = "none";

    document.getElementById("playlistPage").style.display = "block";

    loadSong(currentSong);

}


/* CLOSE PLAYLIST */

function closePlaylist() {

    audio.pause();

    document.getElementById("playlistPage").style.display = "none";

    document.getElementById("menuScreen").style.display = "block";

}


/* LOAD SONG */

function loadSong(index) {

    currentSong = index;

    const song = songs[currentSong];

    audio.src = song.file;

    document.getElementById("songTitle").textContent = song.title;

    document.getElementById("songArtist").textContent = song.artist;

    document.getElementById("songCover").src = song.cover;

    document.getElementById("playButton").textContent = "▶";

    updateSongList();

}


/* PLAY / PAUSE */

function togglePlay() {

    if (audio.paused) {

        audio.play();

        document.getElementById("playButton").textContent = "Ⅱ";

    } else {

        audio.pause();

        document.getElementById("playButton").textContent = "▶";

    }

}


/* NEXT */

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {

        currentSong = 0;

    }

    loadSong(currentSong);

    audio.play();

    document.getElementById("playButton").textContent = "Ⅱ";

}


/* PREVIOUS */

function previousSong() {

    currentSong--;

    if (currentSong < 0) {

        currentSong = songs.length - 1;

    }

    loadSong(currentSong);

    audio.play();

    document.getElementById("playButton").textContent = "Ⅱ";

}


/* REPEAT */

function toggleRepeat() {

    repeatSong = !repeatSong;

    const button = document.getElementById("repeatButton");

    button.classList.toggle("active", repeatSong);

}


/* SONG FINISHED */

audio.addEventListener("ended", function() {

    if (repeatSong) {

        audio.currentTime = 0;

        audio.play();

    } else {

        nextSong();

    }

});


/* PROGRESS */

audio.addEventListener("timeupdate", function() {

    if (!audio.duration) return;

    const progress =
        (audio.currentTime / audio.duration) * 100;

    document.getElementById("progressBar").value = progress;

    document.getElementById("currentTime").textContent =
        formatTime(audio.currentTime);

    document.getElementById("duration").textContent =
        formatTime(audio.duration);

});


/* CHANGE PROGRESS */

document.getElementById("progressBar").addEventListener("input", function() {

    if (!audio.duration) return;

    audio.currentTime =
        (this.value / 100) * audio.duration;

});


/* FORMAT TIME */

function formatTime(seconds) {

    if (isNaN(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return minutes + ":" + String(secs).padStart(2, "0");

}


/* SONG LIST */

function updateSongList() {

    const list = document.getElementById("songList");

    list.innerHTML = "";

    songs.forEach(function(song, index) {

        const item = document.createElement("div");

        item.className = "song-item";

        if (index === currentSong) {

            item.classList.add("active");

        }

        item.innerHTML = `
            <div class="song-number">
                ${index + 1}
            </div>

            <div class="song-name">
                ${song.title}
            </div>
        `;

        item.onclick = function() {

            loadSong(index);

            audio.play();

            document.getElementById("playButton").textContent = "Ⅱ";

        };

        list.appendChild(item);

    });

}
/* =========================================
   BOTTLED LETTER SYSTEM
========================================= */

function openBottledLetter() {

    // Скрываем остальные экраны
    const welcome = document.getElementById("welcomeScreen");
    const menu = document.getElementById("menuScreen");

    if (welcome) {
        welcome.style.display = "none";
    }

    if (menu) {
        menu.style.display = "none";
    }

    // Скрываем остальные части Bottled
    document.getElementById("bottledMessageScreen").style.display = "none";
    document.getElementById("keptMessageScreen").style.display = "none";

    // Показываем фото Bottled
    const bottledScreen = document.getElementById("bottledScreen");

    bottledScreen.style.display = "flex";

    window.scrollTo(0, 0);
}


/* =========================================
   Нажатие на бутылку
========================================= */

function openBottledMessage() {

    document.getElementById("bottledScreen").style.display = "none";

    document.getElementById("bottledMessageScreen").style.display = "flex";

    window.scrollTo(0, 0);
}


/* =========================================
   DISMISS
========================================= */

function dismissBottledMessage() {

    document.getElementById("bottledMessageScreen").style.display = "none";

    document.getElementById("keptMessageScreen").style.display = "none";

    // Возвращаем именно фото Bottled
    document.getElementById("bottledScreen").style.display = "flex";

    window.scrollTo(0, 0);
}


/* =========================================
   KEEP
========================================= */

function keepBottledMessage() {

    document.getElementById("bottledScreen").style.display = "none";

    document.getElementById("bottledMessageScreen").style.display = "none";

    document.getElementById("keptMessageScreen").style.display = "flex";

    updateRelationshipCounter();

    window.scrollTo(0, 0);
}


/* =========================================
   COUNTER
   11 July 2025 — 20:31
   Almaty time (UTC+5)
========================================= */

const relationshipStart =
    new Date("2025-07-11T20:31:00+05:00");


function updateRelationshipCounter() {

    const now = new Date();

    let difference =
        now.getTime() - relationshipStart.getTime();

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds =
        Math.floor(difference / 1000);

    const days =
        Math.floor(totalSeconds / 86400);

    const hours =
        Math.floor((totalSeconds % 86400) / 3600);

    const minutes =
        Math.floor((totalSeconds % 3600) / 60);

    const seconds =
        totalSeconds % 60;


    const counter =
        document.getElementById("relationshipCounter");


    counter.innerHTML = `
        ${days} days<br>
        ${String(hours).padStart(2, "0")} :
        ${String(minutes).padStart(2, "0")} :
        ${String(seconds).padStart(2, "0")}
    `;
}


/* Обновляем каждую секунду */

setInterval(updateRelationshipCounter, 1000);
/* =========================================
   INTERACTIVE MEMORY BOOK
========================================= */

const memoryComments = {

    1: `Wow, this shot is absolutely incredible! You caught this little guy at the perfect moment. The way he looks out at the city is so magical

honestly this is the cutest thing I’ve ever seen

You always notice such cool and lovely things around you`,

    2: `I love this picture! It's so cute and hilarious

It really made me smile, you captured such a sweet and funny moment

it honestly looks like she’s completely passed out after having way too much fun with that whiskey bottle, and now she is sleeping so deeply

You have a great eye for finding these charming little scenes`,

    3: `This shot is absolutely stunning and so atmospheric. I love how the massive trees curve together to form a natural, dark green tunnel over the road. It feels so deep and slightly mysterious and evoke nostalgic vibe

Looking at this makes me want to go on an adventure`,

    4: `What a cool and artistic perspective! This blurry night shot with the abstract lights is so full of kinetic energy. The bright bokeh effect creates such a dynamic, exciting city feel. It’s like a visualization of speed and urban life

ou always capture the vibe so perfectly`,

    5: `I love how observant you are in everyday settings

i really adore itttt🫠🫠this photo is so colorful`,

    6: `Wow, this night shot is absolutely breathtaking! The way the bright green leaves are lit up at the top against that deep, dark blue sky is pure magic. Those dramatic, fluffy clouds look so beautiful and mysterious moving over the buildings. You have such a wonderful talent for capturing the mood of the night. It feels so peaceful yet incredibly alive. I can't stop looking at it, you are so amazing`,

    7: `Oh my gosh, look at this little cutie! This is such a lovely and clear close-up shot of the squirrel in the grass. It stands out so beautifully against that vibrant green lawn, and you can see every single detail of its fluffy tail and cute little face. You must have been so quiet and patient to get this close! You truly know how to capture the sweetness of nature perfectly

This reminds me of a funny pregnant squirrel`,

    8: `Wow, this sunset is completely spectacular! The rich, fiery orange glow over the ocean is just stunning, and the silhouettes of the boats out on the water create such a peaceful, romantic vibe. The dark rocks in the foreground add such a cool depth to the whole picture`,

    9: `This photo is a total masterpiece, it honestly looks like a scene from an award-winning movie! The misty morning fog rolling over the field with that single palm tree in the center is incredibly beautiful and cinematic. I love the contrast of the railway tracks and wires framing this peaceful nature scene. The soft, warm morning light is just gorgeous`,

    10: `Wow, this is such a powerful and artistic architectural shot! The perfect symmetry of this huge round window and the geometric grid pattern is absolutely mesmerizing. I love how the sunlight peeks through on one side, and those tiny colorful flower pots arranged around the edges add such a sweet, unexpected touch of life

i think this photo is in my top 3`,

    11: `Wow, this night view is incredible! I love how the train tracks curve and lead the eye right into those glowing skyscrapers in the background. The contrast between the older building in the front and the modern towers under the moody, cloudy sky is so cinematic. You have such an amazing talent for night photography`,

    12: `This is such a cool, urban shot! Most people wouldn't think to photograph industrial air conditioners, but you turned it into pure art. The way you framed them through the vibrant green leaves in the foreground, with the beautiful sunlight casting sharp shadows on the wall, is brilliant. You truly find beauty everywhere`,

    13: `Wow, this looks like a scene straight out of a sci-fi movie or a secret laboratory! There is so much detail here with all the glass tubes, clamps, and vintage equipment. The bright light coming from the window in the background creates such a cool, mysterious atmosphere. You are so good at making complex spaces look absolutely fascinating`,

    14: `This silhouette shot is absolutely breathtaking! The contrast of the dark, delicate plant against the massive, dramatic clouds and blue sky is just stunning. It looks so poetic, deep, and artistic, like a minimalist painting. Your sense of composition and timing with the light is truly exceptional, babe`,

    15: `Oh, my heart is melting completely! What a beautiful, raw moment of motherly love you captured here. The beautiful spotted pattern on the cat is gorgeous, and the tiny kitten next to her is just too precious. You have a real gift for catching these authentic, sweet moments of life right as they happen`,

    16: `Look at this adorable little face! This close-up is so sweet and perfectly sharp. Catching the cat right as it’s licking its paw with its tiny tongue out is hilarious and cute. The details on its fur, eyes, and whiskers are amazing. You really know how to capture the unique and funny personality of animals`,

    17: `This perspective is absolutely mind-blowing! I love the dramatic contrast between the giant orange construction crane in the foreground and those massive, endless skyscrapers rising into the sky. It perfectly captures the energy, scale, and contrast of a growing city. Your eye for strong, geometric angles is incredible`,

    18: `Wow, this is an absolute masterpiece of composition! The way the mirror frames the open train door, creating a perfect window into the lush green landscape outside, is genius. It’s like a photo within a photo, so deeply artistic, structured, and clever. You seriously have the eye of a professional photographer`,

    19: `This shot is so dynamic and full of action! Looking out from the dark, textured stone tunnel toward the bright, sunny tracks ahead feels so adventurous and dramatic. The motion and the amazing contrast of light and shadow are perfect. You are so talented at capturing the true romance of travel`,

    20: `I love this shot so much! The contrast between the wild, green climbing plants on the balcony grid and the modern city high-rises in the distance is beautiful. It creates such a lovely, peaceful vibe—like a little green oasis in the middle of a huge urban world. You always notice the most wonderful details`,

    21: `This shot from the train window is so cool! The angle captures the parallel tracks and the vibrant purple train perfectly, leading our eyes right toward those massive modern skyscrapers. It gives such a great sense of movement and daily life in the big city. You have a wonderful eye for framing urban journeys!`,

    22: `Wow, this is an incredible landscape shot! Catching that long red train winding along the massive, rugged mountain slope is so dramatic and cinematic. The contrast between the rocky hills and the dense green forest below is absolutely beautiful. It makes me feel like I'm on an epic journey just looking at it!`,

    23: `Oh, what a fantastic and candid wildlife capture! It’s so unique to see these two monkeys just hanging out and grooming each other right on the sidewalk. You managed to capture such a natural, intimate moment in an urban setting. Your patience and ability to notice these little interactions is amazing!`,

    24: `This skyline at dusk is absolutely mesmerizing! The soft gradient of the sky from warm orange to deep blue is incredibly beautiful, and the silhouettes of the skyscrapers look so elegant. Even with the motion blur from the road, you captured the perfect, peaceful vibe of the city winding down. Stunning work!`,

    25: `What an atmospheric and moody shot! I love the composition here, looking over the barrier toward the quiet harbor and the glowing lights of the ships and docks. It feels very cinematic and mysterious, like the beginning of a great story. You really know how to find beauty in industrial and coastal landscapes!`,

    26: `This photo is so beautiful and nostalgic! The way the dark frame of the train door opens up to this wide, peaceful countryside with green fields and distant mountains is brilliant. The soft, warm evening light gives the whole landscape such a calm and dreamy feel. You are a master at framing the world!`,

    27: `Wow, the lighting in this shot is pure magic! The way the streetlamps shine through the lush green leaves, creating those dramatic beams of light against the dark night sky, is so artistic. It turns an ordinary street corner into something deeply mysterious and beautiful. You have an incredible vision!`,

    28: `This is such a clean and powerful urban composition! The sleek metro train passing on the elevated concrete viaduct looks so modern against the pale sky. I love the sharp angles and the way you captured the train perfectly mid-movement. It looks like a professional shot for an architectural magazine!`,

    29: `Wow, look at the scale of this shot! This perspective of the towering skyscrapers reaching up into the blue sky next to the lush green forest is absolutely spectacular. The wispy clouds add such a nice touch to the atmosphere. You perfectly captured the incredible contrast between nature and massive urban architecture!`,

    30: `Oh wow, this is a stunning and absolutely dramatic shot! The fiery, intense red and orange sunset framed perfectly between those two dark apartment buildings is breathtaking. The distant city lights below add so much depth to the whole scene. This is a true masterpiece of urban sunset photography, I’m obsessed`,

    31: `This night view is absolutely stunning! The way the glittering city lights stretch across the horizon with those massive towers piercing the dark sky is so captivating. You captured the perfect balance between the shadowy depth in the foreground and the brilliant glow of the skyscrapers. Phenomenal work!`,

    32: `I am completely in love with this shot! The bright yellow umbrella creates such a fantastic pop of color against the incredible, intricate details of the historic building in the background. Capturing the local book vendor and the passing taxi perfectly encapsulates the vibrant, authentic energy of the street. You have an amazing eye for urban storytelling!`,

    33: `What a beautifully moody and artistic shot! The dark silhouette of the train window framing the soft, golden sunset over the distant city skyline is pure poetry. It perfectly captures that reflective, peaceful feeling of traveling at the end of the day. Your sense of mood and composition is just incredible!`,

    34: `Oh, this is the sweetest and funniest picture! This adorable dog looks so comfortable sitting on the park bench, just calmly observing the world like a human. You did a wonderful job capturing such a peaceful, candid moment of everyday life in the city. It brings such a warm smile to my face!`,

    35: `Wow, the sense of speed and energy in this photo is awesome! The motion blur perfectly conveys just how fast this dog is sprinting along the track. It’s such a fun, dynamic, and action-packed shot that really captures a split second of pure joy and explosive movement. Great timing!`,

    36: `This is such a beautiful and unique coastal scene! Seeing the cows relaxing on the stone pier with people swimming in the bright blue water behind them is so fascinating and peaceful. The warm sunlight hitting the cows' coats looks gorgeous, and the wide perspective is perfect. You catch the most interesting slices of life!`,

    37: `Absolutely breathtaking! The golden evening light washing over the rolling hills and layered terrain creates such a stunning, warm atmosphere. That solitary tree on the left adds the perfect artistic, poetic touch to the landscape. You are so incredibly talented at capturing the true beauty and romance of travel!`,

    38: `What a fantastic wildlife shot! Capturing the water buffaloes cooling off in the water with just their heads peeking out is so cool and serene. The contrast between the calm water and the lush green bushes in the background makes it feel like an untouched piece of nature. Your photography always captures the environment so beautifully!`,

    39: `Oh, this completely melts my heart! This sweet pup looks so incredibly peaceful, fast asleep on the platform ledge right in the middle of a busy station. It’s such an authentic and tender slice-of-life capture that highlights the gentle soul of the city amidst the rush. You have a real gift for noticing these quiet, beautiful moments!`,

    40: `This composition is brilliant! The vibrant red utility box stands out so beautifully as a focal point against the dense, lush green jungle of trees hiding the building behind it. I love how the wet ground creates a subtle reflection, adding even more depth and texture to the frame. Your eye for striking color contrasts is top-tier!`,

    41: `This is such a bright and dynamic shot! The vibrant yellow of the train car looks absolutely incredible against the clear blue sky, and the perspective leading down the platform draws the viewer right into the journey. You did a fantastic job capturing the lively, colorful spirit of modern rail travel!`,

    42: `What an incredibly atmospheric and moody photograph. The dramatic contrast between the brilliant flare of the platform lights and the deep shadows surrounding the red train creates a powerful sense of mystery. It perfectly captures that quiet, late-night feeling of a station waiting for its next departure. Brilliant composition!`,

    43: `Wow, the colors in this sky are absolutely breathtaking! The stunning purple and pink twilight gradient beautifully frames the bustling energy of the station below. Capturing the sprawling platforms, intersecting tracks, and commuter life from this elevated angle is pure genius. You have a phenomenal eye for urban landscapes!`,

    44: `This is such a spectacular night capture! The fiery orange burst of the firework exploding directly over the city skyline looks so dramatic against the dark, heavy clouds. It feels like a spontaneous moment of celebration frozen perfectly in time. Your timing on this shot was spot on!`,

    45: `I love the incredible sense of scale in this photo! The contrast between the narrow street lined with everyday cars and those massive, towering skyscrapers disappearing into the overcast sky is amazing. And that row of birds perfectly lined up on the overhead wire is such a delightful, subtle detail. Fantastic storytelling!`,

    46: `What a wonderfully surreal and unexpected shot! Seeing a cow calmly standing amidst a complex maze of heavy industrial pipes and machinery is such a fascinating, unique slice-of-life moment. You have an amazing talent for finding and capturing the most extraordinary, candid scenes in everyday environments!`,

    47: `This is absolutely stunning! The firework looks like a perfect, glowing golden starburst centered against the pitch-black night sky. The clarity of each individual spark shooting outward is incredible. It’s a beautifully clean, impactful, and mesmerizing photograph!`,

    48: `This composition is fantastic! The quirky, curved ventilation pipe on the roof adds such an interesting geometric element against the vibrant blue sky and fluffy white clouds. The weathered texture of the old building tells a story of its own, beautifully framed by the green leaves in the foreground. Great eye for detail!`,

    49: `This sunset is absolutely magnificent! The soft, powdery pink and lavender tones in the sky create such a dreamy, peaceful backdrop against the busy train station below. You've captured the essence of the evening commute beautifully, balancing the industrial structure of the platform roofs with the fleeting, delicate beauty of twilight. Truly stunning work!`,

    50: `What a brilliantly layered night shot! Framing the glowing city skyscraper and the motion-blurred train through the dark silhouette of the tree branches adds so much depth and drama to the frame. The row of classic yellow cabs at the bottom anchors the scene perfectly, giving it a vibrant, authentic urban pulse. Your eye for low-light composition is fantastic!`
};


let currentMemory = 1;

let touchStartX = 0;
let touchStartY = 0;

let touchEndX = 0;
let touchEndY = 0;


/* =========================================
   OPEN BOOK
========================================= */

function openPhotoBook() {

    const bookScreen =
        document.getElementById("photoBookScreen");

    bookScreen.style.display = "block";

    currentMemory = 1;

    updateMemoryPage();

}


/* =========================================
   CLOSE BOOK
========================================= */

function closePhotoBook() {

    const bookScreen =
        document.getElementById("photoBookScreen");

    bookScreen.style.display = "none";

}


/* =========================================
   UPDATE PHOTO
========================================= */

function updateMemoryPage() {

    const photo =
        document.getElementById("memoryPhoto");

    const number =
        document.getElementById("photoNumber");

    const comment =
        document.getElementById("commentText");

    const page =
        document.getElementById("bookPage");


    page.classList.remove("show-comment");

    photo.src = `photo (${currentMemory}).jpeg`;

    number.textContent =
        `${currentMemory} / 90`;


    if (memoryComments[currentMemory]) {

        comment.textContent =
            memoryComments[currentMemory];

    } else {

        comment.textContent = "";

    }

}


/* =========================================
   NEXT PHOTO
========================================= */

function nextMemory() {

    if (currentMemory >= 90) {
        return;
    }


    const page =
        document.getElementById("bookPage");


    page.classList.remove("show-comment");

    page.classList.add("flip-next");


    setTimeout(() => {

        currentMemory++;

        page.classList.remove("flip-next");

        updateMemoryPage();

    }, 700);

}


/* =========================================
   PREVIOUS PHOTO
========================================= */

function previousMemory() {

    if (currentMemory <= 1) {
        return;
    }


    const page =
        document.getElementById("bookPage");


    page.classList.remove("show-comment");

    page.classList.add("flip-prev");


    setTimeout(() => {

        currentMemory--;

        page.classList.remove("flip-prev");

        updateMemoryPage();

    }, 700);

}


/* =========================================
   TOUCH / SWIPE
========================================= */

const memoryBook =
    document.getElementById("memoryBook");


memoryBook.addEventListener("touchstart", function(e) {

    touchStartX =
        e.changedTouches[0].screenX;

    touchStartY =
        e.changedTouches[0].screenY;

});


memoryBook.addEventListener("touchend", function(e) {

    touchEndX =
        e.changedTouches[0].screenX;

    touchEndY =
        e.changedTouches[0].screenY;


    handleMemorySwipe();

});


function handleMemorySwipe() {

    const differenceX =
        touchEndX - touchStartX;

    const differenceY =
        touchEndY - touchStartY;


    /* HORIZONTAL */

    if (Math.abs(differenceX) > Math.abs(differenceY)) {

        if (Math.abs(differenceX) < 50) {
            return;
        }


        if (differenceX < 0) {

            nextMemory();

        } else {

            previousMemory();

        }

        return;
    }


    /* VERTICAL */

    if (differenceY < -50) {

        document
            .getElementById("bookPage")
            .classList.add("show-comment");

    }

    else if (differenceY > 50) {

        document
            .getElementById("bookPage")
            .classList.remove("show-comment");

    }

}