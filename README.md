# GoogleAssistantInshortsApp
This is a Google Assistant app compatible with Google Home devices. This app fetches news from inshorts.com and speaks them for the user whic has installed it.

## How to use this repo
* Clone the project. Go to dialogflow and create new agent by importing the zip file inshorts-agent.zip
* Perform `npm install` 
* Perform `npm start`
* Install `ngrok`
* Start ngrok with port 8080 and copy paste the https address given by ngrok in fulfillment in dialogflow

## How to invoke the agent
Say `Ok Google, ask inshorts news to give me latest news`
