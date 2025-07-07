import falcon
from playhouse.shortcuts import model_to_dict
from cart_api.database import DatabaseProducts


class Product:
    def on_get(self, req, resp, product_id):
        product = DatabaseProducts.get(id=product_id)
        resp.media = model_to_dict(product)
        resp.status = falcon.HTTP_200

    def on_delete(self, req, resp, product_id):
        DatabaseProducts.delete_by_id(product_id)
        resp.status = falcon.HTTP_204


# Excercise 2:
# Products route should respond to GET and POST requests
# GET products returns a list of every product in the database
# POST products creates a product and returns the data it created


class Products:
    def on_get(self, req, resp):
        products = []
        query = DatabaseProducts.select()
        for prod in query:
            products.append(model_to_dict(prod))
        resp.status = falcon.HTTP_200
        resp.media = products
        
    def on_post(self, req, resp):
        passObj = req.get_media()
        created = DatabaseProducts.create(
            name= passObj["name"],
            description= passObj["description"],
            image_url= passObj["image_url"],
            price= passObj["price"],
            is_on_sale= passObj["is_on_sale"],
            sale_price= passObj["sale_price"]
        )
       
        resp.status = falcon.HTTP_201
        resp.media = model_to_dict(created)
