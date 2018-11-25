// $(document).ready(function() {

//   var video = document.getElementById('video');
//   var canvas = document.getElementById('canvas');
//   var context = canvas.getContext('2d');
  
//   var rectHeight, rectWidth, centerVer, centerHor;

//   var tracker = new tracking.ColorTracker();

//   tracking.track('#video', tracker, { camera: true });

//   tracker.on('track', function(event) {
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     event.data.forEach(function(rect) {

//       rectHeight = rect.height;
//       rectWidth = rect.width;
      
//       centerVer = (rect.width/2) + rect.y;
//       centerHor = (rect.height/2) + rect.x;
      
//       proporcaoFace = (rectHeight * rectWidth) / (canvas.height * canvas.width)
      
//       console.log("rect width: ", rectWidth);
//       console.log("rect height: ", rectHeight);
//       console.log("centro horizontal: ", centerHor);
//       console.log("centro vertical: ", centerVer);
//       console.log("Proporção: ", proporcaoFace);
//       console.log("canvas.width: ", canvas.width + "  canvas.height: ", canvas.height);

//       if (rect.color === 'custom') {
//         rect.color = tracker.customColor;
//       }

//       context.strokeStyle = rect.color;
//       context.strokeRect(rect.x, rect.y, rect.width, rect.height);
//       context.font = '11px Helvetica';
//       context.fillStyle = "#fff";
//       context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
//       context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
//     });
//   });

//  initGUIControllers(tracker);


//         // var video = document.getElementById('video');
//         // var canvas = document.getElementById('canvas');
//         // var context = canvas.getContext('2d');
  
//         // var tracker = new tracking.ObjectTracker('face');
//         // tracker.setInitialScale(4);
//         // tracker.setStepSize(2);
//         // tracker.setEdgesDensity(0.1);
  
//         // tracking.track('#video', tracker, { camera: true });
  
//         // tracker.on('track', function(event) {
//         //   context.clearRect(0, 0, canvas.width, canvas.height);

          
//         //   event.data.forEach(function(rect) {
//         //     rectHeight = rect.height;
//         //     rectWidth = rect.width;
            
//         //     centerVer = (rect.width/2) + rect.y;
//         //     centerHor = (rect.height/2) + rect.x;
            
//         //     proporcaoFace = (rectHeight * rectWidth) / (canvas.height * canvas.width)
            
//         //     console.log("rect width: ", rectWidth);
//         //     console.log("rect height: ", rectHeight);
//         //     console.log("centro horizontal: ", centerHor);
//         //     console.log("centro vertical: ", centerVer);
//         //     console.log("Proporção: ", proporcaoFace);
//         //     console.log("canvas.width: ", canvas.width + "  canvas.height: ", canvas.height);


//         //     context.strokeStyle = '#a64ceb';
//         //     context.strokeRect(rect.x, rect.y, rect.width, rect.height);
//         //     context.font = '11px Helvetica';
//         //     context.fillStyle = "#fff";
//         //     context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
//         //     context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
//         //   });
//         // });
  
//         var gui = new dat.GUI();
//         gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
//         gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
//         gui.add(tracker, 'stepSize', 1, 5).step(0.1);

//     $('#myCarousel').carousel({
//         interval: false
//     })
// });