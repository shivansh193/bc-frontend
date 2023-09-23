from hashlib import sha256
import json
from cryptography.fernet import Fernet


def loadKey():
    with open('key', 'r') as keyFile:
        return keyFile.readlines()[0].encode()

fernet = Fernet(loadKey())


def hashCrypt(previousHash, data):
    return (sha256(previousHash.encode()+json.dumps(data).encode()).hexdigest(), fernet.encrypt(json.dumps(data).encode()), sha256(json.dumps(data).encode()).hexdigest())

def decrypt(data):
    return fernet.decrypt(data).decode()

#yes = {'newHash': '698a079d17a51a1bf7518960273678af60efb83a32c7d672adeb0ad4875bfa45', 'encData': b'gAAAAABlDgDZZ9_pjKIUrnjZ2_HgqDf5tUhwv6_JYbrANFiHFmILYfsvxnd_v-sqMrFtEJ3zLXYtyr0jUFlLIS4DJ8izmkrCZ40kasWeiSa-6gFsXFrzbTo='}
#print(decrypt(yes['encData']))


class BlockChain:

    suffix = ''
    initialHash = str('0000000000000000')
    blocks = [{'root':[str(initialHash), b'gAAAAABlDh6JeRKhy7dRU3lRZPiYo7OUZR140icyz9pXgt2fkhHzgbgmqnMOHDoT4784elV1BflX0ngHu9CbvBHhbzixo6Q3dFu3yrE9By2OHONkfvVNrXn5wsAZXvvuHD_ExuUKbWND_WVnVsbdXDjeWCm4V3jNlg==']}]

    fields = []


    def __init__(self):
        pass


    def configChain(self, suffix, fieldNames:list):
        #we need UNIQUE_ID so that data integrity is maintained
        try:
            uid = fieldNames.index('UNIQUE_ID')
        except:
            raise Exception('UNIQUE_ID identifier not found!')
            
        BlockChain.fields = [i for i in fieldNames]
        BlockChain.suffix = suffix


    def addBlock(self, data:dict):
        #data should contain name, unique ID (aadhar)
        try:
            blockData = {i : data[i] for i in BlockChain.fields}
            previousHash = BlockChain.blocks[-1][list(BlockChain.blocks[-1].keys())[0]][0]
            currentHash, encData, hashedData = hashCrypt(previousHash, blockData)  
            BlockChain.blocks.append({currentHash:[previousHash, encData, hashedData]})
        except KeyError:
            return 'Data insufficient/not provided appropriately.'


    def getOrVerifData(self, UNIQUE_ID, type, hashedData):
        
        for i in BlockChain.blocks:
                encData = i[list(i.keys())[0]][1]
                decData = decrypt(encData)

                print(json.loads(decData)['UNIQUE_ID'])

                if json.loads(decData)['UNIQUE_ID'] == UNIQUE_ID:
                    print('WOW THIS IS WORKING')
                    if type == 'get':
                        return decData
                    elif type == 'verif': 
                        if i[list(i.keys())[0]][2] == hashedData:
                            return True
                        else:
                            return 'Failed verification!'
                        
        return 'Unique ID not found!'
            

    def checkHashIntegrity(self):
        block = BlockChain.blocks[-1]
        print(BlockChain.blocks)
        if BlockChain.blocks.index(block) > 1:
            previous = BlockChain.blocks[BlockChain.blocks.index(block)-1]
            if block[list(block.keys())[0]][0] == previous[list(previous.keys())[0]][0]:
                BlockChain.checkHashIntegrity(previous)
            else:
                print('ERROR')
                return list(block.keys())[0]
        else:
            return True
         

    def no(self):
        print(BlockChain.blocks)