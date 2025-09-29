const Agent_Name_Textbox = document.getElementById('Agent_Name_Textbox');
const Agent_Message_Textbox = document.getElementById('Agent_Message_Textbox');
const Agent_Chat_Log = document.getElementById('Agent_Chat_Log');
function Change_Background_Color(){
    document.body.classList.toggle("Dark_Mode");
}

function Start_Agent(){
  document.getElementById("Agent_Container").style.display = document.getElementById("Agent_Container").style.display === "flex" ? "none": "flex"
}

function Get_Agent_Response(Input_Message){
  const Response = "WTF does " + Input_Message + " Supposed to mean?";
  return Response;
} 

function Agent_Send_Message(){
  const Agent_Name_Textbox_Input = Agent_Name_Textbox.value.trim();
  const Agent_Message_Textbox_Input = Agent_Message_Textbox.value.trim();
  if (Agent_Name_Textbox_Input && Agent_Message_Textbox_Input){ 
    const Message_Div = document.createElement("div");   
    Message_Div.innerHTML = `${Agent_Name_Textbox_Input}: ${Agent_Message_Textbox_Input}`
    Agent_Chat_Log.appendChild(Message_Div);
    const Agent_Response_Div = document.createElement("div");
    const Agent_Response = Get_Agent_Response(Agent_Message_Textbox_Input);
    Agent_Response_Div.innerHTML = "Hitchhikero: " + Agent_Response;
    Agent_Chat_Log.appendChild(Agent_Response_Div);
    Agent_Name_Textbox.style.visibility = "hidden";
    Agent_Message_Textbox.innerText = "";
    Agent_Message_Textbox.style.border = "1px solid #ccc";
  } else if (Agent_Name_Textbox_Input) {
    Agent_Name_Textbox.style.border = "1px solid #ccc";
    Agent_Message_Textbox.style.border = "1px red solid";
  } else if(Agent_Message_Textbox_Input){
    Agent_Message_Textbox.style.border = "1px solid #ccc";
    Agent_Name_Textbox.style.border = "1px red solid";
  } else {
    Agent_Name_Textbox.style.border = "1px red solid";
    Agent_Message_Textbox.style.border = "1px red solid";
  }

}