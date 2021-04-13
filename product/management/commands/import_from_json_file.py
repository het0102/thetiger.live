import os
import json
from ...models import Product
from django.core.management.base import BaseCommand

from backend.settings import BASE_DIR


class Command(BaseCommand):
    def import_product_from_file(self):
        data_folder = os.path.join(BASE_DIR, 'product', 'resources/json_file')
        for data_file in os.listdir(data_folder):
            with open(os.path.join(data_folder, data_file), encoding='utf-8') as data_file:
                data = json.loads(data_file.read())
                for data_object in data:
                    id=data_object.get('id',None)
                    name = data_object.get('name', None)
                    url = data_object.get('url', None)
                    desc = data_object.get('desc', None)
                    title = data_object.get('title', None)
                    price = data_object.get('price', None)
                    lastupdatescan = data_object.get('lastupdatescan', None)
                    lasttracked = data_object.get('lasttracked', None)
                    model = data_object.get('model', None)
                    location = data_object.get('location', None)
                    productgroup = data_object.get('productgroup', None)
                    manufacturer = data_object.get('manufacturer', None)

                    try:
                        data, created = Product.objects.get_or_create(
                            id=id,
                            title=title,
                            name=name,
                            desc=desc,
                            url=url,
                            price=price,
                            lastupdatescan=lastupdatescan,
                            lasttracked=lasttracked,
                            model=model,
                            location=location,
                            productgroup=productgroup,
                            manufacturer=manufacturer
                        )
                        if created:
                            data.save()
                            display_format = "\nProduct, {}, has been saved."
                            print(display_format.format(data))
                    except Exception as ex:
                        print(str(ex))
                        msg = "\n\nSomething went wrong saving this Product: {}\n{}".format(name, str(ex))
                        print(msg)

    def handle(self, *args, **options):
        """
        Call the function to import data
        """
        self.import_product_from_file()
