 let vid;
 function setup() {
   createCanvas(120,480);

   vid = createVideo(
     ['IMG_5918.mp4'],
     vidLoad
   );

   vid.size(720,480);
 }

 function vidLoad() {
   vid.loop();
   vid.volume(0);
   //No sound cause the audio is my dad telling my cat to not eat my fries lol
 }

//  link to reference: https://p5js.org/reference/#/p5/createVideo