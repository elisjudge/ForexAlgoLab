from flask import Blueprint, jsonify

test_route = Blueprint('test', __name__)

@test_route.after_request 
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    header["Cache-Control"] = "no-cache, no-store, must-revalidate"
    header["Pragma"] = "no-cache"
    header["Expires"] = "0"
    return response


@test_route.route('/test', methods=['GET'])
def test():
    response = jsonify({'message': 'Test test this is a test'})
    return response