import pandas as pd
import numpy as np
import json
from sklearn.preprocessing import PolynomialFeatures
from sklearn import preprocessing
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt
import sqlite3
import pickle


def train_model(json_arrays):
    
    data = json.loads(json_arrays)

    def parse_objects(obj):
        
        dictionary = {}
        for keypoint in obj['keypoints']:
            dictionary[keypoint['part'] + '_x'] = keypoint['position']['x']
            dictionary[keypoint['part'] + '_y'] = keypoint['position']['y']
            dictionary[keypoint['part'] + '_score'] = keypoint['score']
        return dictionary


    # In[63]:


    def preprocess(data):
        data_array = {}
        start_date = 3000 / len(data)
        date_iter = 0

        for d in data:
            data_array[date_iter] = parse_objects(d)
            date_iter += start_date
        return data_array


    # In[65]:


    #data = {'x' : x_array, 'y': y_array, 'score' : score_array, 'timing' : data_array}
    df = pd.DataFrame(preprocess(data)).transpose()
    df.drop(['leftEye_x', 'leftEye_y',  'nose_x', 'nose_y', 'rightEye_score',
        'rightEye_x', 'rightEye_y'], axis=1, inplace=True)


    # In[120]:


    

    polyf = PolynomialFeatures(degree = 5)
    train_x = np.asanyarray(df[['leftElbow_x',
        'leftElbow_y',
        'leftKnee_x', 'leftKnee_y',  'leftShoulder_x',
        'leftShoulder_y',  'leftWrist_x', 'leftWrist_y', 'rightHip_x',
        'rightHip_y',  'rightKnee_x', 'rightKnee_y',
            'rightShoulder_x', 'rightShoulder_y',]])
    #train_x = polyf.fit_transform(train_x)
    #train_x = MinMaxScaler().fit_transform(x)
    array_y = np.asanyarray(df.index)


    linereg = LinearRegression()
    linereg.fit(train_x, array_y)
    yhat = linereg.predict(train_x)

    db = sqlite3.connect("database.db")
    cursor = db.cursor()
    serialized = pickle.dumps(linereg)
    with open("linear_model", 'wb') as lr:
        lr.write(serialized)
        
    print(df.shape)
    return True
    
