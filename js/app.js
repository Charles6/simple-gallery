const dogArr = [
    "<img src='images/dogGolden.jpg'/>",
    "<img src='images/dogSmile.jpg'/>",
    "<img src='images/dogWhite.jpg'/>",
    "<img src='images/dogWink.jpg'/>",
    "<img src='images/dogYellow.jpg'/>",
    "<img src='images/puppy.jpg'/>"
]

var galleryCounter = 0;

const galleryView = (counter) => {
    document.getElementById("imageBox").innerHTML = dogArr[counter];
};

galleryView(galleryCounter);
document.getElementById("back").disabled = true;

const forwardImage = () => {
    document.getElementById("forward").disabled = false;
    document.getElementById("back").disabled = false;
    if(galleryCounter === dogArr.length-1) {
        document.getElementById("forward").disabled = true;
    } else {
        document.getElementById("forward").disabled = false;
        galleryCounter = ++galleryCounter;
        console.log("forward",galleryCounter,dogArr[galleryCounter] )
        galleryView(galleryCounter);
    }  
};

const backImage = () => {
    document.getElementById("back").disabled = false;
    document.getElementById("forward").disabled = false;
    if(galleryCounter === 0) {
        document.getElementById("back").disabled = true;
    } else {
        document.getElementById("back").disabled = false;
        galleryCounter = --galleryCounter;
        console.log("back",galleryCounter,dogArr[galleryCounter] )
        galleryView(galleryCounter);
    }
}

const randomImage = () => {
    galleryCounter = Math.floor(Math.random()*dogArr.length);
    console.log("random",galleryCounter,dogArr[galleryCounter] )
    galleryView(galleryCounter);
    if(galleryCounter === 0) {
        document.getElementById("back").disabled = true;
    } else {
        document.getElementById("back").disabled = false;
    }
    if(galleryCounter === dogArr.length-1) {
        document.getElementById("forward").disabled = true;
    } else {
        document.getElementById("forward").disabled = false;
    }
}