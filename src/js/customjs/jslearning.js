export function jsLearn() {
    const game = {
        'suspects': [
            {
                name: 'Rusty',
                color: 'orange'
            },
            {
                name: 'Miss Scarlet',
                color: 'red'
            }
        ]
    }

    // looping ex1
    // function foo() {
    //     for (let i=0; i < game.suspects.length; i++) {
    //         console.log(game.suspects[i]);
    //     }
    // }

    // foo();

    // looping ex2
    // var gameLoop = function() {
    //     for (var i = 0; i < game.suspects.length; i++) {
    //         console.log('outer loop')
    //         for (var key in game.suspects[i]) {
    //             console.log('key: ', key);
    //             if (game.suspects[i][key] === "Rusty") {
    //                 console.log('found them!');
    //             } else {
    //                 console.log(`key is "${game.suspects[i][key]}", so next time`);
    //             }
    //         }
    //     }
    // }
    // gameLoop();

    // looping ex3: destructuring nested data structure into 2 variables
    // with the string 'red' and 'orange'
    var suspects = [
        {
            name: 'Rusty',
            color: 'orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]

    var [color, color2] = [suspects[0].color, suspects[1].color];
    console.log([color, color2]);

    // OR

    var [{color: firstColor}, {color: secondColor}] = suspects;
    console.log(firstColor, secondColor);


    // using functions
    function CreateSuspectObjects(name) {
        return {
            name: name,
            color: name.split(' ')[1],
            speak () {
                console.log('my name is ', name);
            }
        };
    };

    var suspects = ['Miss Scarlet', 'Colonel Mustart', 'Mr. Sunshine'];
    var suspectsList = [];

    // for (var i = 0; i < suspects.length; i++) {
    //     suspect = CreateSuspectObjects(suspects[i])
    //     suspectsList.push(suspect);
    // };

    // console.log(suspectsList);

    //looping with _.each

    const _ = {};
    _.each = function(list, callback) {
        if (Array.isArray(list)) {
            //loop through array
            for (var i = 0; i < list.length; i++) {
                // call the callback with a list item
                callback(list[i], i, list);
            }
        } else { //object
            for (var key in list) {
                callback(list[key], key, list)
            }
        }
    }

    _.each(['sally', 'georgie', 'porgie'], function (name, i, list) {
        if (list[i +1]) {
            console.log(name, 'is younger than', list[i+1] )
        } else {
            console.log(name, 'is the oldest')
        }
    })

}