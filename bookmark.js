
var Injector = {
  serverURL:"https://inject0r.littleclaw.repl.co/"
};
Injector.settings = {} // theme info goes here later
Injector.user = {
  token: token,
  username: usernameTU,
  settings: ""
}
Injector.info = {
  version: "2.2.1",
  changelog: `<h2> The (Real) Release Update </h2>
  <h3> General Changes </h3>
  <p> Registration page </p>
  <p> Better backend </p>
  <p> Injector now has a name server for the backend <a href="https://inject0r.littleclaw.repl.co/">here</a> </p>
  
  <h3> Chatbox </h3>
  <p> Chatroom has been completely reprogrammed, rebranded to Chatbox </p>
  <p> Status indicators, channels, important channels </p>
  <p> Direct Messaging </p>
  
  
  <h3> Developer Updates </h3>
  <p style="font-weight: bold">[Major]: New injector object - important information stored there.</p>
  `
}
async function fetchUserData(){
	let dataFetch = await fetch('https://inject0r.littleclaw.repl.co/save', {
  	method: 'GET',
    headers: {
     'token': Injector.user.token
    }
  })
  return await dataFetch.text();
}
fetchUserData().then(response => {
  Injector.user.settings += (JSON.parse(response).personalize);
})
async function saveData(category, data){
	let dataSend = await fetch('https://inject0r.littleclaw.repl.co/save', {
  	method: 'POST',
    headers: {
    	'token': Injector.user.token,
      'category': category
    },
    body: data
  })
  return await dataSend.text();
}
async function deleteData(category, index){
	let dataRem = await fetch('https://inject0r.littleclaw.repl.co/save', {
  	method: 'POST',
    	headers:{
     	'token': Injector.user.token,
      'category':category,
      'remove':'data'
     },
     body: index
  })
  return await dataRem.text();
}
async function removeCategory(category){
	let dataRemover = await fetch('https://inject0r.littleclaw.repl.co/save', {
  	method: 'POST',
    	headers:{
      'token': Injector.user.token,
      'category':category,
      'remove':'category'
      }
  })
  return await dataRemover.text();
}
async function fetchUserList(){
  let joe = await fetch('https://inject0r.littleclaw.repl.co/userlist');
  return await joe.text();
}
let namesObject = null;
fetchUserList().then(response =>{
  let namesArray = []
  while(response.includes(",")){
    let joe2no = response.slice(0, response.indexOf(","))
    namesArray.push(joe2no);
    response = response.slice(response.indexOf(",")+1)
  }
   namesObject = namesArray;
})

if(location.href == Injector.serverURL + "/"){
let panelInfo = new XMLHttpRequest;
panelInfo.open("POST", Injector.serverURL + "/login");
panelInfo.setRequestHeader('fromlogin', true);
if(localStorage.getItem("injinfo") == null){
panelInfo.send(userField.value + ":" + passField.value);
} else{
  panelInfo.send(localStorage.getItem("injinfo"));
}
panelInfo.onreadystatechange=e=>{
  if(panelInfo.readyState == 4){
    (Function(panelInfo.responseText))();
  }
}
}else{
setTimeout(function(){
 
try{
  const gtele = new XMLHttpRequest;
  gtele.open("POST", Injector.serverURL + "/googleacc");
  gtele.setRequestHeader('token', Injector.user.token);
  gtele.send(document.querySelector(".gb_mb").textContent);
}catch(err){
  console.log("Could not get GAC info. Probably not on the required site!")
}
}, 1000);
      launcher.style.opacity = "0";
allowToggle = false;
function newElement(elementType, parent, id){
  let gerbil = document.createElement(elementType);
  parent.appendChild(gerbil);
  gerbil.id = id.toString();
  return gerbil;
};
var console = {};
// pre init variables for use later on because i didnt know the difference between let and var
let editUsed = false;
let prot = false;
let floodCount = 0;
let appsDownloaded = [];
  function buttonCSS(button2use, headerbox, descbox, descriptionEntry){
  button2use.style.position = "absolute";
  button2use.style.width = "175px";
  button2use.style.height = "40px";
  button2use.style.borderRadius = "3px";
  button2use.style.left = "5px";
  button2use.style.textAlign = "center";
  button2use.style.lineHeight = "40px";
  button2use.style.fontSize = "20px";
  button2use.style.fontFamily = "Helvetica";
  
  button2use.style.backgroundColor = "#1c59ff";
  button2use.style.color = "white";
  button2use.style.transitionDuration = "0.5s";
  button2use.style.userSelect = "none";
  button2use.addEventListener("mouseover", function(){
    if(button2use.style.textContent = "Edit Page" && editUsed) {

    } else{
    button2use.style.backgroundColor = "#0031b5";
    button2use.style.cursor = "pointer";
    headerbox.textContent = button2use.textContent;
    descbox.textContent = descriptionEntry.toString()
        }
  })
  button2use.addEventListener("mouseout", function(){
        if(button2use.style.textContent = "Edit Page" && editUsed) {

    } else{
        button2use.style.backgroundColor = "#1c59ff";
    button2use.style.cursor = "default";
    }
  })
   }

  function parseCSSInteger(intinuse){
    let returnValue = parseInt(intinuse.slice(0, intinuse.indexOf("p")));
    return returnValue;
  }
  let topZIndex = 2147683;
  function makeElementDraggable(elementtoDrag) {
    try{
  function move(e) {
		x = e.clientX;
		y = e.clientY;
		elementtoDrag.style.left = x - x2  + "px";
		elementtoDrag.style.top = y - y2  + "px";
  }
	elementtoDrag.addEventListener("mousedown", e => {

		x2 = e.offsetX;
		y2 = e.offsetY;
    topZIndex++;
    elementtoDrag.style.zIndex = topZIndex;
		if (!prot) {
			document.addEventListener("mousemove", move);
			elementtoDrag.addEventListener("mouseup", function () {
				document.removeEventListener("mousemove", move);
			});
		}
	});
    }catch(err){
      alert(err);
    }
};
  function unprotectedDrag(elementtoDrag) {
    try{
  function move(e) {
		x = e.clientX;
		y = e.clientY;
		elementtoDrag.style.left = x - x2  + "px";
		elementtoDrag.style.top = y - y2  + "px";
  }
	elementtoDrag.addEventListener("mousedown", e => {

		x2 = e.offsetX;
		y2 = e.offsetY;
		if (true) {
			document.addEventListener("mousemove", move);
			elementtoDrag.addEventListener("mouseup", function () {
				document.removeEventListener("mousemove", move);
			});
		}
	});
    }catch(err){
      alert(err);
    }
};
function noDragGlitch(button2fix){
  button2fix.addEventListener("mouseover", function(){
    prot = true;
  })
  button2fix.addEventListener("mouseout", function(){
    prot = false;
  })
}
function disableProtRestriction(button2fix){
  button2fix.addEventListener("mouseover", function(){
    setTimeout(function(){
      prot = false;}, 1)
  })
}
var windowPureClr = "rgba(0, 31, 51, 0.95);"
function refreshStyleSheet(){
style.textContent = `
img{
  user-select: none;
}
#backgroundImage{
  position: fixed;
  background-color: #00011c;
  z-index: 2147681;
  background-image: url("` + Injector.serverURL + `/logo.png");
  background-repeat: no-repeat;
  background-position: right center;
 width: 100%;
 height: 100%;
 bottom: 0px;
 right: 0px;
 margin-left: 0px;
 margin-top: 0px;
 transition-duration: 0.45s;
 user-select: none;

}

injTaskbar{
  position: absolute;
  z-index: 2147684;
width: 100%;
height: 50px;
background-color: black;
bottom: 0px;
left: 0px;
opacity: 0.75;
overflow-x: auto;
}

taskbarDivider{
  position: absolute;
  z-index: 999999999999999999999999999999999999;
  width: 2px;
  height: 46px;
  bottom: 2px;
  margin-left: 2px;
  margin-right: 2px;
  opacity: 0.8;
  background-color: white;
  transition-duration: 0.2s;
}
taskbarBtn{
  position: absolute;
  width: 50px;
  height: 48px;
  bottom: 1px;
  background-color: #002169;
  color: white;
  border-radius: 0px;
  opacity: 1;
  font-family: Helvetica;
  text-align: center;
  font-size: 30px;
  line-height: 48px;
  transition-duration: 0.2s;
  user-select: none;
  overflow: hidden;
}
WindowBorderMark{
  position: fixed;
  z-index: 2147683;
  width: 100%;
  height: 100%;
  right:0px;
  bottom: 0px;
  margin-left: 0px;
  margin-top: 0px;
  transition-duration: 0.45s;
}

app{
  position: absolute;
  z-index: 2147682;
  margin-left: 30px;
  margin-top: 0px;
  margin-bottom: 120px;
  width: 75px;
  height: 75px;
  user-select: none;
  transition-duration: 0.25s;
}
appName{
  position: absolute;
  z-index: 2147682;
  color: white;
  top: 80px;
  width: 75px;
  text-align: center;
  font-family: Helvetica;
  user-select: none;
}
windowHeading{
  position: absolute;
  z-index: 61;
  left: 45%;
  top: 45%;
  height: 25px;
  background-color: ` + windowPureClr.toString() + `
  color: white;
  font-family: Helvetica;
  line-height: 24px;
  user-select: none;
  transition-duration: 0.2s;

}
CircBtn{
  position: absolute;
  right: 0px;
  top: 0px;
  margin-left: 30px;
  width: 25px;
  height: 100%;
  color: white;
  background-color: transparent;
  color: white;
  font-size: 12px;
  font-weight: 10;
  transition-duration: 0.5s;
  padding-left: 18px;
  padding-top: 1px;
  

}
#CloseBtn:hover{
  background-color: #630000;
  cursor: pointer;
}
NewWindowContent{
position: absolute;
top: 25px;
height: 300px;
background-color: white;
border-radius: 0px 0px 1px 1px;
left: 0px;
color: black;
overflow: scroll;
user-select: text;
transition-duration: 0.5s;

}
#pseudo:hover, #pseudo:focus, input:hover, input:focus, select:hover, select:focus, genericBapBox:hover, genericBapBox:focus{
  outline: 0 !important;
}
.chatmsg{
  position: relative;
  top: 0px;
  width: 100%;
  min-height: 25px;
  border-style: none none none none;
  border-width: 1px;
  border-color: white;
  background-color: transparent;
  color: white;

}
messagediv{
  position: relative;
  top: 5px;
  width: 90%;
  left: 5%;
  height: 2px;
  background-color: green;

}
.fullScreen {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
}
storeApp{
  transition-duration: 0.2s;
  text-overflow: ellipsis;
}
storeApp:hover{
  background-color: #d9d9d9;
  cursor: pointer;
}

appdownbtn{
  transition-duration: 0.2s;
}
appdownbtn:hover{
  background-color: #00e304;
  cursor: pointer;
}
#themeBox{
  position: absolute;
  top: 20px;
  width: 150px;
  height: 135px;
  border-width: 5px 5px 25px 5px;
  border-color: gray;
  border-style: solid;
  background-color: black;
  transition-duration: 0.25s;
  color: white;
  text-align: bottom;
}
#themeBox:hover{
  border-color:#454545;
  cursor: pointer;
}
themecaption{
  position: absolute;
  width: 160px;
  height: 25px;
  color: white;
  font-size: 15px;
  font-family: Helvetica;
  text-align: center;
  line-height: 25px;
  

}
customizebtn{
  position: absolute;
  width: 100%;
  height: 35px;
  background-color: gray;
  color: white;
  font-size: 17px;
  font-family: Helvetica;
  border-style: none none solid none;
  border-color: white;
  border-width: 1px;
  left: 0px;
  top: 0px;
  text-align: center;
  line-height: 35px;
  transition-duration: 0.15s;
  user-select: none;
}
customizebtn:hover{
  background-color: #363636;
  cursor: pointer;

}
genericBapBox{
position: absolute;
left: 0px;
top: 0px;
}
customConsole{
  position: absolute;
  bottom: 75px;
    opacity: 0;
    visibility: hidden;
  right: 0px;
  z-index: 2147683;
  background-color: black;
  color: white;
  font-size: 13px;
  padding-left: 5px;
  padding-top: 5px;
  overflow-y: scroll;
  width: 392px;
  height: 195px;
  border-width: 1px;
  border-style: solid none none solid;
  border-color: rgba(30, 30, 30, 1);
  border-top-left-radius: 3px;
  transition-duration: 0.2s;
}
#consoleinput{
    position: absolute;
    opacity: 0;
    visibility: hidden;
  bottom: 50px;
  right: 0px;
  z-index: 2147684;
  width: calc(395px - 7px);
  height: 25px;
  background-color: black;
  border-color: rgba(30, 30, 30, 1);
  border-style: solid none none none;
  border-width: 1px;
  color: white;
  padding-left: 7px;
  transition-duration: 0.2s;
}
.cons1{
  color: white;
    margin: 0px;
  padding-top: 0px;
  margin-bottom: 2px;

}
.cons2{
  color: gray;
  margin: 0px;
  padding-top: 0px;
  margin-bottom: 2px;
}
.conserr{
  color: red;
  margin: 0px;
  padding-top: 0px;
  margin-bottom: 2px;
}
.enabled{
  background-color: lime;
}
`};
refreshStyleSheet();

// setTimeout so that it makes transition epicly
setTimeout(function(){
  launcher.remove()


// this is used later on to make chat closing work; ignore it
chatUpdater = null;

// make backgroundImage (synchronous so no cancer)
    let background = newElement("WindowBorderMark", document.body, "borderMaker");
    let toggled = false;
    document.addEventListener("keydown", function(e){
      let key = e.key + e.location;
      if(key == "Control2"){
        if(toggled){
        console.style.opacity = "0";
        consoleInput.style.opacity = "0";
        console.style.visibility = "hidden";
        consoleInput.style.visibility = "hidden";
        } else{
                  console.style.visibility = "visible";
        consoleInput.style.visibility = "visible";
          console.style.opacity = "1";
        consoleInput.style.opacity = "1";
        }
        toggled = !toggled;
      }
      
    })
 let console = newElement("customConsole", background, "console");
 let consoleInput = newElement("input", background, "consoleinput");
 consoleInput.placeholder = "Type command here, or do 'help' to see all commands.";
 let validCmds = ["help", "run"];
 let cmdExecs = ["runHelp();", "evalCmdLine();"];
 function runHelp(){
   console.log(`Help Menu: <br>
   --{help}-- Returns this menu. <br>
   --{run}-- Takes 1 argument, evals whatever you pass it.`)
 }
 function evalCmdLine(){
   try{
     eval(consoleInput.value.slice(4, consoleInput.value.length));
     console.log("Ran code successfully!");
   }catch(err){
     console.log(err);
   }
 }
 consoleInput.addEventListener("keydown", function(e){
   if(e.key == "Enter"){
     let validCmd = false;
    for(i=0; i<validCmds.length; i++){
       if(consoleInput.value.slice(0, validCmds[i].length) == validCmds[i]){
         eval(cmdExecs[i]);
         validCmd = true;
       }
     }
     if(!validCmd){console.log("Invalid command. Run 'help' for a list of all commands.")}
      consoleInput.value = "";
   }
 });

// change console.log's functionality to interact with custom console. this will help a lot in chromebook development
let numMessages = 0;
  console.log = function(content, brand){
    if(numMessages % 2 == 0){
      if(brand == undefined){brand = "Page"}
    console.innerHTML += ("<p class='cons1'>["+brand+"]: "+content+"</p>");
    numMessages++;
    console.scrollTop += 83279837219817942874298421;
    }else{
      console.innerHTML += ("<p class='cons2'>["+brand+"]: "+content+"</p>");
      numMessages++;
     console.scrollTop += 83279837219817942874298421;
    }
};
console.error = function(content,joe,line){
  if(content !== "Uncaught TypeError: Cannot read property 'slice' of null"){
  console.innerHTML += ("<p class='conserr'>[ERROR]: "+content+"</p><p class='conserr'>       Line:" + line +"</p>");
  numMessages+=2;
  console.scrollTop += 83279837219817942874298421;
  }
}
window.onerror = function(error,joe,line){console.error(error,joe,line)};
console.log("Press Right Ctrl to toggle Console.", "Injector");
  // create main desktop elements
  let backgroundImage = newElement("beedabeedabo", background, "backgroundImage");


  // manage the taskbar
  let taskbar = newElement("injTaskbar", background, "taskbar");
  let numWins = 0;
  //tbar index manages auto-adjustment of taskbar icons upon window close
  let tbarIndex = 0;
  let trueLeft = null;

  // closed style left makes sure the taskbar button being moved is farther right than the object removed
  let indexLeft = null;
  let tbarColor = "#002169";
function newTaskbarItem(icon, addedwindow){
  let tdiv1 = newElement("taskbarDivider", taskbar, "taskDiv");
  let inc = numWins * 54
  tdiv1.style.left = [inc + 4].toString() + "px";
  let pure1 = [inc + 4];
  let myIndex = tbarIndex;

  let tbtn = newElement("taskbarBtn", taskbar, "taskBtn");
  let tdiv2 = newElement("taskbarDivider", taskbar, "taskDiv");
  tdiv2.style.left = [inc + 56].toString() + "px";
  let pure2 = [inc + 56];
  tbtn.style.left = [inc + 7].toString() + "px";
  let pureBtn = [inc + 7];
  tbtn.style.backgroundImage = "url(" + icon + ")";

  tbtn.style.backgroundSize = "40px";
  tbtn.style.backgroundPosition = "6px 4px";
  tbtn.style.backgroundRepeat = "no-repeat";
  tbtn.style.backgroundColor = tbarColor;
  setInterval(function(){ 

    trueLeft = indexLeft.slice(0, indexLeft.indexOf("p"));
    pure1 = tdiv1.style.left.slice(0, tdiv1.style.left.indexOf("p"));
    if(myIndex < tbarIndex && parseInt(trueLeft) < parseInt(pure1)){
    myIndex++;
    pure2 -= 54;
    tdiv2.style.left = pure2.toString() + "px";
    pure1 -= 54;
    tdiv1.style.left = pure1.toString() + "px";
    pureBtn -= 54;
    tbtn.style.left = pureBtn.toString() + "px";

    }
  }, 150);
  tbtn.addEventListener("click", function(){
    if(addedwindow.style.display == "none") {
      addedwindow.style.display = "initial";
      topZIndex++;
      addedwindow.style.zIndex = topZIndex;
      tbtn.style.backgroundColor = tbarColor;

    } else {
    addedwindow.style.display = "none";
    tbtn.style.backgroundColor = "#3c3c3d";
    }
  })
  return[tdiv1, tbtn, tdiv2];
}
function removeTaskbarItem(returnedArray){
  indexLeft = returnedArray[0].style.left
  for(i=0; i<returnedArray.length; i++){
    returnedArray[i].remove();
  };
  numWins--;
  tbarIndex++;
  
};

/* set pre-icon creation variables for later use.
* numApps tells the bookmark how many apps there are (used for auto positioning)
* floatLeft is used to set the offset left of each app, which is also for auto positioning
* the apps array is an array of all app icons and is used for a patch to a specific bug i was having
*/
let numApps = 0;
let floatLeft = 30;
let appsArray = [];
let hoverColor = "0, 255, 255";
let hoverOutlineColor = "cyan";
let nameColor = "white";
let nameBg = "transparent";
// new object on desktop function
function createNewItem(name, id, execcode, iconImg) {
  let autoclear = null;
  let color = "transparent";
  let onStatus = false;
  let icon = newElement("app", background, id);
  let nameInd = newElement("appName", icon, "appText");
  appsArray.push(icon);
  nameInd.textContent = name;
  nameInd.style.textAlign = "center";
  nameInd.style.width = "75px";
  setInterval(function(){
    nameInd.style.backgroundColor = nameBg;
  nameInd.style.color = nameColor;
  }, 500);
  // spacing fix for icons
  numApps++;


  if(numApps >= [backgroundImage.clientHeight - 50] / 141.75 && backgroundImage.clientHeight !== 617) {

    numApps = 1;
    floatLeft += 130;
    // the following else if statement is because of a bug i dont understand and i am too lazy to fix naturally
  } else if(numApps >= [backgroundImage.clientHeight - 50] / 141.75 + 1){
     numApps = 1;
    floatLeft += 130;
  }
  let gamer = numApps * 50
  for (i=0; i < numApps; i++) {
    gamer += 80;
  };
  icon.style.top = [gamer - 80].toString() + "px";
  icon.style.backgroundColor = color;
  icon.style.backgroundImage = "url(" + iconImg + ")";
  icon.style.backgroundSize = "90%";
  icon.style.backgroundPosition = "4px 4px";
  icon.style.backgroundRepeat = "no-repeat";
  icon.style.borderWidth = "0px";
  icon.style.borderRadius = "4px";
  icon.style.marginLeft = floatLeft.toString() + "px";

  icon.addEventListener("click", function(){
  for(i=0; i<appsArray.length; i++){
    if(appsArray[i].style.borderWidth !== "0px" && appsArray[i] !== icon){
    appsArray[i].style.borderWidth = "0px";
    appsArray[i].style.backgroundColor = color;
    appsArray[i].style.marginLeft =[parseCSSInteger(appsArray[i].style.marginLeft) + 2].toString() + "px";
    appsArray[i].style.marginTop = [parseCSSInteger(appsArray[i].style.marginTop) - 4].toString() + "px";
    appsArray[i].style.top = [parseCSSInteger(appsArray[i].style.top) + 15].toString() + 'px';
    }

  }
  if(icon.style.borderWidth === "0px"){ 
    icon.style.borderColor = hoverOutlineColor;
    icon.style.borderWidth = "2px";
    icon.style.borderStyle = "solid";
    icon.style.backgroundColor = "rgba(" + hoverColor + ", 0.25)";
    // what the f*** is the point of outlines if they do the exact same sh*t as borders?? They both suck donkey d*ck
    icon.style.marginLeft =[parseCSSInteger(icon.style.marginLeft) - 2].toString() + "px";
    icon.style.marginTop = [parseCSSInteger(icon.style.marginTop) + 4].toString() + "px";
    icon.style.top = [parseCSSInteger(icon.style.top) - 15].toString() + 'px';
    if(autoclear === null){

    autoclear = setTimeout(function(){
      if(icon.style.borderWidth !== "0px"){
    icon.style.borderWidth = "0px";
    icon.style.backgroundColor = color;
        icon.style.marginLeft =[parseCSSInteger(icon.style.marginLeft) + 2].toString() + "px";
            icon.style.marginTop = [parseCSSInteger(icon.style.marginTop) - 4].toString() + "px";
            icon.style.top = [parseCSSInteger(icon.style.top) + 15].toString() + 'px';
      }
      autoclear = null;
    }, 3000)} else{
      clearTimeout(autoclear);
      autoclear = setTimeout(function(){
      if(icon.style.borderWidth !== "0px"){
    icon.style.borderWidth = "0px";
    icon.style.backgroundColor = color;
        icon.style.marginLeft =[parseCSSInteger(icon.style.marginLeft) + 2].toString() + "px";
            icon.style.marginTop = [parseCSSInteger(icon.style.marginTop) - 4].toString() + "px";
            icon.style.top = [parseCSSInteger(icon.style.top) + 15].toString() + 'px';
      }
    }, 3000)};
  } else{
    onStatus = false;
    eval(execcode)
    icon.style.borderWidth = "0px";
    icon.style.backgroundColor = color;
    icon.style.marginLeft =[parseCSSInteger(icon.style.marginLeft) + 2].toString() + "px";
    icon.style.marginTop = [parseCSSInteger(icon.style.marginTop) - 4].toString() + "px";
    icon.style.top = [parseCSSInteger(icon.style.top) + 15].toString() + 'px';
  }
    
  })



}
// create a new window function. this is vital code to the bookmark, modifying should be done with care to make sure i dont fuck the entire bookmark
var windowsOpen = [];
var windowParent = background;
let windowBorderClr = "transparent";
function changeWindowParents(newParent){
  for(nmi=0; nmi<windowParent.children.length; nmi++){
    if(windowParent.children[nmi].id == "genericWindow"){
      windowParent.children[nmi].remove();
    }
  }
  console.log("All windows closed, switching parent...", "Injector")
  windowParent = newParent;
}
function openWindow(width, height, windowTitle, resizable, tbarIcon, onClose) {
  // make the window
  let newWindow = newElement("windowHeading", windowParent, "genericWindow");
  windowsOpen.push(newWindow);
  console.log("Opened window with title " + windowTitle, "Injector");

  newWindow.style.opacity = "0";
  makeElementDraggable(newWindow)
  newWindow.style.width = width - 5 + "px";
  newWindow.style.paddingLeft = "5px";
  newWindow.textContent = windowTitle;
  topZIndex++;
  newWindow.style.zIndex = topZIndex;
  try{
    newWindow.style.backgroundImage = colorInUse;
  } catch(err){
   alert(err);
  };
  let taskItem = newTaskbarItem(tbarIcon, newWindow)
  numWins++;
  //create close button
  let closeBtn = newElement("CircBtn", newWindow, "CloseBtn");
  closeBtn.textContent = "X";
  noDragGlitch(closeBtn)
  closeBtn.addEventListener("click", function(){
      if(onClose !== undefined){
    eval(onClose);
  }
    windowContent.id = "removed";
    newWindow.remove();
    prot = false;
    removeTaskbarItem(taskItem);
    console.log("Removed window with title " + windowTitle, "Injector")
  })
  setInterval(function(){
        newWindow.style.width = (parseInt(windowContent.style.width.slice(0, windowContent.style.width.length - 2)) - 5).toString() + "px";
      }, 20)
  
  //create window content box
  let windowContent = newElement("NewWindowContent", newWindow, "WindowCont");
  windowContent.style.width = (parseInt(newWindow.style.width.slice(0, newWindow.style.width.length - 2)) + 7) + "px";
  windowContent.style.height = height + "px";


  // make so window cannot be dragged while hovering over content. this prevents annoying glitches
  noDragGlitch(windowContent);

  //resizability
  if (resizable) {
    windowContent.style.resize = "both";
    setTimeout(function(){
      windowContent.style.transitionDuration = "0s";
      newWindow.style.transitionDuration = "0s";
    }, 125)
  }
  newWindow.style.top = "125px";

  // make fadein effect
  setTimeout(function(){
    newWindow.style.opacity = "1";


    //make so drag isn't affected by the fade in transition
    setTimeout(function(){
      newWindow.style.transitionDuration = "0s";
    }, 199)
  }, 1);
  let gameburger = false;
  return windowContent;
}

var colorInUse = null;
function changeWindowColors(newColor){
  colorInUse = newColor;
  for(i=0; i<windowsOpen.length; i++){
    try{
      windowsOpen[i].style.backgroundImage = newColor
    }catch(err){
      console.log("Window #" + i.toString() + " does not exist, or an error occured trying to change the color. Ignore this error!", "Injector")
    }
  }
};

// better error function
function error(errorContent){
  let error = openWindow(400, 200, "Error", false);
  error.innerHTML = `
  <h1> An error has occured! </h1>
  <p>` + errorContent.toString() + "</p>";
  console.log("Made visible error with content '" + errorContent + "'", "Injector");
}
// function declarations for apps
//changelog
function app1(){
  let chlog = openWindow(500, 300, "Changelog", true, Injector.serverURL + "/logo.png");
  chlog.innerHTML = `<h1>Changelog - Injector v`+Injector.info.version+`</h1>
  `+Injector.info.changelog;
}
// exploit hub
function app2(){
  let exhub = openWindow(400, 300, "Exploit Hub", false, Injector.serverURL + "/exploithub.png")
  exhub.style.backgroundColor = "#454545";
  exhub.style.overflow = "hidden";
  let numBtn = 0;
  exhub.innerHTML = `
  <gamingheader id="topdog"></gamingheader>
  <seperator id="seperator"></seperator>
  <bruh id="stoopybtn">History Flooder</bruh>
  <bruh id="editbtn">Edit Page</bruh>
  <bruh id="tabname">Change Tabname</bruh>
  <bruh id="gdrivecloak">Drive Cloak</bruh>
  <text1 id="headerTxt"></text1>
  <text2 id="descTxt"></text2>`
  let floodBtn = document.getElementById("stoopybtn");
  let header = document.getElementById("topdog");
  let editBtn = document.getElementById("editbtn");
  let seperator = document.getElementById("seperator");
  let headerText = document.getElementById("headerTxt");
  let descText = document.getElementById("descTxt");
  let tabBtn = document.getElementById("tabname");
  let driveCloak = document.querySelector("#gdrivecloak");
  // lets me create more buttons later on without cancer
   buttonCSS(floodBtn, headerText, descText, "Floods your history with the page you are currently visiting. Keep in mind they can still scroll down far enough, so reliance on this is discouraged.");
   buttonCSS(editBtn,  headerText, descText, "Allows you to edit the page you're currently visiting. You cannot edit the contents of Injector. After editing the page, disabling this will lock in your changes to the page. Keep in mind this is only for you, and refreshing will revert these changes.");
   buttonCSS(tabBtn, headerText, descText, "Changes the current name of the tab you're on. Can be used to trick teachers (make game sites look like Google Classroom, ect).")
   buttonCSS(driveCloak, headerText, descText, "Cloaks the tab as Google Drive. Similar use of the Change Tab Name exploit, but more convincing as it changes the icon.");
  floodBtn.style.top = "60px"; 
  editBtn.style.top = "110px";
  tabBtn.style.top = "160px";
  driveCloak.style.top = "210px";
  // make the header bar
  header.style.position = "absolute";
  header.style.width = "100%";
  header.style.height = "50px";
  header.style.backgroundColor = "#2a4dad";
  header.style.color = "white";
  header.textContent = "Exploit Hub v1.1";
  header.style.top = "0px";
  header.style.marginTop = "0px";
  header.style.userSelect = "none";
  header.style.fontSize = "35px";
  header.style.textAlign = "center";
  header.style.lineHeight = "50px";

  //make text-description seperator
  seperator.style.position = "absolute";
  seperator.style.width = "2px";
  seperator.style.height = "calc(100% - 50px)"
  seperator.style.bottom = "0px";
  seperator.style.backgroundColor = "white";
  seperator.style.left = "185px";

  // text boxes
  headerText.style.position = "absolute";
  headerText.style.right = "0px";
  headerText.style.top = "50px";
  headerText.style.width = "calc(400px - 187px)"
  headerText.style.height = "50px";
  headerText.style.color = "white";
  headerText.style.fontFamily = "Helvetica";
  headerText.style.fontSize = "25px";
  headerText.style.textAlign = "center";
  headerText.style.lineHeight = "50px";
  headerText.textContent = "Welcome!"
    descText.style.position = "absolute";
  descText.style.right = "2px";
  descText.style.top = "100px";
  descText.style.width = "calc(400px - 194px)"
  descText.style.height = "calc(100% - 50px)";
  descText.style.color = "white";
  descText.style.fontFamily = "Helvetica";
  descText.style.fontSize = "15px";
  descText.style.lineHeight = "19px";
  descText.textContent = "Hover over a button to see what it does!"
  let driveCloakEnabled = false;
  let ico = null;
  let link = null;
  driveCloak.addEventListener("click", function(){
      if(!driveCloakEnabled){
        driveCloakEnabled = true;
        link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
         document.getElementsByTagName('head')[0].appendChild(link);
         ico = ""
        }
      link.href = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1147px-Google_Drive_icon_%282020%29.svg.png';
      document.title = "My Drive - Google Drive"
      driveCloak.classList.add('enabled');
      }else{
        driveCloakEnabled = false;
        driveCloak.classList.remove('enabled');
        link.href = ico;
      }
  })
  let floodEnabled = false;
  let editEnabled = false;
  let count = 0;
  floodBtn.addEventListener("click", function(){
    if(!floodEnabled) {
        floodEnabled = true;
        var t = "/";
        o = "f_";
        var permCount = 0;
        

        var flooder = setInterval(function(){
                  floodBtn.style.backgroundColor = "#25cc00"
          if(floodEnabled) {
            if(permCount > 45){
              history.pushState(0, 0, "/")
         t = "/";
         o = "f_";
         permCount = 0;
            }
          history.pushState(0, 0, t += o.toString() + count.toString());

          count++;
          permCount++;
          } else{
            clearInterval(flooder);
                 floodBtn.style.backgroundColor = "#1c59ff";
          }
        }, 35);
		
		} else{
     floodEnabled = false;
     history.pushState(0, 0, "/")
     floodBtn.style.backgroundColor = "#1c59ff";
    };
  })
  editBtn.addEventListener("click", function(){
    if(!editEnabled){
      editBtn.style.backgroundColor = "#25cc00"

    document.body.contentEditable = true;
    background.contentEditable = false;
    backgroundImage.contentEditable = false;
    editEnabled = true;
    editUsed = true;
    } else{
      document.body.contentEditable = false;
      editBtn.style.backgroundColor = "#0031b5";
      editEnabled = false;
      editUsed = false;
    }

  })
  tabBtn.addEventListener("click", function(){
    document.title = prompt("Type new tab name")
  });
};

let pseudoInput = null;
//chatroom

function app3(){
  async function sendDM(user, content){
	let req = await fetch('https://inject0r.littleclaw.repl.co/chat2', {
  	method: 'POST',
    headers: {
    	'token':Injector.user.token,
      'user2':user,
      'dm':"jdimas"
    },
    body: content
  })
  return await req.text();
}
async function makeDMFetch(user){
	let req = await fetch('https://inject0r.littleclaw.repl.co/chat2', {
  	method: 'GET',
    headers: {
    	'token':Injector.user.token,
      'user2':user,
      'dm':"jdimas"
    },
  })
  return await req.text();
}
let recentMsgOwner = null;
let autoWin = openWindow(750, 350, 'Chatbox', false, Injector.serverURL + "/chat.png");
autoWin.style.backgroundColor = 'white';
let timeExistings = [];
let currentChannel = "#general"
let currentDM = null;
let type = "channel" // tells it if its a dm or channel
// bap defines all elements in single zone :(
let headerOutline = newElement('genericBapBox', autoWin, "autoObj");
headerOutline.style.position = 'absolute';
headerOutline.style.width = '100%';
headerOutline.style.height = '50px';
headerOutline.style.backgroundColor = '#23272A';
headerOutline.style.left = '0px';
headerOutline.style.top = '0px';
let namebox = newElement('genericBapBox', headerOutline, "autoObj");
namebox.style.position = 'absolute';
namebox.style.width = '150px';
namebox.style.height = '48px';
namebox.style.backgroundColor = '#2c2ff3';
namebox.style.left = '0px';
namebox.style.top = '0px';
namebox.textContent = "Chatbox";
namebox.style.userSelect = "none";
namebox.style.lineHeight = "48px";
namebox.style.color = "white";
namebox.style.fontWeight = "bold";
namebox.style.fontSize = "30px";
namebox.style.textAlign = "center";
namebox.style.textShadow = "1px 1px #000000";
let channelBox = newElement('genericBapBox', autoWin, "autoObj");
channelBox.style.position = 'absolute';
channelBox.style.width = '151px';
channelBox.style.height = 'calc(100% - 215px)';
channelBox.style.backgroundColor = 'navy';
channelBox.style.left = '0px';
channelBox.style.top = '50px';
channelBox.style.overflowY = "scroll";
let dmSect = newElement('genericBapBox', autoWin, "autoObj");
dmSect.position = "absolute";
dmSect.style.width = "151px";
dmSect.style.height = "145px";
dmSect.style.top = '205px';
dmSect.style.left = '0px';
dmSect.style.overflowY = 'scroll';
dmSect.style.backgroundColor = 'DimGray';
let userSearchBar = newElement('input', autoWin, "usearch");
userSearchBar.style.position = "absolute";
userSearchBar.style.width = "146px";
userSearchBar.style.height = "18px";
userSearchBar.style.bottom = "141px";
userSearchBar.style.left = "0px";
userSearchBar.style.backgroundColor = "black";
userSearchBar.style.fontFamily = "Helvetica";
userSearchBar.style.color = "white";
userSearchBar.placeholder = "Search users to DM...";
userSearchBar.style.borderStyle = "none none solid none";
userSearchBar.style.borderColor = "white";
userSearchBar.style.zIndex = "999999999999999999999999";

userSearchBar.addEventListener("keydown", function(){
  console.log("HI JOE!!!");
  setTimeout(function(){
  while(dmSect.firstChild){
  dmSect.firstChild.remove();
  numDMsFloat = 0;
  }
  
  for(i=0; i<=namesObject.length; i++){
    
    if(namesObject[i].toLowerCase().includes(userSearchBar.value.toLowerCase())){
      newDM(namesObject[i]);
    }
  }
  
  }, 1);
})

let subHeader = newElement('genericBapBox', headerOutline, "autoObj");
subHeader.style.position = 'absolute';
subHeader.style.width = 'calc(100% - 150px)';
subHeader.style.height = '48px';
subHeader.style.backgroundColor = '#2c2f33';
subHeader.style.left = '150px';
subHeader.style.top = '0px';
subHeader.style.textAlign = "right";
subHeader.style.fontSize = "25px";
subHeader.style.fontWeight = "bold";
subHeader.style.lineHeight = "48px";
subHeader.style.color = "white";
subHeader.textContent = "Users On Chatbox:"
subHeader.style.userSelect = "none";
let userList = newElement('genericBapBox', autoWin, "autoObj");
userList.style.position = 'absolute';
userList.style.width = '150px';
userList.style.height = 'calc(100% - 50px)';
userList.style.backgroundColor = '#23272a';
userList.style.left = 'calc(100% - 150px)';
userList.style.top = '50px';
let chatBox = newElement('genericBapBox', autoWin, "autoObj");
chatBox.style.position = 'absolute';
chatBox.style.width = 'calc(100% - 300px)';
chatBox.style.height = 'calc(100% - 50px)';
chatBox.style.backgroundColor = '#1f1f1f';
chatBox.style.left = '150px';
chatBox.style.top = '50px';
let channelName = newElement('genericBapBox', subHeader, "autoObj");
channelName.style.position = 'absolute';
channelName.style.width = '300px';
channelName.style.height = '35px';
channelName.style.backgroundColor = 'DimGray';
channelName.style.left = '5px';
channelName.style.top = '5px';
channelName.style.lineHeight = "35px";
channelName.style.fontSize = "30px";
channelName.style.color = "#23272A";
channelName.style.fontWeight = "bold";
channelName.textContent = currentChannel;
channelName.style.paddingLeft = "5px";
channelName.style.userSelect = "none";
channelName.style.textAlign = "left";
let messageInput = newElement('genericBapBox', chatBox, "autoObj");
messageInput.style.position = 'absolute';
messageInput.style.width = '95%';
messageInput.style.height = '40px';
messageInput.style.backgroundColor = '#242424';
messageInput.style.left = '2.5%';
messageInput.style.top = 'calc(100% - 50px)';
messageInput.style.borderWidth = '1px';
messageInput.style.borderColor = 'white';
messageInput.style.borderStyle = 'solid';
messageInput.style.borderRadius = '3px';
let messageOutput = newElement('genericBapBox', chatBox, "autoObj");
messageOutput.style.position = 'absolute';
messageOutput.style.width = '100%';
messageOutput.style.height = 'calc(100% - 60px)';
messageOutput.style.backgroundColor = '#242424';
messageOutput.style.left = '0px';
messageOutput.style.top = '0px';
messageOutput.style.overflowY = "auto";
messageOutput.style.overflowX = "hidden";

let realMsgInput = newElement('input', messageInput, "autoObj");
realMsgInput.style.position = 'absolute';
realMsgInput.style.width = 'calc(100% - 11px)';
realMsgInput.style.height = 'calc(100% - 10px)';
realMsgInput.style.backgroundColor = 'transparent';
realMsgInput.style.color = "white";
realMsgInput.style.borderWidth = "0px";
realMsgInput.style.left = '2.5px';
realMsgInput.style.top = '2.5px';
let numMessagesFloat = -1;
let numChannelsFloat = 0;
let numDMsFloat = 0;
function newChannel(name, active){
  let channel = newElement('channel', channelBox, "newChannel");
  channel.textContent = name;
  if(active){
  channel.classList.add("selectedChannel");
  }
  channel.addEventListener("click", function(){
    type = "channel";
    currentDM = null;
    if(currentChannel !== name){
    currentChannel = name;
    document.querySelector(".selectedChannel").classList.remove("selectedChannel");
    channel.classList.add("selectedChannel");
    channelName.textContent = currentChannel;
    while(messageOutput.firstChild){
      messageOutput.firstChild.remove();
    }
    numMessagesFloat = -1;
    timeExistings = [];
    makeChatFetch();
    }
  })
  channel.style.top = numChannelsFloat.toString() + "px";
  numChannelsFloat += 47;
}
function fullDMFetch(name2, reset){
      makeDMFetch(name2).then(response =>{
      if(reset !== false){
      while(messageOutput.firstChild)
      messageOutput.firstChild.remove();
      }
      let responseParsed = JSON.parse(response);
      for(i=0; i<responseParsed.contentOfChat.length; i++){
        let messageArray = responseParsed.contentOfChat[i];
        let maMsg = newMessage(messageArray[0], messageArray[1], messageArray[2]);
      }
    })
}
function newDM(name){
  let dmBox = newElement('channel', dmSect, "newChannel");
  dmBox.textContent = name;
  
  dmBox.addEventListener("click", function(){
    realMsgInput.placeholder = "";
    type = "DM";
    if(currentDM !== name){
    currentDM = name;
    
    document.querySelector(".selectedChannel").classList.remove("selectedChannel");
    dmBox.classList.add("selectedChannel");
    
    channelName.textContent = currentDM;
    while(messageOutput.firstChild){
      messageOutput.firstChild.remove();
    }
     currentChannel = name;
    numMessagesFloat = -1;
    timeExistings = [];
      fullDMFetch(name);
    }
})
dmBox.style.top = numDMsFloat.toString() + "px";
numDMsFloat += 47;
}
newChannel("announcements", false)
newChannel("#general", true);
newChannel("#fart-channel", false)
function newMessage(name, date, content, textColor){
if(!(timeExistings.includes(date))){
  let message = newElement('chatMessage', messageOutput, "userMessage");
  messageOutput.scrollTop += 1932812742971294242914264128;
  message.style.top = numMessagesFloat.toString() + "px";
  message.textContent = name;
  message.style.textShadow = "1px 1px #000000";
  let timeIndicator = newElement('timeInd', message, "messageTimestamp");
  let joe = new Date(date).toString();
  joe = (joe.slice(0, (joe.length - 33)));
  if(parseInt(joe.slice(15, 18)) > 12){
    let joe1 = joe.slice(0, 15);
    let joe2 = joe.slice(15, 18);
    let joe3 = joe.slice(18);
    joe2 = (parseInt(joe2) - 12).toString();
    joe = (joe1 + " " + joe2 + joe3 + " PM");
  } else{
   joe += " AM" 
  };
  timeIndicator.textContent = joe;
  let messageContentField = newElement('messageContent', message, "messageCont");
  timeIndicator.style.overflowY = "hidden";
  messageContentField.textContent = content;
  message.style.height = messageContentField.offsetHeight + 28 + "px";
  numMessagesFloat += messageContentField.offsetHeight + 28;
  if(textColor !== undefined && textColor !== null){
    messageContentField.style.color = textColor;
  }
  messageOutput.scrollTop += 919722398174248274129842;
  timeExistings.push(date);
  return [messageContentField, message];
}
}
let onlinePaddingTop = 0;
function newOnlineUser(name){
  let userIndicator = newElement('userInd', userList, 'userStatusIndicator');
  userIndicator.textContent = name;
  userIndicator.style.top = onlinePaddingTop + "px";
  onlinePaddingTop += 47;
  userIndicator.style.overflowY = "hidden";
  return userIndicator;
}
function removeOnlineUser(returnedVal){
  returnedVal.remove();
  onlinePaddingTop = 0;
  for(i=0; i<userList.children.length; i++){
    userList.children[i].style.top = onlinePaddingTop + "px";
    onlinePaddingTop += 47;
  }
}
let joeLine = newOnlineUser("Loading...");

let onClientArray = [joeLine];
function makeChatFetch(){
  let chatFetch = new XMLHttpRequest;
  chatFetch.open('GET', Injector.serverURL + '/chat2');
  chatFetch.setRequestHeader('token', Injector.user.token);
  chatFetch.send();
  chatFetch.onreadystatechange=e=>{
    if(chatFetch.readyState == 4){
      try{
      let chatFileParsed = JSON.parse(chatFetch.responseText);
      if(chatFileParsed[currentChannel].important !== undefined){
        realMsgInput.placeholder = "Important channel - cannot send"
      }else{
        realMsgInput.placeholder = ""}
      for(i=0; i<chatFileParsed[currentChannel].contentOfChat.length; i++){
        let messageArray = chatFileParsed[currentChannel].contentOfChat[i];
        let maMsg = newMessage(messageArray[0], messageArray[1], messageArray[2]);
      }
      }catch(err){
        console.error("Chat fetch failed; chat likely reset?Error: "+err);
      }
    }

  }
}
makeChatFetch();
function statusUpdate(){
  let statusupdater = new XMLHttpRequest;
  statusupdater.open('POST', Injector.serverURL + '/chat2');
  statusupdater.setRequestHeader('token', Injector.user.token);
  statusupdater.send("fromStatusUpdate");
  statusupdater.onreadystatechange=e=>{
    if(statusupdater.readyState == 4){
    let users = JSON.parse(statusupdater.responseText);
    for(i=0; i<onClientArray.length; i++){
      onClientArray[i].remove();
    }
    onlinePaddingTop = 0;
    for(i=0; i<users.length; i++){
      let goomba = newOnlineUser(users[i][0]);
      onClientArray.push(goomba)
    }

    };
  }
}
statusUpdate();
var statusUpdaterTimeout = setInterval(function(){
  if(autoWin.id !== "removed"){
 statusUpdate() 
  };
}, 30000);
var chatLoopFetch = setInterval(function(){
  if(type == "channel"){
  makeChatFetch();
  }else{
    fullDMFetch(currentDM, false);
  }
}, 750);
realMsgInput.addEventListener("keydown", function(e){
  if (e.key == "Enter"){
    if(type == "channel"){
    makeChatFetch();
    if(realMsgInput.value.length < 500){
    let chatsend = new XMLHttpRequest;
    chatsend.open('POST', Injector.serverURL + '/chat2');
    chatsend.setRequestHeader('channel', currentChannel);
    chatsend.setRequestHeader('token', Injector.user.token);
    chatsend.send(realMsgInput.value);
    realMsgInput.value = "";
    }else{
      realMsgInput.style.color = "red";
      setTimeout(function(){
        realMsgInput.style.color = "white";
      }, 1000);
    }
  }else{
  if(realMsgInput.value.length < 500){
    sendDM(currentDM, realMsgInput.value);
    realMsgInput.value = "";
    fullDMFetch(currentDM, false);


   }else{
      realMsgInput.style.color = "red";
      setTimeout(function(){
        realMsgInput.style.color = "white";
      }, 1000);
  }
}
  }
  })
style.textContent += `
chatMessage{
  position: absolute;
  top: 0px;
  left: 0px;
  margin-bottom: 100px;
  height: 75px;
  width: 100%;
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.1);
  border-style: none none solid none;
  border-width: 2px;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
timeInd{
  position: absolute;
  right: 0px;
  width: 300px;
  height: 18px;
  color: gray;
  font-weight: thin;
  background-color: transparent;
  top: 2px;
  text-align: right;
}
messageContent{
  position: absolute;
  top: 23px;
  width: calc(100% - 10px);
  background-color: transparent;
  left: 0px;
  color: white;
  font-weight: 50;
  padding-left: 5px;
  padding-right: 5px;
  text-overflow: clip;
  line-height: 18px;
}
userInd{
  position: absolute;
  width: calc(100% - 5px);
  height: 45px;
  top: 0px;
  left: 0px;
  font-size: 18px;
  color: white;
  padding-left: 5px;
  border-color: rgba(255, 255, 255, 0.1);
  border-width: 2px;
  border-style: none none solid none;
  user-select: none;
  line-height: 45px;
  text-overflow: ellipsis;
}
channel{
  position: absolute;
  width: calc(100% - 5px);
  height: 45px;
  background-color: indigo;
  color: white;
  line-height: 45px;
  text-align: left;
  padding-left: 5px;
  font-size: 18px;
  font-weight: thin;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.1);
  border-style: none none solid none;
  user-select: none;
  transition-duration: 0.25s;
  text-overflow: ellipses;
}
channel:hover{
  cursor: pointer;
  background-color: rgba(0, 0, 255, 0.50);
}
.selectedChannel{
  background-color: rgba(0, 0, 255, 0.75);
  font-weight: bold;
}
.selectedChannel:hover{
  cursor: pointer;
  background-color: rgba(74, 0, 130, 0.75);
}
`

}


// prox browser
function app4(){
  let proxybrowser = openWindow(400, 300, "ProxBrowser", true, Injector.serverURL + "/proxbrowser.png");
  var proxyTypes = ["Ultraviolet"];
  var proxyUrls = ["https://discord-bot-test-log.littleclaw.repl.co/service/"];
  let urlbar = newElement("input", proxybrowser, "urlbar");
  let proxyPicker = newElement("select", proxybrowser, "proxypicker");
  let fullScreenBtn = newElement("FSButton", proxybrowser, "fsbtn");
  let browserwindow = newElement("iframe", proxybrowser, "proxyBrowser")
  browserwindow.onload = function(){
    console.log("browser loaded! SRC: " + browserwindow.src)
    if(browserwindow.src.includes("https://alloyinject.herokuapp.com/session/?url=eW91dHViZS5jb20=")){
      if(browserwindow.src[63] == "/"){
        browserwindow.src = "https://alloyinject.herokuapp.com/session/?url=eW91dHViZS5jb20=/" + btoa(browserwindow.src.slice(64, browserwindow.src.length));
      } else{
        console.log(browserwindow.src[63]);
      }
    }
  }
  proxyPicker.style.position = "absolute";
  proxyPicker.style.right = "40px";
  proxyPicker.style.width = "80px";
  proxyPicker.style.height = "29px";
  proxyPicker.style.backgroundColor = "#040042";
  proxyPicker.style.color = "white";
  fullScreenBtn.style.position = "absolute";
  fullScreenBtn.style.right = "0px";
  fullScreenBtn.style.width = "40px";
  fullScreenBtn.style.height = "27px";
  fullScreenBtn.style.backgroundColor = "#040042";
  fullScreenBtn.style.color = "white";
  fullScreenBtn.textContent = "FS";
  fullScreenBtn.style.userSelect = "none";
  fullScreenBtn.style.textAlign = "center";
  fullScreenBtn.style.lineHeight = "27px";
  fullScreenBtn.style.borderStyle = "none none solid none";
  fullScreenBtn.style.borderWidth = "2px";
  fullScreenBtn.style.borderColor = "white";
  fullScreenBtn.style.transitionDuration = "0.5s";

  browserwindow.style.position = "absolute";
  browserwindow.style.width = "100%";
  browserwindow.style.height = "calc(100% - 27px)";
  browserwindow.style.bottom = "0px";
  browserwindow.style.borderWidth = "0px";
  browserwindow.style.margin = "0px";
fullScreenBtn.addEventListener("mouseover", function(){
  fullScreenBtn.style.backgroundColor = "#0d009c";
  fullScreenBtn.style.cursor = "pointer";
})
fullScreenBtn.addEventListener("mouseout", function(){
  fullScreenBtn.style.backgroundColor = "#040042";
  fullScreenBtn.style.cursor = "default";
})

  for(i=0; i<proxyTypes.length; i++){
    let option = new Option(proxyTypes[i], proxyUrls[i]);
    proxyPicker.appendChild(option);
  }
  proxybrowser.style.backgroundColor = "#292929";
  urlbar.style.position = "absolute";
  urlbar.style.top = "0px";
  urlbar.style.height = "25px";
  urlbar.style.width = "calc(100% - 120px)";
  urlbar.style.backgroundColor = "#040042";
  urlbar.style.borderColor = "white";
  urlbar.style.borderWidth = "2px";
  urlbar.style.color = "white";
  urlbar.style.borderStyle = "none none solid none";

  urlbar.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      urlbar.placeholder = urlbar.value;
      if(proxyPicker.value === "https://discord-bot-test-log.littleclaw.repl.co/service/"){
        urlbar.value = btoa(urlbar.value);
      }
      browserwindow.src = proxyPicker.value + urlbar.value;
      urlbar.value = "";
      
    }
  })
  fullScreenBtn.addEventListener("click", function(){
    error("Fullscreen is not currently implemented, and is planned for a future update. This window can be resized, though!");
  })

}

// app store
function app5(){
  let store = openWindow(500, 300, "App Store", false, Injector.serverURL + "/app.png");
  let topHeaderBar = newElement("appstorebar", store, "appbar");
  let appList = newElement("applist", store, "applister");
  store.style.overflowX = "hidden";
  let appDesc = newElement("appdesc", store, "appdescriber");
  let namer = newElement("appnamer", appDesc, "appnamer");
  let devnamer = newElement("devnamer", appDesc, "devnamer");
  let descnamer = newElement("appdescriptor", appDesc, "descer")
  let downloadAppBtn = newElement("appdownbtn", appDesc, "downloadBtn");
  // make the top header
  topHeaderBar.style.position = "absolute";
  topHeaderBar.style.top = "0px";
  topHeaderBar.style.width = "100%";
  topHeaderBar.style.backgroundColor = "orange";
  topHeaderBar.style.color = "white";
  topHeaderBar.style.paddingLeft = "10px";
  topHeaderBar.style.height = "50px";
  topHeaderBar.style.fontFamily = "Helvetica";
  topHeaderBar.style.lineHeight = "50px";
  topHeaderBar.style.fontSize = "40px";
  topHeaderBar.style.textAlign = "left";
  topHeaderBar.textContent = "App Store";

  // make the list of the apps that shows on the left
  appList.style.position = "absolute";
  appList.style.bottom = "0px";
  appList.style.left = "0px";
  appList.style.width = "150px";
  appList.style.height = "calc(100% - 50px)";
  appList.style.borderColor = "gray";
  appList.style.borderStyle = "none solid none none";
  appList.style.overflowY = "auto";
  appList.style.overflowX = "hidden";
  
  // make the app descriptions on the right 
  appDesc.style.position = "absolute";
  appDesc.style.bottom = "0px";
  appDesc.style.right = "0px";
  appDesc.style.width = "calc(100% - 152px)";
  appDesc.style.height = "calc(100% - 50px)";
  appDesc.style.overflowY = "auto";
  appDesc.style.overflowX = "hidden";

  // app name on right descriptor
  namer.style.position = "absolute";
  namer.textContent = "App Store";
  namer.style.width = "250px";
  namer.style.height = "50px";
  namer.style.fontSize = "40px";
  namer.style.lineHeight = "50px";
  namer.style.textAlign = "center";
  namer.style.left = "calc(50% - 125px)";
  namer.style.whiteSpace = "nowrap";
  namer.style.overflow = "hidden";
  namer.style.textOverflow = "ellipsis";

  // app download button
  
    devnamer.style.position = "absolute";
  devnamer.textContent = "animecat7";
  devnamer.style.width = "200px";
  devnamer.style.height = "30px";
  devnamer.style.fontSize = "20px";
  devnamer.style.lineHeight = "30px";
  devnamer.style.textAlign = "center";
  devnamer.style.left = "calc(50% - 100px)";
  devnamer.style.top = "40px";

      descnamer.style.position = "absolute";
  descnamer.textContent = "test";
  descnamer.style.width = "80%";
  descnamer.style.height = "calc(100% - 120px)";
  descnamer.style.fontSize = "15px";
  descnamer.style.textAlign = "center";
  descnamer.style.left = "calc(50% - 40%)";
  descnamer.style.top = "70px";
  descnamer.textContent = "Download additional features and apps for Injector!";
  descnamer.style.lineHeight = "15px";
  
  downloadAppBtn.style.position = "absolute";
  downloadAppBtn.style.bottom = "10px";
  downloadAppBtn.style.height = "30px";
  downloadAppBtn.style.width = "250px";
  downloadAppBtn.style.backgroundColor = "green";
  downloadAppBtn.style.color = "white";
  downloadAppBtn.textContent = "Download";
  downloadAppBtn.style.left = "calc(50% - 125px)";
  downloadAppBtn.style.fontSize = "25px";
  downloadAppBtn.style.fontFamily = "Helvetica";
  downloadAppBtn.style.lineHeight = "30px";
  downloadAppBtn.style.textAlign = "center";
  downloadAppBtn.style.borderRadius = "5px";
  downloadAppBtn.style.opacity = "0";
  let numOfApps = 0;
  function newStoreApp(name, dev, desc){
    let appbtn = newElement("storeApp", appList, "storeapp1");
    appbtn.textContent = name;
    appbtn.style.position = "absolute";
    appbtn.style.width = "150px";
    appbtn.style.height = "50px";
    appbtn.style.top = [numOfApps * 50].toString() + "px";
    numOfApps++;
    appbtn.style.borderRadius = "0px";
    appbtn.style.color = "black";
    appbtn.style.overflow = "hidden";
    appbtn.style.whiteSpace = "nowrap"
    appbtn.style.fontSize = "30px";
    appbtn.style.paddingRight = "12px";
    appbtn.style.textAlign = "right";
    appbtn.style.lineHeight = "30px";
    appbtn.style.fontFamily = "Helvetica";
    appbtn.style.userSelect = "none";
let devIndc = newElement("devname", appbtn, "storedevc");
    devIndc.style.fontSize = "12px";
    devIndc.style.color = "black";
    devIndc.textContent = dev;
    devIndc.style.position = "absolute";
    devIndc.style.bottom = "0px";
    devIndc.style.right = "0px";
    devIndc.style.marginBottom = "1px";
    devIndc.style.paddingBottom = "1px";
    devIndc.style.paddingRight = "12px";
    devIndc.style.top = "25px";
    devIndc.style.userSelect = "none";
    appbtn.addEventListener("click", function(){
      namer.textContent = name;
      devnamer.textContent = dev;
      descnamer.textContent = desc;
      for(i=0; i<appsDownloaded.length; i++){
      if(('"'+namer.textContent+'"') == appsDownloaded[i]){
        downloadAppBtn.style.backgroundColor = "red";
        downloadAppBtn.textContent = "Uninstall";
        break;
      } else{
        downloadAppBtn.style.backgroundColor = "green";
        downloadAppBtn.textContent = "Download";
      }}
      downloadAppBtn.style.transitionDuration = "0s";
      downloadAppBtn.style.opacity = "1";
      for(i=0; i<appList.children.length; i++){
        appList.children[i].style.backgroundColor = "white";
      }
      appbtn.style.backgroundColor = "#bfbfbf"
    

    })
  }


  async function requestAppList(){
    let fetchReq = await fetch(`${Injector.serverURL}/appstore/apps`);
    return await fetchReq.text();
  }
  requestAppList().then(response => {
    joe = JSON.parse(response);
    for(i=0; i<joe.length; i++){
      newStoreApp(joe[i][0], joe[i][1], joe[i][2]);
    }
  })

  downloadAppBtn.addEventListener("click", function(){
    if(downloadAppBtn.textContent === "Uninstall"){
      downloadAppBtn.textContent = "Uninstalling...";
      try{
      document.getElementById(namer.textContent).remove();
      }catch(err){
        console.log(namer.textContent + " is not a valid app ID, you'll have to refresh. Tell the developer to set the app ID to the name of his app.");
      }
    } else{
    downloadAppBtn.textContent = "Downloading...";
    appsDownloaded.push('"' + namer.textContent + '"');

    }
    let downloadReq = new XMLHttpRequest;
    downloadReq.open("POST", Injector.serverURL + "/appstore");
    downloadReq.setRequestHeader('token', Injector.user.token);
    if(downloadAppBtn.textContent === "Uninstalling..."){
      downloadReq.setRequestHeader('action', 'uninstall');

    }
    downloadReq.send(namer.textContent);
    downloadReq.onreadystatechange=e=>{
      if(downloadReq.readyState == 4 && downloadAppBtn.textContent === "Downloading...") {
        try{
        eval(downloadReq.responseText);
        downloadAppBtn.textContent = "Downloaded!";
        appsDownloaded.push(namer.textContent);
        setTimeout(function(){
          downloadAppBtn.textContent = "Download";
        }, 2000)
        } catch(err) {
          error(err);
          downloadAppBtn.textContent = "Error downloading";
        }
      }else if(downloadReq.readyState == 4){
        
        downloadAppBtn.textContent = "Download";
        downloadAppBtn.style.backgroundColor = "green";
        document.title = "";

      }
    }
  })
};
Injector.settings.theme = null;
let currentselected = null;
function customizeApp(){
  let customWindow = openWindow(400, 200, "Personalize", false, Injector.serverURL + "/personalize.png");
  customWindow.style.backgroundColor = "#1c1c1c";
  let optionsLeft = newElement("randomassbox", customWindow, "randomassbox");
  optionsLeft.style.left = "0px";
  optionsLeft.style.top = "0px";
  optionsLeft.style.position = "absolute";
  optionsLeft.style.backgroundColor = "gray";
  optionsLeft.style.height = "100%";
  optionsLeft.style.width = "100px";

  let optionsPanel = newElement("option_box", customWindow, "andika");
  optionsPanel.style.position = "absolute";
  optionsPanel.style.left = "100px";
  optionsPanel.style.width = "calc(100% - 100px)";
  optionsPanel.style.height = "100%";
  optionsPanel.style.top = "0px";
  optionsPanel.style.visibility = "hidden";

  function newOption(name, saved_value, requiresRestart){
    let checkbox = newElement("input", optionsPanel, saved_value);
    checkbox.type = "checkbox";
    checkbox.style.position = "relative";
    checkbox.style.margin = "20px";
    checkbox.style.width = "20px";
    checkbox.style.height = "20px";
    let joe = newElement("p", optionsPanel, "antifa");
    joe.style.position = "absolute";
    joe.style.left = "45px";
    joe.textContent = name;
    joe.style.top = checkbox.offsetTop - 17 + 'px';
    joe.style.fontSize = "15px";
    if(requiresRestart !== undefined){
    joe.style.color = "yellow";
    }else{
    joe.style.color = "white";
    }
    let warning = newElement("p", optionsPanel, "antifa2");
    warning.style.position = "absolute";
    warning.style.bottom = "-10px";
    warning.style.left = "10px";
    warning.style.color = "orange";
    warning.textContent = "Yellow options require a refresh!";
    warning.style.fontFamily = "Helvetica";
    warning.style.fontWeight = "bold";

    let existing = false;
    fetchUserData().then(response =>{
      let parsedResponse = JSON.parse(response);
      if(parsedResponse['personalize'] !== undefined){
        if(parsedResponse['personalize'].indexOf(saved_value) !== -1){
          existing = true;
        }
      }
      if(existing){checkbox.checked = true};
    })
    checkbox.addEventListener("click", function(){
      for(i=0; i<optionsPanel.children.length; i++){
        if(optionsPanel.children[i].type == "checkbox"){
          optionsPanel.children[i].disabled = true;
        }
      }
      setTimeout(function(){
        fetchUserData().then(userData => {
          let parsed = JSON.parse(userData);
       if(checkbox.checked){
         saveData('personalize', saved_value);
         Injector.user.settings += saved_value;
         } else{
           let indexOfRemoval = parsed["personalize"].indexOf(saved_value);
           deleteData('personalize', indexOfRemoval);
           Injector.user.settings = Injector.user.settings.replace(saved_value,'')
          };
          for(i=0; i<optionsPanel.children.length; i++){
        if(optionsPanel.children[i].type == "checkbox"){
          optionsPanel.children[i].disabled = false;
        }
      }
        });
      },1);
    })
    
  }
  newOption("Disable Right Shift Transition", "RightShiftTransitionDisabled");


  let themesOption = newElement("customizebtn", optionsLeft, "customizewindowbtn");
  themesOption.textContent = "Themes";
  themesOption.style.color = "lime";
themesOption.addEventListener("click", function(){
  for(i=0; i<themeContents.length; i++){
    themeContents[i].style.visibility = "visible";
    optionsPanel.style.visibility = "hidden";
  }
  themesOption.style.color = "lime";
  settingsOption.style.color = "white";
  customWindow.style.overflowX = "scroll";
})
  let settingsOption = newElement("customizebtn", optionsLeft, "customizewindowbtn");
  settingsOption.textContent = "Settings";
  settingsOption.style.top = "36px";
settingsOption.addEventListener("click", function(){
  for(i=0; i<themeContents.length; i++){
    themeContents[i].style.visibility = "hidden";
    optionsPanel.style.visibility = "visible";
  }
  customWindow.style.overflowX = "hidden";
  settingsOption.style.color = "lime";
themesOption.style.color = "white";
})

  let marginToUseLeft = 115
  function newTheme(themeName, icon, themeCode){
  let themeindicator = newElement("img", customWindow, "themeBox");
  let themeCaption = newElement("themecaption", themeindicator, "themecaptionMidnight");
  themeindicator.style.left = marginToUseLeft.toString() + "px";
  if(Injector.settings.theme == themeName){
    currentSelected = themeindicator;
  }
  marginToUseLeft += 175
  themeindicator.src = icon;
  themeCaption.style.position = "absolute";
  themeCaption.textContent = themeName
  themeCaption.style.left = themeindicator.style.left;
  themeCaption.style.width = themeindicator.style.width;
  themeCaption.style.height = "25px";
  themeCaption.style.textAlign = "center";
  themeCaption.style.bottom = "0px";
  themeindicator.style.bottom = "15px";
  themeindicator.addEventListener("click", function(){
    if(themeindicator.style.borderColor !== "lime"){
      themeindicator.style.borderColor = "lime";
      currentSelected.style.borderColor = "gray";
      currentSelected = themeindicator;
      if(themeCode !== undefined){
        try{
          eval(themeCode);
        }catch(err){
          error(err);
        }
      }

    }
  })
  return themeindicator;
  }
 
  let midnightThemeSelector = newTheme("midnight", "https://www.schemecolor.com/wallpaper?i=2238&desktop", "midnightTheme()")
  let crimsonThemeSelector = newTheme("crimson", "https://www.schemecolor.com/wallpaper?i=34515&desktop", "crimsonTheme()");
  let greenboyThemeSelector = newTheme("green", "https://www.schemecolor.com/wallpaper?i=56477&desktop", "greenTheme()");
  let lightThemeSelector = newTheme("light", "https://www.schemecolor.com/wallpaper?i=44498&desktop", "lightTheme()")

  currentSelected.style.borderColor = "lime";
 
  // 
  let themeContents = [midnightThemeSelector, crimsonThemeSelector, greenboyThemeSelector, lightThemeSelector];

}
/*
function chatapp2() {
  let autoWin = openWindow(475, 325, 'Chatroom 2.0', false, 'https://iconarchive.com/download/i86037/graphicloads/100-flat-2/chat-2.ico');
autoWin.style.backgroundColor = 'white';
let topBar = newElement('genericBapBox', autoWin, "autoObj");
topBar.style.width = 'calc(100% - 100px)';
topBar.style.height = '40px';
topBar.style.backgroundColor = 'DarkSlateGrey';
topBar.style.left = '100px';
topBar.style.top = '0px';

let sideBar = newElement('genericBapBox', autoWin, "autoObj");
sideBar.style.width = '100px';
sideBar.style.height = '100%';
sideBar.style.backgroundColor = 'DarkSlateBlue';
sideBar.style.left = '0px';
sideBar.style.top = '0px';
let messageArea = newElement('genericBapBox', autoWin, "autoObj");
messageArea.style.width = 'calc(100% - 100px)';
messageArea.style.height = 'calc(100% - 80px)';
messageArea.style.backgroundColor = 'Indigo';
messageArea.style.left = '100px';
messageArea.style.top = '40px';
let messageInput = newElement('genericBapBox', autoWin, "autoObj");
messageInput.style.width = 'calc(100% - 150px)';
messageInput.style.height = '35px';
messageInput.style.backgroundColor = 'Teal';
messageInput.style.left = '140px';
messageInput.style.top = 'calc(100% - 40px)';
messageInput.contentEditable = true;
messageInput.style.lineHeight = "15px";
messageInput.style.paddingLeft = "10px";
messageInput.style.paddingTop = "5px";
messageInput.style.fontSize = "12px";
messageInput.style.color = "white";
messageInput.style.overflowY = "scroll";
let imageUpload = newElement('genericBapBox', autoWin, "autoObj");
imageUpload.style.width = '40px';
imageUpload.style.height = '40px';
imageUpload.style.backgroundColor = 'RebeccaPurple';
imageUpload.style.left = '100px';
imageUpload.style.top = 'calc(100% - 40px)';
imageUpload.style.backgroundImage = "url(https://lh3.googleusercontent.com/proxy/cOr3QY9pZOyyhhxCybSxt3XoblDEZdN6is22UJ9Oiphy_-EpGXXja8DUpj9G7K7Y_QgXvWLXB1mL96r4biDmhSbjT0KKlTVhTrxi7uT6u6mTe5FK2ccRkJQ)";
imageUpload.style.backgroundRepeat = "no-repeat";
imageUpload.style.backgroundPosition = "center";
imageUpload.style.backgroundSize = "35px";
let currentUsersNamebar = newElement('genericBapBox', sideBar, "autoObj");
currentUsersNamebar.style.width = '100%';
currentUsersNamebar.style.height = '40px';
currentUsersNamebar.style.backgroundColor = 'PaleGoldenRod';
currentUsersNamebar.style.left = '0px';
currentUsersNamebar.style.top = '0px';
let settingsBtn = newElement('genericBapBox', topBar, "autoObj");
settingsBtn.style.width = '30px';
settingsBtn.style.height = '30px';
settingsBtn.style.backgroundColor = 'white';
settingsBtn.style.left = 'calc(100% - 35px)';
settingsBtn.style.top = '5px';
let channelInd = newElement('genericBapBox', topBar, "autoObj");
channelInd.style.width = '250px';
channelInd.style.height = '30px';
channelInd.style.backgroundColor = 'transparent';
channelInd.style.left = '5px';
channelInd.style.top = '7px';
channelInd.textContent = "General Chat";
channelInd.style.fontSize = "25px";
channelInd.style.color = "white";
channelInd.style.fontWeight = "bold";
}*/


// create icons
createNewItem("Changelog", "chlogApp", "app1()", Injector.serverURL + "/logo.png");
createNewItem("Exploit Hub", "exploithubApp", "app2()", Injector.serverURL + "/exploithub.png");
createNewItem("Chatbox", "chatApp", "app3()", Injector.serverURL + "/chat.png");
createNewItem("ProxBrowser", "exploithubApp", "app4()", Injector.serverURL + "/proxbrowser.png");
createNewItem("App Store", "exploithubApp", "app5()", Injector.serverURL + "/app.png");
createNewItem("Personalize", "personalizeApp", "customizeApp()", Injector.serverURL + "/personalize.png");

  background.style.left = "0px";
backgroundImage.style.right = "0px";
var preVis = null;
document.addEventListener("keydown", function (e) {
		var key = e.key + e.location;
		if (key == "Shift2") {
      if(Injector.user.settings.indexOf("RightShiftTransitionDisabled") !== -1){
        if(background.style.display !== "none"){
          background.style.display = "none";
          backgroundImage.style.display = "none"
          background.style.left = "0px";
        backgroundImage.style.right = "0px";
        } else{
          background.style.display = "initial";
          backgroundImage.style.display = "initial";background.style.left = "0px";
        backgroundImage.style.right = "0px";
        }
      }else{
      if(windowParent !== background){
        if(background.style.opacity !== "0"){
        preVis = backgroundImage.style.visibility;
        background.style.opacity = "0";
        backgroundImage.style.opacity = "0";
        backgroundImage.style.visibility = "hidden";
        background.style.visibility = "hidden";
        } else{
        background.style.opacity = "1";
        backgroundImage.style.opacity = "1";
        backgroundImage.style.visibility = preVis;
        background.style.visibility = "visible";
        }
      } else{
      if(background.style.left === "0px"){
        background.style.left = "-100%";
        backgroundImage.style.right = "100%";
        backgroundImage.style.visibility = "hidden";
        background.style.visibility = "hidden";
      } else {
        background.style.left = "0px";
        backgroundImage.style.right = "0px";
        backgroundImage.style.visibility = "visible";
        background.style.visibility = "visible";
      };
      };
    }}});
  function themeSaveRequest(theme){
    console.log("Sending theme save request with theme "+theme);
    let themesaver = new XMLHttpRequest;
    themesaver.open('POST', Injector.serverURL + '/themesave');
    themesaver.setRequestHeader('token', Injector.user.token);
    themesaver.send(theme);
    themesaver.onreadystatechange=e=>{
      if(themesaver.readyState == 4){
      }
    }
  }
function refreshTaskbarColors(){
console.log("Refreshing taskbar colors")
  for(i=0; i<taskbar.children.length; i++){
    if(taskbar.children[i].id === "taskBtn"){
      taskbar.children[i].style.backgroundColor = tbarColor;
    }
  }
}
let ThemeInfo = {
  colors:{
    taskbar_button_color: "#002169",
    taskbar_color: "black",
    background: "#00011c",
    window_gradient: "linear-gradient(90deg, rgba(0, 10, 21, 0.55), rgba(0, 70, 140, 0.55))",
    hover_background_color:"0,255,255",
    hover_border_color:"cyan"
  },
  logo: "url('" + Injector.serverURL + "/logo.png')",
  name: "midnight"
}
  function updateTheme(){
    tbarColor = ThemeInfo.colors.taskbar_button_color;
    refreshTaskbarColors();
    themeSaveRequest(ThemeInfo.name);
    Injector.settings.theme = ThemeInfo.name;
    backgroundImage.style.backgroundColor = ThemeInfo.colors.background;
    changeWindowColors(ThemeInfo.colors.window_gradient);
    taskbar.style.backgroundColor = ThemeInfo.colors.taskbar_color;
    hoverColor = ThemeInfo.colors.hover_background_color;
    hoverOutlineColor = ThemeInfo.colors.hover_border_color;
    backgroundImage.style.backgroundImage = ThemeInfo.logo;
    nameColor = ThemeInfo.colors.app_name_color;
    nameBg = ThemeInfo.colors.app_name_background;
    
  }
 function crimsonTheme(){
   ThemeInfo = {
  colors:{
    taskbar_button_color: "#fc0008",
    taskbar_color: "#D3A42E",
    background: "#5e000e",
    window_gradient: "linear-gradient(90deg, rgba(189, 0, 28, 0.55), rgba(165, 124, 0, 0.55))",
    hover_background_color:"211, 164, 46",
    hover_border_color:"#D3A42E",
    app_name_color: "white",
    app_name_background: "transparent"
  },
  logo: "url('" + Injector.serverURL + "/crlogo.png')",
  name: "crimson"
}
updateTheme();
  }
   function greenTheme(){
     ThemeInfo = {
  colors:{
    taskbar_button_color: "green",
    taskbar_color: "#2BC20E",
    background: "#010B12",
    window_gradient: "linear-gradient(90deg, rgba(0, 0, 0, 0.55), rgba(58, 255, 19, 0.55))",
    hover_background_color:"58, 255, 19",
    hover_border_color:"#9CFF00",
    app_name_color: "white",
    app_name_background: "transparent"
  },
  logo: "url('" + Injector.serverURL + "/grlogo.png')",
  name: "green"
}
updateTheme();
  }
    
  function midnightTheme(){
    ThemeInfo = {
  colors:{
    taskbar_button_color: "#002169",
    taskbar_color: "black",
    background: "#00011c",
    window_gradient: "linear-gradient(90deg, rgba(0, 10, 21, 0.55), rgba(0, 70, 140, 0.55))",
    hover_background_color:"0,255,255",
    hover_border_color:"cyan",
    app_name_color: "white",
    app_name_background: "transparent"
  },
  logo: "url('" + Injector.serverURL + "/logo.png')",
  name: "midnight"
}
updateTheme();
  }
  function lightTheme(){
    ThemeInfo = {
  colors:{
    taskbar_button_color: "#C4DBE9",
    taskbar_color: "#3bb0ff",
    background: "#EAF0FB",
    window_gradient: "linear-gradient(90deg, rgba(51, 154, 171, 0.55), rgba(255, 255, 255, 0.55))",
    hover_background_color:"105, 182, 207",
    hover_border_color:"#7DC5DF",
    app_name_color: "black",
    app_name_background: "transparent"
  },
  logo: "url('" + Injector.serverURL + "/glacier.png')",
  name: "light"
}
updateTheme();
  }
  let preTitle = document.title;
      var uFCons = false;
  let themeFetch = new XMLHttpRequest;
  themeFetch.open('GET', Injector.serverURL + "/themesave");
  themeFetch.setRequestHeader('token', Injector.user.token);
  themeFetch.send();
  console.log("Fetching user data file...");
  themeFetch.onreadystatechange=e=>{
    if(themeFetch.readyState == 4){
      let ThemeJSON = JSON.parse(themeFetch.response);
      try{
        eval(ThemeJSON.theme + "Theme();")
        }catch{
        console.log("No theme detected. Saving theme as Midnight")
        midnightTheme();
      }
      console.log("Downloading apps...");
       for(i=0; i<ThemeJSON.apps.length; i++){
         let downloadReq = new XMLHttpRequest;
    downloadReq.open("POST", Injector.serverURL + "/appstore");
    downloadReq.setRequestHeader('token', Injector.user.token);
    downloadReq.send(ThemeJSON.apps[i]);
    appsDownloaded.push(JSON.stringify(ThemeJSON.apps[i]));

    downloadReq.onreadystatechange=e=>{
      if(downloadReq.readyState == 4) {
        try{
        eval(downloadReq.responseText);
        if(!uFCons){
        console.log("User fetch complete!");
        uFCons = !uFCons;
        }
       } catch(err){
         error(err);
       }
    }
  }}}}
  console.log("Injector loaded successfully!")
}, 500);
}