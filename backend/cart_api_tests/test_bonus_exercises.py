from .test_heartbeat import TestClient
from .test_heartbeat import HeartBeatTest
from cart_api.database import DatabaseProducts
import time

PRODUCTS_PATH = "/v1/products"


class MyTestYay(TestClient):
    def preclean_product(self, product_name):
        # i hate this
        DatabaseProducts.delete().where(DatabaseProducts.name == product_name).execute()

    def test_get_product(self):
        name = "iPhone 13 Pro Max"
        self.preclean_product(name) # hope this works

        data = {
            "name":        name,
            "description": "expensive ass phone",
            "image_url":   None,
            "price":       999.00,
            "is_on_sale":  False,
            "sale_price":  None,
        }

        # create a dummy item first
        created = self.simulate_post(f"{PRODUCTS_PATH}", json=data)
        self.assertEqual(created.status_code, 201)

        new_id = created.json['id']

        # now try to get newly created item (sanity check cause im going insane)
        resp = self.simulate_get(f"{PRODUCTS_PATH}/{new_id}")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.json["id"], new_id) # check that it actually is the same id
        self.assertEqual(resp.json["name"], name) # check name

    def test_delete_product(self):
        resp = self.simulate_delete(f"{PRODUCTS_PATH}/1")
        self.assertEqual(resp.status_code, 204)

        resp = self.simulate_get(f"{PRODUCTS_PATH}/1")
        self.assertNotEqual(resp.status_code, 200) # we should not be able to access

    def test_duplicate_product(self):
        name = "iPhone 14 Pro Max"
        self.preclean_product(name) # hope this works
        data = {
            "name":        name,
            "description": "expensive ass phone",
            "image_url":   None,
            "price":       999.00,
            "is_on_sale":  False,
            "sale_price":  None,
        }
        # first POST (no error)
        resp1 = self.simulate_post(f"{PRODUCTS_PATH}", json=data)
        self.assertEqual(resp1.status_code, 201)

        # second POST (error)
        resp2 = self.simulate_post(f"{PRODUCTS_PATH}", json=data)
        self.assertEqual(resp2.status_code, 409)
        self.assertEqual(resp2.json["code"], "duplicate item conflict")
        self.assertIn("this item name already exists", resp2.json["message"])

    