const imagePlaceholder = document.querySelector(".slide-image-title")

const waypoint2 = new Waypoint({
    element: document.querySelector('h2#slide-1-trigger'),
    handler: (direction) => {
      console.log({direction})
      if ( direction === 'down') {
        imagePlaceholder.className = 'slide-image-title image-1'
      } else {
        imagePlaceholder.className = 'slide-image-title'
      }
      // imagePlaceholder.classList.add("image-1")
    }
  });

  const waypoint3 = new Waypoint({
    element: document.querySelector('h2#slide-2-trigger'),
    handler: (direction) => {
      console.log({direction})
      if ( direction === 'down') {
        imagePlaceholder.className = 'slide-image-title image-2'
      } else {
        imagePlaceholder.className = 'slide-image-title'
      }
      // imagePlaceholder.classList.add("image-1")
    }
  });