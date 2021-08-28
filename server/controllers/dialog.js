const dialogflow = require("@google-cloud/dialogflow");
const intentClient = new dialogflow.IntentsClient();
const projectId = "sajjad-alam-ldrv";

exports.dialog = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.send('Server is Working !!!');
  try {
    const projectAgentPath = intentClient.projectAgentPath(projectId);
    const request = {
      parent: projectAgentPath,
    };
    const [response] = await intentClient.listIntents(request);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(424);
  }
};
