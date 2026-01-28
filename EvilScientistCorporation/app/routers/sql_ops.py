
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.models.user_db_model import CreateUserModel, UserDBModel
from app.services.db_connection import get_db

# This is a router just like any other, but it interacts with a SQlite DB

# 3 methods - create user, get all users, then RAG LLM invocation with user data

router = APIRouter(
    prefix="/sql",
    tags=["sql"]
)

# Create User
@router.post("/")
async def create_user(incoming_user: CreateUserModel, db: Session = Depends(get_db)):

    # TODO: a uniqueness check and other validation might be nice here. But I'm skipping it

    # Extract the user data into an insertable format
    # **? "tuple unpacker" helps unpack data into a dict
    user = UserDBModel(**incoming_user.model_dump())

    # add and commit the user into the DB
    db.add(user)
    db.commit()
    db.refresh(user) # replaces "user" with the user that was just inserted into the DB

    # Finally, we can return the new user!
    return user


