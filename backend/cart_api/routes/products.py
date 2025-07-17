import falcon
from playhouse.shortcuts import model_to_dict
from cart_api.database import DatabaseProducts


class Product:
    def on_get(self, req, resp, product_id):
        product = DatabaseProducts.get_or_none(id=product_id)
        if product is None:
            resp.media = {
                "code": "product does not exist",
                "message": "this item does not exist"
            }
            resp.status = falcon.HTTP_404
            return
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
      # must have a pass line because you cannot have a "blank" class
    def on_get(self, req, resp):
        products = [model_to_dict(p) for p in DatabaseProducts.select()]
        resp.media = products
        resp.status = falcon.HTTP_200

    def on_post(self, req, resp):
        user_prod = req.media
        if (DatabaseProducts.get_or_none(DatabaseProducts.name==user_prod.get("name"))):
            resp.status = falcon.HTTP_409
            resp.media = {
                "code": "duplicate item conflict",
                "message": "this item name already exists"
            }
            return
        new_prod = DatabaseProducts.create(**user_prod)
        resp.media = model_to_dict(new_prod)
        resp.status = falcon.HTTP_201