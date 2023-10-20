// carousel functionality

  $(document).ready(function(){
    $('.video-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2.5,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: false,
            }
          }
        
        ]
      });
});

// on click play video

// fake data 

const data = [
  {
    id: 1,
    thumbnail: 'https://img.youtube.com/vi/HskUSVb824c/0.jpg',
    source: 'https://www.youtube.com/embed/HskUSVb824c',
    title: 'fake title 1',
    description: 'fake description 1',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    thumbnail: 'https://img.youtube.com/vi/TWP8Wbzcq44/0.jpg',
    source: 'https://www.youtube.com/embed/TWP8Wbzcq44',
    title: 'fake title 2',
    description: 'fake description 2',
    link: 'https://www.google.com'
    
  },
  {
    id: 3,
    thumbnail: 'https://img.youtube.com/vi/o7bRdwJPvrQ/0.jpg',
    source: 'https://www.youtube.com/embed/o7bRdwJPvrQ',
    title: 'fake title 3',
    description: 'fake description 3',
    link: 'https://www.google.com'

  },
  {
    id: 4,
    thumbnail: 'https://img.youtube.com/vi/HskUSVb824c/0.jpg',
    source: 'https://www.youtube.com/embed/HskUSVb824c',
    title: 'fake title 4',
    description: 'fake description 4',
    link: 'https://www.google.com'
  },
  {
    id: 5,
    thumbnail: 'https://img.youtube.com/vi/HskUSVb824c/0.jpg',
    source: 'https://www.youtube.com/embed/HskUSVb824c',
    title: 'fake title 5',
    description: 'fake description 5',
    link: 'https://www.google.com'
  },
]


// populating the slider 

function populateSlider() {
  console.log(data)

  data.forEach(videos => {
    $(".video-slider").append(`
    
    <div class="slide">
    <div style="background-color:grey;" class="thumbnail">
    <img src="${videos.thumbnail}" height="100%" width="100%" class="thumbnail imgg" />
    <iframe class="thumbnail video" width="100%" height="auto" src="${videos.source}" title="Alfreton 6 a side | Goal Action" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
      </a>
    </div>
    <div class="row">
      <div class="col">
    <a href="${videos.link}"><p class="mb-0 ps-2 mt-1">${videos.title}</p></a>
    <p class="mb-0 ps-2"><i>${videos.description}</i></p>
      </div>
     
      </div>
    </div>
    <p class="d-none" id="videoId">${videos.id}</p>
  
    
    `)

    $('.video').hide();

    $('.thumbnail').click(function() {

      // globalThis.videoToPlay = $(this).closest('p').find('#videoId').text();
      // console.log(globalThis.videoToPlay);

      // let videoToPlay = $('#videoId').text();
      // console.log(videoToPlay)
      
      $('.imgg').hide();
      $('.video').show();
      
    
    })
    
    
  }

  
  
  )
  
}

populateSlider();







