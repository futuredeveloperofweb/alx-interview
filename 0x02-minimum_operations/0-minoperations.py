#!/usr/bin/python3
'''Minimum Operations modul'''


def minOperations(n):
    '''calculates the fewest number of operations needed to result
    in exactly n H characters in the file
    args:
        n: a number
    return: an integer, If n is impossible to achieve, return 0
    '''

    if n <= 1:
        return 0
    num, div, numOfOperations = n, 2, 0

    while num > 1:
        if num % div == 0:
            num = num / div
            numOfOperations = numOfOperations + div
        else:
            div += 1
    return numOfOperations
