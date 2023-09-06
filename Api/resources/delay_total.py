from flask import jsonify, make_response
from flask_restful import Resource
from models import total_time_delayed
import app

class monthlyDelay(Resource):

    def get(self):
        try:
            rows = app.session.query(total_time_delayed).all()
            result = []
            for ttl_delay in rows:
                result.append({
                               'month': ttl_delay.month,
                               'carrir_name':ttl_delay.carrier_name, 
                               'total_carrier_delay':ttl_delay.carrier_ttl_delay, 
                               'total_weather_delay': ttl_delay.weather_ttl_delay, 
                               'total_nat_aviat_delay' : ttl_delay.National_aviation_ttl_delay, 
                               'total_security_delay': ttl_delay.security_ttl_delay,
                               'late_aircraft_ttl_delay':ttl_delay.late_aircraft_ttl_delay

                                }
                              )
            return make_response(jsonify(result), 200)

        except Exception as e:
            return{'Message': 'Error: ' + str(e)},500
