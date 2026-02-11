import boto3
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/bedrock",
    tags=["bedrock"]
)

# A basic Pydantic model for LLM inputs
class ChatRequest(BaseModel):
    input:str

# Here's an INFORMATIONAL Bedrock client.
# We can use this to test that we have access to Bedrock
# This one is not useful for querying LLMs or other models
client = boto3.client("bedrock", region_name="us-east-1")

# Here's a client we'll ACTUALLY send LLM requests with
chat_client = boto3.client("bedrock-runtime", region_name="us-east-1")

# Basic GET endpoint that lists the available Bedrock models
@router.get("/model-list")
async def get_model_list():
    return client.list_foundation_models()

# POST request that uses the chat client to query an LLM through Bedrock
@router.post("/")
async def chat(chat:ChatRequest):
    response = chat_client.converse(
        modelId="amazon.nova-micro-v1:0",
        messages=[{
            "role":"user",
            "content":[{"text":chat.input}]
        }]
    )

    return response