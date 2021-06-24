canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_array=["space background thing 1.jpg","space background thing 2.jpg","space background thing 3.jpg",];
random_number=Math.floor(Math.random()*3);
console.log(random_number);
rover_width=100;
rover_height=90;
background_image=nasa_array[random_number];
console.log("background ="+background_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    bg_img=new Image();
    bg_img.onload=uploadBackground;
    bg_img.src=background_image;
    
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadBackground(){
ctx.drawImage(bg_img,0,0, canvas.width , canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_img , rover_x , rover_y , rover_width , rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="38")
    {
        up();
        console.log("up");
    }
    if(keyPressed=="39")
    {
        right();
        console.log("right");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("keyPressed");
    }
}
function up(){
if(rover_y>=0){
    rover_y=rover_y-10;
    console.log("when up arrow is pressed x = "+ rover_x , "y= "+ rover_y);
    uploadBackground();
    uploadrover();
}
}
function down(){
    if(rover_y<=600){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed x = "+ rover_x , "y= "+ rover_y);
        uploadBackground();
        uploadrover();
    }
    }
    function left(){
        if(rover_x>=0){
            rover_x=rover_x-10;
            console.log("when left arrow is pressed x = "+ rover_x , "y= "+ rover_y);
            uploadBackground();
            uploadrover();
        }
        }
        function right(){
            if(rover_x<= 800){
                rover_x=rover_x+10;
                console.log("when right arrow is pressed x = "+ rover_x , "y= "+ rover_y);
                uploadBackground();
                uploadrover();
            }
            }