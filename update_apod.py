import apod_object_parser as apod_obj_parser

response = apod_obj_parser.get_data("DEMO_KEY")
title = apod_obj_parser.get_title(response)
hdurl = apod_obj_parser.get_hdurl(response)

apod_obj_parser.download_image(hdurl)
apod_obj_parser.convert_image()

file = open("apod_title.txt",'w')
file.write(title)
file.close()
