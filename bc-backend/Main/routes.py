from flask import Flask, jsonify, session, request
from flask_cors import CORS, cross_origin
from block import BlockChain, hashCrypt


#block init 
identityDoc = BlockChain()
identityDoc.configChain('idbxxx000', ['name', 'phone', 'age', 'UNIQUE_ID'])
#adding some data
identityDoc.addBlock({'UNIQUE_ID':'10298838', 'name':'PAPER', 'phone':'74837483', 'age':'18'})


def checkLoggedIn():
    try:
        currentUser = session['session-user']
        return True if not currentUser == True else False
    except:
        return False


app = Flask(__name__)
app.config['SECRET_KEY'] = 'key_is_real'

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route('/')
@app.route('/home')
@cross_origin()
def home():
    return jsonify('HELLO!')


@app.route('/api/verify')
@cross_origin()
def verify():

    dataDict = {i:request.args[i] for i in request.args}

    #print(dataDict)

    garb1, garb2, hashed = hashCrypt('garbage value', dataDict)
    verified = identityDoc.getOrVerifData(dataDict['UNIQUE_ID'], 'verif', hashed)
    return jsonify('Verified!') if verified == True else jsonify(verified) 


@app.route('/api/get')
@cross_origin()
def get():

    unique_id = request.args['UNIQUE_ID']
    return jsonify(identityDoc.getOrVerifData(unique_id, 'get', 'garbageVal'))


@app.route('/api/add')
@cross_origin()
def add():

    integrityMaintained = identityDoc.checkHashIntegrity()
    if integrityMaintained == True:
        argsDict = request.args
        identityDoc.addBlock({'UNIQUE_ID': argsDict['UNIQUE_ID'], 'name': argsDict['name'], 'phone':argsDict['phone'], 'age':argsDict['phone']})
        return jsonify('Success! Added node to blockchain.')
    else:
        return jsonify(f'The chain has been compromised at hash {integrityMaintained}')



if __name__ == '__main__':
    app.run(debug=True)