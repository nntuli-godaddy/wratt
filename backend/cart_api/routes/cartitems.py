import falcon
from playhouse.shortcuts import model_to_dict

from cart_api.database import DatabaseCartItem


# Exercise 3:
# Using the database model you created in Exercise 1 create a cartitems route
# CartItems should have a responder for POST and GET
# CartItem should have responders for GET DELETE PATCH
# Your API response statuses and bodies should conform to your OpenAPI spec


class CartItems:
    def on_get(self, req, resp):
        cart_items = [model_to_dict(item) for item in DatabaseCartItem.select()]
        resp.media = cart_items
        resp.status = falcon.HTTP_200

    def on_post(self, req, resp):
        user_item = req.media
        new_item = DatabaseCartItem.create(**user_item)
        resp.media = model_to_dict(new_item)
        resp.status = falcon.HTTP_201


class CartItem:
    def on_get(self, req, resp, item_id):
        cart_item = DatabaseCartItem.get(id=item_id)
        resp.media = model_to_dict(cart_item)
        resp.status = falcon.HTTP_200

    def on_delete(self, req, resp, item_id):
        DatabaseCartItem.delete_by_id(item_id)
        resp.status = falcon.HTTP_204

    def on_patch(self, req, resp, item_id):
        data_to_upload = req.media
        (DatabaseCartItem.update(**data_to_upload)
            .where(DatabaseCartItem.id == item_id)
            .execute()
        )

        resp.status = falcon.HTTP_204
