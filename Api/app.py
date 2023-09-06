from flask import Flask
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask_restful import Api
from dotenv import load_dotenv
from sqlalchemy.ext.automap import automap_base
load_dotenv()
import os
from flask_cors import CORS  # Import the CORS extension
import urllib.parse

app = Flask(__name__)
api = Api(app)
with app.app_context():
    db_user = os.getenv("POSTGRES_DATABASE_USER")
    db_password = urllib.parse.quote_plus(os.getenv("POSTGRES_DATABASE_PASSWORD"))
    db_host = os.getenv("POSTGRES_DATABASE_HOST")
    db_name = os.getenv("POSTGRES_DATABASE_DB")
    #Create engine
    engine = create_engine(f"postgresql+psycopg2://{db_user}:{db_password}@{db_host}/{db_name}")
   

    # Declare a Base using 'automap_base()'
    Base = automap_base()
    Base.prepare(autoload_with = engine)
    session = Session(engine)
    CORS(app)  # Enable CORS for the entire app

    from resources.barCharts import BarGraphs
    from resources.lineChart import lineGraphs
    from resources.heat_map import heatMap

    api.add_resource(BarGraphs, '/barCharts')
    api.add_resource(lineGraphs, '/lineCharts')
    api.add_resource(heatMap,'/heat_map')

    if __name__ == '__main__':
       app.run(debug=True)
