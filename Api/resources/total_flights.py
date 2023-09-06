from flask import jsonify, make_response
from flask_restful import Resource
from models import total_flights
import app

class TotalFlights(Resource):

    def get(self):
        try:
            rows = app.session.query(total_flights).all()
            result = []
            for flights in rows:
                result.append({
                               'carrir_name':flights.carrier_name, 
                               'total_arriving_flights':flights.total_arriving_flights, 
                               'air_carrier_delay': flights.air_carrier_delay, 
                               'wheather_delay' : flights.weather_delay, 
                               'nationalAviat_delay': flights.nat_aviation_delay

                                }
                              )
            return make_response(jsonify(result), 200)

        except Exception as e:
            return{'Message': 'Error: ' + str(e)},500
