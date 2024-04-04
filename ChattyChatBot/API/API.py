from fastapi import FastAPI, Query, HTTPException
from pydantic import BaseModel

app = FastAPI()

@app.post("/copilot")
async def copilot_functionality(user_text: str):
    # Call copilot API
    copilot_response = "This is a CoPilot response."
    return {"response": copilot_response}

@app.post("/chatbot")
async def chatbot_functionality(user_text: str):
    # Call chatbot API
    chatbot_response = "This is a Chatbot response."
    return {"response": chatbot_response}

