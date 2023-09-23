Documentation for DeDoci
Problem statement
Online Blockchain based certificate generation and validation system for government organisation.
Description
Currently large no of training programs is organized, and certificates are provided. There is no mechanism to validate digital certificate.so create a system in which custom digital certificate generate. User can store certificate in digital locker system other organization will validate certificate. Use opensource software and blockchain technology. Expected Output: Blockchain Based Certificate generation and validation Certificate can be added in Digital Loker System Users: Government Office, Student, Industry, Institutes

Our solution

We implemented our own Layer-1 blockchain from scratch and implemented a proper document addition, validation and fetching system. 
Here are all the three features described in detail:
Addition: Using the addition you can directly add a new user using the basic necessary information, like name, phone number, age and aadhar card details. We are using aadhar card as our unique primary key for filtering out one particular entry from the entire chain. Addition of a new user would mean a new block will be added to the blockchain and a hash would be produced, which would be then connected to the next hash as well. The existing blocks are immutable and for editing, a new block has to be added at the end of the chain.
Validation: For verification of authenticity of the documents, we have come up with a validation system. The primary use cases of this system include recruiters verifying data for their potential employees or checking for authenticity of government issued documents and their implementation.
Fetching existing documents: Our platform could be used as a digital vault for fetching documents as well. Due to the security provided by the entire blockchain, the fetched documents will be validated and verified beforehand.
Bolstered security: We have implemented a data encryption system, and our future update will include access to data by only particular users.
TECHNICALITIES AND FEATURES



Python Libraries which the project depends on ->
flask 
flask-cors
cryptography
hashlib
json

FLASK
Flask handles the main web-backend of our project. The project does not use Flask to generate Jinja-based templates; it acts as an API, responding to calls made from the frontend (based in Next.js).

FLASK-CORS
A simple module to prevent the browser from shutting down Cross Origin Requests (requests across ports) when test-running on the same machine from different ports.

CRYPTOGRAPHY
This module is used to encrypt and decrypt the user data associated with the form, increasing its security. A future planned update is to enable TSA, which will make sure that only a user can access their own data.

HASHLIB
Used to create hashes, the backbone of blockchain tech.

JSON
Used to convert a dictionary of data (user related) into strings to simplify storage.



INSTALLATION

py -m pip install <dependancy name>



RUNNING THE APP
Clone the repo

Using git clone <repo-link>
Make sure you have all the Python dependencies installed, along with NPM.

In the terminal, navigate to the back-end directory and run the routes.py file.
Navigate to the front-end directory and type in npm run dev