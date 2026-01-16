# This service will help us initialize and interact with a ChromaDB vector database
from langchain_chroma import Chroma
from langchain_community.embeddings import OllamaEmbeddings

PERSIST_DIRECTORY = "app/chroma_store" # Where the DB will be stored on disk
COLLECTION = "evil_items" # What kind of data we're storing (like the tables in SQL)

# The actual chroma vector store itself
# This will be the chroma instance OR no value at all
vector_store: Chroma | None = None

# Initialize the ChromaDB vector store
def init_vector_store():
    # Use the global instance defined above to accomplish Singleton behavior
    global vector_store

    if vector_store is None:
        vector_store = Chroma(
            collection_name=COLLECTION,
            persist_directory=PERSIST_DIRECTORY,
            embedding_function=OllamaEmbeddings(model="nomic-embed-text")
        )



# Get an instance of the Chroma vector store


# Ingest documents into the vector store (this is where the embeddings happen)


# Search the vector store for similar or relevant documents based on a query

