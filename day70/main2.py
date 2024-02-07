from fastapi import FastAPI, Query, Path, Form
from pydantic import BaseModel
from typing import Union, Annotated
from enum import Enum

app = FastAPI()

@app.get('/')
def read_root():
    return {
        'message': 'Hello World'
    }

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    discount: float | None = None

# @app.post('/items')
# async def create_item(item: Item):
#     return item
    
@app.post('/items/')
async def create_item(item: Item):
    item_dict = item.dict()
    price_after_tax = item.price + item.tax
    item_dict.update(
        {
         'price_after_tax': price_after_tax,
         'price_after_discount': price_after_tax - item.discount
         }
    ) 
    return item_dict

@app.put('/items2/{item_id}')
async def update_item(item_id: int, item: Item):
    return {'item_id': item_id, **item.dict()}

# QUERY PARAMETER
@app.get('/query_items/')
async def read_query_items(name: str, roll_no: int, hobby: Union[str, None] = 'No Hobby Found'):
    var_query = {'name': name, 'roll_no': roll_no, 'hobby': hobby}
    return var_query


class Choice_Names(str, Enum):
    a1 = 'one',
    a2 = 'two',
    a3 = 'three'    

@app.get('/enum_items/')    
async def read_enum_items(model_choice: Choice_Names):
    # yesari value ni access garna milxa
    if model_choice.value == 'one':
        return {'model_choice': model_choice, 'message': 'You have selected one'}
    # natra yesari access garna milxa
    elif model_choice == Choice_Names.a2:
        return {'model_choice': model_choice, 'message': 'You have selected two'}
    elif model_choice == Choice_Names.a3:
        return {'model_choice': model_choice, 'message': 'You have selected three'}
    return {'model_choice': model_choice, 'message': 'No choice selected'}


# REQUEST BODY
# A request body is data sent by the client to your API. A response body is the data your API sends to the client.
class schema1(BaseModel):
    name: str
    roll_num: int
    grade: int
    description: Union[str, None] = None

@app.post('/request_body/')
async def read_request_body(item: schema1):
    return item

#  String validations
# old method of using Query as default
@app.get('/string_validations/')
async def read_string_validations( name: str, hobby: Union[str, None] = Query(default=None, min_length=2, max_length=50)):
    return {'Student Name': name, 'Personal Hobbies': hobby}

#  sameshit diff example (NEW METHOD)
#  ... means this field is required
@app.get('/string_validations2/')
async def read_string_validations2( name: str = Query(..., min_length=2, max_length=50), hobby: Annotated[ str | None, Query(title="Hobby string", min_length=2, max_length=50, description='type some potata')] = None):
    var_query = {'name': name, 'hobby': hobby}
    return var_query

# While USING ANNOTATED
# when using Query inside of Annotated you cannot use the default parameter for Query.
# q: Annotated[str, Query(default="Suyan")] = "Shristi"  # This will give an error
# q: Annotated[str, Query()] = "Shristi"  # This will be sucessful

# PATH PARAMETERS
@app.get('/path_parameters/{item_id}')
async def read_path_parameters(
    item_id: int = Path(..., title="The ID of the item to get", ge=1, le=1000),
    about: Annotated[str | None, Query(alias="alias_about_item", title="About the item", description="This is the description of the item")]=None
    ):
    return {'item_id': item_id, 'about': about}
    

# USING FORM DATA IN API
@app.post('/form/data')
async def form_data(username: str = Form(...),
                    password: str = Form(...)):
    return {'username': username,
            'password': password}

