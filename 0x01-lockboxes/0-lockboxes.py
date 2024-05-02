#!/usr/bin/python3

''' a method that determines if all the boxes can be opened'''


def canUnlockAll(boxes):
    '''determines if all the boxes can be opened.
    args:
        boxes:  is a list of lists
    return: True if all boxes can be opened, else return False'''
    canUnlockAll = False
    keys = {0: True}
    n_boxes = len(boxes)
    while (True):

        n_keys = len(keys)

        for i in range(len(boxes)):
            if boxes[i] and keys.get(i, False):
                for j in boxes[i]:
                    if j < n_boxes:
                        keys[j] = True
                    boxes[i] = None

        if not (len(keys) > n_keys):
            break

    if n_keys == len(boxes):
        canUnlockAll = True

    return canUnlockAll
