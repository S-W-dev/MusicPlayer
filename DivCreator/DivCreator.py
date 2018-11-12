x = 1
while True:

    song_name = input('Song Name : ')
    song_id = input('Song Id : ')
    credit_stuff = input('Credits : ')

    print('<hr>')
    print('<br>')
    print('<div id="' + song_id + '_div">')
    print('<p id="songdivtext">' + song_name + '</p><button class="Start" id="' + song_id + '">Select</button><br><br>')
    print('<details id="songdivtext">')
    print('<div id="credit">')
    print('<h4>' + credit_stuff + '</h4>')
    print('</div')
    print('</details><br>')
    print('</div><br>')

    x += 1
