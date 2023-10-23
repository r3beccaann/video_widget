// carousel initialisation & functionality

$(document).ready(function () {
    $("#carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 5,
        animateIn: "fadeIn",
        responsiveClass: true,
        autoHeight: false,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        stagePadding: 60,
        responsive: {
            0: {
                items: 1,
            },

            550: {
                items: 2,
            },

            1345: {
                items: 3,
            },

            1800: {
                items: 4,
            },
        },
    });
});

const data = [
    {
        id: 1,
        thumbnail: "https://img.youtube.com/vi/TWP8Wbzcq44/mqdefault.jpg",
        source: "https://www.youtube.com/embed/TWP8Wbzcq44?autoplay=1&mute=1",
        title: "Team One Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
    {
        id: 2,
        thumbnail: "https://img.youtube.com/vi/c64YiY_sRTA/mqdefault.jpg",
        source: "https://www.youtube.com/embed/c64YiY_sRTA?autoplay=1&mute=1",
        title: "Team Two Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
    {
        id: 3,
        thumbnail: "https://img.youtube.com/vi/lQgkhZuykCM/mqdefault.jpg",
        source: "https://www.youtube.com/embed/lQgkhZuykCM?autoplay=1&mute=1",
        title: "Team Three Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
    {
        id: 4,
        thumbnail: "https://img.youtube.com/vi/0th5H5c6d6A/mqdefault.jpg",
        source: "https://www.youtube.com/embed/0th5H5c6d6A?autoplay=1&mute=1",
        title: "Team Four Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
    {
        id: 5,
        thumbnail: "https://img.youtube.com/vi/b7S2QhqS-5c/mqdefault.jpg",
        source: "https://www.youtube.com/embed/b7S2QhqS-5c?autoplay=1&mute=1",
        title: "Team Five Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
    {
        id: 6,
        thumbnail: "https://img.youtube.com/vi/4TCYDlxquZk/mqdefault.jpg",
        source: "https://www.youtube.com/embed/4TCYDlxquZk?autoplay=1&mute=1",
        title: "Team Six Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
    {
        id: 7,
        thumbnail: "https://img.youtube.com/vi/-K4o3lLpnvU/mqdefault.jpg",
        source: "https://www.youtube.com/embed/-K4o3lLpnvU?autoplay=1&mute=1",
        title: "Team Seven Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
    {
        id: 8,
        thumbnail: "https://img.youtube.com/vi/Tbw0s4q-6kI/mqdefault.jpg",
        source: "https://www.youtube.com/embed/Tbw0s4q-6kI?autoplay=1&mute=1",
        title: "Team Eight Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
    {
        id: 9,
        thumbnail: "https://img.youtube.com/vi/uWgECY9FtUU/mqdefault.jpg",
        source: "https://www.youtube.com/embed/uWgECY9FtUU?autoplay=1&mute=1",
        title: "Team Nine Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
    {
        id: 10,
        thumbnail: "https://img.youtube.com/vi/lQgkhZuykCM/mqdefault.jpg",
        source: "https://www.youtube.com/embed/lQgkhZuykCM?autoplay=1&mute=1",
        title: "Team Ten Six a Side",
        description: "Short Description",
        link: "https://www.google.com",
    },
];

// generating a single slide with the data above
function generateSlide(data) {
    let slides = [];

    for (let i = 0; i < data.length; i++) {
        slides.push(`<div class="item">
      <div style="" class="thumbnail" allow="fullscreen">
      <img src=${data[i].thumbnail} class="thumbnail imgg zoom" name="${data[i].id}" id="thumbnail${data[i].id}" onclick="showVideo(event); "/>
      <i class="fa-solid fa-circle-play fa-2xl play-icon" id="play${data[i].id}"style="color: #ffffff;"></i>
      <iframe name="${data[i].id}" id="videoContainer${data[i].id}" class="thumbnail video d-none" src=${data[i].source} title="Alfreton 6 a side | Goal Action" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"
      mozallowfullscreen="mozallowfullscreen" 
      msallowfullscreen="msallowfullscreen" 
      oallowfullscreen="oallowfullscreen" 
      webkitallowfullscreen="webkitallowfullscreen"></iframe>
      </div>
      <div class="row">
        <div class="col-12">
      <a href=${data[i].link}><p class="mb-1 ps-2 mt-1 carousel-title">${data[i].title}</p></a>
      <p class="mb-0 ps-2"><i>${data[i].description}</i></p>
        </div>
       
        </div>
      </div>`);
    }
    return slides;
}

const slideContent = generateSlide(data);

// adding single slide to carousel
function insertSlides(slideContent) {
    const container = document.getElementById("carousel");

    for (let i = 0; i < slideContent.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = slideContent[i];
        container.appendChild(div);
    }
}

insertSlides(slideContent);

// initialising on click event when img is clicked per id
function showVideo(event) {
    const thumbnail = document.getElementById("thumbnail" + event.target.name);
    const videoContainer = document.getElementById(
        "videoContainer" + event.target.name
    );
    const playBtn = document.getElementById("play" + event.target.name);

    thumbnail.classList.add("d-none");
    playBtn.classList.add("d-none");
    videoContainer.classList.remove("d-none");
}
