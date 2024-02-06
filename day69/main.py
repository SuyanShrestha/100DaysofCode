from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import Path, Query
from enum import Enum


app = FastAPI()

@app.get('/')
def read_root():
    return {'message': 'Hello World'}

@app.get("/{name}")
def read_name(name: str):
    return {
        "message": "Hello " + name.title() + ", k xa halkhabar!"
    } 

@app.get('/add/{a}/{b}')
async def read_item(a: int, b: int):
    return {'result': a + b}

@app.get('/greet')
def greet():
    return{
        'msg': 'Hello everyone'
    }


@app.post('/post')
def post_upodate():
    return{
        'ahc':'nsdfgjng'
    }


# class Student(BaseModel):
#     id: int
#     name: str = 'Suyan Shrestha'


@app.get('/items/{item_id}')
async def read_item(item_id: int):
    return {'item_id ' : item_id}

class Message(str, Enum):
    suyan = 'Suyan'
    shristi = 'Shristi'
    Jinx = 'Jinx'

@app.get('/messages/{user_name}')
async def get_message(user_name : Message):
    if user_name is Message.suyan:
        return {
            'User ID' : 1,
            'Username' : 'Suyan',
            'Message' : 'Read, Write and Execute'
        }
    if user_name is Message.shristi:
        return {
            'User ID' : 2,
            'Username' : 'Shristi',
            'Message' : 'Learn and grow'
        }
    else:
        return{
            'User ID' : 3,
            'Username' : 'Jinx',
            'Message' : 'Here comes a rising star.'
        }


# EXAMPLE OF ENUM
# fruits = ['apple', 'banana', 'cauli']
# for index, fruit in enumerate(fruits):
#     print(fruit)
#     index+=1

#  ENUM navako vaye aba fruits ko index xuttai bahira declare gardai vitra increment garnu prthyo, tarw enum vayexi yesle aafai gardini vo
# fruits = ['apple', 'banana', 'cauli']
# for index, fruit in enumerate(fruits, start=1):
#     print(fruit)
#     index+=1
    # yesari chahi aba indexing 0 satta aru like 1 bata ni suru garna milyo

     
@app.get('/prices/{price_id}/')
async def read_price(price_id: int , price_amt: int, discount: int | None = None):
    if discount:
        return {
            'Buying price': price_amt - discount,
            'Total price amount' : price_amt
        }
    return {'price id': price_id,
            'price amount' : price_amt}


# BOOL TYPES
@app.get('/boolex/{item_name}')
async def read_bool(item_name: str, q: str | None = None, quality: bool = False):
    item = {'item_name': item_name}
    if q:   
        item.update({'q': q})
    if not quality:
        item.update({'description': 'This is a extremely bad quality item'})
    return item

#MULTIPLE PATH AND QUERY PARAMETERS
@app.get('/students/{student_id}/books/{book_name}')
async def read_student_book(student_id: int, book_name: str, q: str | None = None, short: bool=False):
    book = {
        'book_name': book_name,
        'student_id': student_id
    }
    if q:
        book.update({'Late Fee': q})
    if not short:
        book.update({'description': 'This book is very interesting'})