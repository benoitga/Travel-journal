const waypoint = new Waypoint({
    element: document.querySelector('h1:nth-of-type(1)'),
    handler: (direction) => {
        document.body.style.backgroundColor = 'white';
      }
  });

const waypoint2 = new Waypoint({
    element: document.querySelector('h2#slide-1-trigger'),
    handler: (direction) => {
        document.body.style.backgroundColor = 'blue';
      }
  });

const waypoint3 = new Waypoint({
    element: document.querySelector('h2#slide-2-trigger'),
    handler: (direction) => {
        document.body.style.backgroundColor = 'red';
      }
  });

  const waypoint4 = new Waypoint({
    element: document.querySelector('h2#slide-3-trigger'),
    handler: (direction) => {
        document.body.style.backgroundColor = 'pink';
      }
  });