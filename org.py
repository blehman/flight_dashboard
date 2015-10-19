#!/usr/bin/env python
import json

"""
with open('data/state_abbreviations.csv','rb') as f:
    d = {}
    for i,line in enumerate(f):
        if i == 1:
            continue
        rec = line.strip().replace('"','').split(',')
        d[rec[0]]=rec[1]
print json.dumps(d)
"""

with open('data/03_state.csv','rb') as data, open('data/state_abbreviations.csv.json','rb') as abbrev:
    d = json.load(abbrev)
    d2 = {}
    for i,line in enumerate(data):
        if i == 0:
            continue
        rec = line.strip().replace('"','').split(',')
        state = rec[0]
        moms = rec[1]
        dads = rec[2]
        baseline = rec[3]
        abbrev = d[state]
        d2[abbrev] = {'moms':moms
                , 'dads':dads
                , 'baseline':baseline
                , 'state':state}
print json.dumps(d2)



