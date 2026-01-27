
"""
This Service accomplishes the same thing as langgraph_service
BUT we'll use an AGENT in the routing node instead of keyword matching
The vectorDB retrieval nodes become tools
The chat nodes pretty much stay the same
"""
from typing import TypedDict, Any, Annotated

from langchain_core.messages import BaseMessage
from langchain_ollama import ChatOllama
from langgraph.graph import add_messages

llm = ChatOllama(
    model="llama3.2:3b", # The model we're using (we installed llama3.2:3b)
    temperature=0.2 # Temp goes from 0-1. Higher temp = more creativity
)

# Same state as the old service
class GraphState(TypedDict, total=False): #total=False makes all fields optional
    query: str
    route: str
    docs: list[dict[str, Any]]
    answer: str
    # with add_messages reducer
    message_memory: Annotated[list[BaseMessage], add_messages]