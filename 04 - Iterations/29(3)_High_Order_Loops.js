// for each loop: Applies a function on each element of array.

const coding = ['js', 'ruby', 'java', 'python']

// coding.forEach(function (lang) {console.log("the language is",lang);} )         //NOTE: Applies a function on each element of array

//NOTE: using arrow function

// coding.forEach( (item) => {console.log(item)} )

function prnt_me(item) {
    console.log(item);
}

// coding.forEach(prnt_me)                     //NOTE: using a pre-defined function in forEach

//IMP: Using parameters of forEach

// coding.forEach( (item, index, arr) => {console.log(item, index, arr);} )

const arr = [
    {
        lang_name : "java script",
        lang_ext : "js"
    },
    {
        lang_name : "python",
        lang_ext : "py"
    },
    {
        lang_name : "C++",
        lang_ext : "cpp"
    }
]


arr.forEach( (obj) => {
    console.log(obj.lang_name, "uses the extension", obj.lang_ext);
} )
