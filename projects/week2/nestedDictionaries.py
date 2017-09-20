ramit = {'name': 'Ramit',
    'email': 'ramit@gmail.com',
    'interests': ['movies', 'tennis'],
    'friends':[
        {
        'name': 'Jasmine',
        'email': 'jasmine@yahoo.com',
        'interests': ['photography', 'tennis']
        },
        {
        'name': 'Jan',
        'email': 'jan@hotmail.com',
        'interests': ['movies', 'tv']
        }
    ]
}

ramitEmail = ramit.get('email')  #1
print(ramitEmail)

ramitInterest1 = ramit.get('interests')[0]  #2
print(ramitInterest1)

jasmineEmail = ramit.get('friends')[0]['email']  #3
print(jasmineEmail)

jasmineInterests2 = ramit.get('friends')[0]['interests'][1]  #4
print(jasmineInterests2)
