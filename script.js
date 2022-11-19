class CssPropControl {
    constructor(element) {
      this.element = element
    }
    get(varName) {
      return getComputedStyle(this.element).getPropertyValue(varName)
    }
    set(varName, val) {
      return this.element.style.setProperty(varName, val)
    }
  }
  
  const bodyCssProps = new CssPropControl(document.body)
  
  let toggle = document.querySelector('#dark-mode-toggle')
  toggle.addEventListener('click', () => { 
    let mode = toggle.checked ? 'dark' : 'light'
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
    bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
    bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))
  })


  /* adding youtube video */
  var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

      let mybutton = document.getElementById("myBtn");

//Simple button to top
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }


    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    var currentImage = 0;
    var myPhotos=['Chadow 1.jpg', 'Leo 1.jpg', 'Sissy 1.jpg', 'Brutie.jpg','The crew.jpg'];
    var container=document.getElementById('content');
    var nextBtn=document.getElementById('next');
    var prevBtn=document.getElementById('previous');
    
    nextBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    currentImage++;
    if (currentImage > myPhotos.length -1) {currentImage=0;}
    
    let newSlide = document.createElement('img');
    newSlide.src = `Slides/${myPhotos[currentImage]}`;
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);
    if (container.children.length > 2) {
        container.removeChild(container.children[0]);
    }
    });
    prevBtn.addEventListener('click', function(event){
        event.preventDefault();
        currentImage--;
        if (currentImage > myPhotos.length -1) {currentImage=0;}
    
    let newSlides = document.createElement('img');
    newSlides.src = `Slides/${myPhotos[currentImage]}`;
    newSlides.className = 'fadeinimg';
    container.appendChild(newSlides);
    if (container.children.length > 2) {
        container.removeChild(container.children[0]);
    }    
    }); 

    const videosContainer = document.getElementById('videosContainer');
    const popup = document.getElementById('popup');
    const video = document.querySelector('#popup > iframe');
    const videoIdInput = document.getElementById('videoId');
    const IDS_KEY = 'youTubeVideoIds';
    let youTubeVideoIds = [];

    const loadVideos = () => {
      youTubeVideoIds = JSON.parse(localStorage.getItem(IDS_KEY)) || [];
    };

    const displayVideos = () => {
      const videosStr = youTubeVideoIds
        .map(
          (id) => `
          <li onclick="clickVideo(event, '${id}')">
            <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" alt="Cover image for YouTube video with id ${id}">
            <button class="delete-btn" >&times;</button>
          </li>
        `
        )
        .join('');
      videosContainer.innerHTML = videosStr;
    };

    const clickVideo = (event, id) => {
      if (event?.target?.classList?.contains('delete-btn')) {
        youTubeVideoIds = youTubeVideoIds.filter((i) => i !== id);
        localStorage.setItem(IDS_KEY, JSON.stringify(youTubeVideoIds));
        displayVideos();
      } else {
        video.src = `https://www.youtube.com/embed/${id}`;
        popup.classList.add('open');
        popup.classList.remove('closed');
      }
    };

    const handlePopupClick = () => {
      popup.classList.add('closed');
      popup.classList.remove('open');
    };

    const saveVideo = (e) => {
      e.preventDefault();
      const videoId = videoIdInput.value;
      videoIdInput.value = '';
      youTubeVideoIds.unshift(videoId);
      localStorage.setItem(IDS_KEY, JSON.stringify(youTubeVideoIds));
      displayVideos();
    };

    loadVideos();
    displayVideos();
        