var http = require('http');
var reader = require('fs');
var crypto = require('crypto');
var fetch = require('node-fetch');

const Settings = require("./settings.json");
const Auths = require("./auths.json");
var Userdata = require("./userdata.json");

async function getRandomCharstream(){
  let ranky = await fetch('https://www.random.org/strings/?num=1&len=10&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new');
  return await ranky.text();
}
if(!reader.existsSync('inCloud')){
  reader.mkdirSync('inCloud')
  reader.mkdirSync('inCloud/users');
}
// note using Userdata is very iffy, should use readFileSync whenever you need this instead
var Tokens = require("./authtokens.json");
var ChatroomFileSize = reader.statSync(Settings.chatroom.file).size;
let chatnum = 1;
/**
 * @param {import("http").IncomingMessage} req 
 * @param {import("http").ServerResponse} res
 */

function requestListener(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	// declare CORS policies and type of data
	if (req.headers["access-control-request-method"])
		res.setHeader('Access-Control-Allow-Methods', req.headers["access-control-request-method"]);
	if (req.headers['access-control-request-headers'])
		res.setHeader("Access-Control-Allow-Headers", req.headers['access-control-request-headers']);
	if (req.method.toLowerCase() === "options") {
		res.writeHead(200, "OK");
		res.end();
		return;
	}
    try{
	switch (req.url) {
      case "/logo.png":
      var fileStream = reader.createReadStream("images/logos/logo.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
      case "/glacier.png":
      var fileStream = reader.createReadStream("images/logos/glacier.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
      return;
      case "/fnf":
      res.writeHead('200', "OK");
      res.write(reader.readFileSync('apoc/apoc.html', 'utf8'));
      res.end();
      return;
      case "/shaqimg":
      var fileStream = reader.createReadStream("apoc/assets/shaq.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
      // app
      case "/app.png":
      var fileStream = reader.createReadStream("images/icons/app.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
       case "/notepad.png":
      var fileStream = reader.createReadStream("images/icons/notepad.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
            case "/bap.png":
      var fileStream = reader.createReadStream("images/icons/bap.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
            case "/chat.png":
      var fileStream = reader.createReadStream("images/icons/chat.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
            case "/exploithub.png":
      var fileStream = reader.createReadStream("images/icons/exploithub.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
            case "/gamehub.png":
      var fileStream = reader.createReadStream("images/icons/gamehub.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
            case "/personalize.png":
      var fileStream = reader.createReadStream("images/icons/personalize.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
            case "/proxbrowser.png":
      var fileStream = reader.createReadStream("images/icons/proxbrowser.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
      // ./app
      case "/crlogo.png":
      var fileStream = reader.createReadStream("images/logos/clogo.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
      case "/grlogo.png":
      var fileStream = reader.createReadStream("images/logos/logog.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
		case "/exdesktop.png":
			var fileStream = reader.createReadStream("images/marketing/exdesktop.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;

      		case "/exappstore.png":
			var fileStream = reader.createReadStream("images/marketing/exappstore.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
      		case "/exapps.png":
			var fileStream = reader.createReadStream("images/marketing/exapps.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
      		case "/exlogin.png":
			var fileStream = reader.createReadStream("images/marketing/exlogin.png");
			res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "max-age=3600" });
			fileStream.pipe(res);
			return;
		case "/login":
			if (req.method.toLowerCase() !== "post"){
        res.writeHead(401, 'Invalid');
        res.end();
				return;
      }
			let data = "";
			req.on('data', (chunk) => {
				data += chunk.toString();
			}).on('end', () => {
				if (!data.includes(":")) {
					res.writeHead(400, "Bad Request");
					res.write("invalid cred");
					res.end();
					return;
				}

				let username = data.slice(0, data.indexOf(":"));
				let password = data.slice(username.length + 1);
				let hash = crypto.createHash("sha256");
				hash.update(password);
				password = hash.digest("hex");
				// outta here, EnderKingJ

				console.log("Recieved login request from " + username);
        let Auths2 = JSON.parse(reader.readFileSync('auths.json'));
				if (username in Auths2 && Auths2[username] === password) {
					console.log("Credentials for " + username + " correct");

					//generate auth token and save it into authtokens.json
					let authtoken = Math.floor(Math.random() * 9999999999999) + 1000000000000;
					let token2 = authtoken.toString();
					Tokens[token2] = username;
					reader.writeFile('authtokens.json', JSON.stringify(Tokens), function(err) {
						if (err != null)
							console.log(err);
					});
					res.writeHead(200, "OK");

					//checks if this is coming from the login panel or from the bookmark
					if (req.headers.fromlogin) { // if it is from login panel
						console.log("Request was from Server Login Panel");
						res.write(reader.readFileSync('./panel.js', 'utf8') + ";let user ='" + username + "';");

					} else { // otherwise it is from the bookmark
						res.write("let token = \"" + authtoken.toString() + "\";let usernameTU = '" + username + "';" + reader.readFileSync('./bookmark.js', 'utf8'));
					} // write the contents of bookmark.js as the response
					res.end(); // then end the response

				} else { // otherwise the credentials were wrong
					console.log("cred incorrect:" + password);
					res.writeHead(401, "Unauthorized");
					res.write("loginBtn.textContent = 'Incorrect!'");

					res.end();
				};
			});
			return;
		case "/chat":
			if (!("token" in req.headers) || !(Tokens.hasOwnProperty(req.headers.token))) {
				res.writeHead(401, "Unauthorized");
				res.write("Error code 401: Unauthorized.                                                           This error normally happens if I'm running maintenance on the servers. Just refresh the page, and it should be fixed.")
				res.end();
				return;
			}
			if (req.method.toLowerCase() === "get") {

				reader.readFile(Settings.chatroom.file, "utf8", function(err, data) {
					if (err) {
						res.writeHead(500, "Internal Server Error");
						res.write(err.toString());
						res.end();
					} else {
						res.writeHead(200, "OK");
						res.write(data);
						res.end();
					}
				})
			} else if (req.method.toLowerCase() === "post") {
				let chdata = "";
				req.on("data", chunk => chdata += chunk.toString())
					.on('end', function() {
						let username = Tokens[req.headers.token];
						if (chdata.length < 250 && (username === "animecat7" || !chdata.includes("<"))) {

							chdata = `<bruh class="chatmsg" id="${chatnum}">[${username}]: ${chdata}</bruh><br> _______________________________________________________`;
							chatnum++;
							// make global because we are not using this in the same context again
							// we can compare this to the Big O notation which states that
							// the behavior of a function has a complexity directly
							// proportional to the input size squared superfluosly
							var chatroom = reader.readFileSync(Settings.chatroom.file);
							ChatroomFileSize = chatroom.length;
							if (chdata.length > Settings.chatroom.message_size_limit) {
								res.writeHead(413, "Payload Too Large");
								res.end();
								return;
							}
							// Example of the prime number theorom that observes
							// the asymmetric distribution of the prime numbers
							if (ChatroomFileSize += (chdata.length + 1) > Settings.chatroom.file_limit) {
								reader.writeFileSync("./chatroomlog", "-Chat Log Reset-\n");
								ChatroomFileSize = "-Chat Log Reset-\n".length + chdata.length + 1;
							}
							reader.writeFileSync(Settings.chatroom.file,
								chatroom += (chdata + "\n"));


							res.writeHead(200);
							res.write(chatroom);
							res.end();
						}
					});
			}
			return;
		case "/save":

			let token = req.headers.token;
			if (!(Tokens.hasOwnProperty(token))) {
				res.writeHead(401, "Unauthorized");
				res.end();
				return;
			}
			let username = Tokens[token];
			if (req.method.toLowerCase() === "get") {
        let userFile = JSON.parse(reader.readFileSync('userdata.json', 'utf8'));
        if(!(userFile.hasOwnProperty(username))){
          userFile[username] = {};
        }
        try{
				res.writeHead(200, "OK");
        				res.write(JSON.stringify(JSON.parse(reader.readFileSync('userdata.json', 'utf8'))[username]));
        
				res.end();
        }catch(err){
          res.write("{}");
          res.end();
          userFile[username] = {};
          reader.writeFileSync('userdata.json', JSON.stringify(userFile));
        }
			} else if (req.method.toLowerCase() === "post") {
				console.log("Recieved save request from " + username);
				let saveData = "";
				req.on("data", chunk => saveData += chunk.toString())
					.on('end', function() {
						try {
              
              let datafile = JSON.parse(reader.readFileSync('userdata.json', 'utf8'));
              let usersData = datafile[username];
              if(usersData[req.headers.category] == undefined){
                usersData[req.headers.category] = [];
              }
              if(req.headers.remove == undefined){
              usersData[req.headers.category].push(saveData);
              }else if(req.headers.remove == "data"){
                usersData[req.headers.category].splice(saveData, 1);
              } else{
               delete usersData[req.headers.category]
              }
              reader.writeFileSync('userdata.json', JSON.stringify(datafile));
              res.writeHead(200, "OK");
              res.write(JSON.stringify(usersData));
              res.end();
              
						} catch (err) {
							res.writeHead("400", "Bad Request");
							res.end()
              console.log("error saving: "+err)
						}
					})
			}
			return;
    case "/fetchtest":
    if(req.method.toLowerCase() === "get"){
      res.writeHead(200, 'OK')
      res.write('Hey guys its me JoeBama')
      res.end();
    } else if(req.method.toLowerCase() === "post"){
      res.writeHead(200, 'OK');
      res.write('hey retard you did post right');
      res.end();
    }
    return;
		case "/appstore":
			let token21 = req.headers.token;
			console.log("Request recieved to Appstore");
			if (!(token21 in Tokens)) {
				res.writeHead(401, "Unauthorized");
				res.end();
				return;
			}
			let user2 = Tokens[token21];
			if (req.method.toLowerCase() === "post") {
				let __Data = "";
				req.on("data", chunk => __Data += chunk.toString())
					.on('end', function() {
						try {
              if(req.headers.action !== "uninstall") {
              
              if(JSON.parse(reader.readFileSync("existingapps.json", 'utf8')).existingApps.includes(__Data)){
                let sameCopy = false;
							res.writeHead(200, "OK");
                res.write(reader.readFileSync(__Data + ".js", 'utf8'));
							console.log("Attemping to read contents of " + __Data + ".js")
							res.end();
							console.log("Wrote app contents of " + __Data + " to client " + user2);
              let parsedFile = JSON.parse(reader.readFileSync('./userdata.json', 'utf8'))
              if(parsedFile[user2].apps === undefined){
                parsedFile[user2].apps = [];
              }
              let appsINJS = new Array;
              appsINJS = parsedFile[user2].apps;
              for(i=0; i<appsINJS.length; i++){
                if(appsINJS[i] == __Data){
                  console.log("Same Copy detected!")
                  sameCopy = true;
                  break;
                }
              }
              if(!sameCopy){
              parsedFile[user2].apps.push(__Data)
              };
              reader.writeFileSync('./userdata.json', JSON.stringify(parsedFile));
              } else{
               res.writeHead("404", "Not Found");
               res.write("alert('This shit is bussin RESPECTFULLY sir!')");
               res.end(); 
              };

							

              } else{
                console.log("Uninstall request interpereted")
                
                
                let parsedFileForUninstall = JSON.parse(reader.readFileSync('./userdata.json', 'utf8'))
                parsedFileForUninstall[user2].apps.splice(parsedFileForUninstall[user2].apps.indexOf(__Data), 1);
                console.log(parsedFileForUninstall[user2].apps);
                reader.writeFileSync("./userdata.json", JSON.stringify(parsedFileForUninstall))
                res.writeHead('200', "OK");
                res.end();
              }
						} catch (err) {
							res.writeHead(400, "Bad Request");
							console.log("Request was invalid: " + err);
							res.end();
							return;
						}
					})
			};
			return;
		case "/googleacc":
			let token123 = req.headers.token;
			console.log("Google account info recieved");
			if (!(token123 in Tokens)) {
				res.writeHead(401, "Unauthorized");
				res.end();
				return;
			}
			let user123 = Tokens[token123];
			if (req.method.toLowerCase() === "post") {
				let gaData = "";
				req.on("data", chunk => gaData += chunk.toString())
					.on('end', function() {
						console.log("Logging GACC info from " + gaData + " to user " + user123);
						var existingData = JSON.parse(reader.readFileSync("googleaccounts.json", "utf8"));
						if (!existingData.hasOwnProperty(user123)) existingData[user123] = [gaData];
						else if (!existingData[user123].includes(gaData)) existingData[user123].push(gaData);
						else return;
						reader.writeFileSync("googleaccounts.json", JSON.stringify(existingData));
					})
			};
			return;
      case "/themesave":
      let tokenFTS = req.headers.token;
			if (!(Tokens.hasOwnProperty(tokenFTS))) {
				res.writeHead(401, "Unauthorized");
				res.end();
				return;
			}
			let usernameFTS = Tokens[tokenFTS];
      let Userdata = JSON.parse(reader.readFileSync('./userdata.json', 'utf8'))
			if (req.method.toLowerCase() === "get") {
				if(!(Userdata.hasOwnProperty(usernameFTS))){
          Userdata[usernameFTS] = {};
        }
        reader.writeFileSync('userdata.json', JSON.stringify(Userdata));
        res.writeHead(200, "OK");
        
				res.write(JSON.stringify(Userdata[usernameFTS]));
				res.end();
			} else if (req.method.toLowerCase() === "post") {
				console.log("Recieved FTSave request from " + usernameFTS);
				let ftsData = "";
				req.on("data", chunk => ftsData += chunk.toString())
					.on('end', function() {
            
            if(Userdata.hasOwnProperty(usernameFTS)){
              if(Userdata[usernameFTS].theme === undefined){
                Userdata[usernameFTS].theme = {};
              }
              Userdata[usernameFTS].theme = ftsData;
              reader.writeFileSync('./userdata.json', JSON.stringify(Userdata));
            } else{
              Userdata[usernameFTS] = {};
              console.log("Username not in Userdata. Making a file..")
              Userdata[usernameFTS].theme = {};
              Userdata[usernameFTS].theme = ftsData;
              reader.writeFileSync('./userdata.json', JSON.stringify(Userdata))

            }
          })}
      return;
      case "/chat2":
        let tokenChat = req.headers.token;
        
        if(!(Tokens.hasOwnProperty(tokenChat)) || Settings.chatroom["bannedUsers"].includes(Tokens[tokenChat])){
        res.writeHead('403', 'Unauthorized');
        res.write(`{"#general":{"contentOfChat":[["aids monkey", 1, "No you have been banned"]]},"statuses":[]} `)
        res.end();
        return;
        }
        let userChat = Tokens[tokenChat];
        if (req.method.toLowerCase() === "post") {
          let chatData = "";
				req.on("data", chunk => chatData += chunk.toString())
					.on('end', function() {
          if(chatData === "fromStatusUpdate"){
            console.log("Status update recieved")
            let chatFilesta = JSON.parse(reader.readFileSync('chatroom2.json', 'utf8'));
            let usersJSArray = new Array();
            for(i=0; i<chatFilesta["statuses"].length; i++){
              usersJSArray.push(chatFilesta["statuses"][i]);
              console.log(usersJSArray);
            }
            let userExisting = false;
            for(i=0; i<usersJSArray.length; i++){
              if(userChat == usersJSArray[i][0]){
                userExisting = true;
              }
            }
            let indexOfStatus = null;
            if(!userExisting){
              let loggedInfo = [userChat, ((new Date().getTime())/1000)]
            chatFilesta["statuses"].push(loggedInfo);  
            }else{
              for(i=0; i<chatFilesta["statuses"].length; i++){
                if(chatFilesta["statuses"][i][0] == userChat){
                  chatFilesta["statuses"][i][1] = ((new Date().getTime()) / 1000);
                }
              }

              console.log("User already in Statuses; time updated.");
            }
            reader.writeFileSync('chatroom2.json', JSON.stringify(chatFilesta));
            res.writeHead('200', 'OK');
            res.write(JSON.stringify(chatFilesta["statuses"]));
            res.end();

          }else if(req.headers.dm == undefined){
          let chatFile = JSON.parse(reader.readFileSync('chatroom2.json', 'utf8'));
          let chinbe = true;
          if(chatData.length < parseInt(Settings.chatroom["message_size_limit"]) && chatData.length !== 0 && chatData !== " "){
          if(chatFile[req.headers.channel].important == undefined ||Settings.chatroom.admins.includes(userChat)){
          chatFile[req.headers.channel].contentOfChat.push([userChat, new Date().getTime(), chatData]);
          res.writeHead('200', 'OK');
          res.end();
          reader.writeFileSync('chatroom2.json', JSON.stringify(chatFile));
          }else{
            res.writeHead('403', 'Unauthorized')
            res.end();
          }
          } else{
          res.writeHead('401', 'Invalid');
          res.end();
          };
          
          }})} else if(req.method.toLowerCase() === "get" && req.headers.dm == undefined){
            res.writeHead('200', 'OK');
            res.write(reader.readFileSync('chatroom2.json', 'utf8'));
            res.end();
          }
          if(req.headers.dm == "jdimas"){
            if(JSON.parse(reader.readFileSync('auths.json', 'utf8')).hasOwnProperty(req.headers.user2)){
            if(req.method.toLowerCase() == "post"){
            let chatData2 = ""
            req.on("data", chunk => chatData2 += chunk.toString())
					.on('end', function() {
            console.log("joe")
            let user1 = userChat;
            let user2 = req.headers.user2;
            let finalUser = ""
            if(user1 < user2){
              finalUser = user1 + ":" + user2;
            }else{
              finalUser = user2 + ":" + user1;
            }
            console.log("DM request! "+finalUser);
            let dms = JSON.parse(reader.readFileSync('dms.json', 'utf8'));
            if(!(dms.hasOwnProperty(finalUser))){
              dms[finalUser] = {"contentOfChat":[]}
            }
            dms[finalUser].contentOfChat.push([userChat, new Date().getTime(), chatData2]);
            reader.writeFileSync('dms.json', JSON.stringify(dms));
            res.writeHead(200, "OK");
            res.write(JSON.stringify(dms[finalUser]))
            res.end();
          })
            }else if(req.method.toLowerCase() == "get"){
            let user1 = userChat;
            let user2 = req.headers.user2;
            let finalUser = ""
            if(user1 < user2){
              finalUser = user1 + ":" + user2;
            }else{
              finalUser = user2 + ":" + user1;
            }
            
            let dms = JSON.parse(reader.readFileSync('dms.json', 'utf8'));
            if(!(dms.hasOwnProperty(finalUser))){
              dms[finalUser] = {"contentOfChat":[]}
            }
            res.writeHead(200, "OK");
            res.write(JSON.stringify(dms[finalUser]))
            res.end();
            }
          }else{
            res.writeHead(401, "Invalid");
            res.end();
          }
          }

        

      return;
      /*case "/cloud":
      console.log("Cloud request recieved!")
      let clToken = req.headers.token;
        if(!(Tokens.hasOwnProperty(clToken))){
        res.writeHead('403', 'Unauthorized');
        res.write('Token unrecognized.')
        res.end();
        return;
        }
        let clName = Tokens[clToken];
        try{
        let clientJSONFile = JSON.parse(reader.readFileSync('inCloud/users/' + clName + '/data.json'));
        clientJSONFile["directory_size"] = (reader.statSync('inCloud/users/' + clName).size)
        reader.writeFileSync('inCloud/users/' + clName + '/data.json', JSON.stringify(clientJSONFile));
        }catch(err){}
        if(req.method.toLowerCase() == "get"){
          if(reader.existsSync('inCloud/users/' + clName)){
            console.log("GET request to Injector Cloud detected.")
            let responseFileArray = {}
            res.writeHead("200", "0K");
            let userFiles = (reader.readdirSync('inCloud/users/' + clName));
            for(i=0; i <= userFiles.length; i++){
              try{
                if(userFiles[i] !== undefined && userFiles[i] !== "data.json"){
                responseFileArray[userFiles[i]] = "file";
                }
              }catch(err){}
            }
            res.write(JSON.stringify(responseFileArray));
            res.end();
          }else{
            reader.mkdirSync('inCloud/users/' + clName);
            reader.writeFileSync('inCloud/users/' + clName + "/data.json", `{
              "directory_size":0,
              "size_limit":1024
            }`);
            console.log("GET request to Injector Cloud detected, no user existing!")
          }
        }else if(req.method.toLowerCase() == "post"){
          console.log("POST request to Injector Cloud detected.")
          let cldata = "";
				req.on("data", chunk => cldata += chunk.toString())
					.on('end', function() {
            if(cldata == "data.json" || req.headers.filetowrite == "data.json"){
              res.writeHead('401', 'Unauthorized');
              res.end()
            }else{
            if(req.headers.cloudtype == "getFile"){
              try{
              res.writeHead('200', 'OK')
              res.write(reader.readFileSync('inCloud/users/' + clName + "/" + cldata))
              res.end();
              }catch(err){
                res.end();
              }
            }
            if(req.headers.cloudtype == "writeFile"){
              try{
              reader.writeFileSync('inCloud/users/' + clName + "/" + req.headers.filetowrite, cldata)


              res.end();
              }catch(err){
                res.end();
              }
            }
            if(req.headers.cloudtype == "deleteFile"){
              try{
            reader.unlinkSync('inCloud/users/' + clName + "/" + cldata);
            res.writeHead('200', 'OK');
            res.end();
            }catch(err){
              res.end();
            }
            }
            };
          })
        }else{
          res.writeHead('401', 'Invalid');
          res.end();
        }
      return;
      */
      case "/register":
      if(req.method == "POST"){
        let info = "";
				req.on("data", chunk => info += chunk.toString())
					.on('end', function() {
        let permTokens = JSON.parse(reader.readFileSync('logintokens.json'))["perm_tokens"];
        let tempTokens = JSON.parse(reader.readFileSync('logintokens.json'))["temp_tokens"];
        let registerAccount = (userTU, passTU)=>{
          let authFile = JSON.parse(reader.readFileSync('auths.json', 'utf8'));
          if(authFile[userTU] == undefined && userTU !== "" && passTU !== "" && !(userTU.includes(":")) && !(userTU.includes(",")) && userTU.length < 23){
          let hash = crypto.createHash("sha256");
				hash.update(passTU);
				let hashpass = hash.digest("hex");
          authFile[userTU] = hashpass;
          reader.writeFileSync('auths.json', JSON.stringify(authFile));
          return true;
          }else{
            return false;
          }
        }

        if(permTokens.includes(info)){
          if(registerAccount(req.headers.username, req.headers.password)){
          res.writeHead(200, "OK")
          res.write("accepted");
          res.end();
          }else{
            res.writeHead(200, "OK");
            res.write("SPA")
            res.end();
          }
        } else if(tempTokens.includes(info)){
          if(registerAccount(req.headers.username, req.headers.password)){
            let regtokens = JSON.parse(reader.readFileSync('logintokens.json', 'utf8'))
            regtokens["temp_tokens"].splice(regtokens["temp_tokens"].indexOf(info), 1);
            reader.writeFileSync('logintokens.json', JSON.stringify(regtokens));
          res.writeHead(200, "OK")
          res.write("accepted");
          res.end();
          }else{
            res.writeHead(200, "OK");
            res.write("SPA")
            res.end();
          }
        } else{
        res.writeHead(200, "OK")
        res.write("DENIED! 🤣")
        res.end();
          }
          })
      }else{
      	res.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin': '*'
	});
  res.write(reader.readFileSync('register.html', "utf8"))
	res.end();
      }
  return;
  case "/token":
  if(req.method.toLowerCase() == 'get' && req.headers.token == process.env['bot_token']){
    joe = crypto.randomBytes(5).toString('hex')
    let realTokenFile = JSON.parse(reader.readFileSync('logintokens.json', 'utf8'));
    if(realTokenFile["temp_tokens"].includes(joe)){
      joe = crypto.randomBytes(6).toString('hex')
    }
    realTokenFile["temp_tokens"].push(joe);
    reader.writeFileSync('logintokens.json', JSON.stringify(realTokenFile))
    res.writeHead(200, 'OK')
    res.write(joe);
    res.end();
  } else{
    res.writeHead(403, 'Unauthorized');
    res.write("...ERROR ON CLIENT SIDE. SORRY...");
    res.end();
  }
  return;
  case "/appstore/apps":
  let appsansod = JSON.parse(reader.readFileSync('existingapps.json', 'utf8'));
  
    res.writeHead(200, "OK");
    res.write(JSON.stringify(appsansod.appsReadable))
    res.end();
  return;
  case "/userlist":
    let auths = JSON.parse(reader.readFileSync('auths.json', 'utf8'));
    res.writeHead(200, "OK")
    res.write((Object.keys(auths)).toString() + ",iNJR");
    res.end();
  return;
	};
  
}catch(err){
      res.end();
      console.log("Client requested a nonexistant URL, or an error occured. Error: " + err);
}
	res.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin': '*'
	});

    res.write(reader.readFileSync('confuse.html', "utf8"))

	res.end();
	return;
}

    
            
// stop console flood problems

(function() {
	http.createServer(requestListener).listen(8080, () => console.log("welcome to my crib"));
	// just to ensure our numbers are accurate
	setInterval(function() {
		ChatroomFileSize = reader.statSync(Settings.chatroom.file).size;
	}, 60 * 1000)

  setInterval(function(){
    let updChat = JSON.parse(reader.readFileSync('chatroom2.json', 'utf8'));
    for(i=0; i<updChat["statuses"].length; i++){
      let array = updChat.statuses[i]
      if((array[1] - (new Date().getTime()) / 1000) <= -30){
        // console.log(updChat["statuses"].splice(updChat["statuses"].indexOf(array), 1))
        let removalIndex = updChat["statuses"].indexOf(array);
        let splicedResult = updChat["statuses"].splice(removalIndex, 1);
        reader.writeFileSync('chatroom2.json', JSON.stringify(updChat));
       
        
      }
    }
  }, 5000)
})();