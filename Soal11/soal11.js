function filterBookPromise(colorful,amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books= [
            {name:'sinchan', totalPage:50, isColorful: true},
            {name:'Kalkulus', totalPage:250, isColorful: false},
            {name:'doraemon', totalPage:40, isColorful: true},
            {name:'algoritma', totalPage:300, isColorful: false},
        ]
        if (amountOfPage > 0) {
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful === colorful))
        } else {
            var reason = new Error("Maaf parameter salah")
            reject(reason);
        }
    })
}

function run(colorful, amountOfPage) {
    return filterBookPromise(colorful, amountOfPage).then(result => console.log(result));
}

//success
run(true, 50);

//failed
run();