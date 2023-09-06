from flask import jsonify, make_response
from flask_restful import Resource
from models import canceled_flights_total
import app

class heatMap(Resource):
    def get(self):
        try:
            rows = app.session.query(canceled_flights_total).all()
            results = []
            for total_cancelled in rows:
                results.append( {
                                    "airportName": total_cancelled.Airport_name,
                                    "airportCode":total_cancelled.Airport_Code,
                                    "Latitude":total_cancelled.Latitude, 
                                    "Longitude":total_cancelled.Longitude,
                                    "total_flights_canceled":total_cancelled.Cancelled_flights
                                 }
                               )
            return make_response(jsonify(results), 200)
        except Exception as e:
            return{'Message': 'Error: ' + str(e)},500